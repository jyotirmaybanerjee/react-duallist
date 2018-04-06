react-duallist
=========
A React searchable and sortable dual list.

Reusable Chart Components React D3 Bar line scattered plot pie

[Demo](https://rawgit.com/jyotirmaybanerjee/react-duallist/master/example/examples.html)

## Install

  npm install react-duallist --save

  or

  yarn add react-duallist


## Use

  ```
  import Duallist from 'react-duallist';

  import 'react-duallist/dist/react_duallist.[css|less|scss|sass]'
  ```

  ```jsx
    <Duallist
      available={available}
      selected={selected}
      onSelect={this.onSelect}
    />
  ```

## options

| Option  | Description | Default Value | Required |
| ------------- | ------------- | ------------- | ------------- |
| available  | List of available options, will appear in the left box  |    | true  |
| selected  | List of selected options, will appear in the right box  |    | true, atleast need to pass an empty array  |
| onSelect  | A callback to handle the change in the selected list  |    | true  |
| leftLabel  | A header for the left (available) list  | Available  |    |
| rightLabel  | A header for the right (selected) list  | Selected  |    |
| sortable  | A false value will hide the reorder buttons on the right  | true  |    |
| searchable  | A false value will hide the search field on the top  | true  |    |


## Tests

  npm test

  or yarn test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.7 Examples
