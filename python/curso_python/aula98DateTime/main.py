# https://docs.python.org/2/library/datetime.html
from datetime import datetime, timedelta

d1 = datetime.strptime('20/04/1987 20:00:00', '%d/%m/%Y %H:%M:%S')
d2 = datetime.strptime('25/04/1987 22:33:00', '%d/%m/%Y %H:%M:%S')

print(d2 < d1)
