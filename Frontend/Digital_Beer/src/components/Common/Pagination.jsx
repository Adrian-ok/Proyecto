import React from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/Bs'

export function Pagination({ next, prev, page }) {

    return (
        <div className="inline-flex gap-1 w-full justify-center mt-4">
        <button
            onClick={() => prev()}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-gray-300"
        >
            <BsFillArrowLeftSquareFill/>
        </button>

        <div>
            <p className="h-8 w-12 rounded border border-gray-100 bg-slate-300 text-center font-medium text-gray-900">{page}</p>
        </div>

        <button
            onClick={() => next()}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-slate-300"
        >
            <BsFillArrowRightSquareFill/>
        </button>
    </div>
    )
}
