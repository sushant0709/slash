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
            {'timestamp': '29/11/2021 10:55:55', 
            'title': 'Amazon Basics Padded Office Desk Chair w...', 
            'price': '$74.72', 
            'link': 'www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A044744711O2LMGRIQBH6&url=%2FAmazon-Basics-Ergonomic-Adjustable-360-Degree%2Fdp%2FB0735X2M1J%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dchair%26qid%3D1638201353%26sr%3D8-1-spons%26psc%3D1&qualifier=1638201353&id=2930947703909538&widgetName=sp_atf', 
            'website': 'amazon'}]
        
        itemList = getItemInfoByItemName(args)
        assert itemList[0]['title'] == response[0]['title'] and itemList[0]['price'] == response[0]['price'] and itemList[0]['website'] == response[0]['website']

    # def test_getVarietyCountByWebsite(self):
    #     """
    #     Assert variety count values
    #     """
    #     assert getFloatPrice("price of the quantity is $200.384") == 200.384
    #     assert getFloatPrice("$10.0$") == 10.0
    #     assert getFloatPrice("") == 0
