import { LoginButton } from './Login-button';
import { SignUpButton } from './Sign-up-button';

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <SignUpButton />
      <LoginButton />
    </div>
  );
}
