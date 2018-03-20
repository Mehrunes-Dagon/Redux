import React from 'react';

export default class Item extends React.Component {
  state = {
    action: '',
    checked: false
  }

  componentDidMount() {

  }

  checkOffItem() {

  }

  render() {
    return (
      <div classname='todoItem' >
        <div className='check' key={this.state.action + 'x'} onClick>X</div>
        <div className='action' key={this.state.action + 'action'}>{this.state.action}</div>
      </div>
    );
  }
}