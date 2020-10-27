/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import { Header } from './components/Header';
import { NavMenu } from './components/NavMenu';
import { NavSearch } from './components/NavSearch';

export class App extends Component {

  state = {
    navMenuItems: [
      { title: 'Home', link: '#home', key: 1 },
      { title: 'Sobre', link: '#sobre', key: 2 },
      { title: 'Contato', link: '#contato', key: 3 },
    ],
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }

}
