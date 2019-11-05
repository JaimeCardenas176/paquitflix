import { configure } from '@storybook/html';

function loadStories() {
    require('../stories/index.js');
    //you can require as many stories as you need
}
configure(loadStories, module);