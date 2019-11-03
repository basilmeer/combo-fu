import React, { Component, Fragment } from 'react';
import { H2, Button, Classes, Dialog, AnchorButton, Intent, FormGroup, InputGroup, TextArea, HTMLSelect } from '@blueprintjs/core';
import axios from 'axios';

import AppToaster from '../AppToaster';
import DBFZInputDisplay from '../DBFZ/DBFZInputDisplay';
import DBFZ_CHAR_LIST from '../DBFZ/CharacterList';
import ComboItem from './ComboItem';
import Sidebar from '../Sidebar';

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
  toggleLoading = () => {
    const status = !this.state.loading;
    this.setState({ loading: status });
  }

  /* TODO:
      -- Remove the hardcoded state
      -- Use Hooks
  */
  
  state = {
    combos: [],
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
      "game": "Dragon Ball FighterZ",
      "character": "",
      "combo": "",
      "difficulty": "Easy",
      "posted_by": ""
    },
    loading: false
  };
  
  handleAutoFocusChange = this.setState(prevState => ({ autoFocus: !prevState.autoFocus }));
  handleEscapeKeyChange = this.setState(prevState => ({ canEscapeKeyClose: !prevState.canEscapeKeyClose }));
  handleUsePortalChange = this.setState(prevState => ({ usePortal: !prevState.usePortal }));
  handleEnforceFocusChange = this.setState(prevState => ({ enforceFocus: !prevState.enforceFocus }));
  handleOutsideClickCloseChange = this.setState(prevState => ({ canOutsideClickClose: !prevState.canOutsideClickClose }));
  handleIsOpenChange = this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  
  handleGameSelectChange = (e) => {
    const { newCombo } = {...this.state};
    const currentState = newCombo;
    currentState.game = e.target.value;
    this.setState({ newCombo: currentState });
  }
  
  handleCharacterSelectChange = (e) => {
    // const { newCombo } = {...this.state};
    // const currentState = newCombo;
    const characterName = e.target.value;
    // currentState.character = DBFZ_CHAR_LIST.find(character => character.name === e.target.value);
    // this.setState({ newCombo: currentState });
    this.toggleLoading();
    axios.get('/api/characters')
      .then(res => {
        this.setState({ characters: res.data });
        this.setState({ newCombo: {
            "title": "",
            "game": "Dragon Ball FighterZ",
            "character": res.data.find(character => character.name === characterName),
            "combo": "",
            "difficulty": "Easy"
          }
        });
        this.toggleLoading();
      })
      .catch(err => {
        this.toggleLoading();
        console.log(err)
      });
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

  updateStateWithCharacters = () => {
    axios.get('/api/characters')
    .then(res => {
      this.setState({ characters: res.data });
      this.setState({ newCombo: {
          "title": "",
          "game": "Dragon Ball FighterZ",
          "character": res.data[0],
          "combo": "",
          "difficulty": "Easy"
        } 
      });
    })
    .catch(err => console.log(err));
  }

  updateStateWithCombos = () => {
    axios.get('/api/combos')
      .then(res => this.setState({ combos: res.data }))
      .catch(err => console.log(err));
  }

  onComboSubmit = (e) => {
    e.preventDefault();
    const { title, game, character, combo, difficulty } = this.state.newCombo;
    const posted_by = this.props.session.username;
    axios.post('/api/combos', {
      title,
      game,
      character,
      combo,
      difficulty,
      posted_by
    })
      .then(res => {
        console.log(res);
        this.setState({ newCombo: {
          "title": "",
          "game": "Dragon Ball FighterZ",
          "character": res.data[0],
          "combo": "",
          "difficulty": "Easy"
        } 
      });
      this.setState(prevState => ({     
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
      } }))
      AppToaster.show({ message: "Combo saved!", intent: Intent.SUCCESS });
      this.updateStateWithCombos();
      })
      .catch(err => console.log(err));
  }

  componentDidMount = () => {
    this.updateStateWithCharacters();
    this.updateStateWithCombos();
  }
  
  render() {
    return(
      <Fragment>
        <Sidebar />
        <div className="cf-content container">
          <div className="page-heading">
            <H2>Combos</H2>
            {this.props.session !== undefined ? <Button className={Classes.PRIMARY} onClick={this.handleOpen}>Add new combo</Button> : ''}
          </div>
          <div className="combo-cards">
            {
              this.state.combos.map((combo, i) =>
                <ComboItem key={i} {...combo} />
              )
            }
          </div>
          <Dialog {...this.state.dialog}>
            <form onSubmit={this.onComboSubmit}>
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
                      this.state.characters.map((character, i) => 
                        <option key={i} value={this.state.characters[i].name}>{this.state.characters[i].name}</option>
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
                  helperText="e.g. 2HH>MLLH"
                  label="Combo Input"
                  labelFor="text-input"
                >
                  <TextArea id="combo-input" growVertically={true} large={true} fill={true} onChange={this.handleComboChange} value={this.state.newCombo.combo} />
                </FormGroup>
                <div className="combo-preview">
                  <DBFZInputDisplay input={this.state.newCombo.combo.toUpperCase()} />
                </div>
              </div>
              <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                  <AnchorButton intent={Intent.NONE} href="#" loading={this.state.loading}>
                    Close
                  </AnchorButton>
                  <Button type="submit" intent={Intent.PRIMARY} loading={this.state.loading}>
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </Dialog>
        </div>

      </Fragment>
    )
  }
}
  
export default Combos;