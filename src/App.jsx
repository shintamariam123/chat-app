
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
function App() {

  


  return (
    <>
       <div>
        <Routes>
          <Route path='/' element={<Join/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
        </Routes>
    </div>
    </>
  )
}

export default App
