import { UserData } from '../../App';

const EntriesInfo = ({ user }: { user: UserData }) => {
  const { entries } = user;
  return (
    <div className="text-2xl font-bold text-center text-white">You successsfully looked for faces {Number(entries) > 0 ? entries : 0} times!</div>
  );
};

export default EntriesInfo;
