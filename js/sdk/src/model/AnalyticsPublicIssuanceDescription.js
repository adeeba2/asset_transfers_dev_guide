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
    root.QeditAssetTransfers.AnalyticsPublicIssuanceDescription = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsPublicIssuanceDescription model module.
   * @module model/AnalyticsPublicIssuanceDescription
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>AnalyticsPublicIssuanceDescription</code>.
   * Describes what Asset Type and amount were issued; null if the Issuance was confidential
   * @alias module:model/AnalyticsPublicIssuanceDescription
   * @class
   * @param assetId {String} The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive. 
   * @param amount {Number} The amount of Assets issued
   */
  var exports = function(assetId, amount) {
    var _this = this;

    _this['asset_id'] = assetId;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>AnalyticsPublicIssuanceDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsPublicIssuanceDescription} obj Optional instance to populate.
   * @return {module:model/AnalyticsPublicIssuanceDescription} The populated <code>AnalyticsPublicIssuanceDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('asset_id')) {
        obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive. 
   * @member {String} asset_id
   */
  exports.prototype['asset_id'] = undefined;
  /**
   * The amount of Assets issued
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


