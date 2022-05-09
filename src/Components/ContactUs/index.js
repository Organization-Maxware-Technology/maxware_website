import React from 'react'
import Helmet from 'react-helmet';
import { Fade } from 'react-reveal';
import { 
    Container,
     Form,
      FormButton, 
      FormContent, 
      FormH1, 
      FormInput,
       FormLabel,
        FormWrap,
         Icon } from './ContactUsElements'

const ContactUs = () => {
    
    return (
    <>
        <Helmet bodyAttributes={{style: 'background-color : #ff725e'}}/>
        <Container>
        <Fade >
            <FormWrap>
                <Icon to='/' >Maxware Technology</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Get in touch</FormH1>
                        <FormLabel htmlFor='for'> UserName*</FormLabel>
                        <FormInput type='text' required/>
                        <FormLabel htmlFor='for'> Email*</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'> Message*</FormLabel>
                        <textarea rows="3" columns="8"/><br/>
                        <FormButton type='submit'>Contact</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Fade >
        </Container>

    </>
  )
}

export default ContactUs