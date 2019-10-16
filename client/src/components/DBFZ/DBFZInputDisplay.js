import React, { Component } from 'react';

import UInput from '../../images/dbfz/inputs/8.png';
import DInput from '../../images/dbfz/inputs/2.png';
import BInput from '../../images/dbfz/inputs/4.png';
import FInput from '../../images/dbfz/inputs/6.png';
import UBInput from '../../images/dbfz/inputs/7.png';
import UFInput from '../../images/dbfz/inputs/9.png';
import DBInput from '../../images/dbfz/inputs/1.png';
import DFInput from '../../images/dbfz/inputs/3.png';
import NInput from '../../images/dbfz/inputs/5.png';
import QCFInput from '../../images/dbfz/inputs/236.png';
import QCBInput from '../../images/dbfz/inputs/214.png';
import DPFInput from '../../images/dbfz/inputs/623.png';
import DPBInput from '../../images/dbfz/inputs/421.png';
import LInput from '../../images/dbfz/inputs/l.png';
import MInput from '../../images/dbfz/inputs/m.png';
import HInput from '../../images/dbfz/inputs/h.png';
import SInput from '../../images/dbfz/inputs/s.png';
import FollowUpInput from '../../images/dbfz/inputs/follow_up.png';

const handleInputDisplay = (command, index) => {
  switch(command) {
    case 'u':
    case 'U':
    case '8':
      return <img key={index} className="command" src={UInput} alt="u" />;
    case 'd':
    case 'D':
    case '2':
      return <img key={index} className="command" src={DInput} alt="d" />;
    case 'f':
    case 'F':
    case '6':
      return <img key={index} className="command" src={FInput} alt="f" />;
    case 'b':
    case 'B':
    case '4':
      return <img key={index} className="command" src={BInput} alt="b" />;
    case 'ub':
    case 'UB':
    case '7':
      return <img key={index} className="command" src={UBInput} alt="ub" />;
    case 'uf':
    case 'UF':
    case '9':
      return <img key={index} className="command" src={UFInput} alt="uf" />;
    case 'db':
    case 'DB':
    case '1':
      return <img key={index} className="command" src={DBInput} alt="db" />;
    case 'df':
    case 'DF':
    case '3':
      return <img key={index} className="command" src={DFInput} alt="df" />;
    case 'n':
    case 'N':
    case '5':
      return <img key={index} className="command" src={NInput} alt="n" />;
    case 'qcf':
    case 'QCF':
    case '236':
      return <img key={index} className="command" src={QCFInput} alt="qcf" />;
    case 'qcb':
    case 'QCB':
    case '214':
      return <img key={index} className="command" src={QCBInput} alt="qcb" />;
    case 'dpf':
    case 'DPF':
    case '623':
      return <img key={index} className="command" src={DPFInput} alt="dpf" />;
    case 'dpb':
    case 'DPB':
    case '421':
      return <img key={index} className="command" src={DPBInput} alt="dpb" />;
    case 'l':
    case 'L':
      return <img key={index} className="command" src={LInput} alt="l" />;
    case 'm':
    case 'M':
      return <img key={index} className="command" src={MInput} alt="m" />;
    case 'h':
    case 'H':
      return <img key={index} className="command" src={HInput} alt="h" />;
    case 's':
    case 'S':
      return <img key={index} className="command" src={SInput} alt="s" />;
    case '>':
        return <img key={index} className="command" src={FollowUpInput} alt="follow up" />;
    default:
        return <img key={index} className="command" src={NInput} alt="n" />;
  }
}

// This component will take an input like 2M>M>9M>L>L>2H and return the correct visual inputs
class DBFZInputDisplay extends Component {
  render() {
    let commandList = this.props.input.split(/([>A-Z])/).filter((el) => el !== '');

    return(
      <ul className="cf-combo-string">
        {
          commandList.map((command, index) => {
            return <li>{handleInputDisplay(command, index)}</li>;
          })
        }
      </ul>
    )
  }
}

export default DBFZInputDisplay;