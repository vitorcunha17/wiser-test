import React from 'react'
import { ButtonStyled } from './styles'
import { LoadingOutlined } from '@ant-design/icons';

interface ButtonProps {
  typeButton?: 'primary' | 'secondary';
  size?: 'small'
  onClick?: () => void;
  loading?: boolean;
  htmlType?: 'submit';
}

const DefaultButton: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled {...props}>
      {props.loading === true &&
        <LoadingOutlined />
      }
      {props.children}
    </ButtonStyled>
  )
}

export default DefaultButton;