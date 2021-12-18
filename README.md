## How to run apps

### Frontend

1. Go to app directory `cd packages/frontend`
1. Setup `packages/frontend/.env` file with JWT token (example file: `packages/frontend/.env.example`)
2. Install dependencies `npm install`
3. Start dev server `npm run start`
4. Done
	
### Backend

1. Go to app directory `cd packages/backend`
1. Setup `packages/backend/.env` file with env variables (example file: `packages/backend/.env.example`)
2. Install dependencies `npm install`
3. Start dev server `npm run dev`
4. Done

## Heroku deployment

1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

2. Login - run: 

	`heroku login`

4. Run commands:
	```
	heroku create -a {app-name}
	heroku buildpacks:add -a {app-name} {buildpack}
	heroku buildpacks:add -a {app-name} https://github.com/lstoll/heroku-buildpack-monorepo -i 1
	heroku config:set -a {app-name} APP_BASE={app-path}
	git remote add heroku-{app-name} https://git.heroku.com/{app-name}.git
	git push heroku-{app-name} master
	```

  

	#### Frontend

	  

	`{buildpack}` = `mars/create-react-app`

	  

	#### Backend

	  

	`{buildpack}` = `heroku/nodejs`

	  

	Also set env variables:

	`heroku config:set {env-variable}={value}`

	Variables are in `package/backend/.env.example`