/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';
import { Aside } from './components/Aside';
import { BlogPost } from './components/BlogPost';
import { Header } from './components/Header';
import { Jumbotron } from './components/Jumbotron';
import { SectionMenu } from './components/SectionMenu';

export class App extends Component {

  state = {
    sectionItems: [
      { title: 'Tutoriais', link: '#tutorial', key: 1 },
      { title: 'Documentação', link: '#documentacao', key: 2 },
      { title: 'Fórum', link: '#forum', key: 3 },
      { title: 'Blog', link: '#blog', key: 4 },
    ],
    archivesItems: [
      { mes: 'janeiro', ano: '2020', link: '#janeiro2020', key: 1 },
      { mes: 'fevereiro', ano: '2020', link: '#fevereiro2020', key: 2 },
      { mes: 'março', ano: '2020', link: '#marco2020', key: 3 },
      { mes: 'abril', ano: '2020', link: '#abril2020', key: 4 },
      { mes: 'maio', ano: '2020', link: '#maio2020', key: 5 },
      { mes: 'junho', ano: '2020', link: '#junho2020', key: 6 },
      { mes: 'julho', ano: '2020', link: '#julho2020', key: 7 },
      { mes: 'agosto', ano: '2020', link: '#agosto2020', key: 8 },
      { mes: 'setembro', ano: '2020', link: '#setembro2020', key: 9 },
      { mes: 'outubro', ano: '2020', link: '#outubro2020', key: 10 },
      { mes: 'novembro', ano: '2020', link: '#novembro2020', key: 11 },
      { mes: 'dezembro', ano: '2020', link: '#dezembro2020', key: 12 },
    ],
    postsItems: [
      { section: 'React', title: 'Título do Post React', data: 'Abri 2020', content: 'Aliqua labore ut sint non et enim excepteur ut non.' },
      { section: 'Documentação', title: 'Título do Post Doc', data: 'Mar 2020', content: 'Deserunt sit nisi est dolor aliqua aute. Anim consequat commodo magna mollit. Proident voluptate qui velit pariatur occaecat deserunt cillum laboris cillum aute consequat velit aliqua exercitation. Dolore officia labore ullamco aliqua esse aliqua excepteur pariatur sit aute irure ipsum eiusmod.' },
      { section: 'Fórum', title: 'Título do Post Fórum', data: 'Fev 2020', content: 'Sit aliquip voluptate non duis minim esse irure culpa labore cillum. Nostrud sint laborum velit reprehenderit ullamco Lorem. Minim cillum consectetur labore sunt.' },
      { section: 'Blog', title: 'Título do Post Blog', data: 'Jan 2020', content: 'Aliqua labore ut sint non et enim excepteur ut non.' },
    ],
  }

  render() {
    return (
      <>
        <Header />
        <Jumbotron />
        <SectionMenu items={this.state.sectionItems} />
        <main role="main" className="container">
          <div className="row">
            <BlogPost items={this.state.postsItems}/>
            <Aside items={this.state.archivesItems}/>
          </div>
        </main>
      </>
    );
  }

}
