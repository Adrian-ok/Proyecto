import { HiHome, HiTag, HiShoppingBag, HiViewGrid } from 'react-icons/hi'
import { LuHistory } from "react-icons/lu"

export const URL_API = 'http://127.0.0.1:8000'

export const TOKEN = 'token'

export const MENUS = [
    { name: 'Orders', link: '/admin', icon: HiHome },
    { name: 'Tables', link: '/admin/tables', icon: HiViewGrid },
    { name: 'Products', link: '/admin/products', icon: HiShoppingBag },
    { name: 'Categories', link: '/admin/categories', icon: HiTag },
    { name: 'History Payments', link: '/admin/history-payments', icon: LuHistory },
]

export const NUM_PAGINATION = 4