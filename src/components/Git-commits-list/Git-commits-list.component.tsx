// Interfaces
import { ICommits } from '../../interfaces/IGitHub';

// Styles
import { Wrapper } from './Git-commits-list.styles';

type Props = {
  commits: ICommits[] | [];
};

export const GitCommitsList: React.FC<Props> = ({ commits }) => {
  const formatGitCommitMessage = (commitMessage: string) => {
    return commitMessage.replace(/[\n]/g, '<br>');
  };

  const formatGitCommitDate = (commitDate: string) => {
    return new Date(commitDate).toUTCString();
  };

  return (
    <Wrapper>
      {!!commits.length
        ? commits.map((commit: ICommits) => (
            <div key={commit.id} className='commitContainer'>
              <div className='commitAuthorContainer'>
                <p className='commitTitle'>Author:</p>{' '}
                <p className='commitInfo'>{commit.author}</p>
              </div>
              <div className='commitDateContainer'>
                <p className='commitTitle'>Date:</p>{' '}
                <p className='commitInfo'>{formatGitCommitDate(commit.date)}</p>
              </div>
              <div className='commitMessageContainer'>
                <p
                  className='commitMessageInfo'
                  dangerouslySetInnerHTML={{
                    __html: formatGitCommitMessage(commit.commit),
                  }}
                />
              </div>
            </div>
          ))
        : null}
    </Wrapper>
  );
};
