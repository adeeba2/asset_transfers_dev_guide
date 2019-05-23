/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.3.0
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
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticsRule = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsRule model module.
   * @module model/AnalyticsRule
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>AnalyticsRule</code>.
   * @alias module:model/AnalyticsRule
   * @class
   * @param minId {Number} 
   * @param maxId {Number} 
   */
  var exports = function(minId, maxId) {
    var _this = this;

    _this['min_id'] = minId;
    _this['max_id'] = maxId;
  };

  /**
   * Constructs a <code>AnalyticsRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsRule} obj Optional instance to populate.
   * @return {module:model/AnalyticsRule} The populated <code>AnalyticsRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('min_id')) {
        obj['min_id'] = ApiClient.convertToType(data['min_id'], 'Number');
      }
      if (data.hasOwnProperty('max_id')) {
        obj['max_id'] = ApiClient.convertToType(data['max_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} min_id
   */
  exports.prototype['min_id'] = undefined;
  /**
   * @member {Number} max_id
   */
  exports.prototype['max_id'] = undefined;



  return exports;
}));

