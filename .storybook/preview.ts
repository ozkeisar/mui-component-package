import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// export default preview;

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
// import { lightTheme, darkTheme } from '../src/themes.js';
import { createTheme } from '@mui/material/styles';

/* snipped for brevity */
const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
  },
  typography:{
    h1: {
      fontSize:'10px'
    }
  }
});

 
export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
