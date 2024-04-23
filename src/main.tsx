import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages'
import {MantineProvider} from "@mantine/core";
import './index.css'
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider>
        <Home />
      </MantineProvider>
  </React.StrictMode>,
)
