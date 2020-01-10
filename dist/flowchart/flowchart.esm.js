import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-2198c2d1.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["x-flowchart",[[1,"x-flowchart",{"treeArray":[16],"tree":[1]}]]]], options);
});
