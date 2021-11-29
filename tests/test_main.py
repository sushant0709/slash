import unittest
from src.main import getFloatPrice


class TestMain(unittest.TestCase):

    def test_getFloatPrice(self):
        """
        Assert location of pptx file exists
        """

        assert getFloatPrice("price of the quantity is $200.384") == 200.384
        assert getFloatPrice("$10.0$") == 10.0
        assert getFloatPrice("") == 0
