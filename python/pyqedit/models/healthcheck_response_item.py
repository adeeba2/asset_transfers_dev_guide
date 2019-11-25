# coding: utf-8

"""
    QEDIT - Asset Transfers

    This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/).   # noqa: E501

    OpenAPI spec version: 1.6.2
    Contact: dev@qed-it.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class HealthcheckResponseItem(object):
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
        'passing': 'bool',
        'error': 'str'
    }

    attribute_map = {
        'passing': 'passing',
        'error': 'error'
    }

    def __init__(self, passing=None, error=None):  # noqa: E501
        """HealthcheckResponseItem - a model defined in OpenAPI"""  # noqa: E501

        self._passing = None
        self._error = None
        self.discriminator = None

        if passing is not None:
            self.passing = passing
        if error is not None:
            self.error = error

    @property
    def passing(self):
        """Gets the passing of this HealthcheckResponseItem.  # noqa: E501

        Boolean signifying whether the component is healthy  # noqa: E501

        :return: The passing of this HealthcheckResponseItem.  # noqa: E501
        :rtype: bool
        """
        return self._passing

    @passing.setter
    def passing(self, passing):
        """Sets the passing of this HealthcheckResponseItem.

        Boolean signifying whether the component is healthy  # noqa: E501

        :param passing: The passing of this HealthcheckResponseItem.  # noqa: E501
        :type: bool
        """

        self._passing = passing

    @property
    def error(self):
        """Gets the error of this HealthcheckResponseItem.  # noqa: E501

        Error string describing the component's problem; empty if the component is healthy  # noqa: E501

        :return: The error of this HealthcheckResponseItem.  # noqa: E501
        :rtype: str
        """
        return self._error

    @error.setter
    def error(self, error):
        """Sets the error of this HealthcheckResponseItem.

        Error string describing the component's problem; empty if the component is healthy  # noqa: E501

        :param error: The error of this HealthcheckResponseItem.  # noqa: E501
        :type: str
        """

        self._error = error

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
        if not isinstance(other, HealthcheckResponseItem):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
