import React from 'react';

const RepoItem = ({repo}) => (
  <div>
    <h4><a href={repo.html_url} >{repo.name}</a></h4>
    <p>Owned by: <a href={`https://github.com/${repo.owner_name}`}>{repo.owner_name}</a></p>
    <p>Created on: {repo.created_at.slice(0,10)}</p>
    <p>Number of forks: {repo.forks_count}</p>
  </div>
)

export default RepoItem;