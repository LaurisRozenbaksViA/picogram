import React from 'react';
import Icon from '../component/icon';
import Logo from '../component/logo';
import Menu from '../component/menu';
import Like from '../component/like';

class About extends React.Component {
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
          <h1>No page here, now get the hell out of here!</h1>
          <img src="https://image.shutterstock.com/z/stock-vector-red-neck-holding-a-beer-cartoon-isolated-on-white-137150621.jpg"/>
        </main>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default About;
