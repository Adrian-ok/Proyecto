import React from 'react'
import { Spinner } from 'flowbite-react'

export function Loading() {
    return (
        <div className='flex flex-col h-full items-center gap-4 text-lg font-semibold'>
            <Spinner
                size="xl"
                color='warning'
            />
            <p>Cargando...</p>
        </div>
    )
}
