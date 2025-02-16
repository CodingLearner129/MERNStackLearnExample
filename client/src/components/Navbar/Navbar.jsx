import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import useStyles from './styles';
import memories from "./../../assets/images/memories.png";
import { LOGOUT } from '../../constants/actionTypes';
import { decryptData } from '../../helpers/ecrypt_decrypt';

const Navbar = () => {
    const classes = useStyles(); // useStyles hook for styling
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [user, setUser] = useState(localStorage.getItem('profile') ? JSON.parse(decryptData(localStorage.getItem('profile'))) : null);
    const logout = () => {
        dispatch({ type: LOGOUT });
        navigate('/auth');
        setUser(null);        
    }
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = jwtDecode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(localStorage.getItem('profile') ? JSON.parse(decryptData(localStorage.getItem('profile'))) : null);
    }, [location]);
    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
                        Memories
                    </Typography>
                    <Typography component={Link} to="/" className={classes.heading} align="center" >
                        <img className={classes.image} src={memories} alt="memories" height="60" />
                    </Typography>
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.image}>{user.result.name.charAt(0)}</Avatar>
                            {/* <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar> */}
                            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                            <Button variant='contained' className={classes.logout} color='error' onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
