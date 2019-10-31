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
    define(['ApiClient', 'model/AnalyticsOutput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticsOutput'));
  } else {
    // Browser globals (root is window)
    if (!root.QeditAssetTransfers) {
      root.QeditAssetTransfers = {};
    }
    root.QeditAssetTransfers.AnalyticsIssueTx = factory(root.QeditAssetTransfers.ApiClient, root.QeditAssetTransfers.AnalyticsOutput);
  }
}(this, function(ApiClient, AnalyticsOutput) {
  'use strict';



  /**
   * The AnalyticsIssueTx model module.
   * @module model/AnalyticsIssueTx
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>AnalyticsIssueTx</code>.
   * The data of a particular Issuance transaction
   * @alias module:model/AnalyticsIssueTx
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsIssueTx</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsIssueTx} obj Optional instance to populate.
   * @return {module:model/AnalyticsIssueTx} The populated <code>AnalyticsIssueTx</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('outputs')) {
        obj['outputs'] = ApiClient.convertToType(data['outputs'], [AnalyticsOutput]);
      }
      if (data.hasOwnProperty('public_key')) {
        obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
      }
      if (data.hasOwnProperty('signature')) {
        obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
      }
    }
    return obj;
  }

  /**
   * The data of the Assets issued (multiple Assets may potentially be issued in a single Issuance transaction)
   * @member {Array.<module:model/AnalyticsOutput>} outputs
   */
  exports.prototype['outputs'] = undefined;
  /**
   * The public key of the Wallet that performed the Issuance
   * @member {String} public_key
   */
  exports.prototype['public_key'] = undefined;
  /**
   * The signature on the transaction by the secret key of the Wallet that performed the Issuance
   * @member {String} signature
   */
  exports.prototype['signature'] = undefined;



  return exports;
}));


