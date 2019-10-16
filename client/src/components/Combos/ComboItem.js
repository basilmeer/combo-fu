import React from 'react';
import { Button, Card, H5, Elevation, Tag } from '@blueprintjs/core';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import DBFZInputDisplay from '../DBFZ/DBFZInputDisplay';

const ComboItem = ({ _id, image, character, game, title, difficulty, damage, combo, posted_by }) => {
  return(
    <Card interactive={true} elevation={Elevation.TWO}>
      <div className="card-body">
        <div className="combo-heading">
          <img className="character-thumbnail" src={image} alt={character} />
          <H5>
            <Link to={`/combo/${_id}`}>
              {title + " (" + character + ")"}
            </Link>
          </H5>
        </div>
        <Tag className="combo-tags">{game}</Tag>
        <Tag className="combo-tags">{difficulty}</Tag>
        <Tag className="combo-tags">{damage} DMG</Tag>
        <DBFZInputDisplay input={combo} />
        <small>{posted_by}</small>
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