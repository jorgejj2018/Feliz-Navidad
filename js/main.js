import countDown from './countDown.js';
import openLt from './open_letter.js';
const d = document; 
d.addEventListener('DOMContentLoaded',(e) =>{
countDown('ctn-time-back','Dec 25, 2020 00:00:00','preview.js','preview.css')
openLt()
})

