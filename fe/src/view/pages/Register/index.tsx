import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';

export function Register() {
  return (
    <div>
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">Crie sua conta</h1>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-700">Já possui uma conta?</span>

          <Link to="/login" className="text-teal-900 font-semibold">
            Fazer Login
          </Link>
        </div>
      </header>

      <div>
        <Input />
      </div>
    </div>
  );
}
