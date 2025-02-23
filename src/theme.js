// src/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito'; // Импортируем шрифт Nunito

const theme = createTheme({
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
});

export default theme;