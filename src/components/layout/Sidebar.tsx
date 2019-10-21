import React, { Fragment } from 'react';
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';
import { IAdvertProps } from '../../interfaces';

const AdvertCard = (props: IAdvertProps) => {
  const { title, description, updatedAt, imageUrl } = props;
  return (
    <Fragment>
      <Card>
        <CardImg top width="100%" src={imageUrl} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>
            <small className="text-muted">
              Last updated {updatedAt} mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default function Sidebar() {
  return (
    <Fragment>
      <h3>This is a sidebar</h3>
    </Fragment>
  );
}
