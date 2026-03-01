import React from 'react'
import { Formik, Form, Field } from 'formik'
import './App.scss'
import * as Yup from 'yup'


const initialValues = {
    name: '',
    lastName:'' ,
    stretName: '',
    number: '',
    floor: '',
    postalCode: '',
    city: '',
    state: '',
    country: ''

}
const validationSchema = Yup.object().shape({
    name: Yup.string()
    .required('Required'),
    lastName: Yup.string()
    .required('Required'),
    stretName: Yup.string()
    .required('Required'),
    number: Yup.string()
    .required('Required'),
    floor: Yup.string()
    .required('Required'),
    postalCode: Yup.string()
    .required('Required'),
    city: Yup.string()
    .required('Required'),
    state: Yup.string()
    .required('Required'),
    country: Yup.string()
    .required('Required'),
})

function App() {

    const handelSubmit = (values, actions) => {
        const data = {
            id: Date.now(), ...values
        }
        console.log(values)
        actions.resetForm()
    }
  return (
    <div>
         <h1>Addres form temblate  </h1>
      <Formik initialValues={initialValues} onSubmit={handelSubmit } validationSchema={validationSchema} className='formik'>
        <Form>
         
         <h2>Name</h2>
       <Field name='name' placeholder=' First name' required/>
       <errorMessage name='name' component='div' className='error'/>
       <Field name='lastName' placeholder='Last name' required />
      < errorMessage name='lastName' component='div' className='error'/> 
          
       <h2>Addres</h2>
       <Field name='stretName' placeholder='Stret name'required />
       <errorMessage name='stretName' component='div' className='error'/>
       <Field name='number' placeholder='Number' className='number' required />
       <errorMessage name='number' component='div' className='error'/>
       <Field name='floor'  placeholder='Floor , unite ...' className='floor' />
       < errorMessage name='floor' component='div' className='error'/>
       <Field name='postalCode' placeholder='Postal Code' required />
       <errorMessage name='postalCode' component='div' className='error'/>
       <Field name='city' placeholder='City' />
       < errorMessage name='city' component='div' className='error'/>
       <Field name='state' placeholder='State' required />
       <errorMessage name='state' component='div' className='error'/>
       <Field as = 'select' name='country' placeholder='Country' required 
       options={[
           { value: 'Ukraine', label: 'Ukraine' },
           { value: 'USA', label: 'USA' },
           { value: 'Germany', label: 'Germany' },
       ]}
       />

       <errorMessage name='country' component='div' className='error'/>
       
          <button type='submit'>Submit ➡️ </button>
        </Form>
       
      </Formik>

    </div>
  )
}

export default App
