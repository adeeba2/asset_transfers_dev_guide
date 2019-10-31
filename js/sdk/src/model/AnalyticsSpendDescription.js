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
    root.QeditAssetTransfers.AnalyticsSpendDescription = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsSpendDescription model module.
   * @module model/AnalyticsSpendDescription
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>AnalyticsSpendDescription</code>.
   * @alias module:model/AnalyticsSpendDescription
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsSpendDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsSpendDescription} obj Optional instance to populate.
   * @return {module:model/AnalyticsSpendDescription} The populated <code>AnalyticsSpendDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cv')) {
        obj['cv'] = ApiClient.convertToType(data['cv'], 'String');
      }
      if (data.hasOwnProperty('anchor')) {
        obj['anchor'] = ApiClient.convertToType(data['anchor'], 'String');
      }
      if (data.hasOwnProperty('nullifier')) {
        obj['nullifier'] = ApiClient.convertToType(data['nullifier'], 'String');
      }
      if (data.hasOwnProperty('zkproof')) {
        obj['zkproof'] = ApiClient.convertToType(data['zkproof'], 'String');
      }
    }
    return obj;
  }

  /**
   * The commitment to both the Asset Type and amount of the Note
   * @member {String} cv
   */
  exports.prototype['cv'] = undefined;
  /**
   * The anchor (root) of the Merkle tree used in the Proof
   * @member {String} anchor
   */
  exports.prototype['anchor'] = undefined;
  /**
   * The Note's Nullifier
   * @member {String} nullifier
   */
  exports.prototype['nullifier'] = undefined;
  /**
   * The Proof that the Note indeed exists in the Merkle tree and belongs to the spender
   * @member {String} zkproof
   */
  exports.prototype['zkproof'] = undefined;



  return exports;
}));


