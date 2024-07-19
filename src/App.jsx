import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authServices from './services/authentication'
import { login, logout } from './Store/authSlice'

function App() {
  const [loading,setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser().then((userData) => {
      userData? dispatch(login(userData)):dispatch(logout(),alert(`Failed to fetch your data: ${userData}, Plz relogin or Create new user`));
  }).finally(setLoading(false))}, [loading])
  

  return !loading ? (
    <div className="App min-h-sc">
      <header className="App-header">
        <h1>React Redux Toolkit Authentication</h1>
      </header>
    </div>
  ) : (
    <div>something went Wrong </div>
  )
}

export default App
