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

type UploadAttachmentResponse struct {
	// The globally-unique ID of the Attachment; used to reference the Attachment and to download it; should be stored by the App for future reference\\
	AttachmentId string `json:"attachment_id"`
}
