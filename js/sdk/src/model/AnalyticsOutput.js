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
    define(['ApiClient', 'model/AnalyticsConfidentialIssuanceDescription', 'model/AnalyticsOutputDescription', 'model/AnalyticsPublicIssuanceDescription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticsConfidentialIssuanceDescription'), require('./AnalyticsOutputDescription'), require('./AnalyticsPublicIssuanceDescription'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticsOutput = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticsConfidentialIssuanceDescription, root.QedItAssetTransfers.AnalyticsOutputDescription, root.QedItAssetTransfers.AnalyticsPublicIssuanceDescription);
  }
}(this, function(ApiClient, AnalyticsConfidentialIssuanceDescription, AnalyticsOutputDescription, AnalyticsPublicIssuanceDescription) {
  'use strict';



  /**
   * The AnalyticsOutput model module.
   * @module model/AnalyticsOutput
   * @version 1.4.1
   */

  /**
   * Constructs a new <code>AnalyticsOutput</code>.
   * @alias module:model/AnalyticsOutput
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsOutput} obj Optional instance to populate.
   * @return {module:model/AnalyticsOutput} The populated <code>AnalyticsOutput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('is_confidential')) {
        obj['is_confidential'] = ApiClient.convertToType(data['is_confidential'], 'Boolean');
      }
      if (data.hasOwnProperty('public_issuance_description')) {
        obj['public_issuance_description'] = AnalyticsPublicIssuanceDescription.constructFromObject(data['public_issuance_description']);
      }
      if (data.hasOwnProperty('confidential_issuance_description')) {
        obj['confidential_issuance_description'] = AnalyticsConfidentialIssuanceDescription.constructFromObject(data['confidential_issuance_description']);
      }
      if (data.hasOwnProperty('output_description')) {
        obj['output_description'] = AnalyticsOutputDescription.constructFromObject(data['output_description']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} is_confidential
   */
  exports.prototype['is_confidential'] = undefined;
  /**
   * @member {module:model/AnalyticsPublicIssuanceDescription} public_issuance_description
   */
  exports.prototype['public_issuance_description'] = undefined;
  /**
   * @member {module:model/AnalyticsConfidentialIssuanceDescription} confidential_issuance_description
   */
  exports.prototype['confidential_issuance_description'] = undefined;
  /**
   * @member {module:model/AnalyticsOutputDescription} output_description
   */
  exports.prototype['output_description'] = undefined;



  return exports;
}));


