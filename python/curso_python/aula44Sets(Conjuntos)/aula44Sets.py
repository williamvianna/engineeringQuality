# add (adiciona), update (atualiza), clear, discard
# union | (une)
# intersection & (todos os elementos presentes nos dois sets)
# difference - (elementos apenas no set da esquerda)
# symmetric_difference ^ (elementos que estão nos dois sets, mas não em ambos)

# l1 = [1,2,1,1,3,4,5,6,6,6,6,6,7,8,9,'William', 'William']
# l1 = set(l1)
# l1 = list(l1)
#
# print(l1)

# s1 = {1,2,3,4,5}
# s2 = {1,2,3,4,5,6}
# s3 = s1 | s2
#
# print(s3)

# s1 = {1,2,3,4,5}
# s2 = {1,2,3,4,5,6}
# s3 = s1 & s2
#
# print(s3)

# s1 = {1,2,3,4,5,7}
# s2 = {1,2,3,4,5,6}
# s3 = s1 - s2

# print(s3)

s1 = {1,2,3,4,5,7}
s2 = {1,2,3,4,5,6}
s3 = s1 ^ s2

print(s3)
