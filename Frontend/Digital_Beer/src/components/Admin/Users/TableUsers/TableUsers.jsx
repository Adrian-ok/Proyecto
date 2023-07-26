import React from 'react'
import { map } from 'lodash'
import { Table, Button } from 'flowbite-react';

export function TableUsers(props) {

  const { users } = props

  return (
    <div className='flex justify-center items-center'>
      <Table hoverable>
        <Table.Head className='text-center'>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Staff</Table.HeadCell>
          <Table.HeadCell>Active</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {map(users, (users, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{users.username}</Table.Cell>
              <Table.Cell>{users.email}</Table.Cell>
              <Table.Cell>{users.is_staff ? '✔️' : '❌'}</Table.Cell>
              <Table.Cell>{users.is_active ? '🟢' : '🔴'}</Table.Cell>
              <Actions/>
            </Table.Row>
          ))}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

function Actions() {
  return (
    <Table.Cell className='text-lg'>
      <button className='mr-6'>✏️</button>
      <button>🗑️</button>
    </Table.Cell>
  )
}
