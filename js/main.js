import React from 'react';
import SKUs from './skus';
import ReactDOM from 'react-dom';

// Test data
import attributes from '../testData/attributes';
import stocks from '../testData/stocks';

ReactDOM.render(<SKUs {...{ attributes, stocks }} />, document.getElementById('app'));