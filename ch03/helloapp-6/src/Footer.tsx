import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

type FooterPropsType = {
    theme: string;
}

const Footer = (p1: FooterPropsType) => {
    const theme = {
        main: "green",
    }

    const FooterBox = styled.div`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: ${(p2) => (p2.theme === 'basic' ? 'skyblue' : 'yellow')};
        text-align: center;
    `;
    return (
        <ThemeProvider theme={{theme}}>
            <FooterBox>
                React styled-components Test
            </FooterBox>
        </ThemeProvider>
    );
};

export default Footer;