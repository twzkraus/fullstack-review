import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <div id="repo-container">
        {repos.map((repo) =>
          <RepoItem data={repo}
                    key={repo.id} />
        )}
    </div>
  </div>
)

export default RepoList;