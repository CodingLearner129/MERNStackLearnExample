import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

// Create a default theme if needed
const theme = createTheme();

export default makeStyles(() => ({
    ul: {
        justifyContent: 'space-around',
    }
}));
