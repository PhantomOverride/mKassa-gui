# MKassaGui

Hey there! This is the Cash Register system for Mammas Källare! It's something that a bunch of overly-caffinated gamers hacked together in order to learn more about Angular and Node.JS.

# Infrastructure
Backend server should be running mKassa. Frontend can be run on a server, or on your local machine. Most likely you want to run it locally so it can connect to your printer.

Point the services for product and transaction so they talk the the server. Default is localhost.

# Running standalone
If you intend to run it locally, one way would be to use the simpleserver.py script. Simply build, jump into the `dist` folder, and run: ```../simpleserver.py```. That will host everything on `localhost:1234`.

You can of course host it through any web server. Just make sure to set it up so angular is happy (always serve index.html unless the file requested exists).

# Printing
Install the qz-tray thing. In the settings file, make sure to override the certificate:
```authcert.override=/path/mKassa-gui/src/assets/cert.pem```

# Configuration
Edit the services to use the correct destination, e.g. by modifying localhost to whatever domain is correct:
```private productsUrl = 'http://localhost:3000/product';```

# Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# I'm a noob and I want to play with this
This is mostly a few hints to myself when I need to fix something.
1. Install NodeJS. Google how to do that. Don't install it via the repo, as that version is outdated.
2. Install Angular (CLI). It's something like `npm install -g @angular-cli` or something like that. Just Google it.
3. Install mongodb. Google on how to do that. Don't install it via the repo, as that version is outdated.
4. Create the /data/db/ or whatever mongod wants
5. Start the mongodb server by running `mongod`. If it doesn't work, just read the error messages and make it happy.
6. Start the backend server. Go into mKassa and run `npm start`. If it doesn't work, make sure the dependencies are installed by running `npm install`.
7. Start the frontend dev server. Go into mKassa-gui and run `ng serve`. If it doesn't work, make sure the dependencies are installed by running `npm install`.