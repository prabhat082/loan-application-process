import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PersonalDetails = (props) => {
  const { user } = props;
const { register, handleSubmit, errors } = useForm({
  defaultValues: {
    first_name: user.first_name,
    last_name: user.last_name,
    age: user.age,
    mobile_no: user.mobile_no,
    email: user.email
  }
});

  const onSubmit = (data) => {
    console.log(data);
    props.updateUser(data);
    props.history.push('/second');

  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
      className="col-md-6 offset-md-3"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
    >
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            ref={register({
              required: 'First name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First name should contain only characters.'
              }
            })}
            className={`${errors.first_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            ref={register({
              required: 'Last name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last name should contain only characters.'
              }
            })}
            className={`${errors.last_name ? 'input-error' : ''}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="Age"
            placeholder="Enter your Age"
            autoComplete="off"
            ref={register({
              required: 'Age is required.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Age should contain only numbers.'
              }
            })}
            className={`${errors.Age ? 'input-error' : ''}`}
          />
          {errors.Age && (
            <p className="errorMsg">{errors.age.message}</p>
          )}
        </Form.Group>
        
        <Form.Group controlId="mobile_no">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            name="Mobile_no"
            placeholder="Enter your Mobile number"
            autoComplete="off"
            ref={register({
              required: 'Mobile number is required.',
              pattern: {
                value: /^[0-9]+$/
              }
            })}
            className={`${errors.Age ? 'input-error' : ''}`}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>
    
        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default PersonalDetails;