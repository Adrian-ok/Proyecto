import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './Routes'
import { map } from 'lodash'

export function Navigation() {
    return (
        <Router>
            <Routes>
                {map(routes, (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component></route.component>
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </Router>
    )
}
