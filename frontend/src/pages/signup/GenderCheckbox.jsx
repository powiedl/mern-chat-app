const GenderCheckbox = () => {
  return (
    <div className='flex mt-4'>
      <div className='form-control flex flex-row items-center gap-2'>
        <label htmlFor='cb_male' className='label cursor-pointer ml-2 p-0'>
          <span className='label-text text-amber-500'>Male</span>
        </label>
        <input
          id='cb_male'
          type='checkbox'
          className='checkbox border-slate-900'
        />
      </div>
      <div className='form-control flex flex-row items-center gap-2'>
        <label htmlFor='cb_female' className='label cursor-pointer ml-2 p-0'>
          <span className='label-text text-amber-500'>Female</span>
        </label>
        <input
          id='cb_female'
          type='checkbox'
          className='checkbox border-slate-900'
        />
      </div>
    </div>
  );
};
export default GenderCheckbox;
