import { Outlet } from 'react-router-dom';
import AuthImage from '../../assets/images/AuthImage.png';
import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div className="w-full h-full flex">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Logo className='h-6 text-gray-500' />

        <div className='mt-16 max-w-md w-full'>
          <Outlet />
        </div>
      </div>
      <div className="w-full h-full p-8 hidden flex-col justify-center items-center lg:flex">
        <div className='relative w-full max-w-[565px] h-fit rounded-[32px] overflow-hidden'>
          <img className='object-contain w-full h-full max-w-[656px] max-h-[960px] select-none' src={AuthImage} />

          <div className='p-8 w-full bg-white absolute bottom-0'>
            <Logo className='text-teal-900 h-8' />

            <p className='mt-8 text-xl text-gray-700'>Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
