import './index.css'

import numeral from 'numeral';
const val = numeral(105000).format('$0,0.00');

console.log(`pay  ${val} dollars`); 
