# React-Static - TypeScript Template

To use this template, run `react-static create` and use the `typescript` template.

## Path Aliases for Absolute Imports

`react-static-typescript-plugin` supports path aliases [since v3.1](https://github.com/react-static/react-static/pull/963#issuecomment-455596728). It has been set up in this template.

```js
// tsconfig.json
{
  // ...
    "paths": {
      "@components/*": ["src/components/*"]
    },
  // ...
}

// this works in your React app
import FancyDiv from '@components/FancyDiv'
```

## Blog

The blog section is generated by parsing all top level markdown files from the `wiki`, which is a submodule, being fed by the wiki
section in github. Unless explicitly listed in `specialPages`, all markdown files will be listed there. For top-level pages, 
like Home, Milestones,...
There they have to be manually added to the dictionary, that is retuned by `getRoutes` in the `static.conf.js`
