import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTracks } from './actions/tracks';

class App extends Component {

  addTrack() {
    console.log('add', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  getTracks() {
    if (this.trackInput) {
      this.props.onFindTrack(this.trackInput.value);
    }
    return this.props.tracks;
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <input type="text" ref={(input) => {this.trackInput = input}}
               onChange={this.getTracks.bind(this)} />
        <button onClick={this.addTrack.bind(this)}>Add Track</button>
        <ul>
          {
            this.getTracks().map((track, index) =>
              <li key={track.id}>
                {track.name}
              </li>
            )
          }
        </ul>
        <button onClick={this.props.onGetTracks}>Get tracks</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload});
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name});
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App);
