import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, InputAdornment, Icon } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
    return (
        <>
            <Grid size={{ xs: 12, sm: (half ? 6 : 12) }}>
                <TextField
                    name={name}
                    onChange={handleChange}
                    variant='outlined'
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    slotProps={{
                        input: name === 'password' ? {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Icon onClick={handleShowPassword}>
                                        {type === 'password' ? <Visibility /> : <VisibilityOff />}
                                    </Icon>
                                </InputAdornment>
                            ),
                        } : null
                    }}
                />
            </Grid>
        </>
    )
}

export default Input;
