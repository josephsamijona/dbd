import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Styles
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

// Error tracking setup
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Report web vitals
reportWebVitals(console.log)

// Remove loading screen
const loader = document.querySelector('.loader')
if (loader) {
  loader.remove()
}

// Error handling
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason)
})

window.onerror = function(msg, url, lineNo, columnNo, error) {
  console.error('Global error:', {
    message: msg,
    url: url,
    line: lineNo,
    column: columnNo,
    error: error
  })
  return false
}