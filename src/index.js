// (function(GLOBAL){

//     'use strict';

//     var exterior = require('JsonExtend');
//     var deep = require('DeepExtend');

//     module.exports = {
//         exterior: exterior,
//         deep: deep
//     };

// }(this));

module.exports = function () { 
    
    var exterior = require('JsonExtend');
    var deep = require('DeepExtend');

    return {
        exterior: exterior,
        deep: deep
    }

}