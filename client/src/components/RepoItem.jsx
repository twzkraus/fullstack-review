import React from 'react';

const RepoItem = ({data}) => (
  <div>
    <h5>{data.name}</h5>
    <p>{() => {console.log('repo item')}}</p>
  </div>
)

export default RepoItem;