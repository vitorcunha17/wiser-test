import styled from 'styled-components';
import { Button } from 'antd';
import colors from '../../helpers/defaultColors';
import screenSize from '../../helpers/screenSizes';

export const ButtonStyled = styled(Button)`
  width: 100%;
  font-size: 16px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px ${colors.lightPurple};
  border-radius: 8px;
  height: 48px;
  color: ${colors.white};
  border-color: transparent;

@media (max-width: ${screenSize.mobile}) {
  box-shadow: none;
  width: 60%;
}

&:hover {
  box-shadow: 0px 10px 25px ${colors.lightPurple};
  background: linear-gradient(0.79deg, #383E71 0%, #9D25B0 99.18%);
  color: ${colors.white}; 
}
`