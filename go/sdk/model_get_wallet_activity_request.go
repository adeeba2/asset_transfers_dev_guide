/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.3.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetWalletActivityRequest struct {
	WalletId        string `json:"wallet_id"`
	StartIndex      int32  `json:"start_index"`
	NumberOfResults int32  `json:"number_of_results"`
}