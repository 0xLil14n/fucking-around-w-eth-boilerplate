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
            enableWeb3();
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            enableWeb3();
        }
    }, [isAuthenticated]);
    const isLoading = isAuthenticating || isWeb3EnableLoading;
    const isLoggedIn = isWeb3Enabled;
    return (
        <StyledHeader>
            <Button disabled={isAuthenticating} onClick={signInOrSignOut}>
                {isLoading ? 'Loading...' : isLoggedIn ? 'Sign Out' : 'Sign In'}
            </Button>
        </StyledHeader>
    );
};

const StyledHeader = styled.div``;
const StyledButton = styled.button``;
