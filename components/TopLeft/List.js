import { useSelector } from 'react-redux';

export const LeftTableHead = ['id', 'kontrat', 'teklif', 'data'];

const List = ({ data }) => {
  const filteredData = useSelector(
    (state) => state.topLeftTable.filteredKontrat
  );
  const filterTheads = useSelector(
    (state) => state.topLeftTable.filteredTheads
  );
  const tHead = useSelector((state) => state.topLeftTable.tHeads);
  return (
    <table className="table">
      <thead>
        <tr>
          {tHead &&
            tHead.map(
              (item, index) =>
                !filterTheads.includes(item) && (
                  <th key={`${index}-item`}>{item}</th>
                )
            )}
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0
          ? filteredData.map((item) => {
              return (
                <tr key={item.id}>
                  {!filterTheads.includes('id') && <td>{item.id}</td>}
                  {!filterTheads.includes('kontrat') && <td>{item.kontrat}</td>}
                  {!filterTheads.includes('teklif') && <td>{item.teklif}</td>}
                  {!filterTheads.includes('data') && <td>{item.data}</td>}
                </tr>
              );
            })
          : data.map((item) => {
              return (
                <tr key={item.id}>
                  {!filterTheads.includes('id') && <td>{item.id}</td>}
                  {!filterTheads.includes('kontrat') && <td>{item.kontrat}</td>}
                  {!filterTheads.includes('teklif') && <td>{item.teklif}</td>}
                  {!filterTheads.includes('data') && <td>{item.data}</td>}
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};

export default List;
