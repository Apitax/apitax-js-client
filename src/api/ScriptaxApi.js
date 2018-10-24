/**
 * Apitax
 * The API for the frontend of Apitax
 *
 * OpenAPI spec version: 2
 * Contact: shawn.clake@nopatience.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import Response from '../model/Response';
import ScriptCreate from '../model/ScriptCreate';
import ScriptDelete from '../model/ScriptDelete';
import ScriptRename from '../model/ScriptRename';
import ScriptSave from '../model/ScriptSave';

/**
* Scriptax service.
* @module api/ScriptaxApi
* @version 2
*/
export default class ScriptaxApi {

    /**
    * Constructs a new ScriptaxApi. 
    * @alias module:api/ScriptaxApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDriverScript operation.
     * @callback module:api/ScriptaxApi~createDriverScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new script
     * Create a new script
     * @param {String} driver The driver to use for the request. ie. github
     * @param {Object} opts Optional parameters
     * @param {module:model/ScriptCreate} opts.scriptCreate The data needed to create this script
     * @param {module:api/ScriptaxApi~createDriverScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    createDriverScript(driver, opts, callback) {
      opts = opts || {};
      let postBody = opts['scriptCreate'];

      // verify the required parameter 'driver' is set
      if (driver === undefined || driver === null) {
        throw new Error("Missing the required parameter 'driver' when calling createDriverScript");
      }


      let pathParams = {
        'driver': driver
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/drivers/{driver}/scriptax/scripts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDriverScript operation.
     * @callback module:api/ScriptaxApi~deleteDriverScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a script
     * Delete a script
     * @param {String} driver The driver to use for the request. ie. github
     * @param {Object} opts Optional parameters
     * @param {module:model/ScriptDelete} opts.scriptDelete The data needed to delete this script
     * @param {module:api/ScriptaxApi~deleteDriverScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    deleteDriverScript(driver, opts, callback) {
      opts = opts || {};
      let postBody = opts['scriptDelete'];

      // verify the required parameter 'driver' is set
      if (driver === undefined || driver === null) {
        throw new Error("Missing the required parameter 'driver' when calling deleteDriverScript");
      }


      let pathParams = {
        'driver': driver
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/drivers/{driver}/scriptax/scripts', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDriverScript operation.
     * @callback module:api/ScriptaxApi~getDriverScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the contents of a script
     * Retrieve the contents of a script
     * @param {String} driver The driver to use for the request. ie. github
     * @param {Object} opts Optional parameters
     * @param {String} opts.script The script name.
     * @param {module:api/ScriptaxApi~getDriverScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    getDriverScript(driver, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'driver' is set
      if (driver === undefined || driver === null) {
        throw new Error("Missing the required parameter 'driver' when calling getDriverScript");
      }


      let pathParams = {
        'driver': driver
      };
      let queryParams = {
        'script': opts['script']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/drivers/{driver}/scriptax/scripts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDriverScriptCatalog operation.
     * @callback module:api/ScriptaxApi~getDriverScriptCatalogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the script catalog
     * Retrieve the script catalog
     * @param {String} driver The driver to use for the request. ie. github
     * @param {module:api/ScriptaxApi~getDriverScriptCatalogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    getDriverScriptCatalog(driver, callback) {
      let postBody = null;

      // verify the required parameter 'driver' is set
      if (driver === undefined || driver === null) {
        throw new Error("Missing the required parameter 'driver' when calling getDriverScriptCatalog");
      }


      let pathParams = {
        'driver': driver
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/drivers/{driver}/scriptax/catalog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the renameDriverScript operation.
     * @callback module:api/ScriptaxApi~renameDriverScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rename a script
     * Rename a script
     * @param {String} driver The driver to use for the request. ie. github
     * @param {Object} opts Optional parameters
     * @param {module:model/ScriptRename} opts.scriptRename The data needed to rename this script
     * @param {module:api/ScriptaxApi~renameDriverScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    renameDriverScript(driver, opts, callback) {
      opts = opts || {};
      let postBody = opts['scriptRename'];

      // verify the required parameter 'driver' is set
      if (driver === undefined || driver === null) {
        throw new Error("Missing the required parameter 'driver' when calling renameDriverScript");
      }


      let pathParams = {
        'driver': driver
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/drivers/{driver}/scriptax/scripts', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveDriverScript operation.
     * @callback module:api/ScriptaxApi~saveDriverScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a script
     * Save a script
     * @param {String} driver The driver to use for the request. ie. github
     * @param {Object} opts Optional parameters
     * @param {module:model/ScriptSave} opts.scriptSave The data needed to save this script
     * @param {module:api/ScriptaxApi~saveDriverScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    saveDriverScript(driver, opts, callback) {
      opts = opts || {};
      let postBody = opts['scriptSave'];

      // verify the required parameter 'driver' is set
      if (driver === undefined || driver === null) {
        throw new Error("Missing the required parameter 'driver' when calling saveDriverScript");
      }


      let pathParams = {
        'driver': driver
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response;

      return this.apiClient.callApi(
        '/drivers/{driver}/scriptax/scripts', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
