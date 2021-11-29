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
            {'timestamp': '29/11/2021 10:55:55', 'title': 'Amazon Basics Padded Office Desk Chair w...', 'price': '$74.72', 'link': 'www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A044744711O2LMGRIQBH6&url=%2FAmazon-Basics-Ergonomic-Adjustable-360-Degree%2Fdp%2FB0735X2M1J%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dchair%26qid%3D1638201353%26sr%3D8-1-spons%26psc%3D1&qualifier=1638201353&id=2930947703909538&widgetName=sp_atf', 'website': 'amazon'}, 
            {'timestamp': '29/11/2021 10:55:56', 'title': 'Big Joe Milano Bean Bag Chair, Multiple ...', 'price': 'From $48.13', 'link': 'www.walmart.comhttps://wrd.walmart.com/track?eventST=click&plmt=sp-search-middle~desktop~&rdf=1&tax=4044_103150_97116_91853&pltfm=desktop&pt=search&mloc=sp-search-middle&storeId=1372&adUid=hNefb1a1R0fecTNHPc2IwL8lRsj1c8DIPXK0&bt=1&pgId=chair&pos=1&spQs=VnFDLjfLuKkth8fsgwLdu5L_F6eEU-vjeIwB7ZabmBP1_-zFzCDcstoJGRQxPsYL_u_7uVNPCfWck9etnOM9kyTuG2VNuAkDxWsEz7dd9jc&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FBig-Joe-Milano-Bean-Bag-Chair-Blue%2F51744431%3Fathbdg%3DL1800', 'website': 'walmart'}, 
            {'timestamp': '29/11/2021 10:55:57', 'title': 'Steel Folding Chair Black - PDG', 'price': '$11.99', 'website': 'target', 'link': 'https://www.target.com/p/steel-folding-chair-black-pdg/-/A-14777780'}, 
            {'timestamp': '29/11/2021 10:55:59', 'title': 'Respawn Gaming Chair', 'price': '$229.99', 'link': 'https://www.costco.com/respawn-gaming-chair.product.100388800.html', 'website': 'costco'}, 
            {'timestamp': '29/11/2021 10:56:01', 'title': 'Razer - Iskur Gaming Chair with Built-in...', 'price': '$349.99', 'link': 'www.bestbuy.com/site/razer-iskur-gaming-chair-with-built-in-lumbar-support-black/6476898.p?skuId=6476898', 'website': 'bestbuy'}, 
            {'timestamp': '29/11/2021 10:56:02', 'title': 'Steelcase Leap V2 Chair,  -Open Box- Ful...', 'price': '$329.11', 'website': 'ebay', 'link': 'https://www.ebay.com/itm/Steelcase-Leap-V2-Chair-Open-Box-Fully-Loaded-Black-Fabric-/121882349228'}
            ]
        
        itemList = getItemInfoByItemName(args)
        assert itemList[0]['title'] == response[0]['title'] and itemList[0]['price'] == response[0]['price'] and itemList[0]['link'] == response[0]['link'] and itemList[0]['website'] == response[0]['website'] and
        itemList[1]['title'] == response[1]['title'] and itemList[1]['price'] == response[1]['price'] and itemList[1]['link'] == response[1]['link'] and itemList[1]['website'] == response[1]['website'] and
        itemList[2]['title'] == response[2]['title'] and itemList[2]['price'] == response[2]['price'] and itemList[2]['link'] == response[2]['link'] and itemList[2]['website'] == response[2]['website'] and
        itemList[3]['title'] == response[3]['title'] and itemList[3]['price'] == response[3]['price'] and itemList[3]['link'] == response[3]['link'] and itemList[3]['website'] == response[3]['website'] and
        itemList[4]['title'] == response[4]['title'] and itemList[4]['price'] == response[4]['price'] and itemList[4]['link'] == response[4]['link'] and itemList[4]['website'] == response[4]['website'] and
        itemList[5]['title'] == response[5]['title'] and itemList[5]['price'] == response[5]['price'] and itemList[5]['link'] == response[5]['link'] and itemList[5]['website'] == response[5]['website'] and

    # def test_getVarietyCountByWebsite(self):
    #     """
    #     Assert variety count values
    #     """
    #     assert getFloatPrice("price of the quantity is $200.384") == 200.384
    #     assert getFloatPrice("$10.0$") == 10.0
    #     assert getFloatPrice("") == 0
