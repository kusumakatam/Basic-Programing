//external file contain reusable code
//imported into other js file
//ca contain variable, classes,function...
//introduce as a part of ecmascript 2015 update es6

import {PI,getCircumference,getArea,getVolume} from './mathfun.js';
console.log(PI);
const circum=getCircumference(10);
const area=getArea(10);
console.log(circum);
console.log(area);
console.log(getVolume(4));