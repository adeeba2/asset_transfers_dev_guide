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

type ListAttachmentsRequest struct {
	// The Node-specific identifier of the Wallet whose credentials should be used to list Attachments
	WalletId string `json:"wallet_id"`
	// An offset used to paginate through the Attachment list; indexing is 0-based; defaults to 0
	StartIndex int32 `json:"start_index,omitempty"`
	// Maximal number of results to fetch in this call; defaults to 100
	NumberOfResults int32 `json:"number_of_results,omitempty"`
	// An optional list of Asset IDs; if present and not empty, only Attachments attached to Assets of one or more of the given Asset IDs will be returned; note that only Attachments attached to Assets owned or previously-owned by the given Wallet will be returned
	AssetIds []string `json:"asset_ids,omitempty"`
	// An optional list of Transaction hashes; if present and not empty, only Attachments attached to Assets transferred or created in the referenced Transations will be returned; note that only Attachments from Transactions that are visible to the given Wallet will be returned
	TxHashes []string `json:"tx_hashes,omitempty"`
}