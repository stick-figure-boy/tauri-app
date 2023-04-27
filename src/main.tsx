import React from 'react'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import reportWebVitals from './reportWebVitals'
import { RouterConfig } from './RouteConfig'

// import '@/index.css'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <RouterConfig />
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
