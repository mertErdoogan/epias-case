import List from './List';
import { useSelector, useDispacth } from 'react-redux';
import TableHeader from './TableHeader';

const TopLeft = () => {
  const data = useSelector((state) => state.topLeftTable.tableData);
  return (
    <div>
      <TableHeader />
      <List data={data} />
    </div>
  );
};

export default TopLeft;
