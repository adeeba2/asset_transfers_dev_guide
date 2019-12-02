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

type HealthcheckResponse struct {
	// API version of the Node
	Version string `json:"version,omitempty"`
	BlockchainConnector HealthcheckResponseItem `json:"blockchain_connector,omitempty"`
	MessageQueue HealthcheckResponseItem `json:"message_queue,omitempty"`
	Database HealthcheckResponseItem `json:"database,omitempty"`
	// Boolean signifying whether the endpoint is ready for calls
	Passing bool `json:"passing,omitempty"`
}
