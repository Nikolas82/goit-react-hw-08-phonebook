import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      <title>Login</title>
      <LoginForm />
    </div>
  );
}
