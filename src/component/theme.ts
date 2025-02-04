// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
        primary: {
            main: '#3D3D3D', // Dark Grey (Primary)
            light: '#5C5C5C', // Medium Grey
            dark: '#2B2B2B', // Near Black
            contrastText: '#FFFFFF', // White text for readability
          },
          secondary: {
            main: '#D6D6D6', // Light Grey (Secondary)
            light: '#E8E8E8', // Smoke White
            dark: '#B0B0B0', // Darker Grey
            contrastText: '#000000', // Black text for readability
          },
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
	}
});

export default theme;