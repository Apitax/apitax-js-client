# ApitaxJsClient.ApiApi

All URIs are relative to *https://localhost/apitax/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDriverApiCatalog**](ApiApi.md#getDriverApiCatalog) | **GET** /drivers/{driver}/api/catalog | Retrieve the api catalog
[**getDriverApiStatus**](ApiApi.md#getDriverApiStatus) | **GET** /drivers/{driver}/api/status | Retrieve the status of an api backing a driver


<a name="getDriverApiCatalog"></a>
# **getDriverApiCatalog**
> Response getDriverApiCatalog(driver)

Retrieve the api catalog

Retrieve the api catalog

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApiApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverApiCatalog(driver, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDriverApiStatus"></a>
# **getDriverApiStatus**
> Response getDriverApiStatus(driver)

Retrieve the status of an api backing a driver

Retrieve the status of an api backing a driver

### Example
```javascript
var ApitaxJsClient = require('apitax-js-client');
var defaultClient = ApitaxJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApitaxJsClient.ApiApi();

var driver = "driver_example"; // String | The driver to use for the request. ie. github


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDriverApiStatus(driver, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driver** | **String**| The driver to use for the request. ie. github | 

### Return type

[**Response**](Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

