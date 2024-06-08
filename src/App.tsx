import './App.css'
import Auth from './componenets/auth';
import Cart from './componenets/cart';
import useUsers from './hooks/useUsers'

function App() {
  const { users, error, isLoading } = useUsers();

  {isLoading && <p>Loading...</p>}

  if (error)
    return (<p>{error}</p>)

  return (
    <>
    <Auth />
    <Cart />
    <ul>
      {users.map((user, index) => <li key={index}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default App
