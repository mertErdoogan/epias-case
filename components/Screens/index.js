import Split from 'react-split';
import TopLeft from '../TopLeft';
import TopRight from '../TopRight';
import BottomLeft from '../BottomLeft';
import BottomRight from '../BottomRight';
import { useDispatch } from 'react-redux';
import { onPositionChange } from '../../store/positionSlice';
import useLocalStroage from '../../hooks/useLocalStroage';

const Screens = () => {
  const dispatch = useDispatch();
  const localStorageHook = useLocalStroage('splits', {});
  const handleDrag = (positions, splitId, title) => {
    dispatch(onPositionChange({ positions, splitId }));
    localStorageHook.setValue({ positions, title });
  };
  return (
    <Split
      onDragEnd={(e) => handleDrag(e, 1, 'vertical')}
      direction="vertical"
      className="root"
    >
      <Split
        onDragEnd={(e) => handleDrag(e, 2, 'horizontalTop')}
        className="flex"
      >
        <TopLeft />
        <TopRight />
      </Split>
      <Split
        onDragEnd={(e) => handleDrag(e, 3, 'horizontalBottom')}
        className="flex"
      >
        <BottomLeft />
        <BottomRight />
      </Split>
    </Split>
  );
};

export default Screens;
