import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
      </div>
      <div>
        <Button variant="outlined">Log In</Button>
      </div>
    </Box>
      </header>
      
    </div>
  );
}

export default App;
