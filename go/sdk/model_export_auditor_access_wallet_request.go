/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type ExportAuditorAccessWalletRequest struct {
	WalletId                string `json:"wallet_id"`
	Authorization           string `json:"authorization"`
	RecipientPaymentAddress string `json:"recipient_payment_address"`
}
