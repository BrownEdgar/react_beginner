import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './App.scss';

const initialValues = {
  name: 'Ani',
  email: '',
  password: '',
  gender: '',
  coments: '',
  checked: '',
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Անունը չի կարող 2 սիմվոլից պակաս լինել')
    .max(100, 'Անունը չի կարող 100 սիմվոլից պակաս լինել')
    .required('Անունը պարտադիր է'),
  email: yup.string().email('Սխալ էլ. հասցե').required('Էլ. հասցեն պարտադիր է'),
  password: yup
    .string()
    .min(6, 'Գաղտնաբառը պետք է պարունակի 6 սիմվոլ')
    .max(12, 'Գաղտնաբառը չի կարող 12 սիմվոլից ավելի լինել')
    .required('Գաղտնաբառը պարտադիր է'),
  coments: yup.string().max(50, 'Մեկնաբանությունը չի կարող 50 սիմվոլից ավելի լինել'),
  gender: yup.string().oneOf(['male', 'female'], 'Ընտրեք սեռը').required('Սեռը պարտադիր է'),
});

function App() {
  const handleSubmit = (
    values: typeof initialValues,
    actions: { resetForm: () => void }
  ) => {
    const data = {
      id: Math.floor(Math.random() * 1000),
      ...values,
    };
    console.log(data);
    actions.resetForm();
  };

  return (
    <div>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {/* <ErrorMessage>
          {(errorMsg) => {
            console.log(errorMsg);
            return (
              <div>
                {
                  Object.keys(errorMsg)
                    .map(key => <p key={key} className='error'>{errorMsg[key]}</p>)
                }
              </div>
            )
          }}
        </ErrorMessage> */}
          <Field
            name='name'
            placeholder='Name'
            type='text'
          />
          <ErrorMessage
            name='name'
            component='div'
            className='error'
          />

          <Field
            name='email'
            placeholder='Email'
            type='email'
          />
          <ErrorMessage
            name='email'
            component='div'
            className='error'
          />

          <Field
            name='password'
            placeholder='Password'
            type='password'
          />
          <ErrorMessage
            name='password'
            component='div'
            className='error'
          />
          <Field
            as='select'
            name='gender'
          >
            <option
              value=''
              disabled
            >
              choose gender
            </option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Field>

          <div>
            <label>
              <Field
                type='radio'
                name='checked'
                value='One'
              />
              One
            </label>
            <label>
              <Field
                type='radio'
                name='checked'
                value='Two'
              />
              Two
            </label>
            <label>
              <Field
                type='radio'
                name='checked'
                value='Three'
              />
              Three
            </label>
          </div>

          <Field
            as='textarea'
            name='coments'
          />
          <ErrorMessage
            name='coments'
            component='div'
            className='error'
          />

          <ErrorMessage
            name='gender'
            component='p'
            className='error'
          />
          <input
            type='submit'
            value='Submit'
          />
        </Form>
      </Formik>
    </div>
  );
}

export default App;
