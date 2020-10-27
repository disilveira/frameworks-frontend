/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import { NavMenu } from './components/NavMenu';
import { NavSearch } from './components/NavSearch';

export class App extends Component {

  state = {
    navMenuItems: [
      { title: 'Home', link: '#home' },
      { title: 'Sobre', link: '#sobre' },
      { title: 'Contato', link: '#contato' },
    ],
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <NavMenu items={this.state.navMenuItems} />
            <NavSearch />
          </div>
        </nav>
      </>
    );
  }

}
