import {
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import AddContractModal from './AddContractModal';
import {
  toggleAddModal,
  filterData,
  filterTheads,
  toggleTolkit,
} from '../../store/topLeftTableSlice';
import { useForm } from 'react-hook-form';

const TableHeader = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.topLeftTable.tableData);
  const tHead = useSelector((state) => state.topLeftTable.tHeads);
  const tolkitHead = useSelector((state) => state.topLeftTable.tHeadTolkit);
  const form = useForm();

  const handleKontratFilter = (e) => {
    dispatch(filterData(e.target.value));
  };

  return (
    <div className="table-header">
      <div className="input-item">
        <select
          onChange={(e) => handleKontratFilter(e)}
          type="text"
          placeholder="Kontrat Seçin"
        >
          <option value="-1">Kontrat Seçin</option>
          {data &&
            data
              .filter(
                (item, index) =>
                  data.findIndex((obj) => item.kontrat === obj.kontrat) ===
                  index
              )
              .map((item) => (
                <option value={item.kontrat} key={item.id}>
                  {item.kontrat}
                </option>
              ))}
        </select>
      </div>
      <div className="icon-area">
        <ArrowDownTrayIcon className="" />
        <div className="tooltip-root">
          <Cog6ToothIcon onClick={() => dispatch(toggleTolkit(''))} />
          {tolkitHead && (
            <form className="tooltip">
              {tHead &&
                tHead.map((item) => (
                  <div key={item}>
                    <input
                      id={item}
                      type="checkbox"
                      value={item}
                      {...form.register(item, {
                        onChange(e) {
                          dispatch(
                            filterTheads(
                              form.getValues()[item] === false
                                ? { status: true, item: item }
                                : { status: false, item: item }
                            )
                          );
                        },
                      })}
                      defaultChecked={true}
                    />
                      <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              <div
                className="close-icon"
                onClick={() => dispatch(toggleTolkit(''))}
              >
                x
              </div>
            </form>
          )}
        </div>
        <PlusCircleIcon
          className=""
          onClick={() => dispatch(toggleAddModal(''))}
        />
      </div>
      <AddContractModal />
    </div>
  );
};

export default TableHeader;
