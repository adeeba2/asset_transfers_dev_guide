/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type HealthcheckResponseItem struct {
	Passing bool   `json:"passing,omitempty"`
	Error   string `json:"error,omitempty"`
}
