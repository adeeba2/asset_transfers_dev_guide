/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
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
    if (!root.QeditAssetTransfers) {
      root.QeditAssetTransfers = {};
    }
    root.QeditAssetTransfers.HealthcheckResponseItem = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The HealthcheckResponseItem model module.
   * @module model/HealthcheckResponseItem
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>HealthcheckResponseItem</code>.
   * @alias module:model/HealthcheckResponseItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>HealthcheckResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthcheckResponseItem} obj Optional instance to populate.
   * @return {module:model/HealthcheckResponseItem} The populated <code>HealthcheckResponseItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('passing')) {
        obj['passing'] = ApiClient.convertToType(data['passing'], 'Boolean');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * Boolean signifying whether the component is healthy
   * @member {Boolean} passing
   */
  exports.prototype['passing'] = undefined;
  /**
   * Error string describing the component's problem; empty if the component is healthy
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


