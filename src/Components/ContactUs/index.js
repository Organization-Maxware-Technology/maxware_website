import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './ContactUsElements'

const ContactUs = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/' >Maxware</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Get in touch</FormH1>
                        <FormLabel htmlFor='for'> UserName*</FormLabel>
                        <FormInput type='text' required/>
                        <FormLabel htmlFor='for'> Email*</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'> Message*</FormLabel>
                        <FormInput type='text' required/>
                        <FormButton type='submit'>Contact</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

    </>
  )
}

export default ContactUs