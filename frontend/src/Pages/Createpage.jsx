import React, {useState} from 'react'
import {preview,animate} from '../assets';
import { getRandomPrompts } from '../utils';
import {FormField} from '../Components'
import {useNavigate} from 'react-router-dom';
const Createpage = () => {
  const navigate = useNavigate()
  const uri='http://localhost:5000/api'
  const [generateImg,setGenerateImg]=useState(false)
  const [form,setForm]=useState({
    name:'',
    prompt:'',
    photo:''
  })

  const generatingImg=async()=>{
    if (form.prompt) {
      try {
        setGenerateImg(true);
        const response = await fetch(uri, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });
        const data = await response.json();
        setForm({ ...form, photo:data.photo});
      }
      catch(err){
        alert(err)
      }
      finally{
        setGenerateImg(false)
      }
    }
    else{
      alert('Please Enter A Prompt')
    }

  }
  
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

  }

  const handleSurpriseMe=()=>{
    const randomPrompt=getRandomPrompts(form.prompt)
    setForm({
      ...form,
      prompt:randomPrompt
    })
  }
  return (
    <section>
        <div className='py-2 px-2'>
        <h1 className='py-2 px-4 text-4xl font-bold'>Create Your Imagination</h1>
        <p className='py-2 px-6'>Create a imaginative and visually stunning images by DALL-E AI</p>
      </div>
      <form className='mt-10 px-4' onSubmit={handleSubmit}>
        <div>
          <FormField  labelName="YourName" type='text' name='name' placeholder='Your Name' handleChange={handleChange} value={form.name}/>
          <FormField  labelName="Prompt" type='text' name='prompt' placeholder='an oil pastel drawing of an annoyed cat in a spaceship'handleChange={handleChange} value={form.prompt}
          isSurpriseMe handleSurpriseMe={handleSurpriseMe} />
          <div className="border border-gray-400 w-64 h-64 flex items-center mx-4 p-3">
            {form.photo ? 
              <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'/> :
              <img src={preview} alt='preview' className='w-full h-full object-contain opacity-40'/>
            }  
            {generateImg && <img src={animate} alt='loading' className='absolute z-0 flex justify-center items-center  bg-[rgba(0,0,0,0.1)] rounded-xl'/>}
            <div className="flex justify-center items-center ml-10">
            <button className='bg-[#6969ff] flex justify-center items-center py-2 px-4 mx-4 my-4 rounded-md text-md text-white' type='submit' onClick={generatingImg}>{generateImg? 'Generating... ':'Generate'}</button>
           <button className='bg-[#7c7c91] flex items-center justify-center py-2 rounded-md text-md text-white w-56'>Share With Community</button>
            </div>
            </div>
        </div>

      </form>
    </section>
  )
}

export default Createpage
