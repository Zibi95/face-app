import Tilt from 'react-parallax-tilt';

function Form({ handleSubmit, handleInput, inputValue }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-9/12 mt-44 mx-auto flex justify-center bg-blend-luminosity p-5 rounded-md"
    >
      <input
        className="w-4/5 p-3 mr-3 "
        type="text"
        value={inputValue}
        onChange={handleInput}
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
          Detect
        </button>
      </Tilt>
    </form>
  );
}

export default Form;
