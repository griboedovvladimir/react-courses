import {ChartMaker} from './ChartMaker.js';
const data = Object.entries({
    'Jan': 1.989,
    'Feb': 1.976,
    'Mar': 1.958,
    'Apr': 2.001,
    'May': 2.008,
    'Jun': 2.003,
    'Jul': 1.984,
    'Aug': 2.041,
    'Sep': 2.117,
    'Oct': 2.117,
});
const canvas = document.getElementById('chart');

new ChartMaker(data, canvas);
