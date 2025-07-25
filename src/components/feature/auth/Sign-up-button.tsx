import { Link } from 'react-router-dom';

export function SignUpButton() {
  return (
    <Link to="/signup" className="btn-primary">
      SIGN UP
    </Link>
  );
}
