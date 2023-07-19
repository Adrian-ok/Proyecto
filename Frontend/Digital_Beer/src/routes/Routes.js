import routerAdmin from '../routes/routes.admin'
import routerClient from '../routes/routes.client'
import { ErrorLayout } from '../layouts'
import { Error404 } from '../pages'

//ambos devuelven un array de obj, para obtener el obj es decir el contenido
//utilizo el spreed operator
const routes = [
    ...routerAdmin, 
    ...routerClient, 
    { 
        path: '*',
        layout: ErrorLayout,
        component: Error404,
    },
]

export default routes