import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import { LightModeProvider } from './components/lightModeContext';

export default function App() {
  return (
    <div className="App">
      <LightModeProvider>
        <Calculator />
      </LightModeProvider>
    </div>
  );
}
