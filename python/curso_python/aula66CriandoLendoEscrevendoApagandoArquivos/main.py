# https://docs.python.org/3/library/functions.html#open
"""
import os

os.remove('abc.txt')
"""

"""
with open('abc.txt', 'w+') as file:
    file.write('Linha 1\n')
    file.write('Linha 2\n')
    file.write('Linha 3\n')
    
    file.seek(0)
    print(file.read())
"""

"""
with open('abc.txt', 'r') as file:
    print(file.read())
"""

"""
with open('abc.txt', 'a+') as file:
    file.write('Outra linha')
    file.seek(0)
    print(file.read())
"""

import json

d1 = {
    'Pessoa 1':{
        'nome': 'William',
        'idade': 46,
    },
    'Pessoa 2': {
        'nome': 'Renata',
        'idade': 41,
    },
}

d1_json = json.dumps(d1, indent=True)

with open('abc.json', 'w+') as file:
    file.write(d1_json)
