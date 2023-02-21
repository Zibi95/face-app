import { Dna } from 'react-loader-spinner';

export const Loader = (): JSX.Element => {
  return (
    <div className="flex justify-center mt-10 align-top">
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
