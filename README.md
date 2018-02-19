# MKassaGui

Hey there! This is the Cash Register system for Mammas Källare! It's something that a bunch of overly-caffinated gamers hacked together in order to learn more about Angular and Node.JS.

# Infrastructure
Backend server should be running mKassa. Frontend can be run on a server, or on your local machine. Most likely you want to run it locally so it can connect to your printer.

Point the services for product and transaction so they talk the the server. Default is localhost.

# Printing
Install the qz-tray thing. In the settings file, make sure to override the certificate:
```authcert.override=/path/mKassa-gui/src/assets/cert.pem```




## Angular stuffs is below

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
