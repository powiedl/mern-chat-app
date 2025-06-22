const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex mt-4'>
      <div className='form-control flex flex-row items-center gap-2'>
        <label
          htmlFor='cb_male'
          className={`label cursor-pointer ml-2 p-0 ${
            selectedGender === 'male' ? 'selected' : ''
          }`}
        >
          <span className='label-text text-amber-500'>Male</span>
        </label>
        <input
          id='cb_male'
          type='checkbox'
          className='checkbox border-slate-900'
          checked={selectedGender === 'male'}
          onChange={() => onCheckboxChange('male')}
        />
      </div>
      <div className='form-control flex flex-row items-center gap-2'>
        <label
          htmlFor='cb_female'
          className={`label cursor-pointer ml-2 p-0 ${
            selectedGender === 'female' ? 'selected' : ''
          }`}
        >
          <span className='label-text text-amber-500'>Female</span>
        </label>
        <input
          id='cb_female'
          type='checkbox'
          className='checkbox border-slate-900'
          checked={selectedGender === 'female'}
          onChange={() => onCheckboxChange('female')}
        />
      </div>
    </div>
  );
};
export default GenderCheckbox;
