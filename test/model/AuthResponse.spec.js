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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApitaxJsClient);
  }
}(this, function(expect, ApitaxJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApitaxJsClient.AuthResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AuthResponse', function() {
    it('should create an instance of AuthResponse', function() {
      // uncomment below and update the code to test AuthResponse
      //var instane = new ApitaxJsClient.AuthResponse();
      //expect(instance).to.be.a(ApitaxJsClient.AuthResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApitaxJsClient.AuthResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new ApitaxJsClient.AuthResponse();
      //expect(instance).to.be();
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new ApitaxJsClient.AuthResponse();
      //expect(instance).to.be();
    });

    it('should have the property refreshToken (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property refreshToken
      //var instane = new ApitaxJsClient.AuthResponse();
      //expect(instance).to.be();
    });

    it('should have the property auth (base name: "auth")', function() {
      // uncomment below and update the code to test the property auth
      //var instane = new ApitaxJsClient.AuthResponse();
      //expect(instance).to.be();
    });

  });

}));
