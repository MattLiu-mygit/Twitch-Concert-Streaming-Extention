import React from 'react';
import Authentication from '../../util/Authentication/Authentication';
import HeartClicker from '../interactive/HeartClicker';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import Filter from '../Filter';
import BreakableHearts from '../interactive/BreakableHearts';
const store = configureStore();

import './App.css';
import SideDashboard from '../interactive/SideDashboard';
import HeartScreenGenerator from '../interactive/HeartScreenGenerator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Authentication = new Authentication();

    //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
    this.twitch = window.Twitch ? window.Twitch.ext : null;
    this.state = {
      finishedLoading: false,
      theme: 'light',
      isVisible: true,
      generator: false,
      filter: false,
    };
  }

  contextUpdate(context, delta) {
    if (delta.includes('theme')) {
      this.setState(() => {
        return { theme: context.theme };
      });
    }
  }

  visibilityChanged(isVisible) {
    this.setState(() => {
      return {
        isVisible,
      };
    });
  }

  componentDidMount() {
    if (this.twitch) {
      this.twitch.onAuthorized((auth) => {
        this.Authentication.setToken(auth.token, auth.userId);
        if (!this.state.finishedLoading) {
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

          // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
          this.setState(() => {
            return { finishedLoading: true };
          });
        }
      });

      this.twitch.listen('broadcast', (target, contentType, body) => {
        this.twitch.rig.log(
          `New PubSub message!\n${target}\n${contentType}\n${body}`
        );
        // now that you've got a listener, do something with the result...

        // do something...
      });

      this.twitch.onVisibilityChanged((isVisible, _c) => {
        this.visibilityChanged(isVisible);
      });

      this.twitch.onContext((context, delta) => {
        this.contextUpdate(context, delta);
      });
    }
  }

  componentWillUnmount() {
    if (this.twitch) {
      this.twitch.unlisten('broadcast', () =>
        console.log('successfully unlistened')
      );
    }
  }

  render() {
    if (this.state.finishedLoading && this.state.isVisible) {
      return (
        <ReduxProvider store={store}>
          <div className="App">
            {this.state.filter ? <Filter /> : null}
            <button
              style={{ zIndex: '99998' }}
              onClick={() => {
                this.setState({ generator: !this.state.generator });
              }}
            >
              Toggle generator
            </button>
            <button
              style={{ zIndex: '100000', position: 'absolute' }}
              onClick={() => {
                this.setState({ filter: !this.state.filter });
              }}
            >
              Toggle Filter
            </button>
            <div
              className={
                this.state.theme === 'light' ? 'App-light' : 'App-dark'
              }
            >
              <SideDashboard />
              <HeartClicker />
            </div>
            {this.state.generator ? (
              <>
                <HeartScreenGenerator />
                <HeartScreenGenerator />
                <HeartScreenGenerator />
                <HeartScreenGenerator />
                <HeartScreenGenerator />
                <HeartScreenGenerator />
                <HeartScreenGenerator />
                <HeartScreenGenerator />
              </>
            ) : null}
          </div>
        </ReduxProvider>
      );
    } else {
      return (
        <div className="App">
          <h1 style={{ color: 'white' }}>Not working</h1>
        </div>
      );
    }
  }
}
