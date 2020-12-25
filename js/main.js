import closeLt from './close_letter.js';
import countDown from './countDown.js';
import openLt from './open_letter.js';
const d = document; 
d.addEventListener('DOMContentLoaded',(e) =>{
countDown('ctn-time-back','Dec 24, 2020 22:00:00','preview.js','preview.css')
openLt('lt.css')
closeLt('preview.css')
})

