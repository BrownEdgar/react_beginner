import './BlogHeader.scss';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

function BlogHeader({ toggleOpen, setSearchTerm, setTimer, timer }) {
  const handelSearch = (values) => {
    setSearchTerm(values.searchTerm);
  };

  const validationSchema = yup.object().shape({
    searchTerm: yup.string(),
  });

  return (
    <div className='BlogHeader'>
      <div>
        <h1>Our BLOGS</h1>
        <button onClick={toggleOpen}>Add New Blog</button>
      </div>
      <div>
        <Formik
          initialValues={{ searchTerm: '' }}
          onSubmit={handelSearch}
          validationSchema={validationSchema}
          validateOnChange={true}
        >
          {(formik) => {
            console.log(formik);
            return (
              <Form className='BlogHeader__search'>
                <Field
                  name='searchTerm'
                  placeholder='Search for blogs...'
                  type='search'
                  onChange={(e) => {
                    formik.setFieldValue('searchTerm', e.target.value);
                    if (timer) {
                      clearTimeout(timer);
                    }
                    const x = setTimeout(() => {
                      setSearchTerm(e.target.value);
                    }, 500);
                    setTimer(x);
                  }}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default BlogHeader;
