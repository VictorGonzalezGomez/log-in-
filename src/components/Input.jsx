import React from 'react';
import CustomButton from "./Button";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const InputUser = (props) => {

  return (
    <Form className='customForm '>
      <Form.Group  className='mb-3 ' controlId='formHorizontalEmail'>
        <Form.Label >Nombre de usuario</Form.Label>
        <Form.Control type='text' placeholder='Ingrese nombre de usuario' onChange={(e) => props.setUser(e.target.value)}/>
      </Form.Group >

      <Form.Group  className='mb-3' controlId='formHorizontalPassword'>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type='password' name='password' placeholder='Ingrese contraseña' onChange={(e) => props.setPassword(e.target.value)}/>
      </Form.Group>

      {props.user && props.password !=='' ? (props.password === '252525' &&  <CustomButton/> ): <Alert key='danger' variant='danger' className='text-center'>Todos los campos son requeridos</Alert>}

    </Form>
    )
}

export default InputUser