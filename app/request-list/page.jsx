import BlockRequestList from '@/components/BlockRequestList/BlockRequestList';
import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import PaginationNav from '@/components/PaginationNav/PaginationNav';

import { getRequest } from '@/lib/request';

export default async function Page({ searchParams }) {
  const request = await getRequest(searchParams && searchParams.page);

  return (
    <Container>
      <Header />
      <div className='mb-10 text-lg'>
        <span>Всего заявок: </span>
        <span className='font-bold'>{request.numResults}</span>
      </div>
      <BlockRequestList list={request.results} />
      <PaginationNav
        isPaginate={request.toPaginate}
        currentPage={request.currentPage}
        numberOfPages={request.lastPage}
        linkPath={'/request-list'}
      ></PaginationNav>
    </Container>
  );
}
