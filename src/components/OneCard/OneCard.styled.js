import styled from 'styled-components';
import picture from '../../images/picture.svg';

export const Card = styled.div`
    position: relative;
    height: 460px;
    width: 380px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    background-image: url(${picture}),
        linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            );
        background-repeat: no-repeat;
        background-size: 308px 168px, cover;
        background-position-x: center;
        background-position-y: 28px, center;
    //! HorizontalLine
    ::before {
        content: '';
        position: absolute;
            top: 214px;
            left: 0;
        width: 100%;
        height: 8px;
        background: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
            inset 0px -1.71846px 3.43693px #ae7be3, 
            inset 0px 3.43693px 2.5777px #fbf8ff;
    }
    //! RoundFrameAvatar
    ::after {
    content: '';
    height: 62px;
    width: 62px;
    position: absolute;
    top: 187px;
    border-radius: 50%;
    background: linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            );
    box-shadow: 0px 4.39163px 4.39163px -4px rgb(0 0 0 / 6%), 
        0px 0px 10px 2px #ae7be3, 
        0px 0px 0px 8px #fbf8ff;
    }
`;

export const Logo = styled.img`
    position: absolute;
        top: 20px;
        left: 20px;
`;

//! Not used
export const RoundFrameAvatar = styled.div`
    position: absolute;
    top: 178px;
    z-index: 99;
`;

export const Avatar = styled.img`
    position: absolute;
    top: 188px;
    z-index: 77;
    border-radius: 50%;
    /* background: linear-gradient(
            114.99deg, 
            #471CA9 -0.99%, 
            #5736A3 54.28%, 
            #4B2A99 78.99%
            ); */
`;

export const Tweets = styled.p`
    margin-top: 284px;
`;

export const Followers = styled.p`
    margin-top: 16px;
`;


