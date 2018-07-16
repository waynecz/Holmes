<br>

<p align="center">
  <img width="280px" src="./holmes-logo.png" alt="logo" />
</p>
<br>

<p align="center">
  <img alt="GitHub release" src="https://img.shields.io/badge/release-v1.0.0-orange.svg?style=for-the-badge"/>
  <img alt="koa" src="https://img.shields.io/badge/koa-2-green.svg?style=for-the-badge"/>
</p>

<br>

## Intro

- Koa2 with Mongo / Restful apis / Test
- Basic middleware: Error handler / Authorization
- Just write your controllors

<br>

## Usage

```bash
# download boilerplate and unzip it to your project name
wget -O Holmes.zip https://github.com/waynecz/Holmes/archive/master.zip && unzip Holmes.zip && mv Holmes-master {your project name}

# delete .zip file and entry your project
rm Holmes.zip && cd {your-project-name}

# create new one upon link your repo
git init && git remote add origin {your repo address}

# install dependices
yarn || npm i
```

1.  Replace things in [package.json](./package.json) with your own
2.  Start writting your server and:

    ```bash
    # develop
    npm run dev

    # run for production component
    npm run prod

    # test
    npm run test
    ```
