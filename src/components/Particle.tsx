import ParticlesBg from 'particles-bg';

export const Particle = (): JSX.Element => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    position: 'all', // all or center or {x:1,y:1,width:100,height:100}
    color: ['random', '#ff0000'],
    cross: 'dead', // cross or bround
    random: 10, // or null,
    g: 1, // gravity
    // f: [2, -1], // force
  };
  return (
    <>
      <ParticlesBg
        type="custom"
        config={config}
        bg={true}
      />
    </>
  );
};
