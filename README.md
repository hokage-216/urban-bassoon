# urban-bassoon

The best text editor for developers!

![Urban Bassoon Snippet](./assets/)

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Technologies](#technologies)
- [Questions](#questions)
- [Liscence](#liscence)

## Description

Urban-Bassoon is a Progressive Web Application (PWA) designed to function as an offline-capable text editor. This single-page application provides a seamless experience for creating and editing notes or code snippets, whether you're connected to the internet or not. Utilizing modern web technologies, Urban-Bassoon ensures that your data is persisted using various techniques, including IndexedDB, making it robust and reliable. With a clean and intuitive user interface, Urban-Bassoon is the ideal tool for developers who need a versatile and dependable text editor.

## Usage

### Prerequisites

> **_NOTE:_**
> This package assumes you already have Node.js and npm installed. If you don't, [download Node.js](https://nodejs.org/en/download) first then come back to these installation steps.

### Live Production:

A live deployment of the application can be found [here](#).

### Local Development:

1. Open your terminal and clone the github repo:

```
git clone https://github.com/hokage-216/urban-bassoon.git
```

2. 'cd' into the folder:

```
cd urban-bassoon
```

3. Then run this command to install the required packages:

```
npm install
```

## Usage

After installing required packages, you can run the application in development mode:

```
npm run start:dev
```

For production mode, use:

```
npm run build
npm start
```

The program will start the backend server and serve the client application, allowing you to use the text editor.

## Technologies

- **Frontend**: HTML5, JavaScript, CSS, Webpack, Workbox, Babel
- **Backend**:  Node.js, Express.js
- **Database**: INdexedDB (via idb library)
- **PWA**: Service Workers, Web App Manifest
- **Version Control**: Git and GitHub
- **Dev Tools**: Concurrently, Nodemon

## Questions

If you have any questions about the repo, open an issue or contact me directly at berrylevente@hotmail.com.

To view more of my work [click here](https://github.com/hokage-216/).

## Liscence

Licensed under the MIT license. To view the license terms [click here](https://opensource.org/licenses/MIT).