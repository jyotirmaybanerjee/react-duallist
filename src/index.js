/**
 * react-duallist
 * https://github.com/jyotirmaybanerjee/react-duallist
 *
 * Copyright (c) 2014 Jyotirmay Banerjee
 * Licensed under the MIT license.
 */

/* eslint-disable react/sort-comp */

 // @flow

 import React, {Component} from 'react';

 class Duallist extends Component {
   props: {
     available: Array<Object>,
     selected: Array<Object>,
     leftLabel: string,
     rightLabel: string,
     sortable: boolean,
     searchable: boolean,
     moveLeftIcon: Object,
     moveAllLeftIcon: Object,
     moveRightIcon: Object,
     moveAllRightIcon: Object,
     moveUpIcon: Object,
     moveTopIcon: Object,
     moveDownIcon: Object,
     moveBottomIcon: Object,
     onMove: ?(Array<Object>) => void,
     onSelectInLeft: ?(Array<Object>) => void,
     onSelectInRight: ?(Array<Object>) => void,
     leftSearchPlaceholder: string,
     rightSearchPlaceholder: string
   };

   static defaultProps = {
    leftLabel: 'Available',
    rightLabel: 'Selected',
    sortable: true,
    searchable: true,
    moveLeftIcon: <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'<'}</span>,
    moveAllLeftIcon: <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'<<'}</span>,
    moveRightIcon: <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'>'}</span>,
    moveAllRightIcon: <span style={{fontSize: '14px', fontWeight: 'bold'}}>{'>>'}</span>,
    moveUpIcon: <span style={{fontSize: '14px', fontWeight: 'bold', color: '#000'}}>&#xffea;</span>,
    moveTopIcon: <span style={{fontSize: '14px', fontWeight: 'bold', color: '#000'}}>&#x21c8;</span>,
    moveDownIcon: <span style={{fontSize: '14px', fontWeight: 'bold', color: '#000'}}>&#xffec;</span>,
    moveBottomIcon: <span style={{fontSize: '14px', fontWeight: 'bold', color: '#000'}}>&#x21ca;</span>,
    leftSearchPlaceholder: 'Search available options',
    rightSearchPlaceholder: 'Search selected options'
  }

   state = {
     searchStringLeft: '',
     searchStringRight: '',
     leftSelected: [],
     rightSelected: []
   }

   onMoveLeft = () => {
     const {selected, onMove} = this.props;
     const selectedOptions = selected.filter(op => !this.state.rightSelected.includes(op));
     onMove(selectedOptions);
     this.setState({rightSelected: []});
   }

   onMoveAllLeft = () => {
     const {onMove} = this.props;
     onMove([]);
     this.setState({rightSelected: []});
   }

   onMoveRight = () => {
     const {selected, onMove} = this.props;
     const selectedOptions = [...selected, ...this.state.leftSelected];
     onMove(selectedOptions);
     this.setState({leftSelected: []});
   }

   onMoveAllRight = () => {
     const {available, onMove} = this.props;
     const selectedOptions = available.map(op => op.value);
     onMove(selectedOptions);
     this.setState({leftSelected: []});
   }

   onMoveUp = () => {
     const {selected, onMove} = this.props;
     const newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(currentIndex - 1, 0, this.state.rightSelected[0]);
     onMove(newSelected);
   }

   onMoveAllUp = () => {
     const {selected, onMove} = this.props;
     const newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(0, 0, this.state.rightSelected[0]);
     onMove(newSelected);
   }

   onMoveDown = () => {
     const {selected, onMove} = this.props;
     const newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(currentIndex + 1, 0, this.state.rightSelected[0]);
     onMove(newSelected);
   }

   onMoveAllDown = () => {
     const {selected, onMove} = this.props;
     const newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(newSelected.length, 0, this.state.rightSelected[0]);
     onMove(newSelected);
   }

   onSelectInLeft = (event) => {
     const options = event.target.options;
     const values = [];
     for (let i = 0, l = options.length; i < l; i++) {
       if (options[i].selected) {
         values.push(options[i].value);
       }
     }
     if (this.props.onSelectInLeft)
       this.props.onSelectInLeft(values);
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
     if (this.props.onSelectInRight)
       this.props.onSelectInRight(values);
     this.setState({rightSelected: values});
   }

   renderLeftList = () => {
     const {available, selected} = this.props;
     const visibleOptions = available.filter((op) => {
       if (this.state.searchStringLeft && !op.label.toLowerCase().includes(this.state.searchStringLeft.toLowerCase())) {
         return false;
       } else if (selected.includes(op.value)) {
         return false;
       }
       return true;
     });
     return (
       <select className="list-control" multiple onChange={this.onSelectInLeft} defaultValue={[]}>
         {visibleOptions.map(op => <option value={op.value} key={`left-${op.value}`}>{op.label}</option>)}
       </select>
     )
   }

   renderRightList = () => {
     const {available, selected} = this.props;
     const selectedOptions = [];

     selected.forEach((selection) => {
       if (!this.state.searchStringRight || (this.state.searchStringRight && selection.toLowerCase().includes(this.state.searchStringRight.toLowerCase()))) {
         selectedOptions.push(available.find(av => av.value === selection));
       }
     });
     return (
       <select className="list-control" multiple onChange={this.onSelectInRight} defaultValue={[]}>
         {selectedOptions.map(op => <option value={op.value} key={`right-${op.value}`}>{op.label}</option>)}
       </select>
     )
   }

   onLeftSearch = (event) => {
     this.setState({searchStringLeft: event.target.value});
   }

   onRightSearch = (event) => {
     this.setState({searchStringRight: event.target.value});
   }

   render() {
     const {leftLabel, rightLabel, sortable, searchable, moveLeftIcon,
       moveAllLeftIcon, moveRightIcon, moveAllRightIcon, moveUpIcon,
       moveTopIcon, moveDownIcon, moveBottomIcon, available, selected,
       leftSearchPlaceholder, rightSearchPlaceholder} = this.props;

     if (available.length < 1)
      return <h3>Please pass non empty arrays </h3>;
     return (
       <div className="react-listbox-dual-list">
         <div className="react-listbox-list-box left-list">
           <label>
             {leftLabel}
           </label>
           {searchable &&
             <input type="text" className="search-bar left-search" placeholder={leftSearchPlaceholder} onChange={this.onLeftSearch} />
           }
           <div className="list-container">
             {this.renderLeftList()}
           </div>
         </div>
         <div className="react-listbox-center-toolbar">
           <div className="move-right">
             <button
               className="btn-move"
               onClick={this.onMoveAllRight}
             >
               {moveAllRightIcon}
             </button>
             <button
               className="btn-move"
               onClick={this.onMoveRight}
             >
               {moveRightIcon}
             </button>
           </div>
           <div className="move-left">
             <button
               className="btn-move"
               onClick={this.onMoveLeft}
             >
               {moveLeftIcon}
             </button>
             <button
               className="btn-move"
               onClick={this.onMoveAllLeft}
             >
               {moveAllLeftIcon}
             </button>
           </div>
         </div>
         <div className="react-listbox-list-box right-list">
           <label>
             {rightLabel}
           </label>
           {searchable &&
             <input type="text" className="search-bar right-search" placeholder={rightSearchPlaceholder} onChange={this.onRightSearch} />
           }
           <div className="list-container">
             {this.renderRightList()}
           </div>
         </div>
         {sortable &&
           <div className="react-listbox-right-toolbar">
             <div className="move-top">
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveAllUp}
               >
                 {moveTopIcon}
               </button>
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveUp}
               >
                 {moveUpIcon}
               </button>
             </div>
             <div className="move-bottom">
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveDown}
               >
                 {moveDownIcon}
               </button>
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveAllDown}
               >
                 {moveBottomIcon}
               </button>
             </div>
           </div>
         }
       </div>
     );
   }
 }

 export default Duallist;
