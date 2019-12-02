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

type AnalyticTransaction struct {
	Metadata AnalyticsTxMetadata `json:"metadata,omitempty"`
	// The detailed content of the transaction; format differs depending on the transaction type
	Content map[string]interface{} `json:"content,omitempty"`
}
