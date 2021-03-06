import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          BPK SHOP
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

  class Change extends React.Component{
    render(){
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Change Password
              </Typography>
              <Box component="form"  noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="old password"
                  label="Old Password"
                  name="old password"
                //   value={this.state.password}
                  onChange={this.onChange}
                  autoComplete="new password"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="new password"
                  label="New Password"
                  name="new password"
                //   value={this.state.password}
                  onChange={this.onChange}
                  autoComplete="new password"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name=" confirm password"
                  label="Confirm Password"
                  type="confirm password"
                  id=" confirm password"
                  autoComplete="confirm-password"
                //   value={this.state.password}
                  onChange={this.onChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  href="/Dashboard"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                //   onSubmit={this.handleSubmit()}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
    }
}

export default Change;