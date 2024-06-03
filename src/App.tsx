import './App.css'
import useUsers from './hooks/useUsers'

function App() {
  const { users, error, isLoading } = useUsers();

  {isLoading && <p>Loading...</p>}

  if (error)
    return (<p>{error}</p>)

  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  )
}

export default App
