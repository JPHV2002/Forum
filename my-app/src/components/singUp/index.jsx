import React from 'react'

import { Card, Form, FormGroup, Button} from 'react-bootstrap'
import { useRef } from 'react'

export const SingUp = () => {
    
    const emailRef = useRef();
    const pswRef = useRef();
    const pswcRef = useRef(); 
  
    return (
        <Card>
            <Card.Body>
                <h2 className='text-center mb-3'>Sing Up</h2>
                <Form>
                    <FormGroup className='text-center mb-3' controlId='Email'>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type='email' ref={emailRef}/>
                    </FormGroup>
                    <FormGroup className='text-center mb-3' controlId='Password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={pswRef}/>
                    </FormGroup>
                    <FormGroup className='text-center mb-3' controlId='PasswordConfirm'>
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type='password' ref={pswcRef}/>
                    </FormGroup>
                    <Button className='w-100' type='submit'>Sing up</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

