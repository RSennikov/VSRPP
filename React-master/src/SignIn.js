import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    };

  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
}

onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}
handleButtonClick() {
  this.props.history.push('/main');
}

  render() {
    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    const classes = useStyles;
    const { email, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              type="text"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              autoFocus
            />
            <TextField
              variant="outlined"
              type="text"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password} 
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleButtonClick.bind(this)}
            >
              
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );

  }
}
export default SignIn