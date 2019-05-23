/**
 * QEDIT – Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.3
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
    instance = new QedItAssetTransfers.AnalyticsContent();
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

  describe('AnalyticsContent', function() {
    it('should create an instance of AnalyticsContent', function() {
      // uncomment below and update the code to test AnalyticsContent
      //var instance = new QedItAssetTransfers.AnalyticsContent();
      //expect(instance).to.be.a(QedItAssetTransfers.AnalyticsContent);
    });

    it('should have the property txType (base name: "tx_type")', function() {
      // uncomment below and update the code to test the property txType
      //var instance = new QedItAssetTransfers.AnalyticsContent();
      //expect(instance).to.be();
    });

  });

}));