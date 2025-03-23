import './App.css';
import { Outlet } from 'react-router';
import SearchBar from './Components/SearchBar/SearchBar';
import { useState } from 'react';
import LoginButton from './Components/Login/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import "./styles/global.css";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  console.log({isAuthenticated})


  return <div className="App">
    {
      isAuthenticated ?
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <LoginButton />
        </div>
        :
        <>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          <Outlet />
        </>
    }
  </div>
}

export default App;
