
import { Navigation } from './routes'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context'

function App() {

  return (
    <AuthProvider>
      <Navigation />

      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  )
}

export default App
