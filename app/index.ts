/// <reference path="./imports/jquery.d.ts" />
/// <reference path="./imports/bootstrap.d.ts" />
/// <reference path="./imports/browser-http.d.ts" />


import JQuery = require('jquery');
window['jQuery'] = window['$'] = JQuery;		// Twitter Bootstrap needs jQuery at global object. Don't use that!


import Bootstrap = require('bootstrap');

[Bootstrap]			// Use these variables somehow so imports will be compiled


// configure http
import Http = require('./Http');
Http.setup();
