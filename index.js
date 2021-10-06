import 'normalize.css';
import './js/bootstrap-5.1.1/dist/css/bootstrap.min.css';
import './styles.scss';

import { createPopper } from '@popperjs/core';
import './js/bootstrap-5.1.1/dist/js/bootstrap.bundle.min';
import {
    helloWorld
} from './js/hello-world.js';
import anchorLinks from './js/anchor-links';
import tabIndex from './js/tab-index';
import confetti from 'canvas-confetti';
import mobileMenu from './js/mobile-menu';



helloWorld();
anchorLinks();
tabIndex();
mobileMenu();
createPopper();

confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
})({
    particleCount: 200,
    spread: 200
});