/**
 * react-duallist
 * https://github.com/jyotirmaybanerjee/react-duallist
 *
 * Copyright (c) 2014 Jyotirmay Banerjee
 * Licensed under the MIT license.
 */

 // @flow

 import React, {Component} from 'react';

 class Duallist extends Component {
   props: {
     available: Array<Object>,
     selected: Array<Object>,
     leftLabel: string,
     rightLabel: string,
     sortable: bool,
     searchable: bool,
     onSelect: (Array<Object>) => void,
   };

   static defaultProps = {
    ...Component.defaultProps,
    leftLabel: 'Available',
    rightLabel: 'Selected',
    sortable: true,
    searchable: true,
  }

   state = {
     searchStringLeft: '',
     searchStringRight: '',
     leftSelected: [],
     rightSelected: []
   }

   onMoveLeft = () => {
     const {selected, onSelect} = this.props;
     const selectedOptions = selected.filter(op => !this.state.rightSelected.includes(op));
     onSelect(selectedOptions);
     this.setState({rightSelected: []});
   }

   onMoveAllLeft = () => {
     const {onSelect} = this.props;
     onSelect([]);
     this.setState({rightSelected: []});
   }

   onMoveRight = () => {
     const {selected, onSelect} = this.props;
     const selectedOptions = [...selected, ...this.state.leftSelected];
     onSelect(selectedOptions);
     this.setState({leftSelected: []});
   }

   onMoveAllRight = () => {
     const {available, onSelect} = this.props;
     const selectedOptions = available.map(op => op.value);
     onSelect(selectedOptions);
     this.setState({leftSelected: []});
   }

   onMoveUp = () => {
     const {selected, onSelect} = this.props;
     let newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(currentIndex - 1, 0, this.state.rightSelected[0]);
     onSelect(newSelected);
   }

   onMoveAllUp = () => {
     const {selected, onSelect} = this.props;
     let newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(0, 0, this.state.rightSelected[0]);
     onSelect(newSelected);
   }

   onMoveDown = () => {
     const {selected, onSelect} = this.props;
     let newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(currentIndex + 1, 0, this.state.rightSelected[0]);
     onSelect(newSelected);
   }

   onMoveAllDown = () => {
     const {selected, onSelect} = this.props;
     let newSelected = selected;
     const currentIndex = selected.indexOf(this.state.rightSelected[0]);
     newSelected.splice(currentIndex, 1);
     newSelected.splice(newSelected.length, 0, this.state.rightSelected[0]);
     onSelect(newSelected);
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
     const {leftLabel, rightLabel, sortable, searchable} = this.props;
     return (
       <div className="dula-list">
         <div className="list-box left-list">
           <label>
             {leftLabel}
           </label>
           {searchable &&
             <input type="text" className="search-bar left-search" placeholder="Search available options" onChange={this.onLeftSearch} />
           }
           <div className="list-container">
             {this.renderLeftList()}
           </div>
         </div>
         <div className="center-toolbar">
           <div className="move-right">
             <button
               className="btn-move"
               onClick={this.onMoveAllRight}
             >
               <i className="fa fa-angle-double-right" />
             </button>
             <button
               className="btn-move"
               onClick={this.onMoveRight}
             >
               <i className="fa fa-angle-right" />
             </button>
           </div>
           <div className="move-left">
             <button
               className="btn-move"
               onClick={this.onMoveLeft}
             >
               <i className="fa fa-angle-left" />
             </button>
             <button
               className="btn-move"
               onClick={this.onMoveAllLeft}
             >
               <i className="fa fa-angle-double-left" />
             </button>
           </div>
         </div>
         <div className="list-box right-list">
           <label>
             {rightLabel}
           </label>
           {searchable &&
             <input type="text" className="search-bar right-search" placeholder="Search selected options" onChange={this.onRightSearch}/>
           }
           <div className="list-container">
             {this.renderRightList()}
           </div>
         </div>
         {sortable &&
           <div className="right-toolbar">
             <div className="move-top">
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveAllUp}
               >
                 <i className="fa fa-angle-double-up" />
               </button>
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveUp}
               >
                 <i className="fa fa-angle-up" />
               </button>
             </div>
             <div className="move-bottom">
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveDown}
               >
                 <i className="fa fa-angle-down" />
               </button>
               <button
                 className="btn-move"
                 disabled={this.state.rightSelected.length !== 1}
                 onClick={this.onMoveAllDown}
               >
                 <i className="fa fa-angle-double-down" />
               </button>
             </div>
           </div>
         }
       </div>
     );
   }
 }

 export default Duallist;
