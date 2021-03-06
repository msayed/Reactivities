import React from 'react';
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { IActivity } from '../../../app/Models/activity';

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity :IActivity | null) => void;
}
const ActivityDetails: React.FC<IProps> = ({ activity, setEditMode,setSelectedActivity }) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup>
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => setEditMode(true)}
          />
          <Button onClick={() => setSelectedActivity(null)} basic color="grey" content="Cancel" />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
