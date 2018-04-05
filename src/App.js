// @flow

import React, {Component, Fragment} from 'react';

class App extends Component {
  props: {
    username: string,
    doFetchUserDetails: (username: string) => User,
  };

  state = {
    allOptions: [
      {label: 'Volvo', value: 'volvo'},
      {label: 'Saab', value: 'saab'},
      {label: 'Opel', value: 'opel'},
      {label: 'Audi', value: 'audi'},
      {label: 'BMW', value: 'bmw'},
    ],
    selectedOptions: ['volvo', 'bmw'],
    searchStringLeft: '',
    searchStringRight: '',
    leftSelected: [],
    rightSelected: []
  }

  onClick = () => {
    console.log('clicked');
  }

  onMoveLeft = () => {
    console.log('this.state.selectedOptions- ', this.state.selectedOptions);
    const selectedOptions = this.state.selectedOptions.filter(op => !this.state.rightSelected.includes(op));
    this.setState({selectedOptions, rightSelected: []});
  }

  onMoveAllLeft = () => {
    this.setState({selectedOptions: []});
  }

  onMoveRight = () => {
    const selectedOptions = [...this.state.selectedOptions, ...this.state.leftSelected];
    this.setState({selectedOptions, leftSelected: []});
  }

  onMoveAllRight = () => {
    const selectedOptions = this.state.allOptions.map(op => op.value);
    this.setState({selectedOptions});
  }

  onSelectInLeft = (event) => {
    const options = event.target.options;
    const values = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    this.setState({leftSelected: values});
  }

  onSelectInRight = (event) => {
    const options = event.target.options;
    const values = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    console.log('values- ', values);
    this.setState({rightSelected: values});
  }

  renderLeftList = () => {
    const visibleOptions = this.state.allOptions.filter((op) => {
      if (this.state.searchStringLeft && !op.label.includes(this.state.searchStringLeft)) {
        return false;
      } else if (this.state.selectedOptions.includes(op.value)) {
        return false;
      }
      return true;
    });
    return (
      <select className="list-control" multiple onChange={this.onSelectInLeft}>
        {visibleOptions.map(op => <option value={op.value} key={`left-${op.value}`}>{op.label}</option>)}
      </select>
    )
  }

  renderRightList = () => {
    const visibleOptions = this.state.allOptions.filter((op) => {
      if (this.state.searchStringRight && !op.label.includes(this.state.searchStringRight)) {
        return false;
      } else if (!this.state.selectedOptions.includes(op.value)) {
        return false;
      }
      return true;
    });
    return (
      <select className="list-control" multiple onChange={this.onSelectInRight}>
        {visibleOptions.map(op => <option value={op.value} key={`right-${op.value}`}>{op.label}</option>)}
      </select>
    )
  }

  render() {
    const disabled = false;
    const leftLabel = "Left";
    const rightLabel = "Right";
    return (
      <div className="dula-list">
        <div className="list-box left-list">
          <div className="list-container">
            <label className="list-label">
              {leftLabel}
            </label>
            {this.renderLeftList()}
          </div>
        </div>
        <div className="center-toolbar">
          <div className="move-right">
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onMoveAllRight}
            >
              <i className="fa fa-angle-double-right" />
            </button>
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onMoveRight}
            >
              <i className="fa fa-angle-right" />
            </button>
          </div>
          <div className="move-left">
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onMoveLeft}
            >
              <i className="fa fa-angle-left" />
            </button>
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onMoveAllLeft}
            >
              <i className="fa fa-angle-double-left" />
            </button>
          </div>
        </div>
        <div className="list-box right-list">
          <div className="list-container">
            <label className="list-label">
              {rightLabel}
            </label>
            {this.renderRightList()}
          </div>
        </div>
        <div className="right-toolbar">
          <div className="move-top">
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onClick}
            >
              <i className="fa fa-angle-double-up" />
            </button>
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onClick}
            >
              <i className="fa fa-angle-up" />
            </button>
          </div>
          <div className="move-bottom">
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onClick}
            >
              <i className="fa fa-angle-down" />
            </button>
            <button
              className="btn-move"
              disabled={disabled}
              onClick={this.onClick}
            >
              <i className="fa fa-angle-double-down" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
