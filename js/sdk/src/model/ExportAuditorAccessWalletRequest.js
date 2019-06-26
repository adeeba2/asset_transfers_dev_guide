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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.ExportAuditorAccessWalletRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ExportAuditorAccessWalletRequest model module.
   * @module model/ExportAuditorAccessWalletRequest
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>ExportAuditorAccessWalletRequest</code>.
   * @alias module:model/ExportAuditorAccessWalletRequest
   * @class
   * @param walletId {String} 
   * @param authorization {String} 
   * @param recipientPaymentAddress {String} 
   */
  var exports = function(walletId, authorization, recipientPaymentAddress) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['authorization'] = authorization;
    _this['recipient_payment_address'] = recipientPaymentAddress;
  };

  /**
   * Constructs a <code>ExportAuditorAccessWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportAuditorAccessWalletRequest} obj Optional instance to populate.
   * @return {module:model/ExportAuditorAccessWalletRequest} The populated <code>ExportAuditorAccessWalletRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
      if (data.hasOwnProperty('recipient_payment_address')) {
        obj['recipient_payment_address'] = ApiClient.convertToType(data['recipient_payment_address'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * @member {String} recipient_payment_address
   */
  exports.prototype['recipient_payment_address'] = undefined;



  return exports;
}));


