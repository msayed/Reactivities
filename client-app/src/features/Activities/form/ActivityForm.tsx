import React from 'react';
import { Button, Form, FormInput, Segment } from 'semantic-ui-react';

export const ActivityForm = () => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="title" />
        <Form.TextArea placeholder="desc" />
        <Form.Input placeholder="category" />
        <Form.Input type="date" placeholder="date" />
        <Form.Input placeholder="city" />
        <Form.Input placeholder="venue" />
            <Button floated='right' positive type='submit' content='Submit' />
            <Button floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  );
};
