'use client';

import Link from 'next/link';
import { Table } from 'react-daisyui';

export default function TableUsers({ users }) {

  return (
    <div className='overflow-x-auto'>
      <Table>
        <Table.Head>
          <span>ID</span>
          <span>Фамилия</span>
          <span>Имя</span>
          <span>Отчество</span>
          <span>login</span>
          <span>email</span>
        </Table.Head>

        <Table.Body>
          {users.map(({ id, name, fatherName, surname, login, email }) => (
            <Table.Row key={id}>
              <span>{id}</span>
              <span>{surname}</span>
              <span>{name}</span>
              <span>{fatherName}</span>
              <span><Link href={`/user/${login}`} className='text-base tracking-wide text-blue-500 hover:text-blue-400'>{login}</Link></span>
              <span>{email}</span>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
