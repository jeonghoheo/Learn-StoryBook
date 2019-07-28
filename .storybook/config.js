import { configure, addParameters } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "pink", value: "#ff00ff" },
    { name: "black", value: "#000000" }
  ]
});

configure(loadStories, module);
