import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddForm, onSubmitForm } from '../../store/bottomLeftTable';

const BottomLeft = () => {
  const tableData = useSelector((state) => state.bottomLeftTable.tableData);
  const toggleAdd = useSelector((state) => state.bottomLeftTable.addDataToggle);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(onSubmitForm(data));
  };

  return (
    <>
      <div className="">
        <table className="table">
          <tbody>
            {tableData &&
              tableData.length > 0 &&
              tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.kontrat}</td>
                  <td>{item.teklif}</td>
                  <td>{item.data}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {toggleAdd && (
          <form onSubmit={handleSubmit(onSubmit)} className="flex">
            <input type="text" {...register('no')} placeholder="no girin" />
            <input
              type="text"
              {...register('kontrat')}
              placeholder="kontrat girin"
            />
            <input
              type="text"
              {...register('teklif')}
              placeholder="teklif girin"
            />
            <input type="text" {...register('data')} placeholder="data girin" />
            <button onClick={() => handleSubmit(onSubmit)}>kaydet</button>
          </form>
        )}
        <button onClick={() => dispatch(toggleAddForm(''))}>Yeni Ekle</button>
      </div>
    </>
  );
};

export default BottomLeft;
