import React from 'react';
import './App.css';
import Data from "./Data"
import ErrorBoundary from './ErrorBoundary'


const App = () => {
  return(
    <ErrorBoundary>
      <Data/>
    </ErrorBoundary>
  )
}
export default App;
