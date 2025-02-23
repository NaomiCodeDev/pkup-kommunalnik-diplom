import React from 'react';
import { TextField, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { PersonOutline, LockOutlined } from '@mui/icons-material';
import Logo from '../components/Logo';

const Auth = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Background: left half white, right — #8CC83C */}
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
        <div style={{ flex: 1, backgroundColor: '#8CC83C' }} />
      </div>

      {/* Centered white container with rounded corners */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFFFFF',
          borderRadius: 30,
          display: 'flex',
          width: '1100px',
          minHeight: '350px',
          overflow: 'hidden',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left part – image (50% width) */}
        <div style={{ flex: 1 }}>
          <img
            src="/images/Auth-Image.png"
            alt="Auth"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right part – authorization form (50% width) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '70%', textAlign: 'left' }}>
            {/* Logo container */}
            <div style={{ marginBottom: '50px' }}>
              <Logo />
            </div>
            
            {/* Text container */}
            <div>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#213946', 
                  marginBottom: '10px', 
                  fontSize: '31px', 
                  fontWeight: 'bold',
                  display: 'block'
                }}
              >
                Здравствуйте!
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#64757E', 
                  fontSize: '25px', 
                  fontWeight: 'semiBold', 
                  marginTop: '35px',
                  marginBottom: '20px',
                  display: 'block'
                }}
              >
                Пожалуйста, войдите в систему.
              </Typography>
            </div>
          </div>

          <div style={{ width: '70%', marginTop: '40px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
              <PersonOutline sx={{ color: 'rgba(0, 0, 0, 0.42)', fontSize: '24px' }} />
              <TextField
                placeholder="Логин"
                variant="standard"
                size="small"
                fullWidth
                InputProps={{
                  style: { fontSize: '20px' }
                }}
                sx={{ 
                  marginLeft: '10px',
                  '& .MuiInput-root': {
                    '&:before': {
                      borderBottom: '1px solid #E0E0E0'
                    }
                  }
                }}
              />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
              <LockOutlined sx={{ color: 'rgba(0, 0, 0, 0.42)', fontSize: '24px' }} />
              <TextField
                placeholder="Пароль"
                type="password"
                variant="standard"
                size="small"
                fullWidth
                InputProps={{
                  style: { fontSize: '20px' }
                }}
                sx={{ 
                  marginLeft: '10px',
                  '& .MuiInput-root': {
                    '&:before': {
                      borderBottom: '1px solid #E0E0E0'
                    }
                  }
                }}
              />
            </div>
          </div>

          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            style={{ 
              borderRadius: '9999px', 
              height: '50px', 
              width: '70%', 
              backgroundColor: '#8CC83C', 
              fontSize: '20px', 
              fontWeight: '500', 
              color: '#ffffff', 
              textTransform: 'none' 
            }}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;