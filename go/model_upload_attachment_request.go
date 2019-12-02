/*
 * QEDIT - Asset Transfers
 *
 * This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/). 
 *
 * API version: 1.7.2
 * Contact: dev@qed-it.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package goqedit

type UploadAttachmentRequest struct {
	// The Node-specific identifier of the Wallet whose credentials should be used to upload the Attachment
	WalletId string `json:"wallet_id"`
	// The authorization password for the Wallet
	Authorization string `json:"authorization"`
	// The globally-unique ID of the Group the Attachment should be shared with
	GroupId string `json:"group_id"`
	Body AttachmentBody `json:"body"`
}