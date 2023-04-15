import { Dialog } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddModal, addData } from '../../store/topLeftTableSlice';
import { useForm } from 'react-hook-form';

const AddContractModal = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.topLeftTable.addModal);
  const tableData = useSelector((state) => state.topLeftTable.tableData);
  const form = useForm({
    defaultValues: {
      kontrat: 0,
      teklif: 0,
      data: '',
    },
  });

  const onSubmit = (data) => {
    dispatch(addData(data));
    dispatch(toggleAddModal(''));
  };

  return (
    <Dialog
      className="dialog-root"
      open={modalStatus}
      onClose={() => dispatch(toggleAddModal(''))}
    >
      <Dialog.Panel className="dialog-panel">
        <Dialog.Title>Yeni Kontrat Ekle</Dialog.Title>

        <form className="add-form" onSubmit={form.handleSubmit(onSubmit)}>
          <label htmlFor="kontrat">
            Kontrat Girin:
            <input
              id="kontrat"
              {...form.register('kontrat', { valueAsNumber: true })}
              type="text"
            />
          </label>
          <label htmlFor="teklif">
            Teklif Girin:
            <input
              id="teklif"
              {...form.register('teklif', { valueAsNumber: true })}
              type="text"
            />
          </label>
          <label htmlFor="data">
            Data Girin:
            <input id="data" {...form.register('data')} type="text" />
          </label>
          <button onClick={() => form.handleSubmit(onSubmit)}>Send</button>
          <button onClick={() => dispatch(toggleAddModal(''))}>Close</button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default AddContractModal;
