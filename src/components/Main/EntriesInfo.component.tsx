import { UserData } from '../../App';

const EntriesInfo = ({ user }: { user: UserData }) => {
  const { entries } = user;
  return (
    <div className="text-2xl font-bold text-center text-white">
      {' '}
      {Number(entries) > 0 ? `You successsfully looked for faces on ${entries} images!` : "You haven't found any faces yet. Try it out!"}{' '}
    </div>
  );
};

export default EntriesInfo;
