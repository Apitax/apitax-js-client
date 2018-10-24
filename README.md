# apitax-js-client

ApitaxJsClient - JavaScript client for apitax-js-client
The API for the frontend of Apitax
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2
- Package version: 2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install apitax-js-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/apitax-js-client
then install it via:

```shell
    npm install YOUR_USERNAME/apitax-js-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApitaxJsClient = require('apitax-js-client');

var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new ApitaxJsClient.ApiApi()

var driver = "driver_example"; // {String} The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDriverApiCatalog(driver, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/apitax/2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApitaxJsClient.ApiApi* | [**getDriverApiCatalog**](docs/ApiApi.md#getDriverApiCatalog) | **GET** /drivers/{driver}/api/catalog | Retrieve the api catalog
*ApitaxJsClient.ApiApi* | [**getDriverApiStatus**](docs/ApiApi.md#getDriverApiStatus) | **GET** /drivers/{driver}/api/status | Retrieve the status of an api backing a driver
*ApitaxJsClient.ApitaxApi* | [**authenticate**](docs/ApitaxApi.md#authenticate) | **POST** /apitax/auth | Authenticate
*ApitaxJsClient.ApitaxApi* | [**createUser**](docs/ApitaxApi.md#createUser) | **POST** /drivers/{driver}/apitax/users/{user} | Create a new user
*ApitaxJsClient.ApitaxApi* | [**deleteUser**](docs/ApitaxApi.md#deleteUser) | **DELETE** /drivers/{driver}/apitax/users/{user} | Delete a user
*ApitaxJsClient.ApitaxApi* | [**getConfig**](docs/ApitaxApi.md#getConfig) | **GET** /apitax/config | Retrieve the system config
*ApitaxJsClient.ApitaxApi* | [**getLog**](docs/ApitaxApi.md#getLog) | **GET** /apitax/logs/{log} | Retrieve the logs
*ApitaxJsClient.ApitaxApi* | [**getUser**](docs/ApitaxApi.md#getUser) | **GET** /drivers/{driver}/apitax/users/{user} | Retrieve a user
*ApitaxJsClient.ApitaxApi* | [**getUserList**](docs/ApitaxApi.md#getUserList) | **GET** /drivers/{driver}/apitax/users | Retrieve a list of users
*ApitaxJsClient.ApitaxApi* | [**refreshToken**](docs/ApitaxApi.md#refreshToken) | **POST** /apitax/auth/refresh | Refreshes login token using refresh token
*ApitaxJsClient.ApitaxApi* | [**saveUser**](docs/ApitaxApi.md#saveUser) | **PUT** /drivers/{driver}/apitax/users/{user} | Save a user
*ApitaxJsClient.ApitaxApi* | [**systemStatus**](docs/ApitaxApi.md#systemStatus) | **GET** /apitax/status | Retrieve the system status
*ApitaxJsClient.CommandtaxApi* | [**command**](docs/CommandtaxApi.md#command) | **POST** /drivers/{driver}/commandtax/command | Execute a Command
*ApitaxJsClient.DriversApi* | [**getDriverBlacklist**](docs/DriversApi.md#getDriverBlacklist) | **GET** /drivers/{driver}/blacklist | Retrieve the blacklist in the driver
*ApitaxJsClient.DriversApi* | [**getDriverConfig**](docs/DriversApi.md#getDriverConfig) | **GET** /drivers/{driver}/config | Retrieve the config of a loaded driver
*ApitaxJsClient.DriversApi* | [**getDriverList**](docs/DriversApi.md#getDriverList) | **GET** /drivers | Retrieve the catalog of drivers
*ApitaxJsClient.DriversApi* | [**getDriverStatus**](docs/DriversApi.md#getDriverStatus) | **GET** /drivers/{driver}/status | Retrieve the status of a loaded driver
*ApitaxJsClient.DriversApi* | [**getDriverWhitelist**](docs/DriversApi.md#getDriverWhitelist) | **GET** /drivers/{driver}/whitelist | Retrieve the whitelist in the driver
*ApitaxJsClient.ScriptaxApi* | [**createDriverScript**](docs/ScriptaxApi.md#createDriverScript) | **POST** /drivers/{driver}/scriptax/scripts | Create a new script
*ApitaxJsClient.ScriptaxApi* | [**deleteDriverScript**](docs/ScriptaxApi.md#deleteDriverScript) | **DELETE** /drivers/{driver}/scriptax/scripts | Delete a script
*ApitaxJsClient.ScriptaxApi* | [**getDriverScript**](docs/ScriptaxApi.md#getDriverScript) | **GET** /drivers/{driver}/scriptax/scripts | Retrieve the contents of a script
*ApitaxJsClient.ScriptaxApi* | [**getDriverScriptCatalog**](docs/ScriptaxApi.md#getDriverScriptCatalog) | **GET** /drivers/{driver}/scriptax/catalog | Retrieve the script catalog
*ApitaxJsClient.ScriptaxApi* | [**renameDriverScript**](docs/ScriptaxApi.md#renameDriverScript) | **PATCH** /drivers/{driver}/scriptax/scripts | Rename a script
*ApitaxJsClient.ScriptaxApi* | [**saveDriverScript**](docs/ScriptaxApi.md#saveDriverScript) | **PUT** /drivers/{driver}/scriptax/scripts | Save a script


## Documentation for Models

 - [ApitaxJsClient.AuthResponse](docs/AuthResponse.md)
 - [ApitaxJsClient.Command](docs/Command.md)
 - [ApitaxJsClient.ErrorResponse](docs/ErrorResponse.md)
 - [ApitaxJsClient.Execute](docs/Execute.md)
 - [ApitaxJsClient.Response](docs/Response.md)
 - [ApitaxJsClient.Script](docs/Script.md)
 - [ApitaxJsClient.ScriptCreate](docs/ScriptCreate.md)
 - [ApitaxJsClient.ScriptDelete](docs/ScriptDelete.md)
 - [ApitaxJsClient.ScriptRename](docs/ScriptRename.md)
 - [ApitaxJsClient.ScriptSave](docs/ScriptSave.md)
 - [ApitaxJsClient.User](docs/User.md)
 - [ApitaxJsClient.UserAuth](docs/UserAuth.md)
 - [ApitaxJsClient.UserCreate](docs/UserCreate.md)
 - [ApitaxJsClient.UserDelete](docs/UserDelete.md)
 - [ApitaxJsClient.UserSave](docs/UserSave.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

