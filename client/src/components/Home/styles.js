import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

// Create a default theme if needed
const theme = createTheme();

export default makeStyles(() => ({
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
        borderRadius: "15px !important"
    },
    pagination: {
        borderRadius: 4,
        marginTop: '1rem',
        padding: '16px',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    searchButton: {
        marginBottom: "6px !important",
        borderRadius: "8px !important"
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse !important',
        },
    },
}));
