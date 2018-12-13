/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryHydra) {
      root.OryHydra = {};
    }
    root.OryHydra.GenericError = factory(root.OryHydra.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GenericError model module.
   * @module model/GenericError
   * @version latest
   */

  /**
   * Constructs a new <code>GenericError</code>.
   * Error responses are sent when an error (e.g. unauthorized, bad request, ...) occurred.
   * @alias module:model/GenericError
   * @class
   * @param error {String} Name is the error name.
   */
  var exports = function(error) {
    var _this = this;

    _this['error'] = error;



  };

  /**
   * Constructs a <code>GenericError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenericError} obj Optional instance to populate.
   * @return {module:model/GenericError} The populated <code>GenericError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('error_code')) {
        obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
      }
      if (data.hasOwnProperty('error_debug')) {
        obj['error_debug'] = ApiClient.convertToType(data['error_debug'], 'String');
      }
      if (data.hasOwnProperty('error_hint')) {
        obj['error_hint'] = ApiClient.convertToType(data['error_hint'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name is the error name.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Code represents the error status code (404, 403, 401, ...).
   * @member {Number} error_code
   */
  exports.prototype['error_code'] = undefined;
  /**
   * Debug contains debug information. This is usually not available and has to be enabled.
   * @member {String} error_debug
   */
  exports.prototype['error_debug'] = undefined;
  /**
   * Hint contains further information on the nature of the error.
   * @member {String} error_hint
   */
  exports.prototype['error_hint'] = undefined;



  return exports;
}));

