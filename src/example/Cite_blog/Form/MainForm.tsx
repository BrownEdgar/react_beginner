import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import * as yup from 'yup';
import type { IBlog } from '@/types/types';


export type BlogFormValues = Omit<IBlog, 'id'>;

interface IMainFormProps {
  handleSubmit: (values: BlogFormValues, options: FormikHelpers<BlogFormValues>) => void;
  blog: IBlog | null;
}

function MainForm({ handleSubmit, blog }: IMainFormProps) {
  const initalValues = {
    title: blog?.title || '',
    content: blog?.content || '',
    image: blog?.image || '',
    author: blog?.author || '',
    date: blog?.date || '',
  };

  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    content: yup.string().required('Content is required'),
    image: yup.string().required('Image is required'),
    author: yup.string().required('Author is required'),
    date: yup.string().required('Date is required'),
  });

  return (
    <div>
      <Formik
        initialValues={initalValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <Field
                name='title'
                placeholder='Title'
                type='text'
              />
              <ErrorMessage
                name='title'
                component='div'
                className='error'
              />
              <Field
                name='content'
                placeholder='Content'
                as='textarea'
              />
              <ErrorMessage
                name='content'
                component='div'
                className='error'
              />
              <Field
                name='image'
                placeholder='Image URL'
                type='url'
              />
              <ErrorMessage
                name='image'
                component='div'
                className='error'
              />
              <Field
                name='author'
                placeholder='Author'
                type='text'
              />
              <ErrorMessage
                name='author'
                component='div'
                className='error'
              />
              <Field
                name='date'
                placeholder='Date'
                type='date'
              />
              <ErrorMessage
                name='date'
                component='div'
                className='error'
              />
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default MainForm;
