import { Link, useNavigate, useLocation } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { setAuth } from '../../auth/storage';
import './AuthPages.css';

const initialValues = { email: '', password: '' };

const schema = yup.object({
  email: yup.string().email('Некорректный email').required('Обязательное поле'),
  password: yup.string().required('Введите пароль'),
});

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/dashboard';

  return (
    <div className="auth-page">
      <h1 className="auth-page__title">Вход</h1>
      <p className="auth-page__subtitle">Войдите в свой аккаунт</p>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={() => {
          setAuth(`user-${Date.now()}`);
          navigate(from, { replace: true });
        }}
      >
        <Form className="auth-form">
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
              placeholder="••••••••"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="p" className="auth-form__field-error" />
          </label>
          <button type="submit" className="auth-form__submit">
            Войти
          </button>
        </Form>
      </Formik>

      <p className="auth-page__footer">
        Нет аккаунта? <Link to="/register">Регистрация</Link>
      </p>
    </div>
  );
}
