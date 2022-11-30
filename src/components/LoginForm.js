import { useForm, Controller } from "react-hook-form";
import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import AuthContext from "../context/auth/AuthContext";

const LoginForm = () => {

    const {loginUser} = useContext(AuthContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleChanchUser = ({target: {value}}) => {
        setUsername(value);
    }

    const handleChanchPassword = ({target: {value}}) => {
        setPassword(value)
    }

    const {handleSubmit, control, register, formState: {errors},} = useForm();

    const onSubmit = (data) => {
        loginUser({username, password});
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller 
            control={control} 
            name='username'
            defaultValue=''
            render={({field, fieldState: {error}}) => {
                return <TextField
                {...field}
                value={username}
                id="outlined-basic" 
                label="Username" 
                autoComplete="username"
                {...register('username', {required: 'Required'})}
                variant="outlined" 
                type='text'
                error={!!error?.username}
                helperText={error?.message}
                sx={{width: 488, mb: 6,}}
                onChange={handleChanchUser}
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
                value={password}
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                type='password'
                error={!!error?.password}
                helperText={error?.message}
                sx={{width: 488, mb: 12,}}
                onChange={handleChanchPassword}
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
    )
}

export default LoginForm;