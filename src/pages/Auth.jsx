import React from 'react';
import { TextField, Button } from '@mui/material';

const Auth = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Фон: левая половина белая, правая — #8CC83C */}
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
        <div style={{ flex: 1, backgroundColor: '#8CC83C' }} />
      </div>

      {/* Центрированный белый контейнер с закруглёнными углами */}
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
        {/* Левая часть – изображение (50% ширины) */}
        <div style={{ flex: 1 }}>
          <img
            src="/images/Auth-Image.png"
            alt="Auth"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Правая часть – форма авторизации (50% ширины) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '80%', textAlign: 'left', marginBottom: '40px' }}>
            <h2 style={{ color: '#213946', marginBottom: '10px', fontSize: '31px' }}>
              Здравствуйте!
            </h2>
            <p style={{ color: '#64757E', fontSize: '25px' }}>
              Пожалуйста, войдите в систему.
            </p>
          </div>

          <TextField
            label="Логин"
            variant="outlined"
            size="small"
            fullWidth
            style={{ marginBottom: '30px', height: '40px', width: '80%' }}
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            style={{ marginBottom: '30px', height: '40px', width: '80%' }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            style={{ borderRadius: '9999px', height: '40px', width: '80%' }}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
