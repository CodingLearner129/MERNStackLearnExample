import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

// Create a default theme if needed
const theme = createTheme();

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex !important',
        flexDirection: 'row !important',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(255, 119, 0, 1)', // for first
        // color: 'rgba(239, 92, 35, 1)', // for second
        // color: 'rgba(255, 120, 14, 1)', // for third
        // color: 'rgba(12, 239, 255, 1)', // for last
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse !important',
        },
    },
}));
