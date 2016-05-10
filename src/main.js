import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Tabbar, Tab, Toolbar} from 'react-onsenui';
import jss from 'jss';
import useSheet from 'react-jss'

// load Onsen UI library
import 'onsenui';

// là tu créés ton style
const style = {
  test: {
    color: 'green'
  }
};

class HomePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
            <div className='center'>Title</div>
          </Toolbar>
        }
      >
        <div>
          Home Page
        </div>
      </Page>
    );
  }
}

class SettingsPage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() =>
          <Toolbar>
           /* là tu dis quelle classe tu veux utiliser, ici "test". La chaîne ne change jamais, c'est juste le dernier mot.*/
            <div className={this.props.sheet.classes.test}>Title</div>
          </Toolbar>
        }
      >
        <div>
          Settings Page
        </div>
      </Page>
    );
  }
}

// et là c'est comme redux-connect, ça créé un higher order component (en réécris ton composant avec des trucs en plus)
// et ça sera ce nouveau nom de composant que tu utiliseras.
const SettingsPageStyled = useSheet(SettingsPage, style)

class App extends React.Component {
  renderTabs() {
    return [
      {
        content: <HomePage />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <SettingsPageStyled  />,
        tab: <Tab label='Settings' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <Tabbar
        initialIndex={0}
        renderTabs={this.renderTabs.bind(this)}
      />
        );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
