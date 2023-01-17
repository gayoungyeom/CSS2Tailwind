from bs4 import BeautifulSoup
import requests

# get links
url = "https://tailwindcss.com/docs/installation"
soup = BeautifulSoup(requests.get(url).text, 'html5lib')

link_list = soup.select('a')

href = [];
for link in link_list:
    url = link['href']
    if 'docs' in url:
        href.append(url)

# get classes & properties
base_url = 'https://tailwindcss.com'

START_IDX = 24
FIN_IDX = 11
LAST_IDX = len(href)

refined_href = href[START_IDX:LAST_IDX-FIN_IDX]

p2c_all = {}; #CSS property to Tailwind class
for h in refined_href:
    url = base_url + h
    soup = BeautifulSoup(requests.get(url).text, 'html5lib')

    # p2c_cur = {};
    tr = soup.select('tbody > tr')
    for r in tr:
        td = r.select('td')
        p2c_all[td[1].text] = td[0].text
        # p2c_cur[td[1].text] = td[0].text

    # file_name = h.split('/')[-1]
    # with open(f'{file_name}.json', 'w', encoding='utf-8') as file:
    #     file.write(f'{p2c_cur}')

with open(f'p2c_all.json', 'w', encoding='utf-8') as file:
    file.write(f'{p2c_all}')