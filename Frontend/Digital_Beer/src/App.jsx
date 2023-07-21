
import { Navigation } from './routes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Navigation />

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  )
}

export default App
