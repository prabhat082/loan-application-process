import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const BusinessDetails = (props) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      Business_name: user.Business_name,
      GST_no: user.GST_no,
      Address: user.Address
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    props.updateUser(data);
    props.history.push('/third');
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
      <Form.Group controlId="Business_name">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            type="text"
            name="Business_name"
            placeholder="Enter your Business name"
            autoComplete="off"
            ref={register({
              required: 'Business name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Business name should contain only characters.'
              }
            })}
            className={`${errors.Business_name ? 'input-error' : ''}`}
          />
          {errors.Business_name && (
            <p className="errorMsg">{errors.Business_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="GST_no">
          <Form.Label>GST Number</Form.Label>
          <Form.Control
            type="text"
            name="GST"
            placeholder="Enter your GST no"
            autoComplete="off"
            ref={register({
              required: 'GST is required.',
              pattern: {
                value: /^[0-9A-Z]+$/,
                message: 'GST should contain 15 characters.'
              }
            })}
            className={`${errors.GST_no ? 'input-error' : ''}`}
          />
          {errors.Age && (
            <p className="errorMsg">{errors.GST_no.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="Address"
            placeholder="Enter your Address"
            autoComplete="off"
            ref={register({
              required: 'Address number is required.',
              pattern: {
                value: /^[a-zA-Z0-9]+$/
              }
            })}
            className={`${errors.Address ? 'input-error' : ''}`}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default BusinessDetails;