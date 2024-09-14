import { handleGoogleSignIn } from '../lib/auth';

export default function SignUp() {
  return (
    <div>
      <h1>S'inscrire</h1>
      <button onClick={handleGoogleSignIn}>S'inscrire avec Google</button>
    </div>
  );
}
