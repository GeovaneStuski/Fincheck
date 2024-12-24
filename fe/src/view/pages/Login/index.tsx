import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Login() {
  return (
    <div>
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">Entre em sua conta</h1>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-700">Novo por aqui?</span>

          <Link to="/register" className="text-teal-900 font-semibold">
            Crie uma conta
          </Link>
        </div>
      </header>

      <form className='flex flex-col gap-2 w-full'>
        <Input
          placeholder='E-mail'
          name='email'
          type='email'
        />

        <Input
          placeholder='Senha'
          name='password'
          type='password'
        />

        <Button>Entrar</Button>
      </form>
    </div>
  );
}
