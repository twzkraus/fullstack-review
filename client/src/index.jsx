import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    $.get({
      url: '/repos',
      success: (data) => {
        let newList = this.state.repos.concat(data);
        this.setState({
          repos: newList,
        });
        this.render();
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // send a post request to /repos

    $.ajax({
      method: 'POST',
      data: {username: term},
      url: '/repos'
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));