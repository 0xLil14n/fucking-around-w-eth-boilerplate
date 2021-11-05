import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';
import { Button } from '@mui/material';

export const Header = () => {
    const { isWeb3Enabled, isAuthenticated, enableWeb3, authenticate, logout, isAuthenticating, isWeb3EnableLoading } =
        useMoralis();

    const enableAndAuthenticate = async () => {
        await enableWeb3();
        await authenticate();
    };
    const signInOrSignOut = () => {
        if (isWeb3Enabled) {
            enableAndAuthenticate();
        } else {
            logout();
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            enableWeb3();
        }
    }, [isAuthenticated]);
    const isLoading = isAuthenticating || isWeb3EnableLoading;
    const isLoggedIn = isAuthenticated;
    return (
        <StyledHeader>
            <Button variant="outlined" disabled={isAuthenticating} onClick={signInOrSignOut}>
                {isLoading ? 'Loading...' : isLoggedIn ? 'Disconnect' : 'Connect and Log In'}
            </Button>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    padding: 10px;
`;
const StyledButton = styled.button``;
