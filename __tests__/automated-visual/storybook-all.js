import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

import { JSDOM } from "jsdom"

global.dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = {
    ...dom.window.document,
    getElementById: id => { innerHTML: "" },
    createElement: () => {}
}
global.navigator = { ...global.window.navigator, userAgent: 'node' };



initStoryshots({ 
    test: imageSnapshot(),
    storyKindRegex: /^(.*?(\bvisual\b)[^$]*)$/
 });