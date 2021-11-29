from os import link
import unittest
from src.main import getFloatPrice, getItemInfoByItemName


class TestMain(unittest.TestCase):

    def test_getFloatPrice(self):
        """
        Assert float price conversion
        """

        assert getFloatPrice("price of the quantity is $200.384") == 200.384
        assert getFloatPrice("$10.0$") == 10.0
        assert getFloatPrice("") == 0
    
    def test_getItemInfoByItemName(self):
        # building argument
        item_name = "chair"
        order_by_col = ""
        reverse = False

        args = {
            'search': item_name,
            'sort': 'pr' if order_by_col == 'price' else 'pr',
            'des': reverse,
            'num': 1
        }

        response = [
            {'website': 'amazon'},
            {'website': 'walmart'},
            {'website': 'target'},
            {'website': 'costco'},
            {'website': 'bestbuy'},
            {'website': 'ebay'}]
        
        itemList = getItemInfoByItemName(args)
        assert itemList[0]['website'] == response[0]['website']

    # def test_getVarietyCountByWebsite(self):
    #     """
    #     Assert variety count values
    #     """
    #     assert getFloatPrice("price of the quantity is $200.384") == 200.384
    #     assert getFloatPrice("$10.0$") == 10.0
    #     assert getFloatPrice("") == 0
