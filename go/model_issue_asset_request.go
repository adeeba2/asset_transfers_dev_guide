/*
 * QEDIT - Asset Transfers
 *
 * This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/). 
 *
 * API version: 1.6.2
 * Contact: dev@qed-it.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package goqedit

type IssueAssetRequest struct {
	// The ID of the Wallet that has the required Issuance privileges
	WalletId string `json:"wallet_id"`
	// The authorization password for the Wallet that has the Issuance privileges
	Authorization string `json:"authorization"`
	// The Address of the recipient of the issued Assets
	RecipientAddress string `json:"recipient_address"`
	// The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive. 
	AssetId string `json:"asset_id"`
	// the amount of Assets to issue
	Amount int32 `json:"amount"`
	// Boolean which should be true if the issuance should be confidential, and false of the Issuance should be public
	Confidential bool `json:"confidential"`
	Memo string `json:"memo"`
}
