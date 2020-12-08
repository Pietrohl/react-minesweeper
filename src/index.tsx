import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeContextProvider } from './context/toggleTheme'
import App from './components/app/App'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// reportWebVitals();
