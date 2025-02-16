import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

// Create a default theme if needed
const theme = createTheme();

export default makeStyles(() => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        borderRadius: "15px !important"
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: "10px !important",
        borderRadius: "8px !important"
    },
}));
