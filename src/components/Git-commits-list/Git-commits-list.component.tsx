// Interfaces
import { ICommits } from '../../interfaces/IGitHub';

type Props = {
  commits: ICommits[];
}

export const GitCommitsList: React.FC<Props> = ({ commits }) => (
<div>
  {commits.length ? (
    commits.map((commit, id) => (
      <div key={id}>
        <p>Author: {commit.author}</p>
        <p>Date: {commit.date}</p>
        <p>Message: {commit.commit}</p>
      </div>
    ))
  ) : (
    <span>This repo doesn't exists or doesn't have commits.</span>
  )}
</div>
)