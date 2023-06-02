import styled from "@emotion/styled";

// add import of 3 breakpoints
// add import of colors: #FFFFFF #3E85F3 #111111 #DCE3E5 rgba(220, 227, 229, 0.6) shadow ones
// check main font size and line height and delete doubling
// check using font family


//delete before pull
export const TesterDiv = styled.div`
    background-color: #DCEBF7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;
//

export const StyledForm = styled.form`
    width: 100%;
    margin: auto 20px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 8px;

    @media screen and (min-width: 375px){
        width: 335px;
    }

    @media screen and (min-width: 768px){
        width: 480px;
        padding: 40px;
    }
`;

export const StyledHeading = styled.h2`
    margin-bottom: 8px;
    color: #3E85F3;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
        margin-bottom: 22px;
        font-size: 24px;  
    }
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.label`
    margin-top: 24px;
    color: ${(props) => {
        switch (props.valid) {
            case true:
                return '#3CBC81';
            case false:
                return '#E74A3B';
            default:
                return '#111111'
        }           
    }};
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    @media screen and (min-width: 768px) {
        margin-top: 18px;
        font-size: 14px;
        line-height: 17px; 
    }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    height: 46px;
    padding: 14px;
    margin-top: 8px;
    background-color: #FFFFFF;
    color: #111111;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid;
    border-color: ${(props) => {
        switch (props.valid) {
            case true:
                return '#3CBC81';
            case false:
                return '#E74A3B';
            default:
                return 'rgba(220, 227, 229, 0.6)'
        }           
    }};
    border-radius: 8px;

    ::placeholder {
        color: #DCE3E5;    
    }
    :focus {
        border: 1px solid #111111;
    }

    @media screen and (min-width: 768px) {
        height: 54px;
        padding: 18px;
        font-size: 16px;
        line-height: 18px;
    }
`;

export const StyledIcon = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 12px;
    position: absolute;
    bottom: 13px;
    right: 0;

`;

export const StyledInputNotification = styled.p`
    position: absolute;
    bottom: -22px;
    margin: 0 18px;
    position: absolute;
    font-size: 12px;
    line-height: 14px;
    color: #E74A3B;

`;

export const StyledButton = styled.button`
    height: 46px;
    margin-top: 32px;
    background: #3E85F3;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 16px;
    border-width: 0;

    @media screen and (min-width: 768px) {
        height: 56px;
        margin-top: 48px;
        font-size: 18px;
        line-height: 24px;
    }
`;