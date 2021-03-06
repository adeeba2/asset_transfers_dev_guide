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

type ExportAuditorAccessWalletRequest struct {
	// The ID of the Wallet to export a viewing key for
	WalletId string `json:"wallet_id"`
	// The authorization password for the Wallet
	Authorization string `json:"authorization"`
	// The Address of the Wallet that belongs to the intended recipient of the exported viewing key; used to encrypt the key in such a way that only the intended recipient can decrypt it
	RecipientPaymentAddress string `json:"recipient_payment_address"`
}
