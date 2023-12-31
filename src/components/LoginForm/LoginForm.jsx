import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p className={css.text}>Email</p>

        <input type="email" name="email" />
      </label>
      <label>
        <p className={css.text}>Password</p>

        <input type="password" name="password" />
      </label>
      <button className={css.btn} type="submit">
        Log In
      </button>
    </form>
  );
};
