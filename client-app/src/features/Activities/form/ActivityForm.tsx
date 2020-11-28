import React, { FormEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/Models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  CreateActivity: (activity: IActivity) => void;
  EditActivity: (activity: IActivity) => void;
  submitting: boolean;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  CreateActivity,
  EditActivity,
  submitting,
}) => {
  const intilizeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(intilizeForm);
  const handelSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      CreateActivity(newActivity);
    } else {
      EditActivity(activity);
    }
    // console.log(activity);
  };
  const handelInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // eslint-disable-next-line
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form>
        <Form.Input
          onChange={handelInputChange}
          name="title"
          placeholder="title"
          value={activity.title}
        />
        <Form.TextArea
          rows={3}
          placeholder="description"
          onChange={handelInputChange}
          name="description"
          value={activity.description}
        />
        <Form.Input
          placeholder="category"
          onChange={handelInputChange}
          name="category"
          value={activity.category}
        />
        <Form.Input
          onChange={handelInputChange}
          name="date"
          type="datetime-local"
          placeholder="date"
          value={activity.date}
        />
        <Form.Input
          placeholder="city"
          onChange={handelInputChange}
          name="city"
          value={activity.city}
        />
        <Form.Input
          onChange={handelInputChange}
          name="venue"
          placeholder="venue"
          value={activity.venue}
        />
        <Button
          loading={submitting}
          onClick={handelSubmit}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
