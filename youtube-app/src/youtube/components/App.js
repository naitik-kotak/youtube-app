import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
const KEY = 'AIzaSyB4ydAFfjILsNMhUsYTnopRjWfE8qzheT0';
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('car');
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className='ui grid'>
          <div className='row'>
            <div className='ten wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='six wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

