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
    root.QeditAssetTransfers.TransferAssetRequest = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TransferAssetRequest model module.
   * @module model/TransferAssetRequest
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>TransferAssetRequest</code>.
   * @alias module:model/TransferAssetRequest
   * @class
   * @param walletId {String} The ID of the Wallet to transfer from
   * @param authorization {String} The authorization password for the Wallet to transfer from
   * @param recipientAddress {String} The Address of the recipient of the funds
   * @param assetId {String} The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive. 
   * @param amount {Number} The amount of assets to transfer
   * @param memo {String} An app-customizable field to store additional private data relating to the transfer; the memo is shared between the sender and the receiver, but is not divulged to other parties
   */
  var exports = function(walletId, authorization, recipientAddress, assetId, amount, memo) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['authorization'] = authorization;
    _this['recipient_address'] = recipientAddress;
    _this['asset_id'] = assetId;
    _this['amount'] = amount;
    _this['memo'] = memo;
  };

  /**
   * Constructs a <code>TransferAssetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferAssetRequest} obj Optional instance to populate.
   * @return {module:model/TransferAssetRequest} The populated <code>TransferAssetRequest</code> instance.
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
      if (data.hasOwnProperty('recipient_address')) {
        obj['recipient_address'] = ApiClient.convertToType(data['recipient_address'], 'String');
      }
      if (data.hasOwnProperty('asset_id')) {
        obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('memo')) {
        obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
      }
      if (data.hasOwnProperty('require_confirmation_from')) {
        obj['require_confirmation_from'] = ApiClient.convertToType(data['require_confirmation_from'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the Wallet to transfer from
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * The authorization password for the Wallet to transfer from
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * The Address of the recipient of the funds
   * @member {String} recipient_address
   */
  exports.prototype['recipient_address'] = undefined;
  /**
   * The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive. 
   * @member {String} asset_id
   */
  exports.prototype['asset_id'] = undefined;
  /**
   * The amount of assets to transfer
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * An app-customizable field to store additional private data relating to the transfer; the memo is shared between the sender and the receiver, but is not divulged to other parties
   * @member {String} memo
   */
  exports.prototype['memo'] = undefined;
  /**
   * A user may request confirmation from the receiving party. If a public key of the approver is included in this optional field, the transaction will only become valid after the received signs it. The receiver will be able to decide whether to accept or reject the transfer by calling the /node/approve_task or the /node/reject_task respectively.
   * @member {String} require_confirmation_from
   */
  exports.prototype['require_confirmation_from'] = undefined;



  return exports;
}));


