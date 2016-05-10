import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Tabbar, Tab, Toolbar} from 'react-onsenui';
import jss from 'jss';
import useSheet from 'react-jss'

// load Onsen UI library
import 'onsenui';

const style = {
  test: {
    color: 'green'
  }
};

/*
// Compile styles, apply plugins.
const sheet = jss.createStyleSheet(style);

// If you want to render on the client, insert it into DOM.
sheet.attach()

// If you want to render server-side, get the css text.
console.log(sheet.toString());
*/
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
