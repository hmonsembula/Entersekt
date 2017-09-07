const assert = require ('assert'); 
const express = require('express');
const app = express();
const xssFilters = require('xss-filters');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const Encoder = require('node-html-encoder').Encoder;
const encoder = new Encoder('entity');

describe ('todo-app', function (){
	
	/*Encoded vs not encoded*/
	it('Encoded vs Not Encoded', function(){
		let encoded = encoder.htmlEncode('<script type="text/javascript">alert("test")</script>');
		let xss = '<script type="text/javascript">alert("test")</script>';
		
		assert.equal(encoded == xss, false);
	})
	
	/*Encoded vs encoded*/
	it('Encoded vs Encoded', function(){
		let encoded = encoder.htmlEncode('<script type="text/javascript">alert("test")</script>');
		let xss = encoder.htmlEncode('<script type="text/javascript">alert("test")</script>');
		
		assert.equal(encoded == xss, true);
	})
	
	/*not encoded vs not encoded*/
	it('Not Encoded vs Not Encoded', function(){
		let encoded = '<script type="text/javascript">alert("test")</script>';
		let xss = '<script type="text/javascript">alert("test")</script>';
		
		assert.equal(encoded == xss, true);
	})
});
