/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.6.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetWalletActivityResponse struct {
	WalletId string `json:"wallet_id,omitempty"`
	// The list of retrieved transactions
	Transactions []AnalyticWalletTx `json:"transactions,omitempty"`
}
