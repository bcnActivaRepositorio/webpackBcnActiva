# Webpack

Exercise using [webpack](https://github.com/webpack/webpack/releases) __5.11.1__

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Concepts](#concepts)
4. [Contributing](#contributing)
5. [Support](#support)
6. [Core Team](#core-team)
7. [Sponsoring](#sponsoring)


<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save-dev webpack
```

Install with yarn:

```bash
yarn add webpack --dev
```

<h2 align="center">Introduction</h2>

webpack is a bundler for modules. The main purpose is to bundle JavaScript
files for usage in a browser, yet it is also capable of transforming, bundling,
or packaging just about any resource or asset.

**TL;DR**

- Bundles [ES Modules](https://www.2ality.com/2014/09/es6-modules-final.html), [CommonJS](http://wiki.commonjs.org/), and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules (even combined).
- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
- Dependencies are resolved during compilation, reducing the runtime size.
- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
- Highly modular plugin system to do whatever else your application requires.

### Get Started

Check out webpack's quick [**Get Started**](https://webpack.js.org/guides/getting-started) guide and the [other guides](https://webpack.js.org/guides/).

### Browser Compatibility

webpack supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).
webpack also needs `Promise` for `import()` and `require.ensure()`. If you want to support older browsers, you will need to [load a polyfill](https://webpack.js.org/guides/shimming/) before using these expressions.

<h2 align="center">Concepts</h2>

### [Plugins](https://webpack.js.org/plugins/)

webpack has a [rich plugin
interface](https://webpack.js.org/plugins/). Most of the features
within webpack itself use this plugin interface. This makes webpack very
**flexible**.

|                   Name                    |       Status       |    Install Size     | Description                                                                             |
| :---------------------------------------: | :----------------: | :-----------------: | :-------------------------------------------------------------------------------------- |
|    [mini-css-extract-plugin][mini-css]    |  ![mini-css-npm]   |  ![mini-css-size]   | Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. |
| [compression-webpack-plugin][compression] | ![compression-npm] | ![compression-size] | Prepares compressed versions of assets to serve them with Content-Encoding              |
|        [i18n-webpack-plugin][i18n]        |    ![i18n-npm]     |    ![i18n-size]     | Adds i18n support to your bundles                                                       |
|    [html-webpack-plugin][html-plugin]     | ![html-plugin-npm] | ![html-plugin-size] | Simplifies creation of HTML files (`index.html`) to serve your bundles                  |
|  [extract-text-webpack-plugin][extract]   |   ![extract-npm]   |   ![extract-size]   | Extract text from a bundle, or bundles, into a separate file                            |

[common-npm]: https://img.shields.io/npm/v/webpack.svg
[extract]: https://github.com/webpack-contrib/extract-text-webpack-plugin
[extract-npm]: https://img.shields.io/npm/v/extract-text-webpack-plugin.svg
[extract-size]: https://packagephobia.com/badge?p=extract-text-webpack-plugin
[mini-css]: https://github.com/webpack-contrib/mini-css-extract-plugin
[mini-css-npm]: https://img.shields.io/npm/v/mini-css-extract-plugin.svg
[mini-css-size]: https://packagephobia.com/badge?p=mini-css-extract-plugin
[component]: https://github.com/webpack-contrib/component-webpack-plugin
[component-npm]: https://img.shields.io/npm/v/component-webpack-plugin.svg
[component-size]: https://packagephobia.com/badge?p=component-webpack-plugin
[compression]: https://github.com/webpack-contrib/compression-webpack-plugin
[compression-npm]: https://img.shields.io/npm/v/compression-webpack-plugin.svg
[compression-size]: https://packagephobia.com/badge?p=compression-webpack-plugin
[i18n]: https://github.com/webpack-contrib/i18n-webpack-plugin
[i18n-npm]: https://img.shields.io/npm/v/i18n-webpack-plugin.svg
[i18n-size]: https://packagephobia.com/badge?p=i18n-webpack-plugin
[html-plugin]: https://github.com/jantimon/html-webpack-plugin
[html-plugin-npm]: https://img.shields.io/npm/v/html-webpack-plugin.svg
[html-plugin-size]: https://packagephobia.com/badge?p=html-webpack-plugin

### [Loaders](https://webpack.js.org/loaders/)

webpack enables the use of loaders to preprocess files. This allows you to bundle
**any static resource** way beyond JavaScript. You can easily [write your own
loaders](https://webpack.js.org/api/loaders/) using Node.js.

Loaders are activated by using `loadername!` prefixes in `require()` statements,
or are automatically applied via regex from your webpack configuration.

#### Files

|        Name         |   Status    | Install Size | Description                                                                               |
| :-----------------: | :---------: | :----------: | :---------------------------------------------------------------------------------------- |
|  [raw-loader][raw]  | ![raw-npm]  | ![raw-size]  | Loads raw content of a file (utf-8)                                                       |
|  [val-loader][val]  | ![val-npm]  | ![val-size]  | Executes code as module and considers exports as JS code                                  |
|  [url-loader][url]  | ![url-npm]  | ![url-size]  | Works like the file loader, but can return a Data Url if the file is smaller than a limit |
| [file-loader][file] | ![file-npm] | ![file-size] | Emits the file into the output folder and returns the (relative) url                      |

[raw]: https://github.com/webpack-contrib/raw-loader
[raw-npm]: https://img.shields.io/npm/v/raw-loader.svg
[raw-size]: https://packagephobia.com/badge?p=raw-loader
[val]: https://github.com/webpack-contrib/val-loader
[val-npm]: https://img.shields.io/npm/v/val-loader.svg
[val-size]: https://packagephobia.com/badge?p=val-loader
[url]: https://github.com/webpack-contrib/url-loader
[url-npm]: https://img.shields.io/npm/v/url-loader.svg
[url-size]: https://packagephobia.com/badge?p=url-loader
[file]: https://github.com/webpack-contrib/file-loader
[file-npm]: https://img.shields.io/npm/v/file-loader.svg
[file-size]: https://packagephobia.com/badge?p=file-loader

#### JSON

|                                                                                Name                                                                                |    Status    | Install Size  | Description                             |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------: | :-----------: | :-------------------------------------- |
|             <a href="https://github.com/webpack-contrib/json-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/json.svg"></a>             | ![json-npm]  | ![json-size]  | Loads a JSON file (included by default) |
| <a href="https://github.com/webpack-contrib/json5-loader"><img width="48" height="10.656" src="https://cdn.rawgit.com/json5/json5-logo/master/json5-logo.svg"></a> | ![json5-npm] | ![json5-size] | Loads and transpiles a JSON 5 file      |
|             <a href="https://github.com/awnist/cson-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/coffeescript.svg"></a>              | ![cson-npm]  | ![cson-size]  | Loads and transpiles a CSON file        |

[json-npm]: https://img.shields.io/npm/v/json-loader.svg
[json-size]: https://packagephobia.com/badge?p=json-loader
[json5-npm]: https://img.shields.io/npm/v/json5-loader.svg
[json5-size]: https://packagephobia.com/badge?p=json5-loader
[cson-npm]: https://img.shields.io/npm/v/cson-loader.svg
[cson-size]: https://packagephobia.com/badge?p=cson-loader

#### Transpiling

|                                                                            Name                                                                            |          Status           |        Install Size        | Description                                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------: | :------------------------: | :--------------------------------------------------------------------------------------------------- |
|                                         <a href="https://github.com/webpack-contrib/script-loader">`<script>`</a>                                          |       ![script-npm]       |       ![script-size]       | Executes a JavaScript file once in global context (like in script tag), `require()`s are not parsed  |
| <a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a> |       ![babel-npm]        |       ![babel-size]        | Loads ES2015+ code and transpiles to ES5 using <a href="https://github.com/babel/babel">Babel</a>    |
|       <a href="https://github.com/jupl/traceur-loader"><img width="48" height="48" src="https://google.github.com/traceur-compiler/logo/tc.svg"></a>       |      ![traceur-npm]       |      ![traceur-size]       | Loads ES2015+ code and transpiles to ES5 using [Traceur](https://github.com/google/traceur-compiler) |
|  <a href="https://github.com/TypeStrong/ts-loader"><img width="48" height="48" src="https://cdn.rawgit.com/Microsoft/TypeScript/master/doc/logo.svg"></a>  |        ![type-npm]        |        ![type-size]        | Loads TypeScript like JavaScript                                                                     |
|                                   [`awesome-typescript-loader`](https://github.com/s-panferov/awesome-typescript-loader)                                   | ![awesome-typescript-npm] | ![awesome-typescript-size] | Awesome TypeScript loader for webpack                                                                |
|    <a href="https://github.com/webpack-contrib/coffee-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/coffeescript.svg"></a>    |       ![coffee-npm]       |       ![coffee-size]       | Loads CoffeeScript like JavaScript                                                                   |

[script-npm]: https://img.shields.io/npm/v/script-loader.svg
[script-size]: https://packagephobia.com/badge?p=script-loader
[babel-npm]: https://img.shields.io/npm/v/babel-loader.svg
[babel-size]: https://packagephobia.com/badge?p=babel-loader
[traceur-npm]: https://img.shields.io/npm/v/traceur-loader.svg
[traceur-size]: https://packagephobia.com/badge?p=traceur-loader
[coffee-npm]: https://img.shields.io/npm/v/coffee-loader.svg
[coffee-size]: https://packagephobia.com/badge?p=coffee-loader
[type-npm]: https://img.shields.io/npm/v/ts-loader.svg
[type-size]: https://packagephobia.com/badge?p=ts-loader
[awesome-typescript-npm]: https://img.shields.io/npm/v/awesome-typescript-loader.svg
[awesome-typescript-size]: https://packagephobia.com/badge?p=awesome-typescript-loader

#### Templating

|                                                                                 Name                                                                                  |     Status      |   Install Size   | Description                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------: | :--------------: | :-------------------------------------------------------------------------------------- |
|              <a href="https://github.com/webpack-contrib/html-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/html5.svg"></a>              |   ![html-npm]   |   ![html-size]   | Exports HTML as string, requires references to static resources                         |
| <a href="https://github.com/pugjs/pug-loader"><img width="48" height="48" src="https://cdn.rawgit.com/pugjs/pug-logo/master/SVG/pug-final-logo-_-colour-128.svg"></a> |   ![pug-npm]    |   ![pug-size]    | Loads Pug templates and returns a function                                              |
|              <a href="https://github.com/peerigon/markdown-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/markdown.svg"></a>              |    ![md-npm]    |    ![md-size]    | Compiles Markdown to HTML                                                               |
|               <a href="https://github.com/posthtml/posthtml-loader"><img width="48" height="48" src="https://posthtml.github.io/posthtml/logo.svg"></a>               | ![posthtml-npm] | ![posthtml-size] | Loads and transforms a HTML file using [PostHTML](https://github.com/posthtml/posthtml) |
|           <a href="https://github.com/pcardune/handlebars-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/handlebars-1.svg"></a>           |   ![hbs-npm]    |   ![hbs-size]    | Compiles Handlebars to HTML                                                             |

[html-npm]: https://img.shields.io/npm/v/html-loader.svg
[html-size]: https://packagephobia.com/badge?p=html-loader
[pug-npm]: https://img.shields.io/npm/v/pug-loader.svg
[pug-size]: https://packagephobia.com/badge?p=pug-loader
[jade-npm]: https://img.shields.io/npm/v/jade-loader.svg
[jade-size]: https://packagephobia.com/badge?p=jade-loader
[md-npm]: https://img.shields.io/npm/v/markdown-loader.svg
[md-size]: https://packagephobia.com/badge?p=markdown-loader
[posthtml-npm]: https://img.shields.io/npm/v/posthtml-loader.svg
[posthtml-size]: https://packagephobia.com/badge?p=posthtml-loader
[hbs-npm]: https://img.shields.io/npm/v/handlebars-loader.svg
[hbs-size]: https://packagephobia.com/badge?p=handlebars-loader

#### Styling

|                                                                     Name                                                                      |     Status     |  Install Size   | Description                                                              |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :------------: | :-------------: | :----------------------------------------------------------------------- |
|                                    <a href="https://github.com/webpack-contrib/style-loader">`<style>`</a>                                    |  ![style-npm]  |  ![style-size]  | Add exports of a module as style to DOM                                  |
|  <a href="https://github.com/webpack-contrib/css-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>   |   ![css-npm]   |   ![css-size]   | Loads CSS file with resolved imports and returns CSS code                |
| <a href="https://github.com/webpack-contrib/less-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/less-63.svg"></a> |  ![less-npm]   |  ![less-size]   | Loads and compiles a LESS file                                           |
| <a href="https://github.com/webpack-contrib/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>  |  ![sass-npm]   |  ![sass-size]   | Loads and compiles a Sass/SCSS file                                      |
|     <a href="https://github.com/shama/stylus-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/stylus.svg"></a>      | ![stylus-npm]  | ![stylus-size]  | Loads and compiles a Stylus file                                         |
|   <a href="https://github.com/postcss/postcss-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/postcss.svg"></a>    | ![postcss-npm] | ![postcss-size] | Loads and transforms a CSS/SSS file using [PostCSS](https://postcss.org) |

[style-npm]: https://img.shields.io/npm/v/style-loader.svg
[style-size]: https://packagephobia.com/badge?p=style-loader
[css-npm]: https://img.shields.io/npm/v/css-loader.svg
[css-size]: https://packagephobia.com/badge?p=css-loader
[less-npm]: https://img.shields.io/npm/v/less-loader.svg
[less-size]: https://packagephobia.com/badge?p=less-loader
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg
[sass-size]: https://packagephobia.com/badge?p=sass-loader
[stylus-npm]: https://img.shields.io/npm/v/stylus-loader.svg
[stylus-size]: https://packagephobia.com/badge?p=stylus-loader
[postcss-npm]: https://img.shields.io/npm/v/postcss-loader.svg
[postcss-size]: https://packagephobia.com/badge?p=postcss-loader

#### Linting & Testing

|                                                                      Name                                                                      |    Status     |  Install Size  | Description                             |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: | :------------: | :-------------------------------------- |
|  <a href="https://github.com/webpack-contrib/mocha-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/mocha.svg"></a>  | ![mocha-npm]  | ![mocha-size]  | Tests with mocha (Browser/NodeJS)       |
| <a href="https://github.com/webpack-contrib/eslint-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/eslint.svg"></a> | ![eslint-npm] | ![eslint-size] | PreLoader for linting code using ESLint |
|  <a href="https://github.com/webpack-contrib/jshint-loader"><img width="48" height="20.64" src="https://jshint.com/res/jshint-dark.png"></a>   | ![jshint-npm] | ![jshint-size] | PreLoader for linting code using JSHint |

[mocha-npm]: https://img.shields.io/npm/v/mocha-loader.svg
[mocha-size]: https://packagephobia.com/badge?p=mocha-loader
[eslint-npm]: https://img.shields.io/npm/v/eslint-loader.svg
[eslint-size]: https://packagephobia.com/badge?p=eslint-loader
[jshint-npm]: https://img.shields.io/npm/v/jshint-loader.svg
[jshint-size]: https://packagephobia.com/badge?p=jshint-loader
[jscs-npm]: https://img.shields.io/npm/v/jscs-loader.svg
[jscs-size]: https://packagephobia.com/badge?p=jscs-loader

#### Frameworks

|                                                                             Name                                                                             |     Status     |  Install Size   | Description                                                                                            |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------: | :-------------: | :----------------------------------------------------------------------------------------------------- |
|               <a href="https://github.com/vuejs/vue-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/vue-9.svg"></a>               |   ![vue-npm]   |   ![vue-size]   | Loads and compiles Vue Components                                                                      |
|   <a href="https://github.com/webpack-contrib/polymer-webpack-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/polymer.svg"></a>   | ![polymer-npm] | ![polymer-size] | Process HTML & CSS with preprocessor of choice and `require()` Web Components like first-class modules |
| <a href="https://github.com/TheLarkInn/angular2-template-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/angular-icon-1.svg"></a> | ![angular-npm] | ![angular-size] | Loads and compiles Angular 2 Components                                                                |
|              <a href="https://github.com/riot/webpack-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/riot.svg"></a>              |  ![riot-npm]   |  ![riot-size]   | Riot official webpack loader                                                                           |

[vue-npm]: https://img.shields.io/npm/v/vue-loader.svg
[vue-size]: https://packagephobia.com/badge?p=vue-loader
[polymer-npm]: https://img.shields.io/npm/v/polymer-webpack-loader.svg
[polymer-size]: https://packagephobia.com/badge?p=polymer-webpack-loader
[angular-npm]: https://img.shields.io/npm/v/angular2-template-loader.svg
[angular-size]: https://packagephobia.com/badge?p=angular2-template-loader
[riot-npm]: https://img.shields.io/npm/v/riot-tag-loader.svg
[riot-size]: https://packagephobia.com/badge?p=riot-tag-loader

### Performance

webpack uses async I/O and has multiple caching levels. This makes webpack fast
and incredibly **fast** on incremental compilations.

### Module Formats

webpack supports ES2015+, CommonJS and AMD modules **out of the box**. It performs clever static
analysis on the AST of your code. It even has an evaluation engine to evaluate
simple expressions. This allows you to **support most existing libraries** out of the box.

### [Code Splitting](https://webpack.js.org/guides/code-splitting/)

webpack allows you to split your codebase into multiple chunks. Chunks are
loaded asynchronously at runtime. This reduces the initial loading time.

### [Optimizations](https://webpack.js.org/guides/production-build/)

webpack can do many optimizations to **reduce the output size of your
JavaScript** by deduplicating frequently used modules, minifying, and giving
you full control of what is loaded initially and what is loaded at runtime
through code splitting. It can also make your code chunks **cache
friendly** by using hashes.

<h2 align="center">Contributing</h2>

**We want contributing to webpack to be fun, enjoyable, and educational for anyone, and everyone.** We have a [vibrant ecosystem](https://medium.com/webpack/contributors-guide/home) that spans beyond this single repo. We welcome you to check out any of the repositories in [our organization](https://github.com/webpack) or [webpack-contrib organization](https://github.com/webpack-contrib) which houses all of our loaders and plugins.

Contributions go far beyond pull requests and commits. Although we love giving you the opportunity to put your stamp on webpack, we also are thrilled to receive a variety of other contributions including:

- [Documentation](https://github.com/webpack/webpack.js.org) updates, enhancements, designs, or bugfixes
- Spelling or grammar fixes
- README.md corrections or redesigns
- Adding unit, or functional tests
- Triaging GitHub issues -- especially determining whether an issue still persists or is reproducible.
- [Searching #webpack on twitter](https://twitter.com/search?q=webpack) and helping someone else who needs help
- Teaching others how to contribute to one of the many webpack's repos!
- [Blogging, speaking about, or creating tutorials](https://github.com/webpack-contrib/awesome-webpack) about one of webpack's many features.
- Helping others in our webpack [gitter channel](https://gitter.im/webpack/webpack).

To get started have a look at our [documentation on contributing](https://github.com/webpack/webpack/blob/master/CONTRIBUTING.md).

If you are worried or don't know where to start, you can **always** reach out to [Sean Larkin (@TheLarkInn) on Twitter](https://twitter.com/thelarkinn) or simply submit an issue and a maintainer can help give you guidance!

We have also started a series on our [Medium Publication](https://medium.com/webpack) called [The Contributor's Guide to webpack](https://medium.com/webpack/contributors-guide/home). We welcome you to read it and post any questions or responses if you still need help.

_Looking to speak about webpack?_ We'd **love** to review your talk abstract/CFP! You can email it to webpack [at] opencollective [dot] com and we can give pointers or tips!!!

<h3 align="center">Creating your own plugins and loaders</h3>

If you create a loader or plugin, we would <3 for you to open source it, and put it on npm. We follow the `x-loader`, `x-webpack-plugin` naming convention.

<h2 align="center">Support</h2>

We consider webpack to be a low-level tool used not only individually but also layered beneath other awesome tools. Because of its flexibility, webpack isn't always the _easiest_ entry-level solution, however we do believe it is the most powerful. That said, we're always looking for ways to improve and simplify the tool without compromising functionality. If you have any ideas on ways to accomplish this, we're all ears!

If you're just getting started, take a look at [our new docs and concepts page](https://webpack.js.org/concepts/). This has a high level overview that is great for beginners!!

Looking for webpack 1 docs? Please check out the old [wiki](https://github.com/webpack/docs/wiki/contents), but note that this deprecated version is no longer supported.

If you want to discuss something or just need help, [here is our Gitter room](https://gitter.im/webpack/webpack) where there are always individuals looking to help out!

If you are still having difficulty, we would love for you to post
a question to [StackOverflow with the webpack tag](https://stackoverflow.com/tags/webpack). It is much easier to answer questions that include your webpack.config.js and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

If you are twitter savvy you can tweet #webpack with your question and someone should be able to reach out and help also.

If you have discovered a 🐜 or have a feature suggestion, feel free to create an issue on Github.

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack?ref=badge_large)

<h2 align="center">Core Team</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/sokra.png?s=150">
        <br>
        <a href="https://github.com/sokra">Tobias Koppers</a>
        <p>Core</p>
        <br>
        <p>Founder of webpack</p>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/jhnns.png?s=150">
        <br>
        <a href="https://github.com/jhnns">Johannes Ewald</a>
        <p>Loaders &amp; Plugins</p>
        <br>
        <p>Early adopter of webpack</p>
      </td>
      <td align="center" width="20%" valign="top">
        <img width="150" height="150" src="https://github.com/TheLarkInn.png?s=150">
        <br>
        <a href="https://github.com/TheLarkInn">Sean T. Larkin</a>
        <p>Public Relations</p>
        <br>
        <p>Founder of the core team</p>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/spacek33z.png?s=150">
        <br>
        <a href="https://github.com/spacek33z">Kees Kluskens</a>
        <p>Development</p>
        <br>
        <p>Sponsor</p>
        <a href="https://codeyellow.nl/">
          <img height="15px" src="https://cloud.githubusercontent.com/assets/1365881/20286583/ad62eb04-aac7-11e6-9c14-a0fef35b9b56.png">
        </a>
		<br>
      </td>
     </tr>
  </tbody>
</table>

<h2 align="center">Sponsoring</h2>

Most of the core team members, webpack contributors and contributors in the ecosystem do this open source work in their free time. If you use webpack for a serious task, and you'd like us to invest more time on it, please donate. This project increases your income/productivity too. It makes development and applications faster and it reduces the required bandwidth.

This is how we use the donations:

- Allow the core team to work on webpack
- Thank contributors if they invested a large amount of time in contributing
- Support projects in the ecosystem that are of great value for users
- Support projects that are voted most (work in progress)
- Infrastructure cost
- Fees for money handling