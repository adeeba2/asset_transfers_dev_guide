/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticIssueWalletTx struct {
	IsIncoming       bool   `json:"is_incoming,omitempty"`
	IssuedBySelf     bool   `json:"issued_by_self,omitempty"`
	SenderId         string `json:"sender_id,omitempty"`
	Memo             string `json:"memo,omitempty"`
	RecipientAddress string `json:"recipient_address,omitempty"`
	AssetId          int32  `json:"asset_id,omitempty"`
	Amount           int32  `json:"amount,omitempty"`
	IsConfidential   bool   `json:"is_confidential,omitempty"`
}
