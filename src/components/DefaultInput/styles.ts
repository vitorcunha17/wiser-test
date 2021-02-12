import styled from 'styled-components';
import { Input } from 'antd';
import colors from '../../helpers/defaultColors';

export const InputStyle = styled(Input)`
  background-color: ${colors.transparent};
  border-radius: 8px;
  border: 1px solid ${colors.lightGrey};
  height: 48px;
  width: 100%;
`