/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.0
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
    instance = new QedItAssetTransfers.TaskData();
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

  describe('TaskData', function() {
    it('should create an instance of TaskData', function() {
      // uncomment below and update the code to test TaskData
      //var instance = new QedItAssetTransfers.TaskData();
      //expect(instance).to.be.a(QedItAssetTransfers.TaskData);
    });

    it('should have the property requireConfirmationFrom (base name: "require_confirmation_from")', function() {
      // uncomment below and update the code to test the property requireConfirmationFrom
      //var instance = new QedItAssetTransfers.TaskData();
      //expect(instance).to.be();
    });

    it('should have the property recipientAddress (base name: "recipient_address")', function() {
      // uncomment below and update the code to test the property recipientAddress
      //var instance = new QedItAssetTransfers.TaskData();
      //expect(instance).to.be();
    });

    it('should have the property assetId (base name: "asset_id")', function() {
      // uncomment below and update the code to test the property assetId
      //var instance = new QedItAssetTransfers.TaskData();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new QedItAssetTransfers.TaskData();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new QedItAssetTransfers.TaskData();
      //expect(instance).to.be();
    });

  });

}));