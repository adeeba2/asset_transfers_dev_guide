/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type Rule struct {
	PublicKey              string `json:"public_key"`
	CanIssueConfidentially bool   `json:"can_issue_confidentially"`
	CanIssueAssetIdFirst   int32  `json:"can_issue_asset_id_first"`
	CanIssueAssetIdLast    int32  `json:"can_issue_asset_id_last"`
	IsAdmin                bool   `json:"is_admin"`
}
