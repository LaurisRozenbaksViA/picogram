import React from 'react';
import Icon from '../component/icon';
import Logo from '../component/logo';
import Menu from '../component/menu';
import Like from '../component/like';

class Main extends React.Component {
  render() {
    return(
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name="Lauris" />
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="image"/>
          <Like />
      </main>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default Main;
