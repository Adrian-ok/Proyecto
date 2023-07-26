import React from 'react'
import { Button } from 'flowbite-react';

export function HeaderPage(props) {

    const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props

    return (
        <div className='flex w-full justify-around my-4'>
            <h2 className='text-2xl font-semibold'>{title}</h2>

            <div className='flex'>
                {btnTitle && (
                    <Button className='mr-4' color="success" onClick={btnClick}>
                        {btnTitle}
                    </Button>
                )}
                {btnTitleTwo && (
                    <Button color="failure" onClick={btnClickTwo}>
                        {btnTitleTwo}
                    </Button>
                )}
            </div>
        </div>
    )
}
