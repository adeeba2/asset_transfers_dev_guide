/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticsTxMetadata struct {
	Type         string `json:"type,omitempty"`
	TxHash       string `json:"tx_hash,omitempty"`
	BlockHash    string `json:"block_hash,omitempty"`
	Timestamp    string `json:"timestamp,omitempty"`
	IndexInBlock int32  `json:"index_in_block,omitempty"`
	BlockHeight  int32  `json:"block_height,omitempty"`
}
