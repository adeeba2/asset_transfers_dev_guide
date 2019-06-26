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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QedItAssetTransfers);
  }
}(this, function(expect, QedItAssetTransfers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QedItAssetTransfers.HealthcheckResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HealthcheckResponse', function() {
    it('should create an instance of HealthcheckResponse', function() {
      // uncomment below and update the code to test HealthcheckResponse
      //var instance = new QedItAssetTransfers.HealthcheckResponse();
      //expect(instance).to.be.a(QedItAssetTransfers.HealthcheckResponse);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new QedItAssetTransfers.HealthcheckResponse();
      //expect(instance).to.be();
    });

    it('should have the property blockchainConnector (base name: "blockchain_connector")', function() {
      // uncomment below and update the code to test the property blockchainConnector
      //var instance = new QedItAssetTransfers.HealthcheckResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageQueue (base name: "message_queue")', function() {
      // uncomment below and update the code to test the property messageQueue
      //var instance = new QedItAssetTransfers.HealthcheckResponse();
      //expect(instance).to.be();
    });

    it('should have the property database (base name: "database")', function() {
      // uncomment below and update the code to test the property database
      //var instance = new QedItAssetTransfers.HealthcheckResponse();
      //expect(instance).to.be();
    });

    it('should have the property passing (base name: "passing")', function() {
      // uncomment below and update the code to test the property passing
      //var instance = new QedItAssetTransfers.HealthcheckResponse();
      //expect(instance).to.be();
    });

  });

}));
