import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p className={css.text}>Username</p>

        <input type="text" name="name" />
      </label>
      <label>
        <p className={css.text}>Email</p>

        <input type="email" name="email" />
      </label>
      <label>
        <p className={css.text}>Password</p>

        <input type="password" name="password" />
      </label>
      <button className={css.btn} type="submit">
        Register
      </button>
    </form>
  );
};
