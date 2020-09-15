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
    this.getTop25Repos();
  }

  getTop25Repos() {
    console.log('getting top repos');
    let app = this;
    $.get({
      url: '/repos',
      success: (data) => {
        // debugger;
        app.setState({
          repos: data,
        });
        console.log('in top 25 success cb');
        this.render();
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // send a post request to /repos
    let app = this;

    $.ajax({
      method: 'POST',
      data: {username: term},
      url: '/repos',
      success: () => { setTimeout(app.getTop25Repos(), 3000) }
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