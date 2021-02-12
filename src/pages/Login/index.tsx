import React from 'react';
import { Row, Col, Form } from 'antd';
import DefaultButton from 'components/DefaultButton';
import DefaultInput from 'components/DefaultInput';
import LabelInput from 'components/LabelInput';
import {
  ImageLeft,
  StyledLogin,
  StyledLayout,
  Title,
  Subtitle,
  StyledCol,
  ForgotPassText,
  StyledLink,
  MobileCard,
  AlignButton
} from './styles';

const Login = ({ dispatch, user }) => {
  const onFinish = values => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <StyledLayout>
      <Row>
        <Col xs={24} sm={24} md={10} lg={13}>
          <ImageLeft />
        </Col>
        <StyledCol xs={24} sm={24} md={14} lg={11}>
          <StyledLogin>
            <MobileCard>
              <Title>Olá, seja <br /> bem-vindo!</Title>
              <Subtitle>Para acessar a plataforma, <br /> faça seu login.</Subtitle>
              <Form
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <LabelInput>E-MAIL</LabelInput>
                <Form.Item
                  hasFeedback
                  name='email'
                  rules={[{ required: true, message: 'Digite um e-mail válido;' }]}
                >
                  <DefaultInput type='text' placeholder='user.name@mail.com' />
                </Form.Item>
                <LabelInput>SENHA</LabelInput>
                <Form.Item
                  hasFeedback
                  name='password'
                  rules={[{ required: true, message: 'Digite uma senha válida;' }]}
                >
                  <DefaultInput type='password' placeholder='*******' />
                </Form.Item>
                <AlignButton>
                  <DefaultButton htmlType='submit'>ENTRAR</DefaultButton>
                </AlignButton>
              </Form>
            </MobileCard>
            <ForgotPassText>
              Esqueceu seu login ou senha?<br />Clique <StyledLink href='#'>aqui</StyledLink>
            </ForgotPassText>
          </StyledLogin>
        </StyledCol>
      </Row>
    </StyledLayout>
  )
}

export default Login
