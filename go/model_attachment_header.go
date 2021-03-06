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

// The metadata of a single Attachment, without the potentially long content
type AttachmentHeader struct {
	// The globally-unique ID of the Attachment; can be used as a reference for downloading it
	AttachmentId string `json:"attachment_id"`
	// A name used by the uploader to describe the Attachment; does not have to be unique; should not be relied upon to uniquely identify the Attachment
	Name string `json:"name"`
	// The media type (a.k.a. MIME type) of the content as specifies by the uploader of the Attachment
	ContentType string `json:"content_type"`
	// The transaction hash for the transaction the Attachment was attached in. Set to empty string if the Wallet is unaware of the particular transaction in which the Attachment was attached to the Asset.
	TxHash string `json:"tx_hash,omitempty"`
	// The asset ID transferred in the transaction to which this Attachment was attached.
	AssetId string `json:"asset_id,omitempty"`
	// The time the Attachment was uploaded at, in RFC-3339 format
	UploadedAt string `json:"uploaded_at,omitempty"`
	// The length in bytes of the raw content of the Attachment
	ContentLengthBytes int64 `json:"content_length_bytes,omitempty"`
}
