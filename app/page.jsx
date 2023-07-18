import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import PaginationNav from '@/components/PaginationNav/PaginationNav';

import { getUser } from '@/lib/user';
import Link from 'next/link';

export default async function Page({ searchParams }) {
  const user = await getUser(searchParams && searchParams.page);
  return (
    <Container>
      <Header />
      <h2 className='fontb-semibold text-3xl mb-10'>Список пользователей</h2>
      <div className='flex flex-wrap'>
        {user.results.map(({ id, surname, name, fatherName, email, login }) => (
          <Link
            className='w-full p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
            href={`/user/${login}`}
            key={id}
          >
            <div className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {surname} {name} {fatherName}
            </div>

            <div className='mb-3 font-normal text-gray-500 dark:text-gray-400'>Login: {login}</div>
            <div className='font-normal text-gray-500 dark:text-gray-400'>Email: {email}</div>
          </Link>
        ))}
      </div>
      <PaginationNav
        isPaginate={user.toPaginate}
        currentPage={user.currentPage}
        numberOfPages={user.lastPage}
        linkPath={'/'}
      ></PaginationNav>
    </Container>
  );
}
