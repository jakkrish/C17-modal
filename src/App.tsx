import Modal from './components/Modal';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState('This is a demo text content')
  return (
    <>
      <Modal data={data}>Open Modal</Modal>
    </>
  );
}

export default App;
