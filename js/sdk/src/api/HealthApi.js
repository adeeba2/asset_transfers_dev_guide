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
    define(['ApiClient', 'model/ErrorResponse', 'model/HealthcheckResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/HealthcheckResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.QeditAssetTransfers) {
      root.QeditAssetTransfers = {};
    }
    root.QeditAssetTransfers.HealthApi = factory(root.QeditAssetTransfers.ApiClient, root.QeditAssetTransfers.ErrorResponse, root.QeditAssetTransfers.HealthcheckResponse);
  }
}(this, function(ApiClient, ErrorResponse, HealthcheckResponse) {
  'use strict';

  /**
   * Health service.
   * @module api/HealthApi
   * @version 1.6.1
   */

  /**
   * Constructs a new HealthApi. 
   * @alias module:api/HealthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the healthPost operation.
     * @callback module:api/HealthApi~healthPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthcheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform a healthcheck of the node and its dependent services
     * Reports the health of the various components of the system as well as an overall status for the Node. If the Node&#39;s status is good, then the Node is synced with the Blockchain and can successfully process requests.
     * @param {module:api/HealthApi~healthPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthcheckResponse}
     */
    this.healthPost = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = HealthcheckResponse;

      return this.apiClient.callApi(
        '/health', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
