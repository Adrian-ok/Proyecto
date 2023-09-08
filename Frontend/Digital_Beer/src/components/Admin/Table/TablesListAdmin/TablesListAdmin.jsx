import React from 'react'
import { map, size } from 'lodash'
import { TableAdmin } from '../TableAdmin'
import { Button, ToggleSwitch } from 'flowbite-react'

export function TablesListAdmin(props) {
  const { tables } = props

  return (
    <div className='flex flex-wrap gap-20 justify-center'>
      <Button color="dark" className='absolute top-20 right-10'>Dark</Button>
      <div className="flex flex-row gap-2 max-w-md absolute top-20 right-32" id="toggle">
        <p>Auto Reload</p>
        <ToggleSwitch
        // onChange={function() {[native code]}}
        />
      </div>
        {map(tables, (table) => (
          <TableAdmin key={table.number} table={table} />
        ))}
      </div>
      )
}
