'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <div className='flex w-full items-center justify-center font-sans mb-10'>
      <Navbar>
        <Navbar.Start>
          <div>
            <Button
              color='ghost'
              className='lg:hidden'
              onClick={() => setOpenMenu(!isOpenMenu)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </Button>
            <div className={isOpenMenu ? 'absolute w-full h-full bg-white left-0 z-10 pl-7 pt-2' : 'hidden'}>
              <div className='mx-auto container mw-2xl'>
                <div className='mb-2 w-full'>
                  <Link
                    href='/'
                    className='text-lg text-slate-400 hover:bg-slate-200 block px-4 py-2 rounded-lg'
                  >
                    Главная страница
                  </Link>
                </div>
                <div className='mb-2 w-full'>
                  <Link
                    href='/request-list'
                    className='text-lg text-slate-400 hover:bg-slate-200 block px-4 py-2 rounded-lg'
                  >
                    Список заявок
                  </Link>
                </div>
                <div className='mb-2 w-full'>
                  <Link
                    href='/request'
                    className='text-lg text-slate-400 hover:bg-slate-200 block px-4 py-2 rounded-lg'
                  >
                    Отправить заявку
                  </Link>
                </div>
              </div>
              {/*Mobile версия*/}
            </div>
          </div>

          <span className='btn btn-ghost normal-case text-xl'>LOGO</span>
        </Navbar.Start>
        <Navbar.End className='hidden lg:flex'>
          {/*Desktop версия*/}
          <Menu
            horizontal
            className='p-0'
          >
            <Menu.Item>
              <Link href='/'>Главная страница</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href='/request-list'>Список заявок</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href='/request'>Отправить заявку</Link>
            </Menu.Item>
          </Menu>
        </Navbar.End>
      </Navbar>
    </div>
  );
}
