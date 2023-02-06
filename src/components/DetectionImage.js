import '../App.css';

const DetectionImage = ({ imageUrl, box }) => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="relative">
          <img className="h-[500px]" id="inputImage" src={imageUrl} alt="" />
          {box.map((el, i) => (
            <div
              key={i}
              className="flex-shrink-0 bounding-box"
              style={{
                top: el.topRow,
                right: el.rightCol,
                bottom: el.bottomRow,
                left: el.leftCol,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DetectionImage;
