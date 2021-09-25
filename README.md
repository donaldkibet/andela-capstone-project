# capstone-teamwork-project

[![Node.js CI](https://github.com/donaldkibet/andela-capstone-project/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/donaldkibet/andela-capstone-project/actions/workflows/node.js.yml/badge.svg?branch=master)

![Badges](badges/badge-branches.svg) ![Badges](badges/badge-functions.svg) ![Badges](badges/badge-lines.svg)

This is the frontend react application for teamwork projects

### Prerequisites

* [Node](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/downloads)
* [capstone-teamwork-project](https://github.com/donaldkibet/andela-capstone-project.git)

### Setup capstone-project-react-app

1. Clone the [capstone-teamwork-project](https://github.com/donaldkibet/andela-capstone-project.git) repo.

```sh
git clone https://github.com/donaldkibet/andela-capstone-project.git
```

2. Install dependencies in the root directory of the repo.
- make sure you are using a relatively recent version of node, LTE is 14.x.x, you can type node -version to find your current version. I would recommend using n to manage your node version: see https://www.npmjs.com/package/ and yarn 
```sh
yarn or npm install
```

3. Run the module from `localhost:3000`.

```sh
 yarn start
```

4. This project supports Docker, to run this project using docker simply run the following command,
    the above builds the image and runs the container

```sh

docker-compose up -d

```

The above builds the image and runs the project on port 80, on your browser navigate to [http://localhost](http://localhost)