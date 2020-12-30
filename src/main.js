"use strict"
console.log('main works');

// trigger old js
// document.getElementById('loadIt').addEventListener('click', showHello);

// webpack
import {showHello} from './messages';
import $ from 'jquery';

// import css files as THIS IS the main file for webpack
import "./styles.scss";

document.getElementById('loadIt').addEventListener('click', showHello);

const random = () => Math.round(Math.random() * 10)

$('#loadIt1').on('click',() => alert(`I've been trigered by a jQuery button\n And every time you click me I'll show a random number from 1 to 10 : ${random()}`));
