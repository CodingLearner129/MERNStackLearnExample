import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

// Create a default theme if needed
const theme = createTheme();

export default makeStyles(() => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));
