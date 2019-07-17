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
    define(['ApiClient', 'model/BalanceForAsset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BalanceForAsset'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.GetWalletBalanceResponse = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.BalanceForAsset);
  }
}(this, function(ApiClient, BalanceForAsset) {
  'use strict';



  /**
   * The GetWalletBalanceResponse model module.
   * @module model/GetWalletBalanceResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>GetWalletBalanceResponse</code>.
   * @alias module:model/GetWalletBalanceResponse
   * @class
   * @param walletId {String} 
   * @param assets {Array.<module:model/BalanceForAsset>} 
   */
  var exports = function(walletId, assets) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['assets'] = assets;
  };

  /**
   * Constructs a <code>GetWalletBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWalletBalanceResponse} obj Optional instance to populate.
   * @return {module:model/GetWalletBalanceResponse} The populated <code>GetWalletBalanceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = ApiClient.convertToType(data['assets'], [BalanceForAsset]);
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * @member {Array.<module:model/BalanceForAsset>} assets
   */
  exports.prototype['assets'] = undefined;



  return exports;
}));


