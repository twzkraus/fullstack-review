import React from 'react';

const RepoItem = ({repo}) => (
  <div>
    <h5><a href={repo.html_url} >{repo.name}</a></h5>
    <p>{() => {console.log('repo item')}}</p>
  </div>
)

export default RepoItem;