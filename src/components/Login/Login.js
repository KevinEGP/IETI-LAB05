import './Login.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login() {
    return(
      <Card
        className="Card-container"
        sx={{ minWidth: 275,
                  boxShadow: 10,
                }}>
        <CardContent>
          <h2>Welcome</h2>
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
              id="email"
              label="Email"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
          </div>
          <div>
            <Button 
              className="Login-button"
              variant="outlined">Log In</Button>
          </div>
      </Box>

        </CardContent>
      </Card>
    )
}

export default Login;