/**
 * Apitax
 * The API for the frontend of Apitax
 *
 * OpenAPI spec version: 2
 * Contact: shawn.clake@nopatience.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Command', 'model/UserAuth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Command'), require('./UserAuth'));
  } else {
    // Browser globals (root is window)
    if (!root.ApitaxJsClient) {
      root.ApitaxJsClient = {};
    }
    root.ApitaxJsClient.Execute = factory(root.ApitaxJsClient.ApiClient, root.ApitaxJsClient.Command, root.ApitaxJsClient.UserAuth);
  }
}(this, function(ApiClient, Command, UserAuth) {
  'use strict';




  /**
   * The Execute model module.
   * @module model/Execute
   * @version 2
   */

  /**
   * Constructs a new <code>Execute</code>.
   * @alias module:model/Execute
   * @class
   * @param command {module:model/Command} 
   */
  var exports = function(command) {
    var _this = this;

    _this['command'] = command;

  };

  /**
   * Constructs a <code>Execute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Execute} obj Optional instance to populate.
   * @return {module:model/Execute} The populated <code>Execute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('command')) {
        obj['command'] = Command.constructFromObject(data['command']);
      }
      if (data.hasOwnProperty('auth')) {
        obj['auth'] = UserAuth.constructFromObject(data['auth']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Command} command
   */
  exports.prototype['command'] = undefined;
  /**
   * @member {module:model/UserAuth} auth
   */
  exports.prototype['auth'] = undefined;



  return exports;
}));


