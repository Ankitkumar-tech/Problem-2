import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulating authentication
    if (username === "user" && password === "password") {
      setLoggedIn(true);
      alert("Login sucessful");
    } else {
      // Handle incorrect credentials
      console.log("Incorrect username or password");
    }
  };

  return (
    <Container maxWidth="sm">
      <div>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
        >
          Login
        </Button>
      </div>
    </Container>
  );
};

export default Login;
