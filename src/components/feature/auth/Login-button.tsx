import { Link } from 'react-router-dom';

export function LoginButton() {
  return (
    <Link to="/login" className="btn-outline ">
      LOGIN
    </Link>
  );
}
