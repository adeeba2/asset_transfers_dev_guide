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

type ErrorResponse struct {
	// The error code returned from the server
	ErrorCode int32 `json:"error_code"`
	// The error message returned from the server
	Message string `json:"message,omitempty"`
}
