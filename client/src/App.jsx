import React from 'react'
// Import Bootstrap's CSS (if not done globally already)
import 'bootstrap/dist/css/bootstrap.min.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const App = () => {
  return (
    <div>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
    </div>
  )
}

export default App
