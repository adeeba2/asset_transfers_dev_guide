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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QeditAssetTransfers);
  }
}(this, function(expect, QeditAssetTransfers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QeditAssetTransfers.GetNotificationsRequest();
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

  describe('GetNotificationsRequest', function() {
    it('should create an instance of GetNotificationsRequest', function() {
      // uncomment below and update the code to test GetNotificationsRequest
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be.a(QeditAssetTransfers.GetNotificationsRequest);
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be();
    });

    it('should have the property types (base name: "types")', function() {
      // uncomment below and update the code to test the property types
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be();
    });

    it('should have the property startingWithTime (base name: "starting_with_time")', function() {
      // uncomment below and update the code to test the property startingWithTime
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be();
    });

    it('should have the property afterId (base name: "after_id")', function() {
      // uncomment below and update the code to test the property afterId
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxResults (base name: "max_results")', function() {
      // uncomment below and update the code to test the property maxResults
      //var instance = new QeditAssetTransfers.GetNotificationsRequest();
      //expect(instance).to.be();
    });

  });

}));