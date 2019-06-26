/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.4.1
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
    define(['ApiClient', 'model/AnalyticWalletTx'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticWalletTx'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.GetWalletActivityResponse = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticWalletTx);
  }
}(this, function(ApiClient, AnalyticWalletTx) {
  'use strict';



  /**
   * The GetWalletActivityResponse model module.
   * @module model/GetWalletActivityResponse
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>GetWalletActivityResponse</code>.
   * @alias module:model/GetWalletActivityResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GetWalletActivityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWalletActivityResponse} obj Optional instance to populate.
   * @return {module:model/GetWalletActivityResponse} The populated <code>GetWalletActivityResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [AnalyticWalletTx]);
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * @member {Array.<module:model/AnalyticWalletTx>} transactions
   */
  exports.prototype['transactions'] = undefined;



  return exports;
}));


