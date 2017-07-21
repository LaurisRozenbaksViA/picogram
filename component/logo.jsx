import React from 'react';

class Logo extends React.Component{
  render(){
    return (
      <div>
        <h1 className="picogram-logo">Picogram{this.props.name}</h1>
        <h4>Welcome to picogram!</h4>
      </div>
    );
  }
}

export default Logo;
