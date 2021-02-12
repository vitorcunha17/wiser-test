import React from 'react';
import { Row, Col, Form } from 'antd';
import { ImageLeft, StyledLogin, StyledLayout, Title, Subtitle, StyledCol, InputLabel, InputDefault, ButtonDefault, ForgotPassText, StyledLink } from './styles';

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
            <Title>Olá, seja <br /> bem-vindo!</Title>
            <Subtitle>Para acessar a plataborma, <br /> faça seu login.</Subtitle>
            <Form
              layout='vertical'
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className='mb-4'
            >
              <InputLabel>E-MAIL</InputLabel>
              <Form.Item
                name='email'
                rules={[{ required: true, message: 'Digite um e-mail válido;' }]}
              >
                <InputDefault type='text' />
              </Form.Item>
              <InputLabel>SENHA</InputLabel>
              <Form.Item
                name='password'
                rules={[{ required: true, message: 'Digite uma senha válida;' }]}
              >
                <InputDefault type='password' />
              </Form.Item>
              <ButtonDefault
                htmlType='submit'
              >
                ENTRAR
              </ButtonDefault>
            </Form>
            <ForgotPassText>
              Esqueceu seu login ou senha?
              <br />
              Clique <StyledLink href='#'>aqui</StyledLink>
            </ForgotPassText>
          </StyledLogin>
        </StyledCol>
      </Row>
    </StyledLayout>
  )
}

export default Login
