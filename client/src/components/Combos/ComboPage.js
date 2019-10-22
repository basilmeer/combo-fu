import React, { Fragment } from 'react';
import Sidebar from '../Sidebar';

const ComboPage = ({ _id, image, character, game, difficulty, damage, combo, posted_by }) => {
  return(
    <Fragment>
      <Sidebar />
      <div className="cf-content container">
        ComboPage
      </div>
    </Fragment>
  )
}

export default ComboPage;