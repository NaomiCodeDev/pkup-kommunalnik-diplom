// src/theme.js
import { createTheme } from '@mui/material/styles';

// Импорт необходимых весов шрифта Exo 2
import "@fontsource/exo-2"; // Defaults to weight 400
import "@fontsource/exo-2/400.css"; // Specify weight
import "@fontsource/exo-2/400-italic.css"; // Specify weight and style

const theme = createTheme({
  typography: {
    // Глобально устанавливаем шрифт Exo 2 для всего проекта
    fontFamily: "'Exo 2', sans-serif",
  },
  // Настроим цвет выделения
  palette: {
    primary: {
      main: '#8CC83C',
    },
  },
  // Настройка стилей выделения
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Цвет текста при выделении
          '::selection': {
            backgroundColor: '#8CC83C',
            color: '#fff', // Можно изменить цвет текста при выделении
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '20px', // Устанавливаем размер текста в инпуте
        },
      },
    },
  },
});

export default theme;
