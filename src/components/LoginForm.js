import { useForm, Controller } from 'react-hook-form';
import { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const LoginForm = ({ handleCloseForm }) => {
  const { loginUser } = useContext(AuthContext);

  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
    handleCloseForm();
  };

  return (
    <>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name='username'
          defaultValue=''
          render={({ field, fieldState: { error } }) => {
            return (
              <TextField
                {...field}
                id='outlined-basic'
                label='Username'
                autoComplete='username'
                {...register('username', { required: 'Required' })}
                variant='outlined'
                type='text'
                error={!!error?.username}
                helperText={error?.message}
                sx={{ width: 488, mb: 6 }}
              />
            );
          }}
        />
        <Controller
          control={control}
          name='password'
          defaultValue=''
          render={({ field, fieldState: { error } }) => {
            return (
              <TextField
                {...field}
                id='outlined-basic'
                label='Password'
                variant='outlined'
                type='password'
                error={!!error?.password}
                helperText={error?.message}
                sx={{ width: 488, mb: 12 }}
              />
            );
          }}
        />
        <Button
          variant='contained'
          type='submit'
          sx={{ width: 488 }}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
