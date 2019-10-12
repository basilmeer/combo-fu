import React from 'react';

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

const handleInputDisplay = (input) => {
  switch(input) {
    case 'u':
      return <img src={UInput} alt="u" />;
    case 'd':
      return <img src={DInput} alt="d" />;
    case 'f':
      return <img src={FInput} alt="f" />;
    case 'b':
      return <img src={BInput} alt="b" />;
    case 'ub':
      return <img src={UBInput} alt="ub" />;
    case 'uf':
      return <img src={UFInput} alt="uf" />;
    case 'db':
      return <img src={DBInput} alt="db" />;
    case 'df':
      return <img src={DFInput} alt="df" />;
    case 'n':
      return <img src={NInput} alt="n" />;
    case 'qcf':
      return <img src={QCFInput} alt="qcf" />;
    case 'qcb':
      return <img src={QCBInput} alt="qcb" />;
    case 'dpf':
      return <img src={DPFInput} alt="dpf" />;
    case 'dpb':
      return <img src={DPBInput} alt="dpb" />;
    case 'l':
      return <img src={LInput} alt="l" />;
    case 'm':
      return <img src={MInput} alt="m" />;
    case 'h':
      return <img src={HInput} alt="h" />;
    case 's':
      return <img src={SInput} alt="s" />;
    default:
        return <img src={NInput} alt="n" />;
  }
}

const InputDisplay = ({ input }) => {
  return(
    handleInputDisplay(input)
  )
}

export default InputDisplay;