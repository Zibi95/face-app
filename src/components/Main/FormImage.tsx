import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

type FormImageProps = {
  handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): void;
};

function FormImage({ handleSubmit }: FormImageProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      onSubmit={event => {
        handleSubmit(event);
        setInputValue('');
      }}
      className="flex justify-center w-9/12 p-5 mx-auto rounded-md mt-44 bg-blend-luminosity">
      <input
        className="w-4/5 p-3 mr-3 "
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <Tilt
        className="w-1/5"
        tiltEnable={false}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="red"
        glarePosition="all">
        <button
          className="text-xl font-bold border border-black text-slate-300 bg-b-left"
          type="submit">
          Detect
        </button>
      </Tilt>
    </form>
  );
}

export default FormImage;
