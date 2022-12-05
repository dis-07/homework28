import { useForm, Controller } from "react-hook-form";
import { useState ,useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';


const LoginForm = () => {

    const {loginUser} = useContext(AuthContext);
    const {isLoggedIn ,logOutUser} = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {handleSubmit, control, register,} = useForm();

    const onSubmit = (data) => {
        loginUser(data);
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
    <>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller 
            control={control} 
            name='username'
            defaultValue=''
            render={({field, fieldState: {error}}) => {
                return <TextField
                {...field}
                id="outlined-basic" 
                label="Username" 
                autoComplete="username"
                {...register('username', {required: 'Required'})}
                variant="outlined" 
                type='text'
                error={!!error?.username}
                helperText={error?.message}
                sx={{width: 488, mb: 6,}}
                />
                }}
                />
                <Controller 
                control={control} 
                name='password'
                defaultValue=''
                render={({field, fieldState: {error}}) => {
                    return <TextField 
                    {...field}
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type='password'
                    error={!!error?.password}
                    helperText={error?.message}
                    sx={{width: 488, mb: 12,}}
                    />
                }}
                />
                <Button
                variant="contained" 
                type='submit'
                sx={{width: 488,}}
                >
                    Login
                </Button>
                </form>
            </Box>
        </Modal>
        {isLoggedIn ? <Button type='button' onClick={logOutUser}>logOut</Button> : <Button onClick={handleOpen} type='button'>Login</Button>}
    </>
    )
}

export default LoginForm;