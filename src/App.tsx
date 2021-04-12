// Libraries
import { useState } from 'react';
import { fetchGitHubAPI } from './api/api';

// Components
import { GitCommitsList } from './components/Git-commits-list/Git-commits-list.component';

// Interfaces
import { ICommits } from './interfaces/IGitHub';

// Styles
import { GlobalStyle, Wrapper } from './App.styles';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [commits, setCommits] = useState<ICommits[]>([]);

  const fetchCommits = async () => {
    setLoading(true);
    const commits: ICommits[] | [] = await fetchGitHubAPI();
    setCommits(commits);
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Git Commits View</h1>
        <button className='fetchButton' onClick={fetchCommits}>
          Fetch Commits
        </button>
        {!loading && !!commits.length && <GitCommitsList commits={commits} />}
      </Wrapper>
    </>
  );
};

export default App;
