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

type DownloadAttachmentRequest struct {
	// The Node-specific identifier of the Wallet whose credentials should be used to download the Attachment
	WalletId string `json:"wallet_id"`
	// The globally-unique ID of the Attachment to be downloaded
	AttachmentId string `json:"attachment_id"`
}
