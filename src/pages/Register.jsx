import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
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
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
}
