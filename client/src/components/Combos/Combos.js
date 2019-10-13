import React, { Component } from 'react';
import { H1, H2, H5, Button, Classes, Card, Elevation, Dialog, AnchorButton, Intent, FormGroup, InputGroup, TextArea, HTMLSelect } from '@blueprintjs/core';

import InputDisplay from '../DBFZ/InputDisplay';

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

  state = {
    combos: [
      {
        "posted_by": "Baghlol",
        "_id": "5ce3b099844ea74618b26281",
        "title": "Fireball",
        "character": "Iori Yagami",
        "combo": "qcf+C",
        "game": "King of Fighters XIV",
        "postedOn": "2019-05-21T08:02:33.608Z",
        "__v": 0,
        "posted_on": "2019-08-17T11:59:09.489Z"
      },
      {
        "posted_by": "Baghlol",
        "_id": "5ce3b099844ea74618b26281",
        "title": "Fireball",
        "character": "Kyo Kusanagi",
        "combo": "qcf+C",
        "game": "King of Fighters XIV",
        "postedOn": "2019-05-21T08:02:33.608Z",
        "__v": 0,
        "posted_on": "2019-08-17T11:59:09.489Z"
      },
      {
        "posted_by": "Baghlol",
        "_id": "5ce3b099844ea74618b26281",
        "title": "Fireball",
        "character": "Broly",
        "combo": "qcf+A",
        "game": "Dragon Ball FighterZ",
        "postedOn": "2019-05-21T08:02:33.608Z",
        "__v": 0,
        "posted_on": "2019-08-17T11:59:09.489Z"
      }
    ],
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
      "combo": ""
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
  
  render() {
    return(
      <div>
        <div className="page-heading">
          <H2>Combos</H2>
          <Button className={Classes.PRIMARY} onClick={this.handleOpen}>Add new combo</Button>
        </div>
        {
          this.state.combos.map((cur, ind, arr) =>
          <Card interactive={true} elevation={Elevation.TWO} key={ind}>
          <H5><a href="#">{this.state.combos[ind].title + " (" + this.state.combos[ind].character + ")"}</a></H5>
            <small>{this.state.combos[ind].posted_by}</small>
            <p>{this.state.combos[ind].game}</p>
            <p>{this.state.combos[ind].combo}</p>
          </Card>            
          )
        }
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
                <option value="King of Fighters XIV">King of Fighters XIV</option>
                <option value="Tekken 7">Tekken 7</option>
                <option value="Street Fighter V">Street Fighter V</option>
                <option value="Dragon Ball FighterZ">Dragon Ball FighterZ</option>
              </HTMLSelect>
            </FormGroup>
            <FormGroup
              helperText="Choose the character that can do the combo."
              label="Character"
              labelFor="character-input"
            >
              <HTMLSelect fill={true} onChange={this.handleCharacterSelectChange}>
                <option value="Kyo Kusanagi">Kyo Kusanagi</option>
                <option value="Iori Yagami">Iori Yagami</option>
                <option value="Clark Still">Clark Still</option>
                <option value="Geese Howard">Geese Howard</option>
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
              <InputDisplay input={this.state.newCombo.combo} />
            </div>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <AnchorButton intent={Intent.PRIMARY} href="#">
              Close
            </AnchorButton>
          </div>
        </Dialog>
      </div>
    )
  }
}
  
export default Combos;