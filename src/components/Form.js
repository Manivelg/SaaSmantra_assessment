import React from 'react';
import { useFormik } from 'formik'; 
import * as yup from 'yup';   
import 'yup-phone';

function Form() {
 
  const formik = useFormik({
    initialValues : {
      Name: '',
      Email: '',
      Designation: '',
      Contact:''
    },
    validationSchema:yup.object({
      Name:yup
      .string()
      .min(6, '* Minimum 6 Characters allowed.')
      .max(15, '* Maximum 15 Characters allowed.')
      .required('* Enter the valid Name'),

      Email:yup
      .string()
      .email('* Invalid E-mail ID')
      .required('* Enter the E-mail ID'),

      Designation:yup
       .string()
       .min(8, '* Minimum 8 Characters allowed.')
       .max(15, '* Maximum 15 Characters allowed.')
       .required('* Enter your Designation'),
      
      Contact:yup
       .string()
       .phone(null, true, 'Invalid mobile Number')
       .required('* Enter your mobile number.')
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    }
  })

  return (
    <section id="form">
      <div className='form_head'>
        <p className='form_header text-center'><span className='form_line'>Lorem Ipsum</span></p>
      </div>

    <form onSubmit = {formik.handleSubmit} autoComplete="off">
      <div className='form_action'>
        <div className='form_first'>
        <div className='form_second'></div>
        <div className='first_form'>
          <p className='form_para'>Name</p>
          <input 
            type="text"
            placeholder='Name'
            className='input_cloud'
            name="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
           />
           <p className='error'>
           {formik.errors.Name ?
           <span className='errors'>{formik.errors.Name}</span>
           : null
           }
           </p>
        </div>

        <div className='first_form'>
          <p className='form_para'>Email</p>
          <input 
            type="text"
            placeholder='Email'
            className='input_cloud'
            name="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
           />
           <p className='error'>
           {formik.errors.Email ?
           <span className='errors'>{formik.errors.Email}</span>
           :null
            }
            </p>
        </div>
        </div>

        <div className='form_first'>
        <div className='first_form'>
          <p className='form_para'>Designation</p>
          <input 
            type="text"
            placeholder='Designation'
            className='input_cloud'
            name="Designation"
            value={formik.values.Designation}
            onChange={formik.handleChange}
           />
           <p className='error'>
            {formik.errors.Designation ?
            <span className='errors'>{formik.errors.Designation}</span>
            :null}
            </p>
        </div>

        <div className='first_form'>
          <p className='form_para'>Contact</p>
          <input 
            type="text"
            placeholder='Contact'
            className='input_cloud'
            name="Contact"
            value={formik.values.Contact}
            onChange={formik.handleChange}
           />
           <p className='error'>
            {formik.errors.Contact ?
            <span className='error'>{formik.errors.Contact}</span>
            :null}
           </p>
        </div>
        </div>
        
        <div className='form_submit'>
          <button className='submit'>Submit</button>
        </div>

      </div>
      </form>
    </section>
  )
}

export default Form