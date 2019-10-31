/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.6.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk
// OrderEnum : Order of results to fetch (either ascending or descending); ordering is chronological where the time is set to when the retrieved object was created
type OrderEnum string

// List of OrderEnum
const (
	ASC OrderEnum = "asc"
	DESC OrderEnum = "desc"
)