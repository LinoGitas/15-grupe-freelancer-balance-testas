"use strict"


/* Html generators */

import DataRender from './components/html-render/DataRender.js';

import data from './data.js';
new DataRender( '.table-content', '.summary-list', data);
