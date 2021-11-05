import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import { createTheme, ThemeProvider } from '@mui/material';
// const HexCodePattern: RegExp = new RegExp('#[\w|\d]{6}');
// type HexColor = string & matchof HexCodePattern;
// agh does react support regex validated types?!KMflfj 
// it'd be cooler if they did 
interface ColorPalette {
  main: string;
  light: string;
  dark: string;
}
const primaryPalette: ColorPalette = {
  main: '#566fe4',
  light: 'rgba(255,98,101,0.97)',
  dark: '#00106b',
}
const secondaryPalette: ColorPalette = {
  main: '#a02899',
  dark: '#260879',
  light: '#c34e0d',
}
export const themeOptions  = {
  palette: {
    type: 'dark',
    primary: {
      main: '#566fe4',
      light: 'rgba(255,98,101,0.97)',
      dark: '#00106b',
    },
    secondary: {
      main: '#a02899',
      dark: '#260879',
      light: '#c34e0d',
    },
    background: {
      default: '#11004a',
      paper: '#3620ad',
    },
    text: {
      secondary: '#f3eded',
      disabled: 'rgba(193,73,73,0.5)',
      hint: '#00695c',
    },
    divider: '#7986cb',
    info: {
      main: '#11004a',
      light: '#11004a',
    },
  },
};

// const theme = createTheme({
//   palette: {
//       type: 'dark',
//       primary: {
//           main: '#566fe4',
//           light: 'rgba(255,98,101,0.97)',
//           dark: '#00106b',
//       },
//       secondary: {
//           main: '#a02899',
//           dark: '#260879',
//           light: '#c34e0d',
//       },
//       background: {
//           default: '#11004a',
//           paper: '#3620ad',
//       },
//       text: {
//           secondary: '#f3eded',
//           disabled: 'rgba(193,73,73,0.5)',
//           hint: '#00695c',
//       },
//       divider: '#7986cb',
//       info: {
//           main: '#11004a',
//           light: '#11004a',
//       },
//   },
// });


ReactDOM.render(
    <MoralisProvider
        appId={process.env.REACT_APP_MORALIS_APP_ID ?? ''}
        serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL ?? ''}
    >
      <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        
            <App />
        
    </MoralisProvider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
