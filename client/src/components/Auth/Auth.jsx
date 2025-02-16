import { Avatar, Button, Paper, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Lock, Password } from '@mui/icons-material';
import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import config from '../../config/config';
import { AUTH } from '../../constants/actionTypes';
import { signIn, signUp } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', conformPassword: '' };

const Auth = () => {
    const classes = useStyles(); // useStyles hook for styling
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signUp(formData, navigate));
        } else {
            dispatch(signIn(formData, navigate));
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        // handleShowPassword(false);
    }
    const googleSuccess = async (res) => {
        // console.log("success", res);
        // console.log(jwtDecode(token));
        const token = res?.credential;
        const result = jwtDecode(token);
        // console.log({ result, token });
        try {
            dispatch({ type: AUTH, payload: { result, token } });
            navigate('/');
        } catch (error) {
            console.log("error", error);
        }

    }
    const googleFailure = (error) => {
        console.log("error", error);
        console.log('Google Sign In was unsuccessful. Try Again Later');
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <Lock />
                    </Avatar>
                    <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half></Input>
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"></Input>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}></Input>
                            {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"></Input>}
                        </Grid>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleOAuthProvider clientId={config.googleClientId}>
                            <GoogleLogin
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                render={(renderProps) => (
                                    <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>Google Sign In</Button>
                                )}
                            />
                        </GoogleOAuthProvider>
                        <Grid container justifyContent="flex-end">
                            <Grid>
                                <Button onClick={switchMode}>
                                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default Auth;
