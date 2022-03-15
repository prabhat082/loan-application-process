import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const LoanDetails = (props) => {
  const { register, errors } = useForm({
    defaultValues: {
      Loan_Amount: user.Loan_Amount,
      Interest_rate: user.Interest_rate,
      Loan_Tenure: user.Loan_Tenure
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="col-md-6 offset-md-3">
    <Form.Group controlId="Loan_Amount">
        <Form.Label>Loan Amount</Form.Label>
        <Form.Control
          type="text"
          name="Loan_Amount"
          placeholder="Enter Amount"
          autoComplete="off"
          ref={register({
            required: 'Amount is required.',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Loan Amount should contain only numeric.'
            }
          })}
          className={`${errors.Loan_Amount ? 'input-error' : ''}`}
        />
        {errors.Business_name && (
          <p className="errorMsg">{errors.Loan_Amount.message}</p>
        )}
      </Form.Group>

      <Form.Group controlId="Interest_rate">
        <Form.Label>Interest Rate</Form.Label>
        <Form.Control
          type="text"
          name="Interest_rate"
          placeholder="Enter your interest rate"
          autoComplete="off"
          ref={register({
            required: 'Interest is required.',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Interest should be numeric.'
            }
          })}
          className={`${errors.Interest_rate ? 'input-error' : ''}`}
        />
        {errors.Age && (
          <p className="errorMsg">{errors.Interest_rate.message}</p>
        )}
      </Form.Group>

      <Form.Group controlId="Loan_Tenure">
        <Form.Label>Loan Tenure</Form.Label>
        <Form.Control
          type="text"
          name="Loan_Tenure"
          placeholder="Enter your Loan Tenure"
          autoComplete="off"
          ref={register({
            required: 'Loan Tenure" number is required.',
            pattern: {
              value: /^[0-9]+$/
            }
          })}
          className={`${errors.Loan_Tenure ? 'input-error' : ''}`}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
          Register
        </Button>
       </div> 
    </Form>
  );
};

export default LoanDetails;