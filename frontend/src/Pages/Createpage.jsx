import React, {useState} from 'react'
import {preview,animate} from '../assets';
import { getRandomPrompts } from '../utils';
import {FormField} from '../Components'
import {useNavigate} from 'react-router-dom';
const Createpage = () => {
  const navigate = useNavigate()
  const [generateImg,setGenearateImg]=useState(true)
  const [loading,setLoading]=useState(false)
  const [form,setForm]=useState({
    name:'',
    prompt:'',
    photo:''
  })
  
  const handleChange=(e)=>{}
  
  const handleSubmit=(e)=>{}

  const handleSurpriseMe=()=>{}
  return (
    <section>
        <div className='py-4 px-2'>
        <h1 className='py-2 px-4 text-4xl font-bold'>Create Your Imagination</h1>
        <p className='py-2 px-6'>Create a imaginative and visually stunning images by DALL-E AI</p>
      </div>
      <form className='mt-10 px-4' onSubmit={handleSubmit}>
        <div>
          <FormField  labelName="YourName" type='text' name='Name' placeholder='Your Name'value={form.name} handleChange={handleChange}/>
          <FormField  labelName="Prompt" type='text' name='Prompt' placeholder='an oil pastel drawing of an annoyed cat in a spaceship' value={form.prompt} handleChange={handleChange}
          isSurpriseMe handleSurpriseMe={handleSurpriseMe}/>
          <div className='border border-gray-400 w-64 h-64 flex items-center justify-center mx-4 p-3'>
            {form.photo ?
              <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'/> :
              <img src={preview} alt='preview' className='w-full h-full object-contain opacity-40'/>
            }
            {generateImg && <img src={animate} alt='loading' className='absolute z-0 flex justify-center items-center  bg-[rgba(0,0,0,0.1)] rounded-xl'/>}
          </div>
        </div>
      </form>
    </section>
  )
}

export default Createpage
