import Tilt from 'react-parallax-tilt';

const AuthForm = ({ inputs, handleSubmit, buttonName }) => {
  return (
    <Tilt
      className="flex flex-col items-center gap-4 px-20 py-24 mx-auto border border-black shadow-2xl w-fit"
      tiltAxis="x"
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="black"
      glarePosition="all"
    >
      {inputs.map(input => (
        <div className="mb-1" key={input.label}>
          <label className="block mb-1 font-medium text-white">
            {input.label}
          </label>
          <input
            className="w-full p-2 bg-gray-200 rounded-lg"
            type={input.type}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 mt-5 mb-10 font-extrabold text-black rounded-lg bg-b-right hover:bg-b-left hover:text-white"
      >
        {buttonName}
      </button>
    </Tilt>
  );
};

export default AuthForm;
