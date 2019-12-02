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


class GroupInformation(object):
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
        'group_id': 'str',
        'joined_at': 'date',
        'read_permission': 'bool',
        'memo': 'str'
    }

    attribute_map = {
        'group_id': 'group_id',
        'joined_at': 'joined_at',
        'read_permission': 'read_permission',
        'memo': 'memo'
    }

    def __init__(self, group_id=None, joined_at=None, read_permission=None, memo=None):  # noqa: E501
        """GroupInformation - a model defined in OpenAPI"""  # noqa: E501

        self._group_id = None
        self._joined_at = None
        self._read_permission = None
        self._memo = None
        self.discriminator = None

        self.group_id = group_id
        self.joined_at = joined_at
        self.read_permission = read_permission
        self.memo = memo

    @property
    def group_id(self):
        """Gets the group_id of this GroupInformation.  # noqa: E501

        The unique identifier of the Group  # noqa: E501

        :return: The group_id of this GroupInformation.  # noqa: E501
        :rtype: str
        """
        return self._group_id

    @group_id.setter
    def group_id(self, group_id):
        """Sets the group_id of this GroupInformation.

        The unique identifier of the Group  # noqa: E501

        :param group_id: The group_id of this GroupInformation.  # noqa: E501
        :type: str
        """
        if group_id is None:
            raise ValueError("Invalid value for `group_id`, must not be `None`")  # noqa: E501

        self._group_id = group_id

    @property
    def joined_at(self):
        """Gets the joined_at of this GroupInformation.  # noqa: E501

        Timestamp of when the Group credentials were shared with the Wallet. The timestamp is in RFC-3339 format.  # noqa: E501

        :return: The joined_at of this GroupInformation.  # noqa: E501
        :rtype: date
        """
        return self._joined_at

    @joined_at.setter
    def joined_at(self, joined_at):
        """Sets the joined_at of this GroupInformation.

        Timestamp of when the Group credentials were shared with the Wallet. The timestamp is in RFC-3339 format.  # noqa: E501

        :param joined_at: The joined_at of this GroupInformation.  # noqa: E501
        :type: date
        """
        if joined_at is None:
            raise ValueError("Invalid value for `joined_at`, must not be `None`")  # noqa: E501

        self._joined_at = joined_at

    @property
    def read_permission(self):
        """Gets the read_permission of this GroupInformation.  # noqa: E501

        Boolean set to true if and only if read permission for the given Group was shared with the given Wallet. Note that write access is always shared.  # noqa: E501

        :return: The read_permission of this GroupInformation.  # noqa: E501
        :rtype: bool
        """
        return self._read_permission

    @read_permission.setter
    def read_permission(self, read_permission):
        """Sets the read_permission of this GroupInformation.

        Boolean set to true if and only if read permission for the given Group was shared with the given Wallet. Note that write access is always shared.  # noqa: E501

        :param read_permission: The read_permission of this GroupInformation.  # noqa: E501
        :type: bool
        """
        if read_permission is None:
            raise ValueError("Invalid value for `read_permission`, must not be `None`")  # noqa: E501

        self._read_permission = read_permission

    @property
    def memo(self):
        """Gets the memo of this GroupInformation.  # noqa: E501

        The memo used by the application that first shared this Group with the given Wallet when calling `add_to_group`.  # noqa: E501

        :return: The memo of this GroupInformation.  # noqa: E501
        :rtype: str
        """
        return self._memo

    @memo.setter
    def memo(self, memo):
        """Sets the memo of this GroupInformation.

        The memo used by the application that first shared this Group with the given Wallet when calling `add_to_group`.  # noqa: E501

        :param memo: The memo of this GroupInformation.  # noqa: E501
        :type: str
        """
        if memo is None:
            raise ValueError("Invalid value for `memo`, must not be `None`")  # noqa: E501

        self._memo = memo

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
        if not isinstance(other, GroupInformation):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other