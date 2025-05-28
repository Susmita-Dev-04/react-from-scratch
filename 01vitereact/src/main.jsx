import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
//import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement={
//   type: 'a',
//   props: {href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const AnotherElement=(
  <a href="https://google.com" target="_blank">Visit Google</a>
)
const anotheruser="Susmita Das"

const reactElement=React.createElement(
      'a',
      {href:'http://google.com',target:'_blank'},
      'click me to visit google',
      anotheruser
)

ReactDom.createRoot(document.getElementById('root')).render(
  /*
  <MyApp/>
    //MyApp()
  */
   reactElement
)
//each react use a bundler(Behind the scene magic krna)
