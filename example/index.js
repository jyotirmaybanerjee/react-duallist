import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {Col, Nav, NavItem, Tab, Tabs, Row, Table} from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {dark} from 'react-syntax-highlighter/styles/prism';

import Duallist from '../src';

export default class Examples extends Component {
  state = {
    available: [
      {label: 'Alabama', value: 'AL'},
      {label: 'Alaska', value: 'AK'},
      {label: 'Arizona', value: 'AZ'},
      {label: 'Arkansas', value: 'AR'},
      {label: 'California', value: 'CA'},
      {label: 'Colorado', value: 'CO'},
      {label: 'Connecticut', value: 'CT'},
      {label: 'Delaware', value: 'DE'},
      {label: 'Florida', value: 'FL'},
      {label: 'Georgia', value: 'GA'},
    ],
    selected: ['AL', 'CA'],
  }

  onSelect = (selected) => {
    this.setState({selected});
  }

  onSelectTab = (activeTab) => {
    this.setState({activeTab});
  }

  render() {
    const {activeTab, available, selected} = this.state;
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
        <Col sm={12}>
          <Tabs defaultActiveKey={1} position="left" tabWidth={3}>
            <Tab eventKey={1} title="Getting Started">
              <Col sm={6}>
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
              </Col>
              <Col sm={6}>
                <SyntaxHighlighter language='jsx' style={dark}>
                  {`
                    <Duallist
                      available={available}
                      selected={selected}
                      onSelect={this.onSelect}
                    />`
                  }
                </SyntaxHighlighter>
              </Col>
              <Col sm={6}>
                <h5>'Available' Data Format:</h5>
                  <SyntaxHighlighter language='js' style={dark}>
                    {`
                      const available = [
                        {label: 'Alabama', value: 'AL'},
                        {label: 'California', value: 'CA'},
                      ];
                    `}
                  </SyntaxHighlighter>
              </Col>
              <Col sm={6}>
                <h5>'Selected' Data Format:</h5>
                  <SyntaxHighlighter language='js' style={dark}>
                    {`
                      const selected = ['AL', 'CA'];
                    `}
                  </SyntaxHighlighter>
              </Col>
              <Col sm={12}>
                <h5>Available Options:</h5>
                <Table striped bordered condensed>
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
                    <tr>
                      <td>moveLeftIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>{'<'}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveAllLeftIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>{'<<'}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveRightIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>{'>'}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveAllRightIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>{'>>'}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveUpIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>&#xffea;</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveTopIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>&#x21c8;</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveDownIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>&#xffec;</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>moveBottomIcon</td>
                      <td>fontawesome icons or icon of your choice</td>
                      <td>&#x21ca;</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Tab>
            <Tab eventKey={2} title="Using Custom Icons">
              <Row>
                <Col sm={12}>
                  <h5 style={{textAlign: 'center'}}>With custom icons (font awesome)</h5>
                  <SyntaxHighlighter language='jsx' style={dark}>
                    {`
                      <Duallist
                        available={available}
                        selected={selected}
                        onSelect={this.onSelect}
                        moveLeftIcon={<i className="fa fa-angle-left" />}
                        moveAllLeftIcon={<i className="fa fa-angle-double-left" />}
                        moveRightIcon={<i className="fa fa-angle-right" />}
                        moveAllRightIcon={<i className="fa fa-angle-double-right" />}
                        moveUpIcon={<i className="fa fa-angle-up" />}
                        moveTopIcon={<i className="fa fa-angle-double-up" />}
                        moveDownIcon={<i className="fa fa-angle-down" />}
                        moveBottomIcon={<i className="fa fa-angle-double-down" />}
                      />`
                    }
                  </SyntaxHighlighter>
                </Col>
                <Col sm={12}>
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    moveLeftIcon={<i className="fa fa-angle-left" />}
                    moveAllLeftIcon={<i className="fa fa-angle-double-left" />}
                    moveRightIcon={<i className="fa fa-angle-right" />}
                    moveAllRightIcon={<i className="fa fa-angle-double-right" />}
                    moveUpIcon={<i className="fa fa-angle-up" />}
                    moveTopIcon={<i className="fa fa-angle-double-up" />}
                    moveDownIcon={<i className="fa fa-angle-down" />}
                    moveBottomIcon={<i className="fa fa-angle-double-down" />}
                  />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey={3} title="With all options enabled">
              <Row>
                <Col sm={12}>
                  <h5 style={{textAlign: 'center'}}>With all the options enabled</h5>
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
                </Col>
                <Col sm={12}>
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                    sortable={true}
                    searchable={true}
                  />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey={4} title="With sortable false">
              <Row>
                <Col sm={12}>
                  <h5 style={{textAlign: 'center'}}>With sortable false</h5>
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
                </Col>
                <Col sm={12}>
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                    sortable={false}
                    searchable={true}
                  />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey={5} title="With searchable false">
              <Row>
                <Col sm={12}>
                  <h5 style={{textAlign: 'center'}}>With searchable false</h5>
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
                </Col>
                <Col sm={12}>
                  <Duallist
                    available={available}
                    selected={selected}
                    onSelect={this.onSelect}
                    leftLabel={leftLabel}
                    rightLabel={rightLabel}
                    sortable={true}
                    searchable={false}
                  />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Fragment>
    );
  }
}

render(<Examples />, document.getElementById('app'))
