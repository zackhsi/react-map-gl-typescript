# :bomb: react-map-gl + create-react-app + typescript

This repository renders a full screen Mapbox map, powered by a Typescript
`create-react-app`—_without ejecting_!

<img width="669" alt="full-screen mapbox" src="https://user-images.githubusercontent.com/806101/42488855-9492c822-83bc-11e8-878e-e7ad6731180a.png">

### Clone the repository

```sh
$ git clone git@github.com:zackhsi/react-map-gl-typescript.git
```

### Create an environment variable file with a Mapbox token

First, make sure you have a [Mapbox account](https://www.mapbox.com/account/).
From the [Mapbox account](https://www.mapbox.com/account/) page, create an
access token and copy it. Then, create a `.env.development.local` file at the
root of your repository.  `create-react-app` will load it into `process.env`,
as documented
[here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

```sh
$ cat << EOF > .env.development.local
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
EOF
```

### Install node modules

```sh
$ npm i
```

### Start the app

```sh
$ npm run start
```
