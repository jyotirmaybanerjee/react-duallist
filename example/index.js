import React, {Component} from 'react';
import {render} from 'react-dom';

import Duallist from '../src';

export default class Examples extends Component {
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
      <div className="container">
        <div className="row">
          <h3>react-duallist examples</h3>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h5>With all the options enabled</h5>
            <code>
              <pre>
                {`
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                    sortable={true}
                    searchable={true}
                  />`
                }
              </pre>
            </code>
          </div>
          <div className="col-sm-12">
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
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h5>With sortable false</h5>
            <code>
              <pre>
                {`
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                    sortable={false}
                    searchable={true}
                  />`
                }
              </pre>
            </code>
          </div>
          <div className="col-sm-12">
            <Duallist
              available={available}
              selected={selected}
              onSelect={this.onSelect}
              leftLabel={leftLabel}
              rightLabel={rightLabel}
              sortable={false}
              searchable={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h5>With searchable false</h5>
            <code>
              <pre>
                {`
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                    sortable={true}
                    searchable={false}
                  />`
                }
              </pre>
            </code>
          </div>
          <div className="col-sm-12">
            <Duallist
              available={available}
              selected={selected}
              onSelect={this.onSelect}
              leftLabel={leftLabel}
              rightLabel={rightLabel}
              sortable={true}
              searchable={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
