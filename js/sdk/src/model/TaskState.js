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
    root.QeditAssetTransfers.TaskState = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class TaskState.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "pending_state"
     * @const
     */
    "pending_state": "pending_state",
    /**
     * value: "in_progress_state"
     * @const
     */
    "in_progress_state": "in_progress_state",
    /**
     * value: "tx_generated_state"
     * @const
     */
    "tx_generated_state": "tx_generated_state",
    /**
     * value: "conf_req_sent_state"
     * @const
     */
    "conf_req_sent_state": "conf_req_sent_state",
    /**
     * value: "conf_req_received_state"
     * @const
     */
    "conf_req_received_state": "conf_req_received_state",
    /**
     * value: "conf_req_canceled_by_sender_state"
     * @const
     */
    "conf_req_canceled_by_sender_state": "conf_req_canceled_by_sender_state",
    /**
     * value: "conf_req_canceled_by_receiver_state"
     * @const
     */
    "conf_req_canceled_by_receiver_state": "conf_req_canceled_by_receiver_state",
    /**
     * value: "tx_submitted_state"
     * @const
     */
    "tx_submitted_state": "tx_submitted_state",
    /**
     * value: "failure_state"
     * @const
     */
    "failure_state": "failure_state",
    /**
     * value: "success_state"
     * @const
     */
    "success_state": "success_state"  };

  /**
   * Returns a <code>TaskState</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/TaskState} The enum <code>TaskState</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


