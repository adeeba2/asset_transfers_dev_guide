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

// The data of a particular Rule changing transaction
type AnalyticsRuleTx struct {
	// The public key of the Wallet used to create the Rule
	SenderPublicKey string `json:"sender_public_key,omitempty"`
	// The details of the Rules added in this transaction
	RulesToAdd []AnalyticsRuleDefinition `json:"rules_to_add,omitempty"`
	// The details of the Rules deleted in this transaction
	RulesToDelete []AnalyticsRuleDefinition `json:"rules_to_delete,omitempty"`
	// The nonce used to make this Rule transaction unique
	Nonce int32 `json:"nonce,omitempty"`
	// The signature authorizing the Rule changes, made by the Wallet that made the Rule changes
	Signature string `json:"signature,omitempty"`
}
