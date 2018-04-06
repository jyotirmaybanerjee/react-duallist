import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {dark} from 'react-syntax-highlighter/styles/prism';

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
      <Fragment>
        <nav
          style={{borderRadius: 0}}
          className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"
        >
          <a className="navbar-brand" href="#"
            style={{color: '#fff'}}
          >
            React-Duallist
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h5>Installation:</h5>
              <pre>
                <code>
                  npm i --save react-duallist
                </code>
              </pre>
              or
              <pre>
                <code>
                  yarn add react-duallist
                </code>
              </pre>
              <p>
                <i>
                  yarn add react-duallist
                </i>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h5>Available Options:</h5>
              <table
                className="table table-bordered table-sm"
                style={{width: 'auto'}}
              >
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Description</th>
                    <th>Default Value</th>
                    <th>Required</th>
                  </tr>
                </thead>
                <tbody className="thead-light">
                  <tr>
                    <td>available</td>
                    <td>List of available options, will appear in the left box</td>
                    <td></td>
                    <td>true</td>
                  </tr>
                  <tr>
                    <td>selected</td>
                    <td>List of selected options, will appear in the right box</td>
                    <td></td>
                    <td>true, atleast need to pass an empty array</td>
                  </tr>
                  <tr>
                    <td>onSelect</td>
                    <td>A callback to handle the change in the selected list.</td>
                    <td></td>
                    <td>true</td>
                  </tr>
                  <tr>
                    <td>leftLabel</td>
                    <td>A header for the left (available) list</td>
                    <td>Available</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>rightLabel</td>
                    <td>A header for the right (selected) list</td>
                    <td>Selected</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>sortable</td>
                    <td>A false value will hide the reorder buttons on the right</td>
                    <td>true</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>searchable</td>
                    <td>A false value will hide the search field on the top</td>
                    <td>true</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <SyntaxHighlighter language='jsx' style={dark}>
                {`
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                  />`
                }
              </SyntaxHighlighter>
            </div>
            <div className="col-sm-12">
              <Duallist
                available={available}
                selected={selected}
                onSelect={this.onSelect}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                <h5 style={{textAlign: 'center'}}>With all the options enabled</h5>
              </p>
              <SyntaxHighlighter language='jsx' style={dark}>
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
              </SyntaxHighlighter>
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
              <p>
                <h5 style={{textAlign: 'center'}}>With sortable false</h5>
              </p>
              <SyntaxHighlighter language='jsx' style={dark}>
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
              </SyntaxHighlighter>
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
              <p>
                <h5 style={{textAlign: 'center'}}>With searchable false</h5>
              </p>
              <SyntaxHighlighter language='jsx' style={dark}>
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
              </SyntaxHighlighter>
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
      </Fragment>
    );
  }
}

render(<Examples />, document.getElementById('app'))
