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
// NotificationType : The type of notification. This also determines the type of the content of the notification.
type NotificationType string

// List of NotificationType
const (
	COMPLETED_SUCCESSFULLY NotificationType = "task_completed_successfully"
	FAILED NotificationType = "task_failed"
)