import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
function App() {
    const theme = useTheme();

    return (
        <StyledApp>
            <Header />
        </StyledApp>
    );
}
const StyledApp = styled.div`
    background-color: #11004a;
`;

export default App;
