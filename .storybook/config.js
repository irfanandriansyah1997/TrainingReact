import { configure } from '@storybook/react';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach((filename) => {
        console.log(filename);
        req(filename);
    });
}

configure(loadStories, module);
