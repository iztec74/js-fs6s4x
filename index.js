// Import stylesheets
import './style.css';
import './test.json';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var fs = require('fs');
const data = fs.readFileSync('./test.json', 'utf8');

const obj = JSON.parse(data);
console.log(obj['family_info']['dad']);

var dautherLength = obj['family_info']['child'].length;
console.log(dautherLength);

console.log(obj.family_info.child);
for (i = 0; i < dautherLength; i++) {
  // console.log(obj.family_info.child[1]);
}
