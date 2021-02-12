import styled from 'styled-components';
import img from '../../assets/images/bg-image.png';
import { Layout, Col, Input, Button } from 'antd';
import colors from '../../helpers/defaultColors';

const windowHeight = window.innerHeight

export const ImageLeft = styled.div`
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(${img});
  width: 100%;
  height: ${windowHeight}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  @media (max-width: 767px) {
    background-position-x: center;
    display: none;
  }
`

export const StyledLogin = styled.div`
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    padding-top: 15%;
    padding-right: 10%;
    padding-left: 10%;
  }
`

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`

export const StyledLayout = styled(Layout)`
  background-color: ${colors.white};
  font-family: 'Montserrat';
`

export const Title = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: ${colors.purple};
`

export const Subtitle = styled.p`
  font-size: 19px;
  font-weight: 400;
  color: ${colors.lightBlue};
`

export const InputDefault = styled(Input)`
  background-color: ${colors.transparent};
  border-radius: 8px;
  border: 1px solid ${colors.lightGrey};
  height: 48px;
  width: 100%;
`

export const InputLabel = styled.span`
  color: ${colors.darkBlue};
  font-size: 12px;
  margin-bottom: 100px;
`

export const ButtonDefault = styled(Button)`
  width: 100%;
  font-size: 16px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px ${colors.lightPurple};
  border-radius: 8px;
  height: 48px;
  color: ${colors.white};

  &:hover {
    box-shadow: 0px 10px 25px ${colors.lightPurple};
    background: linear-gradient(0.79deg, #383E71 0%, #9D25B0 99.18%);
    color: ${colors.white}; 
  }
`

export const ForgotPassText = styled.p`
  text-align: center;
  color: ${colors.lightBlue};
  margin-top: 1.5rem;
`

export const StyledLink = styled.a`
  color: ${colors.darkPurple};
`