# mvc-express-ts-starter-pack

A full-stack Typescript starter pack for developing an MVC Express application

## Features

- [X] Full implemntation and support for Typescript
- [X] Support SCSS/CSS
- [X] Template engine with EJS
- [X] Server poswered by ExpressJS
- [X] MVC pattern
- [X] Support static assets
- [X] Views
- [X] Fonts
- [ ] Images
- [ ] Favicon
- [ ] Theme
- [ ] SEO
- [ ] Responsive
- [ ] Forms
- [X] Routers
- [X] Project bundle and configurations (Babel/Webpack/EditorConfig) (still need more updates)
- [ ] Logger
- [ ] Type-checking and linting
- [ ] Testing
- [ ] CI/CD
- [ ] Deployment (production ready)
- [ ] Docker (Containerization)

## Prerequisites

This starter is used to save my time for configuring the setup over and over again so this is my personal preference. If you want to modify, continue reading to see what to change up to your desires.

This starter pack uses three core softwares below:

1. Install [NodeJS](https://nodejs.org/en/).

2. Install [VSCode](https://code.visualstudio.com/).

3. Install [Docker](https://www.docker.com/).

## Dependencies

List of core packages that power this starter pack. Please read them carefully since deleting one can lead others to malfunctionalities.

`normal`: Dependencies that actually runs
`dev`: Dependencies that serve the developlemnt process only

| Package| Type | Description |
| --- | --- | --- |
| `express` | normal | NodeJS server  |
| `ejs` | normal | Template engine for Express |
| `webpack` | dev | Bundler for Typescript |
| `dotenv` | normal | Environment configuration loader |
| `nodemon` | dev | Node monitor |
| `@babel/core` | dev | Transpile typescript to ES5 |
| `@types/...` | dev | Type definition for all packages  |

## Scripts

List of scripts that help developing and running the pack. There are many scripts and some of them have similarities so make sure you check them.

| Script | Full command | Description |
| --- | --- | --- |
| `watch:server` | `nodemon dist/main.bundle.js` | Listen to changes in the bundled file, which is the main file for running |
| `watch:compiler` | `webpack --watch` | Listen to changes in `src/index.ts`, which will compile to `dist/main.bundle.js` |
| `watch` | `concurrently -k -p "[{name}]" -n "Webpack,Server" -c "cyan.bold, green.bold" "yarn run watch:compiler" "yarn run watch:server"` | Combine all `watch:` commands |

## Deployment (in progress)

This pack will be deployed and served in Heroku.
