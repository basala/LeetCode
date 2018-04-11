#!usr/bin/env python3
# -*- coding: utf-8 -*-


import re


def countAndSay(n):
    s = '1'
    for _ in range(n - 1):
        s = re.sub(r'(.)\1*', lambda m: str(len(m.group(0))) + m.group(1), s)
    return s


if __name__ == "__main__":
    print(countAndSay(5))
