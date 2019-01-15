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
import TransferAssetRequestRecipientAddress from './TransferAssetRequestRecipientAddress';

/**
 * The TransactionsForWallet model module.
 * @module model/TransactionsForWallet
 * @version 1.0.0
 */
class TransactionsForWallet {
    /**
     * Constructs a new <code>TransactionsForWallet</code>.
     * @alias module:model/TransactionsForWallet
     * @param isIncoming {Boolean} 
     * @param assetId {Number} 
     * @param amount {Number} 
     * @param recipientAddress {module:model/TransferAssetRequestRecipientAddress} 
     * @param memo {String} 
     */
    constructor(isIncoming, assetId, amount, recipientAddress, memo) { 
        
        TransactionsForWallet.initialize(this, isIncoming, assetId, amount, recipientAddress, memo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isIncoming, assetId, amount, recipientAddress, memo) { 
        obj['is_incoming'] = isIncoming;
        obj['asset_id'] = assetId;
        obj['amount'] = amount;
        obj['recipient_address'] = recipientAddress;
        obj['memo'] = memo;
    }

    /**
     * Constructs a <code>TransactionsForWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionsForWallet} obj Optional instance to populate.
     * @return {module:model/TransactionsForWallet} The populated <code>TransactionsForWallet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionsForWallet();

            if (data.hasOwnProperty('is_incoming')) {
                obj['is_incoming'] = ApiClient.convertToType(data['is_incoming'], 'Boolean');
            }
            if (data.hasOwnProperty('asset_id')) {
                obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('recipient_address')) {
                obj['recipient_address'] = TransferAssetRequestRecipientAddress.constructFromObject(data['recipient_address']);
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_incoming
 */
TransactionsForWallet.prototype['is_incoming'] = undefined;

/**
 * @member {Number} asset_id
 */
TransactionsForWallet.prototype['asset_id'] = undefined;

/**
 * @member {Number} amount
 */
TransactionsForWallet.prototype['amount'] = undefined;

/**
 * @member {module:model/TransferAssetRequestRecipientAddress} recipient_address
 */
TransactionsForWallet.prototype['recipient_address'] = undefined;

/**
 * @member {String} memo
 */
TransactionsForWallet.prototype['memo'] = undefined;






export default TransactionsForWallet;
