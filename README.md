# mvc-express-ts-starter-pack

A full-stack Typescript starter pack for developing an MVC Express application

## Features

- [X] Full implemntation and support for Typescript
- [ ] Support SCSS/CSS
- [X] Server poswered by ExpressJS
- [ ] MVC pattern
- [ ] Project bundle and configurations (Babel/Webpack/EditorConfig)
- [ ] Logger
- [ ] Type-checking and linting
- [ ] Testing
- [ ] CI/CD
- [ ] Deployment
- [ ] Docker (Containerization)

## Prerequisites

This starter is used to save my time for configuring the setup over and over again so this is my personal preference. If you want to modify, continue reading to see what to change up to your desires.

This starter pack uses three core softwares below: 

1. Install [NodeJS](https://nodejs.org/en/).

2. Install [VSCode](https://code.visualstudio.com/).

3. Install [Docker](https://www.docker.com/).

## Dependencies

List of packages that power this starter pack. Please read them carefully since deleting one can lead others to malfunctionalities.

`normal`: Dependencies that actually runs
`dev`: Dependencies that serve the developlemnt process only

| Package| Type | Description |
| --- | --- | --- |
| `express` | normal | NodeJS server  |
| `@types` | dev | Type-definitions for `express` |

## Scripts

List of scripts that help developing and running the pack. There are many scripts and some of them have similarities so make sure you check them.

| Script | Full command | Description |
| --- | --- | --- |
| `start` | `tsc` | Compile Typescript with TS compiler |

## Deployment (in progress)

This pack will be deployed and served in Heroku.
