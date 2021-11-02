# package imports
from datetime import datetime
import requests

# local imports
from src.formatter import formatTitle

# configs
WALMART = {
    'site': 'walmart',
    'url': 'https://www.walmart.com/search?q=',
    'item_component': 'div',
    'item_indicator': {
        'data-item-id': True
    },
    'title_indicator': 'span.lh-title',
    'price_indicator': 'div.lh-copy',
    'link_indicator': 'a'
}

AMAZON = {
    'site': 'amazon',
    'url': 'https://www.amazon.com/s?k=',
    'item_component': 'div',
    'item_indicator': {
        'data-component-type': 's-search-result'
    },
    'title_indicator': 'h2 a span',
    'price_indicator': 'span.a-price span',
    'link_indicator': 'h2 a.a-link-normal'
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

    api_url = 'https://redsky.target.com/redsky_aggregations/v1/web/plp_search_v1'

    page = '/s/' + query
    params = {
        'key': 'ff457966e64d5e877fdbad070f276d18ecec4a01',
        'channel': 'WEB',
        'count': '24',
        'default_purchasability_filter': 'false',
        'include_sponsored': 'true',
        'keyword': query,
        'offset': '0',
        'page': page,
        'platform': 'desktop',
        'pricing_store_id': '3991',
        'useragent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0',
        'visitor_id': 'AAA',
    }

    data = requests.get(api_url, params=params).json()

    items = []
    for p in data['data']['search']['products']:
        item = {
            'timestamp': datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
            'title': formatTitle(p['item']['product_description']['title']),
            'price': '$' + str(p['price']['current_retail']),
            'website': 'target'
        }
        items.append(item)

    return items
