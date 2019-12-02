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

// An object that includes additional request details
type TaskData struct {
	// The public key of the sender of the confirmation request
	SenderPublicKey string `json:"sender_public_key,omitempty"`
	// The public key for the confirmation request receiver
	RequireConfirmationFrom string `json:"require_confirmation_from,omitempty"`
	// The address the request was sent to
	RecipientAddress string `json:"recipient_address,omitempty"`
	AssetId string `json:"asset_id,omitempty"`
	Amount int32 `json:"amount,omitempty"`
	WalletId string `json:"wallet_id,omitempty"`
}
