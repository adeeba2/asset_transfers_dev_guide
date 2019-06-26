/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.4.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticTransferWalletTx struct {
	IsIncoming       bool   `json:"is_incoming,omitempty"`
	SenderId         string `json:"sender_id,omitempty"`
	Memo             string `json:"memo,omitempty"`
	RecipientAddress string `json:"recipient_address,omitempty"`
	AssetId          int32  `json:"asset_id,omitempty"`
	Amount           int32  `json:"amount,omitempty"`
}
