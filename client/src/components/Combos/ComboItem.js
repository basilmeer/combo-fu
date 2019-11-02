import React from 'react';
import { Button, Card, H5, Elevation, Tag } from '@blueprintjs/core';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import DBFZInputDisplay from '../DBFZ/DBFZInputDisplay';

const ComboItem = ({ _id, character, title, difficulty, damage, combo }) => {
  const { image, name, game } = character[0];
  return(
    <Card interactive={true} elevation={Elevation.TWO}>
      <div className="card-body">
        <div className="combo-heading">
          <img className="character-thumbnail" src={`http://localhost:5000${image}`} alt={name} />
          <H5>
            <Link to={`/combo/${_id}`}>
              {title + " (" + name + ")"}
            </Link>
          </H5>
        </div>
        <Tag className="combo-tags">{game}</Tag>
        <Tag className="combo-tags">{difficulty}</Tag>
        <Tag className="combo-tags">{damage} DMG</Tag>
        <Tag className="combo-tags">{combo}</Tag>
        <DBFZInputDisplay input={combo} />
      </div>
      <div className="card-footer">
        <Link to={`/combo/${_id}`}>
          <Button className="card-footer-action" minimal={true}>
            See More
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default ComboItem;