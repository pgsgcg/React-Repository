import Parser from 'html-react-parser';

import { React, useState } from "react";
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

let htmlInput = ''
            +   '<div class="container-fluid p-5 bg-primary text-white text-center">'
            +       '<h1>My First Bootstrap Page</h1>'
            +       '<p>Resize this responsive page to see the effect!</p>'
            +    '</div>'
            +    '<div class="container mt-5">'
            +    '<div class="row">'
            +    '<div class="col-sm-4">'
            +    '<h3>Column 1</h3>'
            +    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>'
            +    '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>'
            +    '</div>'
            +    '<div class="col-sm-4">'
            +    '<h3>Column 2</h3>'
            +    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>'
            +    '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>'
            +    '</div>'
            +    '<div class="col-sm-4">'
            +    '<h3>Column 3</h3>'
            +    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>'
            +    '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>'
            +    '</div>'
            +   '</div>';

var htmlToReactParser = new HtmlToReactParser();
var reactElement = htmlToReactParser.parse(htmlInput);
var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

var thisIsMyCopy = '<p>copy copy copy <strong>strong copy</strong></p>';

    

const Home = () => {   
    return(
        reactElement        
    )
}

export default Home