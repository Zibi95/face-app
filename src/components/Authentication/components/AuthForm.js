import Tilt from 'react-parallax-tilt';

const AuthForm = ({ inputs, handleSubmit, buttonName, error }) => {
  return (
    <Tilt
      className="flex flex-col items-center w-1/4 gap-4 px-20 py-24 mx-auto border border-black shadow-2xl"
      tiltAxis="x"
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="black"
      glarePosition="all">
      {inputs.map(input => {
        return (
          <div
            className="w-full mb-1"
            key={input.label}>
            <label
              htmlFor={input.name}
              className="block mb-1 font-medium text-white">
              {input.label}
            </label>
            <input
              className="w-full p-2 bg-gray-200 rounded-lg"
              id={input.name}
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={e => {
                input.onChange(e);
              }}
            />
          </div>
        );
      })}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 mt-5 mb-10 font-extrabold text-black rounded-lg bg-b-right hover:bg-b-left hover:text-white">
        {buttonName}
      </button>
      {error && <div className="font-bold text-red-700 text-md">{error}</div>}
    </Tilt>
  );
};

export default AuthForm;
