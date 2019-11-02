import React, { Fragment } from 'react';
import { H1, H2, Callout, Classes, Intent, Tag } from '@blueprintjs/core';
import Sidebar from '../Sidebar';

function Home() {
  return (
    <Fragment>
      <Sidebar />
        <div className="cf-content container">
          <H1 className="page-title">Combo-Fu</H1>
          <Callout intent={Intent.WARNING} title="This is an experimental build of the app">
            Combo-Fu is currently in alpha and a lot of the features are currently not working. The current expected launch date for the beta launch is <strike><strong>19 October, 2019</strong></strike> <strong>3 October, 2019</strong>. So far in this relatively broken and empty version of the app, you can:
            <ul>
              <li>Check how combos are visually represented in the 'Combos' page</li>
              <li>Test the 'New Combo' form's live DBFZ input parser (it uses the numpad notation)</li>
              <li>Get a sneak peek on the different pages, although they're broken</li>
              <li>Create an account and save combos <Tag intent={Intent.PRIMARY} minimal={true}>new</Tag></li>
            </ul>
            The following week after this, I'll probably be running the app through a couple of tests and then work on adding the movelists for currently added characters and then the framedata along with a bunch of bug fixing. For issues, you can go <a href="https://github.com/basilmeer/combo-fu/issues">here</a> and to see the roadmap, you can go <a href="https://trello.com/b/f0MLS2yy/combo-fu-roadmap">here</a>. Join the rather empty <a href="https://discord.gg/mRvY7N5">Discord</a> to report live issues to me. Thank you for checking out Combo-Fu!
          </Callout>
          <H2 style={{ marginTop:'20px' }}>Welcome to Combo-Fu!</H2>
          <p className={Classes.RUNNING_TEXT}>
            Combo-Fu is an app that lets you write your own fighting game combos and share them with the world! Or just store them for yourself for tryharding purposes.
            The app may have some slight learning curve of its own to get used to but it lets you easily translate your inputs into different notations and lets you view
            them with different icons and styles, thus making it easier to help others understand your stuff even if they play on a different platform.
          </p>
          <br />
          <H2>So, why use this?</H2>
          <p className={Classes.RUNNING_TEXT}>
            It's super simple to sign up and get started! With CF's input notation, you get to automatically decrypt your inputs for the laymen by having them transformed
            into arrows and buttons which makes your combos visually easier to comprehend. And if you're someone like me, easier for you yourself to read on the fly too!
          </p>
          <p style={{ marginTop:'50px' }}><i>More info to be added later</i></p>
      </div>
    </Fragment>
  );
}

export default Home;