import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Auth from "./componenets/Auth";
import Cart from "./componenets/Cart";
import useUsers from "./hooks/useUsers";
import { CssBaseline, List, ListItem } from "@mui/material";
import MyGrid from "./componenets/MyGrid";
import MyCard from "./componenets/MyCard";
import MyTextField from "./componenets/MyTextField";
import MyDialog from "./componenets/MyDialog";
import MyProducts from "./componenets/MyProducts";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const { users, error, isLoading } = useUsers();
  {isLoading && <p>Loading...</p>;}

  if (error) return <p>{error}</p>;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <MyGrid />
          <MyCard />
          <MyTextField />
          <MyDialog />
          <MyProducts />
          <Auth />
          <Cart />
          <List>
            {users.map((user, index) => (
              <ListItem key={index}>{user.name}</ListItem>
            ))}
          </List>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
