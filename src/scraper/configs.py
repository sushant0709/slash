# package imports
from datetime import datetime
import requests
from ebaysdk.finding import Connection

# local imports
from scraper.formattr import formatTitle

# individual scrapers
def scrape_walmart(query):
    """Scrape Walmarts's api for data

    Parameters
    ----------
    query: str
        Item to look for in the api

    Returns
    ----------
    items: list
        List of items from the dict
    """

    api_url = 'https://api.bluecartapi.com/request'

    page = '/s/' + query

    params = {
        'api_key': '4797C4706E1F456BBF55908317A04850',
        'search_term': query,
        'type': 'search'
    }
    

    data = requests.get(api_url, params=params).json()

    items = []
    for p in data['search_results']:
        item = {
            'timestamp': datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
            'title': formatTitle(p['product']['title']),
            'price': '$' + str(p['offers']['primary']['price']),
            'website': 'walmart',
            'link': p['product']['link'],
            'image': p['product']['main_image']
        }
        items.append(item)
        
    return items

# idividual scrapper
def scrape_amazon(query):
    """Scrape Amazon's api for data

    Parameters
    ----------
    query: str
        Item to look for in the api

    Returns
    ----------
    items: list
        List of items from the dict
    """

    api_url = 'https://api.rainforestapi.com/request'

    page = '/s/' + query

    params = {
    'api_key': '2EB92CC426BE4DAF87CB7B0AC9064676',
    'type': 'search',
    'amazon_domain': 'amazon.com',
    'search_term': query,
    }
    
    data = requests.get(api_url, params=params).json()

    items = []
    for p in data['search_results']:
        if 'price' in p:
            item = {
                'timestamp': datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
                'title': formatTitle(p['title']),  
                'price': '$' + str(p['price']['value']),
                'website': 'amazon',
                'link': p['link'],
            }
            items.append(item)
        
    return items

COSTCO = {
    'site': 'costco',
    'url': 'https://www.costco.com/CatalogSearch?dept=All&keyword=',
    'item_component': 'div',
    'item_indicator': {
        'class': 'product-tile-set'
    },
    'title_indicator': 'span a',
    'price_indicator': 'div.price',
    'link_indicator': 'span.description a',
    'image_indicator': 'a.product-image-url img',
}

BESTBUY = {
    'site': 'bestbuy',
    'url': 'https://www.bestbuy.com/site/searchpage.jsp?st=',
    'item_component': 'li',
    'item_indicator': {
        'class': 'sku-item'
    },
    'title_indicator': 'h4.sku-header a',
    'price_indicator': 'div.priceView-customer-price span',
    'link_indicator': 'a.image-link',
}


# individual scrapers
def scrape_target(query):
    """Scrape Target's api for data

    Parameters
    ----------
    query: str
        Item to look for in the api

    Returns
    ----------
    items: list
        List of items from the dict
    """

    api_url = 'https://api.redcircleapi.com/request'

    page = '/s/' + query
    
    params = {
    'api_key': '041ACFF13B1D4986A58C1F10CFA4D217',
      'search_term': query,
      'category_id': '5zja3',
      'type': 'search'
    }

    data = requests.get(api_url, params=params).json()

    items = []
    for p in data['search_results']:
        item = {
            'timestamp': datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
            'title': formatTitle(p['product']['title']),
            'price': '$' + str(p['offers']['primary']['price']),
            'website': 'target',
            'link': p['product']['link'],
        }
        items.append(item)
        
    return items



def scrape_ebay(query):
    """Scrape Target's api for data

    Parameters
    ----------
    query: str
        Item to look for in the api

    Returns
    ----------
    items: list
        List of items from the dict
    """

    EBAY_APP = 'BradleyE-slash-PRD-2ddd2999f-2ae39cfa'

    try:
        api = Connection(appid=EBAY_APP, config_file=None, siteid='EBAY-US')
        response = api.execute('findItemsByKeywords', {'keywords': query})
    except ConnectionError as e:
        print(e)
        return []

    data = response.dict()

    items = []
    for p in data['searchResult']['item']:
        item = {
            'timestamp': datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
            'title': formatTitle(p['title']),
            'price': '$' + p['sellingStatus']['currentPrice']['value'],
            'website': 'ebay',
            'link': p['viewItemURL']
        }
        items.append(item)

    return items


CONFIGS = [COSTCO, BESTBUY]
