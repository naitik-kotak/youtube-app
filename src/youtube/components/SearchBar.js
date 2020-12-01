import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onTermSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  };

  onTermChange = (e) => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onTermSubmit}>
          <div className='field'>
            <label>Search Video</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onTermChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
