import { addParameters, configure } from '@storybook/react';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach((filename) => {
        console.log(filename);
        req(filename);
    });
}

// Option defaults:
addParameters({
  options: {
        isFullscreen: false,
        showNav: true,
        showPanel: false,
        panelPosition: 'bottom',
        sidebarAnimations: true
  },
});

configure(loadStories, module);
