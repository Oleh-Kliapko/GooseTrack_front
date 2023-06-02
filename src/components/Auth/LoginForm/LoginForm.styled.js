import styled from "@emotion/styled";

// add import of 3 breakpoints
// add import of colors
// check main font size and line height and delete doubling
// check using font family

export const StyledForm = styled.form`
    box-sizing: border-box;
    width: 100%;
    min-height: 346px;
    margin: auto 20px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => (theme.colors.white)};
    border-radius: 8px;

    @media screen and (min-width: 375px){
        width: 335px;
    }

    @media screen and (min-width: 768px){
        width: 480px;
        min-height: 424px;
        padding: 40px;
    }
`;

export const StyledHeading = styled.h2`
    margin-bottom: 8px;
    color: ${({theme}) => (theme.colors.accent)};
    font-family: 'Inter';
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-shadow: ${({theme}) => (theme.shadows.authHeading)};

    @media screen and (min-width: 768px) {
        margin-bottom: 22px;
        font-size: 24px;  
    }
`;

export const StyledIcon = styled.div`
    margin-left: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const StyledButton = styled.button`
    height: 46px;
    margin-top: 32px;
    background-color: ${({theme}) => (theme.colors.accent)};
    color: ${({theme}) => (theme.colors.white)};
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    box-shadow: ${({theme}) => (theme.shadows.authButton)};
    border-radius: 16px;
    border-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
    
    :hover {
        background-color: ${({theme}) => (theme.colors.hovered)};
    }

    @media screen and (min-width: 768px) {
        height: 56px;
        margin-top: 48px;
        font-size: 18px;
        line-height: 24px;
    }
`;