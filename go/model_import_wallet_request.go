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

type ImportWalletRequest struct {
	// The ID under which to import the Wallet; can be different from the ID the Wallet was stored under in the exporting Node
	WalletId string `json:"wallet_id"`
	// The encrypted secret key of the Wallet
	EncryptedSk string `json:"encrypted_sk"`
	// The authorization password used during Wallet generation that allows to decrypt the encrypted secret key
	Authorization string `json:"authorization"`
	// The salt used in the encryption of the secret key
	Salt string `json:"salt"`
}
