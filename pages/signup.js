import { handleGoogleSignIn } from '../lib/auth';

export default function SignUp() {
  return (
    <div>
      <h1>S&apos;inscrire</h1>
      <button onClick={handleGoogleSignIn}>S&apos;inscrire avec Google</button>
    </div>
  );
}
