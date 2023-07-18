'use client';
import { useEffect, useState } from 'react';
import { Button, Pagination } from 'react-daisyui';
import Link from 'next/link';

function createArrayPaginate(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => ({
      value: start + index,
    }));
}

export default function PaginationNav({ isPaginate = false, currentPage, numberOfPages, linkPath }) {
  const [maxLengthPage] = useState(4);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (isPaginate) {
      if (maxLengthPage < currentPage - 1 && numberOfPages >= currentPage) {
        if (currentPage + 1 < numberOfPages) {
          setPages([
            ...createArrayPaginate(1, 1),
            { value: '...', isDisabled: true },
            ...createArrayPaginate(currentPage - 1, currentPage + 1),
            { value: '...', isDisabled: true },
            ...createArrayPaginate(numberOfPages, numberOfPages),
          ]);
        } else {
          setPages([
            ...createArrayPaginate(1, 1),
            { value: '...', isDisabled: true },
            ...createArrayPaginate(currentPage - 1, currentPage + 1 < numberOfPages ? currentPage + 1 : numberOfPages),
          ]);
        }
      } else {
        if (maxLengthPage < numberOfPages) {
          setPages([
            ...createArrayPaginate(1, maxLengthPage),
            { value: '...', isDisabled: true },
            ...createArrayPaginate(numberOfPages, numberOfPages),
          ]);
        } else {
          setPages(createArrayPaginate(1, numberOfPages));
        }
      }
    }
  }, [currentPage]);

  return (
    isPaginate && (
      <>
        <Pagination className='flex justify-center mt-10'>
          {currentPage !== 1 && (
            <Link
              href={`${linkPath}?page=${currentPage - 1}`}
              className='mr-2'
            >
              <Button>Пред</Button>
            </Link>
          )}
          <Button
            className='mr-1'
            active
          >
            {currentPage}
          </Button>
          <Button
            className='mr-1'
            active
          >
            ИЗ
          </Button>
          <Button
            className='mr-1'
            active
          >
            {numberOfPages}
          </Button>
          
          {currentPage !== numberOfPages && (
            <Link
              href={`${linkPath}?page=${currentPage + 1}`}
              className='ml-1'
            >
              <Button>След</Button>
            </Link>
          )}
        </Pagination>
      </>
    )
  );
}
