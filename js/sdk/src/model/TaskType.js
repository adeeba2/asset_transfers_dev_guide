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
    root.QeditAssetTransfers.TaskType = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class TaskType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "unlock_wallet"
     * @const
     */
    "unlock_wallet": "unlock_wallet",
    /**
     * value: "transfer_asset"
     * @const
     */
    "transfer_asset": "transfer_asset",
    /**
     * value: "issue_asset"
     * @const
     */
    "issue_asset": "issue_asset",
    /**
     * value: "alter_rule"
     * @const
     */
    "alter_rule": "alter_rule",
    /**
     * value: "import_wallet"
     * @const
     */
    "import_wallet": "import_wallet",
    /**
     * value: "delete_wallet"
     * @const
     */
    "delete_wallet": "delete_wallet",
    /**
     * value: "outgoing_confirm_request"
     * @const
     */
    "outgoing_confirm_request": "outgoing_confirm_request",
    /**
     * value: "incoming_confirm_request"
     * @const
     */
    "incoming_confirm_request": "incoming_confirm_request"  };

  /**
   * Returns a <code>TaskType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/TaskType} The enum <code>TaskType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));

