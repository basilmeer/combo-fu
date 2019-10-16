import React, { Component } from 'react';
import { H1, H2, H5, Button, Classes, Card, Elevation, Dialog, AnchorButton, Intent, FormGroup, InputGroup, TextArea, Tag, HTMLSelect } from '@blueprintjs/core';

import DBFZInputDisplay from '../DBFZ/DBFZInputDisplay';
import DBFZ_CHAR_LIST from '../DBFZ/CharacterList';
class Combos extends Component {
  handleOpen = () => {
    const { dialog } = { ...this.state };
    const currentState = dialog;
    currentState.isOpen = true;
    this.setState({ dialog: currentState });
  };
  handleClose = () => {
    const { dialog } = { ...this.state };
    const currentState = dialog;
    currentState.isOpen = false;
    this.setState({ dialog: currentState });
  };

  /* TODO:
      -- Remove the hardcoded state
  */
  
  state = {
    combos: [
      {
        "posted_by": "Baghlol",
        "_id": "5ce3b099844ea74618b26281",
        "title": "Get rekt Kori",
        "character": "Goku Black",
        "difficulty": "Easy",
        "combo": "8>214L>2H>MLL>236L",
        "damage": "231",
        "game": "Dragon Ball FighterZ",
        "postedOn": "2019-05-21T08:02:33.608Z",
        "__v": 0,
        "posted_on": "2019-08-17T11:59:09.489Z"
      },
      {
        "posted_by": "Baghlol",
        "_id": "5ce3b099844ea74618b26281",
        "title": "Basic Air Launcher",
        "character": "Goku Black",
        "difficulty": "Easy",
        "combo": "2M>M>9>MLL>2HH>MLL>9>ML>236L",
        "damage": "631",
        "game": "Dragon Ball FighterZ",
        "postedOn": "2019-05-21T08:02:33.608Z",
        "__v": 0,
        "posted_on": "2019-08-17T11:59:09.489Z"
      },
      {
        "posted_by": "Baghlol",
        "_id": "5ce3b099844ea74618b26281",
        "title": "Fireball",
        "character": "Broly",
        "difficulty": "Easy",
        "combo": "236L",
        "damage": "30",
        "game": "Dragon Ball FighterZ",
        "postedOn": "2019-05-21T08:02:33.608Z",
        "__v": 0,
        "posted_on": "2019-08-17T11:59:09.489Z"
      }
    ],
    characters: DBFZ_CHAR_LIST,
    dialog: {
      autoFocus: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      isOpen: false,
      usePortal: true,
      icon: 'info-sign',
      title: 'Add a new combo',
      onClose: this.handleClose
    },
    newCombo: {
      "title": "",
      "game": "",
      "character": "",
      "combo": "",
      "difficulty": ""
    }
  };
  
  handleAutoFocusChange = this.setState(prevState => ({ autoFocus: !prevState.autoFocus }));
  handleEscapeKeyChange = this.setState(prevState => ({ canEscapeKeyClose: !prevState.canEscapeKeyClose }));
  handleUsePortalChange = this.setState(prevState => ({ usePortal: !prevState.usePortal }));
  handleEnforceFocusChange = this.setState(prevState => ({ enforceFocus: !prevState.enforceFocus }));
  handleOutsideClickCloseChange = this.setState(prevState => ({ canOutsideClickClose: !prevState.canOutsideClickClose }));
  
  /* 
    TODO:
      -- Use Hooks and probably remove Blueprint altogether
  */
  
  handleGameSelectChange = (e) => {
    const { newCombo } = {...this.state};
    const currentState = newCombo;
    currentState.game = e.target.value;
    this.setState({ newCombo: currentState });
  }
  
  handleCharacterSelectChange = (e) => {
    const { newCombo } = {...this.state};
    const currentState = newCombo;
    currentState.character = e.target.value;
    this.setState({ newCombo: currentState });
  }

  handleTitleChange = (e) => {
    const { newCombo } = {...this.state};
    const currentState = newCombo;
    currentState.title = e.target.value;
    this.setState({ newCombo: currentState });
  }

  handleComboChange = (e) => {
    const { newCombo } = {...this.state};
    const currentState = newCombo;
    currentState.combo = e.target.value;
    this.setState({ newCombo: currentState });
  }

  handleDifficultySelectChange = (e) => {
    const { newCombo } = {...this.state};
    const currentState = newCombo;
    currentState.difficulty = e.target.value;
    this.setState({ newCombo: currentState });
  }
  
  render() {
    return(
      <div>
        <div className="page-heading">
          <H2>Combos</H2>
          <Button className={Classes.PRIMARY} onClick={this.handleOpen}>Add new combo</Button>
        </div>
        <div className="combo-cards">
          {
            this.state.combos.map((cur, ind, arr) =>
            <Card interactive={true} elevation={Elevation.TWO} key={ind}>
              {/* <div className="card-img-top">
                <img src={DBFZHeader} alt="Dragon Ball FighterZ" />
              </div> */}
              <div className="card-body">
                <H5><a href="#">{this.state.combos[ind].title + " (" + this.state.combos[ind].character + ")"}</a></H5>
                <Tag className="combo-tags">{this.state.combos[ind].game}</Tag>
                <Tag className="combo-tags">{this.state.combos[ind].difficulty}</Tag>
                <p><DBFZInputDisplay input={this.state.combos[ind].combo} /></p>
                <small>{this.state.combos[ind].posted_by}</small>
              </div>
              <div className="card-footer">

              </div>
            </Card>            
            )
          }
        </div>
        <Dialog {...this.state.dialog}>
          <div className={Classes.DIALOG_BODY}>
            <p>
              Let's get it
            </p>
            <FormGroup
              helperText="Choose a catchy name like e.g. Supercalifragilistic Explosive Combo"
              label="Title"
              labelFor="title-input"
            >
              <InputGroup id="title-input" type="text" onChange={this.handleTitleChange} value={this.state.newCombo.title} />
            </FormGroup>
            <FormGroup
              helperText="Be sure to select the right game!"
              label="Game"
              labelFor="game-input"
            >
              <HTMLSelect fill={true} onChange={this.handleGameSelectChange}>
                <option value="Dragon Ball FighterZ">Dragon Ball FighterZ</option>
              </HTMLSelect>
            </FormGroup>
            <FormGroup
              helperText="Choose the character that can do the combo."
              label="Character"
              labelFor="character-input"
            >
              <HTMLSelect fill={true} onChange={this.handleCharacterSelectChange}>
                {
                  this.state.characters.map((cur, ind) => 
                    <option value={this.state.characters[ind].name}>{this.state.characters[ind].name}</option>
                  )
                }
              </HTMLSelect>
            </FormGroup>
            <FormGroup
              helperText="Select the appropriate difficulty."
              label="Difficulty"
              labelFor="difficulty"
            >
              <HTMLSelect fill={true} onChange={this.handleDifficultySelectChange}>
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Hard">Hard</option>
                <option value="Very Hard">Very Hard</option>
              </HTMLSelect>
            </FormGroup>
            <FormGroup
              helperText="e.g. qcf+qcb+hp"
              label="Combo Input"
              labelFor="text-input"
            >
              <TextArea id="combo-input" growVertically={true} large={true} fill={true} onChange={this.handleComboChange} value={this.state.newCombo.combo} />
            </FormGroup>
            <div className="combo-preview">
              <DBFZInputDisplay input={this.state.newCombo.combo} />
            </div>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <AnchorButton intent={Intent.NONE} href="#">
                Close
              </AnchorButton>
              <AnchorButton intent={Intent.PRIMARY} href="#">
                Save
              </AnchorButton>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}
  
export default Combos;