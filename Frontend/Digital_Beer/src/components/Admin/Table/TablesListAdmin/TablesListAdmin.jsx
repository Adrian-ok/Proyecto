import React, {useEffect, useState} from 'react'
import { map, size } from 'lodash'
import { TableAdmin } from '../TableAdmin'
import { Button, ToggleSwitch } from 'flowbite-react'

export function TablesListAdmin(props) {
  const { tables } = props
  const [reload, setReload] = useState(false)
  const [autoReload, setAutoReload] = useState(false)
  const [val, setVal] = useState(false)

  const onReload = () => setReload((prev) => !prev)

  useEffect(() => {
    if (autoReload) {
      const autoReloadAction = () => {
        onReload()
        setTimeout(() => {
          autoReloadAction()
        }, 5000)
      }
    }
  }, [autoReload])
  
  const onCheckAutoReload = (check) => {
    console.log(check)
    setVal(!val)
  }

  return (
    <div className='flex flex-wrap gap-20 justify-center'>
      <Button color="dark" className='absolute top-20 right-10' onClick={() => onReload()}>Dark</Button>
      <div className="flex flex-row gap-2 max-w-md absolute top-20 right-32" id="toggle">
        <p>Auto Reload</p>
        <ToggleSwitch
          onChange={(data) => console.log(data.checked)}
          checked={val}
        />
      </div>
        {map(tables, (table) => (
          <TableAdmin key={table.number} table={table} reload={onReload}/>
        ))}
      </div>
      )
}
