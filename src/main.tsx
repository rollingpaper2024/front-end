import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'jotai';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
  <ToastContainer />
    <App />
  </Provider>,
)
