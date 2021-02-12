import styled from 'styled-components';
import img from '../../assets/images/bg-image.png';
import { Layout, Col, Input } from 'antd';
import colors from '../../helpers/defaultColors';
import screenSize from '../../helpers/screenSizes';

const windowHeight = window.innerHeight

export const ImageLeft = styled.div`
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(${img});
  width: 100%;
  height: ${windowHeight}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  @media (max-width: ${screenSize.tablet}) {
    background-position-x: center;
    display: none;
  }
`

export const StyledLogin = styled.div`
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;

  @media (max-width: ${screenSize.tablet}) {
    width: 100%;
  }

  @media (max-width: ${screenSize.mobile}) {
    padding-top: 20%;
    padding-right: 8%;
    padding-left: 8%;
  }
`

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;

  @media (max-width: ${screenSize.mobile}) {
    background-image: linear-gradient(0deg, #130525 42%, rgba(105, 57, 153, 0) 100%), url(${img});
    background-size: contain;
    background-repeat: no-repeat;
    height: ${windowHeight}px;
  }
`

export const StyledLayout = styled(Layout)`
  background-color: ${colors.white};
  font-family: 'Montserrat';
`

export const Title = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: ${colors.purple};

  @media (max-width: ${screenSize.mobile}) {
    text-align: center;
    font-size: 24px;
  }
`

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.lightBlue};

  @media (max-width: ${screenSize.mobile}) {
    text-align: center;
    font-size: 12px;

    br {
      display: none;
    }
  }
`

export const ForgotPassText = styled.p`
  text-align: center;
  color: ${colors.lightBlue};
  margin-top: 7.5rem;
  font-size: 14px;

  @media (max-width: ${screenSize.mobile}) {
    color: ${colors.white};
    margin-top: 3rem;
  }
`

export const StyledLink = styled.a`
  color: ${colors.darkPurple};
  text-decoration: underline;

  @media (max-width: ${screenSize.mobile}) {
    color: ${colors.white};
  }
`

export const AlignButton = styled.div`
  text-align: center;
`

export const MobileCard = styled.div`
  width: 100%;
  height: 23.4rem;
  background-color: ${colors.white};
  border-radius: 8px;

  @media (max-width: ${screenSize.mobile}) {
    display: inline-block;
    padding: 2rem;
  }
`