// @flow

import React, {Component} from 'react';
import Duallist from './components/duallist';

class App extends Component {

  state = {
    available: [
      {label: 'Volvo', value: 'volvo'},
      {label: 'Saab', value: 'saab'},
      {label: 'Opel', value: 'opel'},
      {label: 'Audi', value: 'audi'},
      {label: 'BMW', value: 'bmw'},
    ],
    selected: ['volvo', 'bmw']
  }

  onSelect = (selected) => {
    this.setState({selected});
  }

  render() {
    const {available, selected} = this.state;
    const leftLabel = "Available";
    const rightLabel = "Selected";
    return (
      <div className="dula-list-container" style={{width: '500px', marginTop: '200px', marginLeft: '100px'}}>
        <Duallist
          available={available}
          selected={selected}
          onSelect={this.onSelect}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          sortable={true}
          searchable={true}
        />
      </div>
    );
  }
}

export default App;
