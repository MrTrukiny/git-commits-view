// Libraries
import { useState } from 'react';
import { fetchGitHubAPI } from './api/api';

// Components
import { GitCommitsList } from './components/Git-commits-list/Git-commits-list.component';

// Interfaces
import { ICommits } from './interfaces/IGitHub';


const App = () => {
  const [ loading, setLoading ] = useState(false);
  const [ commits, setCommits ] = useState<ICommits[]>([])
  
  const fetchCommits = async () => {
    setLoading(true);
    const commits: ICommits[] = await fetchGitHubAPI();
    setCommits(commits);
    setLoading(false);
  }

  return (
    <div className="App">
      <button onClick={fetchCommits} >Fetch Commits</button>
      {!loading && commits && <GitCommitsList 
        commits={commits}
      />}
      Git Commits View
    </div>
  );
}

export default App;
