/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';

import { useContext, useState } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';

import LoginForm from '../components/LoginForm';

const Header = () => {
  const { isLoggedIn, userInfo, logOutUser } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <header className='header'>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to='/'
      >
        Home
      </NavLink>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink
              to='users'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Users
            </NavLink>
          </li>
          <li className='li'>
            <NavLink
              to='hotels'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Hotels
            </NavLink>
          </li>
          <li className='li'>
            {isLoggedIn ? (
              <Button
                type='button'
                onClick={logOutUser}
              >
                logOut
              </Button>
            ) : (
              <Button
                onClick={handleOpen}
                type='button'
              >
                Login
              </Button>
            )}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <LoginForm handleCloseForm={handleClose} />
              </Box>
            </Modal>
          </li>
          {isLoggedIn ? (
            <li className='li'>
              {
                <img
                  alt='#'
                  className='image'
                  src={userInfo.image}
                />
              }
            </li>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
