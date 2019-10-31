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
    root.QeditAssetTransfers.OrderEnum = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class OrderEnum.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "asc"
     * @const
     */
    "asc": "asc",
    /**
     * value: "desc"
     * @const
     */
    "desc": "desc"  };

  /**
   * Returns a <code>OrderEnum</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/OrderEnum} The enum <code>OrderEnum</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


