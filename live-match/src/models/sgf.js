const mongoose = require('mongoose');

const convert = (colour, move) => {
    const x = String.fromCharCode('a'.charCodeAt(0) + move.x); 
    const y = String.fromCharCode('a'.charCodeAt(0) + move.y);
    const c = (colour) ? 'W' : 'B';
    return `;${c}[${x}${y}]`;
}

const create = (options) => `\
(;
GM[1]
FF[4]
AP[MSGO]
DT[${new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'})}]
RU[Japanese]
PB[${options.blackPlayer}]
PW[${options.whitePlayer}]
SZ[${options.size}]
`;

module.exports = { create, convert }