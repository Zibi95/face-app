import '../App.css';

const DetectionImage = ({ imageUrl, box }) => {
  return (
    <>
      {box && imageUrl && (
        <p className="text-center font-semibold text-2xl text-white">
          Hey I found {box.length} faces on this image
        </p>
      )}

      <div className="flex justify-center relative">
        <div className="relative">
          <img className="w-[500px]" id="inputImage" src={imageUrl} alt="" />
          {box.map((el, i) => (
            <div
              key={i}
              className="bounding-box flex-shrink-0"
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
