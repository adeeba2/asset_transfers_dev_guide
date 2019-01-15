/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetAllWalletsResponse model module.
 * @module model/GetAllWalletsResponse
 * @version 1.0.0
 */
class GetAllWalletsResponse {
    /**
     * Constructs a new <code>GetAllWalletsResponse</code>.
     * @alias module:model/GetAllWalletsResponse
     */
    constructor() { 
        
        GetAllWalletsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAllWalletsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllWalletsResponse} obj Optional instance to populate.
     * @return {module:model/GetAllWalletsResponse} The populated <code>GetAllWalletsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAllWalletsResponse();

            if (data.hasOwnProperty('wallet_labels')) {
                obj['wallet_labels'] = ApiClient.convertToType(data['wallet_labels'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} wallet_labels
 */
GetAllWalletsResponse.prototype['wallet_labels'] = undefined;






export default GetAllWalletsResponse;
