/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.4.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type HealthcheckResponse struct {
	Version             string                  `json:"version,omitempty"`
	BlockchainConnector HealthcheckResponseItem `json:"blockchain_connector,omitempty"`
	MessageQueue        HealthcheckResponseItem `json:"message_queue,omitempty"`
	Database            HealthcheckResponseItem `json:"database,omitempty"`
	Passing             bool                    `json:"passing,omitempty"`
}
