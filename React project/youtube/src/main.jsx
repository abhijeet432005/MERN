import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contextprovider from './context/Contextprovider.jsx'
import { Provider } from 'react-redux'
import store from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Contextprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Contextprovider>
  </Provider>
)
