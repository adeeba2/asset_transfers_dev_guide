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
    root.QeditAssetTransfers.TaskActionRequest = factory(root.QeditAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TaskActionRequest model module.
   * @module model/TaskActionRequest
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>TaskActionRequest</code>.
   * To approve or cancel a task, the user should include the task id and authorization of the wallet related to this task.
   * @alias module:model/TaskActionRequest
   * @class
   * @param taskId {String} 
   * @param authorization {String} 
   */
  var exports = function(taskId, authorization) {
    var _this = this;

    _this['task_id'] = taskId;
    _this['authorization'] = authorization;
  };

  /**
   * Constructs a <code>TaskActionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskActionRequest} obj Optional instance to populate.
   * @return {module:model/TaskActionRequest} The populated <code>TaskActionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('task_id')) {
        obj['task_id'] = ApiClient.convertToType(data['task_id'], 'String');
      }
      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} task_id
   */
  exports.prototype['task_id'] = undefined;
  /**
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;



  return exports;
}));


