import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login";
import { LogoutButton } from "./components/Logout";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <Navbar />
            <Products />
            <LogoutButton></LogoutButton>
          </>
        ) : (
          <LoginButton></LoginButton>
        )}
      </header>
    </div>
  );
}

export default App;
