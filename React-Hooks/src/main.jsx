import React from 'react'
import ReactDOM from 'react-dom/client'
// // import UseState from './UseState.jsx'
// import UseEffect from './UseEffect.jsx'
import './index.css'
// import UseRefComponent from './UseRef.jsx'
import UseMemoComponent from './UseMemo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Counter Program */}
    {/* <UseState/>  */}
    {/* <UseEffect/> */}
    {/* <UseRefComponent/> */}
    <UseMemoComponent/>
  </React.StrictMode>
)
