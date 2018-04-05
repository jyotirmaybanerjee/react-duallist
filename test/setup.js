import React from 'react';
import {expect} from 'chai';
import jsdom from 'jsdom';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({adapter: new Adapter()});

const {JSDOM} = jsdom;

const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

global.React = React;
global.expect = expect;
