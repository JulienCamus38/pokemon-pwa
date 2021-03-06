import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TrainerPage from './pages/TrainerPage';
import PokeCenter from './pages/PokeCenter';
import PokeMap from './pages/PokeMap';
import { TrainerProvider } from './context/TrainerContext';
import {
  HashRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom'
import Menu from './components/Menu';
import { getMuiTheme } from 'material-ui/styles';

const RedirectToPokecenter = () => <Redirect to="/pokecenter"/>;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#F44336',
    primary2Color: '#D32F2F',
    accent1Color: '#9E9E9E',
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  closeMenu = () => this.setState({ isMenuOpen: false })
  toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  render() {
    return (
      <TrainerProvider>
        <Router>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Fragment>
              <AppBar
                onLeftIconButtonClick={this.toggleMenu}
                title="Pokemon PWA"
              />
              <Menu
                closeMenu={this.closeMenu}
                toggleMenu={this.toggleMenu}
                isMenuOpen={this.state.isMenuOpen}
              />
              <Route path="/pokecenter" component={PokeCenter} />
              <Route path="/search" component={TrainerPage} />
              <Route path="/pokemap" component={PokeMap} />
              <Route exact path="/" component={RedirectToPokecenter} />
            </Fragment>
          </MuiThemeProvider>
        </Router>
      </TrainerProvider>
    );
  }
}

export default App;
