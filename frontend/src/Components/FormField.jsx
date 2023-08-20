import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,handleSurpriseMe,isSurpriseMe}) => {
  return (
    <div className='mx-4 my-2'>
      <div className='flex items-center gap-2 mb-2'> 
      <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
      {name}
      </label>
      {isSurpriseMe && <button type='button' onClick={handleSurpriseMe} 
      className='px-2 py-2 bg-[#6469ff] rounded-md block font-medium text-sm text-white mx-4'
      > Surprise Me</button>}
      </div>
      <div>
      <input className='py-2 px-4 relative border border-gray-400 my-2 rounded-lg focus:border-[#6469ff] outline-none block w-full p-3' placeholder={placeholder} onChange={handleChange} value={value} name={name}/>
      </div>
        
    </div>
  )
}

export default FormField
