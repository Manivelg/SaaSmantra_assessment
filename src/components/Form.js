import React from 'react';

function Form() {
 

  return (
    <section id="form">
      <div className='form_head'>
        <p className='form_header text-center'><span className='form_line'>Lorem Ipsum</span></p>
      </div>

      <div className='form_action'>
        <div className='form_first'>
        <div className='form_second'></div>
        <div className='first_form'>
          <p className='form_para'>Name</p>
          <input 
            type="text"
            placeholder='Name'
            className='input_cloud'
           />
           <p className='error'></p>
        </div>

        <div className='first_form'>
          <p className='form_para'>Email</p>
          <input 
            type="text"
            placeholder='Email'
            className='input_cloud'
           />
           <p className='error'></p>
        </div>
        </div>

        <div className='form_first'>
        <div className='first_form'>
          <p className='form_para'>Designation</p>
          <input 
            type="text"
            placeholder='Designation'
            className='input_cloud'
           />
           <p className='error'></p>
        </div>

        <div className='first_form'>
          <p className='form_para'>Contact</p>
          <input 
            type="text"
            placeholder='Contact'
            className='input_cloud'
           />
           <p className='error'></p>
        </div>
        </div>
        
        <div className='form_submit'>
          <button className='submit'>Submit</button>
        </div>

      </div>

    </section>
  )
}

export default Form