import React from 'react';
import { H1, H2, Classes } from '@blueprintjs/core';
import InputDisplay from '../DBFZ/InputDisplay';

function Home() {
  return (
    <div>
      <H1 className="page-title">Combo-Fu</H1>
      <H2>Welcome to Combo-Fu!</H2>
      <p className={Classes.RUNNING_TEXT}>
        Combo-Fu is an app that lets you write your own fighting game combos and share them with the world! Or just store them for yourself for tryharding purposes.
        The app may have some slight learning curve of its own to get used to but it lets you easily translate your inputs into different notations and lets you view
        them with different icons and styles, thus making it easier to help others understand your stuff even if they play on a different platform.
      </p>
      <br />
      <H2>Why Combo-Fu?</H2>
      <p className={Classes.RUNNING_TEXT}>
        It's super simple to sign up and get started! With CF's input notation, you get to automatically decrypt your inputs for the laymen by having them transformed
        into arrows and buttons which makes your combos visually easier to comprehend. And if you're someone like me, easier for you yourself to read on the fly too!
      </p>
      <br/>
      <InputDisplay input="d" />
      <InputDisplay input="m" />
      <InputDisplay input="uf" />
      <InputDisplay input="m" />
      <InputDisplay input="l" />
      <InputDisplay input="l" />
      <InputDisplay input="d" />
      <InputDisplay input="h" />
    </div>
  );
}

export default Home;