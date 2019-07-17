/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.5.0
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
    define(['ApiClient', 'model/Rule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.GetRulesResponse = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.Rule);
  }
}(this, function(ApiClient, Rule) {
  'use strict';



  /**
   * The GetRulesResponse model module.
   * @module model/GetRulesResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>GetRulesResponse</code>.
   * @alias module:model/GetRulesResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GetRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRulesResponse} obj Optional instance to populate.
   * @return {module:model/GetRulesResponse} The populated <code>GetRulesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Rule>} rules
   */
  exports.prototype['rules'] = undefined;



  return exports;
}));


