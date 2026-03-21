import { Link, useNavigate } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { setAuth } from '../../auth/storage';
import '../Login/AuthPages.css';

const initialValues = { name: '', email: '', password: '' };

const schema = yup.object({
  name: yup.string().trim().required('Введите имя'),
  email: yup.string().email('Некорректный email').required('Обязательное поле'),
  password: yup.string().min(6, 'Минимум 6 символов').required('Введите пароль'),
});

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <h1 className="auth-page__title">Регистрация</h1>
      <p className="auth-page__subtitle">Создайте новый аккаунт</p>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={() => {
          setAuth(`user-${Date.now()}`);
          navigate('/dashboard', { replace: true });
        }}
      >
        <Form className="auth-form">
          <label className="auth-form__label">
            Имя
            <Field
              name="name"
              type="text"
              className="auth-form__input"
              placeholder="Ваше имя"
              autoComplete="name"
            />
            <ErrorMessage name="name" component="p" className="auth-form__field-error" />
          </label>
          <label className="auth-form__label">
            Email
            <Field
              name="email"
              type="email"
              className="auth-form__input"
              placeholder="you@example.com"
              autoComplete="email"
            />
            <ErrorMessage name="email" component="p" className="auth-form__field-error" />
          </label>
          <label className="auth-form__label">
            Пароль
            <Field
              name="password"
              type="password"
              className="auth-form__input"
              placeholder="Минимум 6 символов"
              autoComplete="new-password"
            />
            <ErrorMessage name="password" component="p" className="auth-form__field-error" />
          </label>
          <button type="submit" className="auth-form__submit">
            Зарегистрироваться
          </button>
        </Form>
      </Formik>

      <p className="auth-page__footer">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
}
