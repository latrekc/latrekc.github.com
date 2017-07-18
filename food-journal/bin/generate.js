#!/usr/bin/env node
const fs = require('fs');
const list = fs.readdirSync('photos').filter(i => !i.match(/_thumb/)).sort().reverse();

fs.writeFileSync('list.js', 'var list = ' + JSON.stringify(list,null,"\t"), 'utf-8');