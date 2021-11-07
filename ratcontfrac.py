"""
creation: unknown

Conversion to and from continued fractions... and some other things?
"""

from itertools import accumulate
from functools import reduce
from fractions import Fraction

def to_rat_cont_frac(n, d):
    frac_lst = []

    while d != 0:
        v, n = divmod(n, d)
        frac_lst.append(v)
        n, d = d, n
    
    return frac_lst

def partial_sums(cont_frac):
    a = accumulate(cont_frac, lambda x, y: x + [y], initial=[]) # [1,2,3,4] => [[], [1], [1,2], [1,2,3], [1,2,3,4]]
    for partial in a:
        if len(partial) == 0: continue
        rev = reversed(partial)
        yield reduce(lambda acc, cv: Fraction(1, acc) + cv, rev) # 3, 2, 1 = 1/(1/3 + 2) + 1

def isqrt(n):
    x = n
    y = (x + 1) // 2
    while y < x:
        x = y
        y = (x + n // x) // 2
    return x

# 23 / 17
# v, n = (1, 6) => [1]
# 17 / 6
# v, n = (2, 5) => [1, 2]
# 6 / 5
# v, n = (1, 1) => [1, 2, 1]
# 5 / 1
# v, n = (5, 0) => [1, 2, 1, 5]

def qf(b, c):
    discrim = isqrt(b ** 2 - 4 * c)
    if (b ** 2 - 4 * c) % discrim != 0: return None
    return [Fraction(-b + discrim, 2), Fraction(-b - discrim, 2)]

e = 1043118409828550796773745518585981151180206101005135117565865602978722878478494447048783557571813980525643725323377488249838860897784683927029906188947001149632101513367258267329961684034661252866484981926055087386190015432964608927947646476193251820354738640453947833718397360834701566765504916472450194494897616371452996381159817427887623703639133290358520498419049175941584678802701606995099241245926884172985004839801270005583030514286561971825047719421487004569752638468907609110285739083279629747310953086535889932550905065172805818862336335628248528993024112446002398466115161473573451161053837400091893285717
n = 156749047558583013960513267351769479915110440411448078412590565797031533622509813352093119636835511977253033854388466854142753776146092587825440445182008237325262012698034419137157047927918635897378973846177552961727126115560551970797370239385129543828686170774323306933202481728884019420422360360849592983818405154473369790181636472137741865440233383956571081122982223602667853668754338360008279002325576495573847568301584365514417593244726435632222027817410359417329310347952169273512510934251453361933794586716533950489973436393834189505450956622286216819440777162804798432330933357058175885674184582816364542591313
cf = to_rat_cont_frac(e, n)
ps = partial_sums(cf)

while True:
    f = next(ps)
    if isinstance(f, int): continue
    k, d = f.numerator, f.denominator
    totient = Fraction(e * d - 1, k)
    if totient.denominator != 1: continue
    print(k, d)
    b = -(n - totient + 1)


    r = qf(b, n)
    if r is None: continue
    print(r)
    print(r[0] * r[1] == n)