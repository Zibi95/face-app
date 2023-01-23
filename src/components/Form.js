import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-9/12 mx-auto flex  justify-center  bg-blend-luminosity p-5 rounded-md"
    >
      <input
        className="w-4/5 p-3 mr-3 "
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Tilt
        className="w-1/5"
        tiltEnable={false}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="red"
        glarePosition="all"
      >
        <button
          className="border border-black font-bold text-slate-300 text-xl bg-b-left"
          type="submit"
        >
          Submit
        </button>
      </Tilt>
    </form>
  );
}

export default Form;
