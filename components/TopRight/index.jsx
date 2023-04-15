import { useSelector } from 'react-redux';

const TopRight = () => {
  const data = useSelector((state) => state.position.screenSplits);

  return (
    <>
      <div className="top-right-root">
        {data &&
          data.map((split) => (
            <div key={split.id} className="top-right-wrapper">
              <span className="title">{split.title}: </span>
              <span>
                {split.distances.map((distance, index) => (
                  <span key={`distance-${index}`}>{distance}</span>
                ))}
              </span>
            </div>
          ))}
      </div>
    </>
  );
};

export default TopRight;
