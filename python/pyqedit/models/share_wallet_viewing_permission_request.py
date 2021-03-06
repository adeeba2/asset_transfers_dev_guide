# coding: utf-8

"""
    QEDIT - Asset Transfers

    This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/).   # noqa: E501

    OpenAPI spec version: 1.7.2
    Contact: dev@qed-it.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class ShareWalletViewingPermissionRequest(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'wallet_id': 'str',
        'authorization': 'str',
        'recipient_payment_address': 'str',
        'share_wallet_id_as': 'str'
    }

    attribute_map = {
        'wallet_id': 'wallet_id',
        'authorization': 'authorization',
        'recipient_payment_address': 'recipient_payment_address',
        'share_wallet_id_as': 'share_wallet_id_as'
    }

    def __init__(self, wallet_id=None, authorization=None, recipient_payment_address=None, share_wallet_id_as=None):  # noqa: E501
        """ShareWalletViewingPermissionRequest - a model defined in OpenAPI"""  # noqa: E501

        self._wallet_id = None
        self._authorization = None
        self._recipient_payment_address = None
        self._share_wallet_id_as = None
        self.discriminator = None

        self.wallet_id = wallet_id
        self.authorization = authorization
        self.recipient_payment_address = recipient_payment_address
        self.share_wallet_id_as = share_wallet_id_as

    @property
    def wallet_id(self):
        """Gets the wallet_id of this ShareWalletViewingPermissionRequest.  # noqa: E501

        The ID of the Wallet to export a viewing key for  # noqa: E501

        :return: The wallet_id of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :rtype: str
        """
        return self._wallet_id

    @wallet_id.setter
    def wallet_id(self, wallet_id):
        """Sets the wallet_id of this ShareWalletViewingPermissionRequest.

        The ID of the Wallet to export a viewing key for  # noqa: E501

        :param wallet_id: The wallet_id of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :type: str
        """
        if wallet_id is None:
            raise ValueError("Invalid value for `wallet_id`, must not be `None`")  # noqa: E501

        self._wallet_id = wallet_id

    @property
    def authorization(self):
        """Gets the authorization of this ShareWalletViewingPermissionRequest.  # noqa: E501

        The authorization password for the Wallet  # noqa: E501

        :return: The authorization of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :rtype: str
        """
        return self._authorization

    @authorization.setter
    def authorization(self, authorization):
        """Sets the authorization of this ShareWalletViewingPermissionRequest.

        The authorization password for the Wallet  # noqa: E501

        :param authorization: The authorization of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :type: str
        """
        if authorization is None:
            raise ValueError("Invalid value for `authorization`, must not be `None`")  # noqa: E501

        self._authorization = authorization

    @property
    def recipient_payment_address(self):
        """Gets the recipient_payment_address of this ShareWalletViewingPermissionRequest.  # noqa: E501

        An Address of the Wallet that belongs to the intended recipient of the exported viewing key; used to automatically send the key to the recipient in a secure and private manner  # noqa: E501

        :return: The recipient_payment_address of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :rtype: str
        """
        return self._recipient_payment_address

    @recipient_payment_address.setter
    def recipient_payment_address(self, recipient_payment_address):
        """Sets the recipient_payment_address of this ShareWalletViewingPermissionRequest.

        An Address of the Wallet that belongs to the intended recipient of the exported viewing key; used to automatically send the key to the recipient in a secure and private manner  # noqa: E501

        :param recipient_payment_address: The recipient_payment_address of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :type: str
        """
        if recipient_payment_address is None:
            raise ValueError("Invalid value for `recipient_payment_address`, must not be `None`")  # noqa: E501

        self._recipient_payment_address = recipient_payment_address

    @property
    def share_wallet_id_as(self):
        """Gets the share_wallet_id_as of this ShareWalletViewingPermissionRequest.  # noqa: E501

        The wallet id assigned by the sender and used to identify the shared wallet on the recipient's Node.  # noqa: E501

        :return: The share_wallet_id_as of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :rtype: str
        """
        return self._share_wallet_id_as

    @share_wallet_id_as.setter
    def share_wallet_id_as(self, share_wallet_id_as):
        """Sets the share_wallet_id_as of this ShareWalletViewingPermissionRequest.

        The wallet id assigned by the sender and used to identify the shared wallet on the recipient's Node.  # noqa: E501

        :param share_wallet_id_as: The share_wallet_id_as of this ShareWalletViewingPermissionRequest.  # noqa: E501
        :type: str
        """
        if share_wallet_id_as is None:
            raise ValueError("Invalid value for `share_wallet_id_as`, must not be `None`")  # noqa: E501

        self._share_wallet_id_as = share_wallet_id_as

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ShareWalletViewingPermissionRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
