import {
  validatePassports,
  naiveValidate,
  strongerValidate,
  createPassport,
} from "./4";

it(`Simple test 1/2`, () => {
  expect(
    validatePassports(
      `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
      byr:1937 iyr:2017 cid:147 hgt:183cm
      
      iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
      hcl:#cfa07d byr:1929
      
      hcl:#ae17e1 iyr:2013
      eyr:2024
      ecl:brn pid:760753108 byr:1931
      hgt:179cm
      
      hcl:#cfa07d eyr:2025 pid:166559648
      iyr:2011 ecl:brn hgt:59in`,
      naiveValidate
    )
  ).toBe(2);
});

it(`Solution (Pavluse) 1/2`, () => {
  expect(
    validatePassports(
      `byr:1971
      iyr:2017 hgt:160cm
      eyr:2020 ecl:hzl
      pid:157096267
      
      hgt:183cm
      pid:368895060
      ecl:oth eyr:2020
      iyr:2013
      byr:1966
      
      ecl:lzr cid:279 pid:192cm
      hcl:1f7352 iyr:2014 hgt:70cm eyr:1983
      byr:2004
      
      hcl:#602927 iyr:2018 byr:1938 ecl:blu
      eyr:2024 hgt:172cm
      pid:839621424
      
      ecl:#12f268
      hcl:#6b5442
      iyr:2012 byr:2011
      eyr:1933 pid:189cm hgt:155in
      
      byr:1954
      ecl:gry pid:664227667 eyr:2028
      hgt:151cm
      iyr:2019
      
      ecl:gry
      byr:1931 iyr:2017
      pid:459927933 eyr:2028
      hgt:67in hcl:#fffffd
      
      cid:322 hgt:163cm
      byr:1969 hcl:#a97842 pid:472877556
      iyr:2019
      ecl:amb eyr:2030
      
      hcl:#733820 ecl:brn byr:2000 eyr:2022 iyr:2014 cid:320 pid:751634349
      hgt:180cm
      
      ecl:blu eyr:2028
      hcl:#866857 byr:2029 hgt:191cm iyr:2010
      pid:170cm cid:123
      
      pid:258660154 byr:1921 hgt:161cm
      eyr:2030
      cid:217 iyr:2012
      hcl:#4dd6d4 ecl:grn
      
      hgt:170cm byr:1978 eyr:2022 pid:399347273
      iyr:2010 cid:109 ecl:blu hcl:#602927
      
      pid:172106685
      hgt:183cm
      ecl:gry iyr:2020 eyr:2025 hcl:#18171d byr:1980 cid:289
      
      cid:77 ecl:#254ad9
      byr:2017 pid:169290741 iyr:2003 hgt:85 hcl:z
      
      hgt:155cm byr:1987 ecl:oth hcl:#fffffd
      iyr:2010
      
      ecl:brn iyr:2014 cid:74
      hcl:#623a2f
      hgt:187cm byr:1955 pid:008305281 eyr:2025
      
      pid:428624233 ecl:grn
      eyr:2027 hgt:167cm hcl:#623a2f byr:1960 iyr:2016
      
      eyr:2027 pid:358876826 hgt:171cm ecl:oth byr:1957 iyr:2018
      hcl:#ceb3a1
      cid:314
      
      ecl:grn eyr:2030
      hgt:73in iyr:2011 hcl:#602927
      
      hgt:76in byr:2029
      pid:2703176 iyr:2020
      eyr:2037 ecl:#95d926
      hcl:9574d2
      
      eyr:2020 hgt:164cm
      byr:1949 hcl:#fffffd pid:591281293 iyr:2014 cid:136
      
      cid:268 hgt:73in hcl:#6b5442 eyr:2025 ecl:brn byr:1988 pid:899417027 iyr:2015
      
      iyr:2020 hcl:#b6652a hgt:177cm
      eyr:2028 ecl:hzl
      byr:1995 pid:594197202
      
      hcl:#a97842 hgt:179cm byr:1930
      ecl:brn pid:010268954 eyr:2020 iyr:2010
      
      iyr:2022 pid:93390086
      cid:321 eyr:2034 hcl:#a97842 hgt:168in byr:2006 ecl:#a8f84c
      
      eyr:2028 ecl:blu byr:1935
      hcl:#6b5442 pid:187679418
      hgt:174cm iyr:2016
      
      iyr:2019 hgt:164cm pid:704379775
      ecl:oth hcl:#888785 byr:1930
      eyr:2025
      
      hcl:#6b5442 cid:168
      hgt:171cm eyr:1944 iyr:2018 pid:675364934
      byr:1962
      ecl:hzl
      
      hcl:z
      eyr:2039
      ecl:zzz pid:26281402 cid:144 iyr:1928
      hgt:166cm
      
      ecl:hzl hcl:#7d3b0c
      eyr:2022 pid:011589584
      hgt:64in byr:1945 iyr:2014
      
      byr:1950 hcl:#18171d pid:685748669 eyr:2028 iyr:2010 hgt:176cm ecl:grn
      
      byr:1989
      hgt:163cm hcl:#18171d ecl:grn iyr:2020 pid:721397788 cid:308 eyr:2020
      
      pid:443496560 iyr:1999
      eyr:2027 hcl:z
      hgt:69in ecl:zzz byr:2019
      cid:108
      
      pid:#c9d804 eyr:2011
      ecl:#574df9 iyr:2027 hcl:z byr:2018
      hgt:64
      
      hgt:69cm
      iyr:1926 hcl:fdcce6
      ecl:#28b358
      eyr:2026
      byr:1994
      pid:76404593
      
      eyr:2020
      ecl:hzl pid:978839539 hcl:#efcc98
      byr:1935 cid:121
      hgt:165cm
      
      ecl:amb
      byr:1951 hgt:186cm pid:812513486 iyr:2012 eyr:2029 hcl:#fffffd
      
      hcl:fcdd61 hgt:168in ecl:grt pid:8474140699 byr:1924 iyr:2027 eyr:2023
      
      ecl:oth hcl:#866857
      byr:1965 pid:533941934 hgt:166cm iyr:2019 eyr:2040
      
      eyr:2032 pid:0795438812 iyr:2009 hcl:z
      byr:2028 hgt:131 ecl:gmt
      
      cid:102 byr:1923 eyr:2025
      pid:222102208 iyr:2019 hcl:#341e13
      hgt:167cm
      ecl:amb
      
      hgt:180cm byr:1956 iyr:2014 eyr:2022
      ecl:oth cid:175 hcl:#888785
      
      cid:216 eyr:2022
      ecl:brn pid:002875069 iyr:2019 hcl:#cfa07d byr:1991 hgt:164cm
      
      iyr:2014 byr:1933 pid:537809907
      hgt:185cm eyr:2029 hcl:#341e13 ecl:blu
      
      cid:286 hgt:166cm byr:1977 iyr:2012 pid:541909675 ecl:oth eyr:2020
      hcl:#59eb12
      
      hcl:#18171d cid:329 byr:1921 eyr:2027 iyr:2019
      pid:440820443 hgt:75in ecl:blu
      
      hcl:#733820 hgt:177cm
      pid:085529831 eyr:2029 iyr:2010 ecl:amb byr:1972
      
      pid:704125918 hcl:#b6652a byr:1981
      ecl:#698ae8 cid:141 iyr:2018 eyr:2026 hgt:66in
      
      iyr:2020 eyr:2022
      hgt:191cm hcl:#7d3b0c
      ecl:blu byr:1943 pid:969407635
      
      pid:10899196
      hgt:161cm
      ecl:lzr iyr:2023 hcl:#ceb3a1 byr:1986 eyr:2012
      
      hcl:#7d3b0c ecl:utc eyr:2020
      byr:2028 pid:#f8c441 iyr:2030
      hgt:164cm
      
      byr:2003 hcl:z iyr:2012 hgt:187in
      ecl:gry eyr:2030 pid:150cm
      
      pid:427618420 hgt:155cm iyr:2012
      ecl:brn
      byr:1948 eyr:2029 hcl:#6b5442
      
      ecl:oth hgt:81
      byr:2025 cid:66 pid:174cm hcl:z
      eyr:2021
      
      byr:2027 ecl:lzr hcl:#888785 eyr:1923 hgt:110 cid:54 iyr:1939
      
      hcl:#341e13 byr:1961 eyr:2022 hgt:163cm cid:137 ecl:amb
      iyr:2019
      
      hcl:#866857
      iyr:2020
      byr:2005
      hgt:139 ecl:amb cid:181
      eyr:2016
      pid:181cm
      
      byr:2030
      iyr:2014
      hcl:#733820 cid:74 eyr:2021 hgt:179cm
      pid:7938817872
      ecl:amb
      
      hcl:91a6dd
      iyr:2019 byr:2024
      hgt:72cm
      ecl:gmt eyr:2023
      pid:8440093771
      
      ecl:grn byr:1963 cid:60 iyr:2030
      hgt:74 eyr:2022
      pid:193189388
      hcl:#b6652a
      
      pid:403849590 byr:2012
      eyr:1951 cid:90 iyr:2023
      hgt:69cm hcl:z ecl:gmt
      
      iyr:2010 hcl:#341e13
      pid:011326174 hgt:185cm byr:1976 cid:207 eyr:2027 ecl:amb
      
      hgt:64in
      pid:499837104 hcl:#3be285
      byr:1944
      eyr:2024 iyr:2017
      ecl:gry
      
      eyr:2032 pid:#850d4e hcl:deddda ecl:brn hgt:172 byr:2004
      cid:244 iyr:2022
      
      hcl:a3346d ecl:amb
      pid:#505713 hgt:74cm eyr:2010 iyr:2020
      
      byr:1987
      ecl:oth iyr:2012 eyr:2023
      pid:131199420 cid:112 hcl:#a97842
      
      cid:256 hcl:#a97842 byr:2000 iyr:2018 ecl:oth
      eyr:2022 pid:637777693 hgt:160cm
      
      hgt:152cm
      cid:164 hcl:#866857 ecl:grn eyr:2025
      pid:495224989 iyr:2020 byr:1949
      
      iyr:2010
      cid:288 byr:1986 ecl:blu
      pid:304077824
      eyr:2020
      
      hgt:182cm
      ecl:blu
      hcl:#18171d pid:047931925 byr:1964
      iyr:2012 eyr:2030 cid:167
      
      byr:1958
      hcl:#866857 iyr:2019 hgt:165cm pid:553631683
      cid:109 ecl:gry
      eyr:2023
      
      cid:156
      iyr:2014 pid:811368482 eyr:2026 hcl:#b6652a byr:1994
      hgt:184cm ecl:brn
      
      hcl:#733820
      hgt:183cm ecl:grn
      pid:265625165 byr:1943 cid:344
      iyr:2011
      
      iyr:2017 hcl:#c0946f pid:716422629 cid:104 byr:1974
      hgt:160cm eyr:2021 ecl:brn
      
      byr:2002 hgt:180cm hcl:#602927
      eyr:2025 ecl:grn iyr:2011 pid:887584172
      
      hcl:#888785 ecl:brn eyr:2026
      pid:14483306 byr:1947
      hgt:177cm iyr:2015
      
      hcl:#b6652a
      ecl:#64783e eyr:2020 hgt:163 pid:651615946
      iyr:2012 byr:1999
      
      iyr:2014 ecl:gry hgt:188cm eyr:2028 pid:503058612 hcl:#a31066
      
      hgt:178cm hcl:z
      ecl:amb
      pid:17656631
      eyr:2031 byr:2023
      
      hgt:166cm pid:783568747 hcl:#341e13
      byr:1955 ecl:grn eyr:2023
      
      iyr:2016 hgt:161cm byr:1989
      eyr:2023
      ecl:amb pid:133770783
      hcl:#fffffd
      
      cid:75 byr:1986 eyr:2020 pid:099478576 ecl:blu
      hcl:#733820
      iyr:2011 hgt:158cm
      
      pid:911200183 hcl:#602927 eyr:2029 iyr:2018 ecl:brn hgt:181cm
      byr:1937
      
      iyr:1928 byr:2020 hcl:579202
      hgt:60 ecl:utc eyr:1963 pid:157cm
      cid:253
      
      eyr:2028 iyr:1949
      pid:284455762 hcl:#a97842 ecl:oth byr:1947 hgt:163cm
      
      hcl:#18171d eyr:2025 cid:222
      byr:1924 ecl:oth
      pid:898594506 hgt:182cm
      iyr:2017
      
      byr:1935 iyr:2027
      hgt:160in pid:#c090c3
      hcl:#623a2f cid:162 eyr:1942 ecl:amb
      
      iyr:2014 hgt:160cm eyr:2028 hcl:#623a2f byr:2010
      pid:684765216 ecl:blu
      
      byr:1958
      hgt:154cm hcl:#a97842
      ecl:oth iyr:2015 eyr:2020 cid:334
      
      pid:636691339 iyr:2018
      byr:1930
      hcl:#b6652a cid:86
      hgt:184cm ecl:oth
      eyr:2029
      
      iyr:2025
      hgt:76cm ecl:#043004 hcl:z
      byr:2009 eyr:1999
      
      eyr:2020 pid:56419390 iyr:2015 hcl:#ceb3a1 ecl:utc
      hgt:98
      
      iyr:2014 byr:1927 hcl:#fffffd ecl:amb eyr:2022
      hgt:188cm pid:602778565
      
      hcl:#cfa07d eyr:2029 byr:1937 pid:7912057436
      ecl:hzl
      cid:192 hgt:68in iyr:2012
      
      hgt:155cm
      iyr:2015 byr:1954 pid:559203670
      ecl:blu hcl:#fffffd eyr:2025
      
      hcl:#341e13 byr:1998 iyr:2019
      cid:312
      ecl:oth
      pid:230874778 hgt:161cm
      
      iyr:2011 ecl:amb
      eyr:2026
      hgt:163cm byr:1932 hcl:#733820 pid:850176278
      
      eyr:2030
      hgt:170cm
      iyr:2017 byr:1972
      pid:014731313
      hcl:#341e13 ecl:brn
      
      pid:133005637
      hgt:167cm
      cid:317
      eyr:2025 hcl:#341e13 iyr:2012 ecl:gry byr:1950
      
      iyr:2029 pid:745014772 hgt:68in
      eyr:2034 ecl:hzl
      hcl:ec07ce
      
      hgt:165cm
      ecl:gry
      hcl:#a97842 byr:1921 cid:263 pid:609363367
      
      pid:192cm hcl:18f308
      ecl:oth
      eyr:2037 cid:239 iyr:2026 byr:2010
      
      hcl:d0e525 eyr:2037 iyr:2019
      cid:197
      pid:469740743
      hgt:186in ecl:brn byr:1977
      
      ecl:hzl cid:254 hgt:165cm
      eyr:2024 byr:1996
      iyr:2021 pid:797277746 hcl:e286e8
      
      hcl:#b6652a cid:142 ecl:oth hgt:190cm byr:1962 pid:997137384 iyr:2020
      eyr:2029
      
      ecl:brn byr:1962 hcl:#866857 iyr:2020 hgt:152cm pid:701556397 cid:121 eyr:2029
      
      eyr:2024 cid:186 hcl:z
      byr:1962 hgt:155cm pid:448098321 iyr:2017 ecl:grn
      
      iyr:2016
      hgt:168cm byr:1999
      cid:286
      hcl:#18171d pid:223995430 eyr:2022 ecl:blu
      
      pid:227780276 ecl:blu iyr:2017 byr:1985 hcl:#6b5442 hgt:183cm eyr:2028
      
      hgt:190cm
      ecl:oth eyr:2030 cid:223 hcl:#888785 iyr:2010
      pid:115829664 byr:1967
      
      eyr:1992 pid:0688674980 hcl:z
      byr:2028
      hgt:186in ecl:#849f7b
      iyr:2029
      cid:64
      
      eyr:2025
      iyr:2013 byr:1958 ecl:grn
      hcl:#ceb3a1
      hgt:153cm pid:815357118
      
      pid:038013822 hgt:180cm iyr:2013
      hcl:#623a2f
      ecl:grn eyr:2029 byr:1949
      
      byr:1923
      cid:299 hgt:184cm iyr:2020
      hcl:#fffffd eyr:2027
      ecl:hzl
      
      byr:1930
      iyr:2012
      ecl:grn hcl:#87f2c8 pid:787371085
      
      iyr:2019
      eyr:2028 pid:107626362 hgt:183cm
      ecl:grt hcl:#623a2f byr:1985
      
      byr:2011
      hgt:68in iyr:2002 ecl:#5dfa18 hcl:#341e13 pid:205853974
      
      iyr:2014
      pid:179cm
      hcl:13b9e3 eyr:2022 ecl:#b1759b hgt:184in
      byr:1954
      
      hgt:183cm hcl:#efcc98
      pid:428260080 cid:231 eyr:2025 ecl:grn
      iyr:2010
      byr:1957
      
      iyr:2016
      ecl:gry
      pid:192cm eyr:2026
      byr:1956
      hgt:174cm hcl:#623a2f
      
      eyr:2021 ecl:blu cid:230
      byr:1923
      pid:438732879 hgt:167cm
      hcl:#602927
      
      byr:1948 ecl:xry
      pid:154cm hgt:179cm eyr:2029 iyr:2017
      hcl:#dd59ab
      
      hcl:#ceb3a1
      iyr:2014 byr:1981 hgt:167cm ecl:grn
      eyr:2021
      pid:926925947
      
      iyr:1985
      pid:652196636 hcl:#18171d ecl:#ff3e10 hgt:162cm byr:2012 eyr:2023 cid:171
      
      eyr:2029
      hgt:166cm
      pid:499909488 byr:1929 hcl:#866857 ecl:brn iyr:2013
      
      pid:440245122
      byr:1992 hgt:179cm iyr:2010 cid:181 ecl:brn hcl:#888785 eyr:2020
      
      eyr:2029 hcl:#888785 pid:274994154 ecl:hzl
      iyr:2014 byr:1995
      
      pid:3195072620
      hcl:z ecl:hzl cid:130 iyr:2030 eyr:2034 hgt:157
      
      hcl:#1b0a51
      pid:129985083 eyr:2029
      hgt:192cm cid:236 byr:1996 ecl:blu iyr:2016
      
      ecl:lzr pid:899902347 iyr:1982
      hcl:#cfa07d eyr:2028 byr:1927 hgt:155in
      
      cid:187 eyr:2029 hcl:#efcc98 byr:1986 pid:760318090
      hgt:169cm iyr:2018 ecl:amb
      
      hcl:#fffffd eyr:2021 pid:532530085 iyr:2019 byr:1995 hgt:169cm
      
      iyr:1980
      hcl:z eyr:2019
      hgt:72cm pid:6532875244 ecl:#2f2221 byr:2006
      
      hgt:174cm byr:1920
      ecl:gry pid:#14fae7 eyr:2026 hcl:#1814d1
      iyr:2013
      
      hcl:#ceb3a1 ecl:grn
      iyr:2018
      byr:1978
      hgt:183cm pid:566862236
      eyr:2028
      
      iyr:2020 ecl:amb
      pid:618246345 byr:1940
      hgt:60cm eyr:2027 cid:242 hcl:#b6652a
      
      ecl:grn
      hcl:#18171d byr:1957 pid:325895714 iyr:2018
      eyr:2023 hgt:162cm
      
      ecl:#a3ed7b
      byr:2024
      hcl:z eyr:2022 iyr:2016 cid:350 hgt:119 pid:185cm
      
      iyr:2010
      byr:2004 eyr:2032 cid:326 hcl:6019c5
      ecl:gmt hgt:137
      
      pid:477848102 eyr:2025 hgt:178cm hcl:#e31a3d ecl:brn
      byr:1943
      
      pid:#65fca1 eyr:2026 hgt:192cm cid:293 ecl:blu byr:2026 iyr:2024 hcl:#a97842
      
      eyr:2025 cid:181 hgt:186cm byr:1968
      ecl:brn pid:318405093 hcl:#341e13 iyr:2015
      
      hcl:#c12f4b eyr:2025 cid:311 pid:652667870
      ecl:oth
      hgt:166cm
      byr:1981 iyr:2016
      
      ecl:hzl
      byr:2025 iyr:2014
      hcl:138d5c eyr:2037 hgt:160in cid:206
      pid:#d9119b
      
      pid:51419740 cid:141
      iyr:2012
      hgt:90 ecl:#9438f4 hcl:#7d3b0c byr:2021 eyr:2020
      
      pid:#0bc613
      hcl:z byr:2017
      hgt:91 cid:284 eyr:1966 iyr:2008
      ecl:#974ceb
      
      cid:344 iyr:1953 eyr:2020 ecl:hzl byr:2019 hcl:z pid:2969979
      
      ecl:gry
      byr:1925 cid:113
      hcl:#a97842 pid:744660539 hgt:153cm iyr:2020
      
      hgt:177 pid:856186682 eyr:1968 ecl:blu
      cid:167 byr:1986 hcl:#866857 iyr:2015
      
      byr:1937 eyr:2021 iyr:2017
      cid:91 hgt:183cm hcl:#a97842 ecl:blu pid:149192621
      
      hgt:154cm hcl:#602927 ecl:oth
      byr:1939 iyr:2018 pid:670669747 eyr:2029 cid:301
      
      eyr:2025 pid:249412970 ecl:oth
      iyr:2016
      byr:1921 hcl:#a97842 hgt:176cm
      
      byr:1969
      iyr:2019 hcl:9de0cb
      pid:644476999 hgt:75in
      ecl:oth eyr:2022
      
      hgt:164cm iyr:2016
      byr:1988 ecl:gry
      eyr:2030
      hcl:#efcc98 pid:393258887
      
      hgt:183cm pid:6930456 eyr:2023 cid:210 ecl:#766482 byr:2023 iyr:2017 hcl:z
      
      iyr:2011 hgt:165cm eyr:2020 byr:1966
      hcl:#efcc98 pid:691169980 ecl:blu
      
      iyr:2011 hcl:#602927 eyr:2029
      byr:1966
      ecl:oth hgt:165cm pid:945383793
      
      pid:567096741 iyr:2025
      ecl:gry eyr:1944 hgt:187in byr:2026 hcl:8ac39a
      
      byr:2025
      eyr:2025 iyr:2015
      hgt:191 pid:1659927272 ecl:grn
      
      iyr:2027 hgt:63in byr:1963 pid:874200881
      ecl:oth hcl:#c0946f eyr:2029
      
      hcl:#b37a48
      byr:1957 ecl:hzl
      eyr:2030
      iyr:2013
      
      pid:#38e0fd eyr:2019 cid:103
      hgt:153in
      ecl:#956d7c
      iyr:2029 byr:2029 hcl:z
      
      eyr:2021 pid:956654136
      hcl:#854d9d hgt:186cm byr:1960 iyr:2015
      
      eyr:2020
      byr:1995
      hcl:#b6652a ecl:amb pid:746523744 iyr:2015
      hgt:178cm
      
      eyr:2020 hgt:173cm cid:322 byr:1956 iyr:2020 ecl:blu
      pid:833595649
      
      ecl:gry iyr:2017 eyr:2020 pid:537816651 hgt:183cm cid:160 byr:1996 hcl:#733820
      
      iyr:1920
      byr:2013
      hcl:z eyr:1932 pid:169cm
      
      eyr:2030 cid:258 iyr:2020 ecl:grn byr:1947 pid:571610070
      hgt:162cm hcl:#888785
      
      byr:2025 hgt:155cm iyr:2030 ecl:amb eyr:2002
      
      iyr:2020 ecl:hzl
      pid:090561426 hcl:#a97842
      byr:1923
      
      ecl:hzl
      iyr:2019
      hcl:#c0946f eyr:2025
      byr:1999 hgt:178cm pid:026042669
      
      hgt:74in
      eyr:2027 iyr:2015 ecl:gry
      byr:2005 pid:#28b09d
      
      eyr:1953 byr:2014 ecl:lzr cid:202 hcl:1af88d
      iyr:2028
      
      cid:99
      pid:706477697 iyr:2018 hgt:171cm eyr:2027
      ecl:oth
      byr:1978 hcl:#930aef
      
      iyr:2017
      byr:1935
      eyr:2029
      ecl:amb pid:321873254 hgt:179cm hcl:#1b9aea cid:160
      
      iyr:2013 ecl:hzl eyr:2023 cid:233 byr:1996 pid:605962483 hgt:175cm hcl:#ceb3a1
      
      pid:754905579
      ecl:brn eyr:2021 hcl:#ceb3a1
      byr:1943 hgt:59in
      
      cid:110 byr:1935 eyr:2021 hgt:172cm iyr:2020
      pid:643443673 hcl:#888785 ecl:brn
      
      ecl:gmt hcl:#cfa07d
      hgt:148 iyr:2024 pid:635827422
      eyr:1935
      byr:1964
      
      iyr:2012 byr:2016 hcl:z
      hgt:178cm pid:213073693 eyr:2005
      
      ecl:#b3cc58 byr:2027 pid:172cm hcl:#888785 hgt:177cm eyr:1988
      iyr:2027
      
      eyr:2029
      byr:1923
      hcl:#d9855b cid:134 pid:068598146 hgt:152cm ecl:blu
      
      cid:309
      iyr:2010 ecl:oth hgt:188cm hcl:#18171d eyr:2028 pid:174227992 byr:1931
      
      iyr:2010 hgt:72in cid:266 ecl:brn pid:0090854908
      hcl:#623a2f eyr:2032
      byr:1967
      
      pid:192554211 eyr:2020 hgt:192cm ecl:gry cid:158 iyr:2015 byr:1940
      hcl:#efcc98
      
      cid:248 hgt:75in eyr:2025 byr:1957 hcl:#c0946f
      iyr:2019
      ecl:brn
      
      pid:96533216 hcl:z ecl:blu eyr:2027 hgt:193cm cid:224
      byr:1928 iyr:2014
      
      iyr:2010
      eyr:2022 cid:276 hcl:#a97842 byr:1968 ecl:gry pid:808830560 hgt:188cm
      
      hgt:158in
      pid:097590485 iyr:2030 eyr:1940 hcl:z cid:274
      ecl:#2ea9ec
      byr:2024
      
      pid:616947922 byr:1982 iyr:2014 hgt:186cm ecl:oth hcl:#888785
      
      byr:1941 pid:039744699 hcl:#efcc98 hgt:190cm iyr:2011
      eyr:2020 ecl:blu
      
      byr:1971
      ecl:hzl hgt:65in
      pid:076133019 iyr:2019 eyr:2030
      
      ecl:blu iyr:2011 byr:1928 hcl:#c0946f hgt:172cm eyr:2026 pid:171544458
      
      byr:1929 pid:145819079 ecl:hzl
      hgt:192cm iyr:2015 eyr:2020 hcl:#b6652a
      
      byr:1981 ecl:amb pid:123467924
      eyr:2024 hcl:#18171d
      hgt:184cm iyr:2017
      
      byr:1957
      ecl:oth pid:881258191 hgt:65in iyr:2010
      hcl:#a97842
      
      ecl:amb eyr:2020 hgt:152cm
      iyr:2021 pid:9448811025 hcl:#c0946f cid:204 byr:2030
      
      eyr:2022 pid:208725350
      byr:1944 ecl:blu hcl:#18171d cid:164
      hgt:170cm iyr:2014
      
      hcl:#18171d eyr:1952 iyr:1939 pid:788651896 hgt:157in byr:2007
      
      byr:1944 cid:87 pid:463367304
      iyr:2020 hgt:188cm ecl:gry
      eyr:2027 hcl:#cfa07d
      
      ecl:hzl
      iyr:2018 hgt:164cm byr:1972 cid:272 pid:990204374
      hcl:#6b5442
      
      hgt:155cm pid:791416860 iyr:2015
      cid:278 hcl:#18171d byr:1994 ecl:brn
      eyr:2023
      
      iyr:2017 cid:245 eyr:2026 byr:1932 ecl:blu
      hgt:159cm pid:904760812 hcl:#18171d
      
      ecl:blu hcl:#6b5442
      iyr:2015 eyr:2023 pid:535891497 hgt:175cm cid:168 byr:1920
      
      byr:2000 hcl:#6b5442 hgt:156cm
      pid:765444727 iyr:2012
      ecl:brn
      eyr:2028
      
      eyr:2005 pid:9092484649
      byr:2028
      ecl:#5fc7fc hgt:81
      iyr:1988 hcl:8280e1
      
      cid:275
      byr:1928 iyr:2010 hcl:#888785 pid:596954301 ecl:brn eyr:2020 hgt:166cm
      
      cid:163
      byr:1984 eyr:2027 iyr:2020
      ecl:gry hgt:166cm pid:650001846
      hcl:#602927
      
      iyr:1925 eyr:2030
      byr:1985 hcl:#cfa07d ecl:#f16a95 hgt:150cm pid:67853501
      
      ecl:gry
      eyr:1949 cid:218 hgt:73cm byr:2004 pid:055108092
      iyr:1961
      
      eyr:2024 iyr:2016 pid:133523002
      hgt:62in hcl:#d99c14
      byr:1996 ecl:hzl
      
      eyr:2026 iyr:2019 hgt:189cm ecl:brn hcl:#623a2f
      byr:1979 pid:172111665
      
      iyr:2017
      eyr:1937 ecl:#bfd0ee
      byr:1964 hcl:#733820
      hgt:169cm pid:33181449
      
      eyr:2024 hcl:#6b5442
      iyr:2014
      hgt:68in pid:577055593 ecl:grn byr:1996
      
      hcl:z cid:150 eyr:2039 byr:2015 pid:2453663020 ecl:brn
      hgt:154cm
      
      hcl:#efcc98 eyr:2022
      ecl:grn hgt:167cm byr:1978 iyr:2010 pid:180446111
      
      ecl:gry
      iyr:2020 hgt:152cm pid:#cce9cf eyr:2028
      byr:1942
      hcl:z
      
      hcl:#341e13 ecl:brn iyr:2019
      pid:589837530 cid:157 byr:1925 hgt:183cm eyr:2020
      
      byr:2009
      pid:179cm hgt:164cm
      iyr:1927 hcl:#cfa07d eyr:2034
      
      ecl:oth iyr:2012
      eyr:2028 hcl:#866857 pid:716964854
      byr:1940 cid:113 hgt:193cm
      
      byr:1985 iyr:2011 hcl:#866857 pid:454558712 eyr:2025 cid:301
      hgt:62in ecl:blu
      
      hcl:#733820 eyr:2025 ecl:amb
      pid:855788635 iyr:2016
      byr:1965
      cid:140 hgt:183cm
      
      hcl:#efcc98 cid:326 eyr:1961
      pid:001357810 iyr:1947 ecl:#8abfc8 hgt:75 byr:2012
      
      hgt:60cm pid:#e28da4 byr:2014 iyr:2019 eyr:2040 ecl:utc
      
      hcl:#733820 eyr:2022 pid:708208638 hgt:162cm cid:326 iyr:2018 ecl:oth byr:1997
      
      iyr:1967 byr:2013 pid:8595504787 hgt:73cm ecl:dne
      
      pid:808787977 hcl:#18171d
      cid:205 hgt:181cm
      byr:1986
      ecl:gry iyr:2013
      
      ecl:dne iyr:2009
      byr:2027
      hgt:188in hcl:#c0946f
      pid:585147305 eyr:2024
      
      hcl:#733820 iyr:2019
      eyr:2020
      hgt:190cm
      pid:042907748 ecl:grn byr:1920
      
      ecl:#603ad1
      eyr:2026
      hcl:33f9f8
      pid:862887360 hgt:156in byr:1993
      iyr:2013
      
      ecl:oth eyr:2030 byr:1960
      hcl:#a97842 cid:285
      hgt:60in pid:655974048 iyr:2016
      
      iyr:2030
      hgt:143
      pid:65806846 byr:1948 hcl:#72a0d3 eyr:1934 ecl:#7cd402
      
      hcl:z pid:#0f7c0a iyr:2012 hgt:161cm
      byr:2022 eyr:1937
      
      hcl:#fffffd ecl:hzl
      hgt:191cm byr:1935 iyr:2015 cid:240 eyr:2030 pid:778049989
      
      ecl:amb iyr:2011 hcl:#e196f6 pid:231470794 eyr:2026 hgt:179in byr:1979
      
      ecl:oth hcl:#6b5442 pid:181cm hgt:72cm
      eyr:2040 iyr:2010
      
      iyr:2016 eyr:2026 pid:113617276
      cid:117 hgt:176cm ecl:grn
      hcl:#c5b999
      
      iyr:2016 byr:1941
      pid:846760253 hgt:60cm
      hcl:#7d3b0c ecl:zzz
      eyr:1972
      
      eyr:2023 hcl:#623a2f
      cid:103 pid:476193829 hgt:181cm ecl:oth byr:1997
      iyr:2014
      
      ecl:#b64a07 hcl:7bb40c byr:2028 eyr:2039 pid:#e2ba33 hgt:189 iyr:1940
      
      pid:#3ecfd8 hcl:#7d3b0c iyr:2014 ecl:#30a5e7 hgt:73cm byr:1954
      
      ecl:dne
      byr:2011 pid:512088455
      hcl:#18171d eyr:2023
      iyr:2024
      
      byr:1996 eyr:2026 pid:268556486 ecl:brn
      hgt:150cm
      iyr:2013 hcl:#7d3b0c
      
      iyr:2014
      ecl:grn pid:222910621 hcl:#602927
      eyr:2030 hgt:155cm
      
      pid:530689228 byr:1938
      iyr:2015
      hgt:185cm ecl:hzl eyr:2022 hcl:#866857
      
      hcl:#b6652a byr:2028 iyr:2018 cid:150 ecl:lzr pid:706073193 hgt:169cm
      
      hgt:171cm ecl:gry hcl:#6b5442 byr:1953
      iyr:2011 pid:622763802 eyr:2026
      
      eyr:2032 hgt:137
      pid:5033763648
      byr:1925 ecl:hzl hcl:#623a2f iyr:2024
      
      byr:1930 pid:6999766453 ecl:#3e3e07
      hcl:#602927 iyr:2010 eyr:2039
      hgt:160cm
      
      hgt:122 ecl:amb pid:105302121 iyr:2017
      hcl:#733820
      eyr:2027 byr:1955
      
      hcl:#95f96b
      hgt:193cm iyr:2020 pid:719337690
      byr:1971
      ecl:brn eyr:2024`,
      naiveValidate
    )
  ).toBe(182);
});

it(`Solution 1/2`, () => {
  expect(
    validatePassports(
      `iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1 eyr:2026
      hgt:174cm
      pid:526744288
      
      pid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025
      
      ecl:oth hcl:#733820 cid:124 pid:111220591
      iyr:2019 eyr:2001
      byr:1933 hgt:159in
      
      pid:812929897 hgt:159cm hcl:#fffffd byr:1942 iyr:2026 cid:291
      ecl:oth
      eyr:2024
      
      cid:83 pid:524032739 iyr:2013 ecl:amb byr:1974
      hgt:191cm hcl:#ceb3a1 eyr:2028
      
      ecl:gry hcl:eefed5 pid:88405792 hgt:183cm cid:221 byr:1963 eyr:2029
      
      pid:777881168 ecl:grn
      hgt:181cm byr:1923 eyr:2021 iyr:2018 hcl:#18171d
      
      byr:1941 eyr:2027 ecl:gry iyr:2016 pid:062495008 hcl:#a5e1b5 hgt:178cm
      
      cid:56
      byr:1971
      hcl:#efcc98 pid:649868696 iyr:2011 eyr:2025 hgt:164cm
      
      ecl:blu
      pid:117915262 eyr:2023 byr:1925 iyr:2020 hcl:#888785
      hgt:188cm
      
      iyr:2012
      cid:174
      eyr:2024
      pid:143293382 ecl:brn byr:1946 hgt:193cm
      
      eyr:2021 iyr:2011
      hgt:192cm pid:251564680
      byr:1976
      ecl:blu hcl:#602927
      
      byr:1973 ecl:blu hgt:164cm
      eyr:2022 pid:695538656 iyr:2010 cid:244 hcl:#b6652a
      
      iyr:2014
      eyr:2027 pid:358398181 ecl:hzl hgt:74in byr:1949 cid:329
      hcl:#ceb3a1
      
      cid:211
      byr:1954 eyr:2023 hgt:172cm ecl:blu iyr:2019 hcl:#623a2f pid:657051725
      
      pid:562699115 eyr:2026 byr:2000
      hgt:162cm hcl:#602927 ecl:amb iyr:2018
      
      ecl:brn
      iyr:2013
      pid:835184859 byr:1981 hgt:157cm eyr:2027 hcl:#b6652a
      
      pid:763432667 byr:1981 hcl:#cfa07d ecl:brn
      iyr:2010 hgt:63in cid:107
      eyr:2027
      
      byr:2009
      hgt:177cm cid:314
      hcl:f55bf8 eyr:2025
      pid:632519974
      iyr:2015 ecl:amb
      
      eyr:2024 pid:614239656 hgt:169cm iyr:2014 ecl:hzl byr:1992
      hcl:#602927
      
      ecl:blu
      eyr:2026
      hcl:#efcc98
      byr:1980 iyr:2013
      hgt:161cm
      pid:065413599
      
      hgt:182cm
      eyr:2025 iyr:2013 pid:939088351 hcl:#b6652a byr:1994 ecl:amb
      
      hgt:65in cid:220 ecl:amb hcl:#ceb3a1
      iyr:2013 eyr:2025 pid:167894964 byr:1976
      
      hgt:185cm cid:88 ecl:blu iyr:2020
      eyr:2020
      hcl:#888785 pid:582683387
      byr:1981
      
      hcl:#866857 eyr:2020 byr:1948
      pid:358943355
      ecl:amb hgt:164cm iyr:2019
      
      pid:127467714
      hcl:#ceb3a1 byr:1991 hgt:163cm eyr:2020 iyr:2017 ecl:blu cid:229
      
      cid:156 byr:1942 eyr:2024 hcl:#cfa07d
      ecl:blu pid:843747591
      iyr:2014 hgt:173cm
      
      hcl:#a97842 hgt:165cm
      iyr:2013 ecl:#781088 byr:1952
      pid:516882944
      eyr:2026
      
      hgt:179cm
      byr:1969 pid:408297435 iyr:2020 ecl:oth hcl:#cfa07d eyr:2020
      
      ecl:amb iyr:2013 hcl:#b6652a eyr:2023 cid:88
      pid:324081998 hgt:66in byr:1945
      
      iyr:2012
      eyr:2024
      hcl:#18171d
      pid:756726480 byr:1947 ecl:oth
      hgt:164cm
      
      ecl:blu
      hcl:#fffffd byr:1951 iyr:2019 pid:544645775
      hgt:153cm eyr:2027
      
      pid:655906238 ecl:brn eyr:2028 byr:1959 hgt:63in cid:338
      iyr:2020
      
      eyr:2020
      hcl:#602927 hgt:72in iyr:2014
      pid:305025767
      cid:297 byr:1957 ecl:gry
      
      hgt:155cm byr:1942 hcl:#a97842
      iyr:2014 ecl:gry pid:593995708
      eyr:2022
      
      pid:219206471 byr:1955 eyr:2030
      hcl:#a97842 ecl:oth iyr:2015 cid:134 hgt:170cm
      
      iyr:2013 cid:268
      eyr:2020
      hcl:#a97842 ecl:grn pid:235279200 hgt:178cm
      byr:1952
      
      iyr:2013 pid:016384352 eyr:2027
      hcl:#866857 ecl:grn hgt:161cm byr:1943
      
      ecl:amb hgt:169cm pid:149540593
      iyr:2012
      eyr:2040 hcl:#a97842 byr:1954
      
      byr:1938
      ecl:brn hcl:#b6652a eyr:2026 hgt:184cm iyr:2018 pid:832531235
      
      byr:1945 iyr:2015 hgt:171cm eyr:2028 pid:998746896 ecl:hzl hcl:#866857
      
      hgt:73in ecl:hzl eyr:2023 cid:343 pid:458004221 iyr:2017 byr:1962 hcl:#efcc98
      
      byr:1970 hgt:159cm pid:925022199 iyr:2013
      eyr:2028 hcl:#888785
      ecl:hzl
      
      eyr:2027 iyr:2016 ecl:gry
      hcl:#cfa07d
      pid:006246552 byr:1939 cid:124 hgt:177cm
      
      byr:1982
      iyr:2016 hgt:159cm
      cid:102 hcl:#fffffd
      eyr:2029
      ecl:grn pid:619798285
      
      iyr:2018
      hgt:189cm hcl:#efcc98
      byr:1937 eyr:2023 pid:727551553 ecl:oth
      
      iyr:2014 byr:1976
      eyr:2020 hcl:#7d3b0c pid:125102070 ecl:amb
      hgt:186cm
      
      hgt:187cm byr:1949
      pid:027653233 eyr:2021 hcl:#341e13 ecl:hzl
      iyr:2020
      
      iyr:2016
      byr:1954 pid:545631256
      hcl:#602927 eyr:2023
      hgt:191cm ecl:amb
      
      pid:509762954
      hgt:190cm ecl:hzl byr:1991
      eyr:2022 iyr:2019
      cid:187
      
      hcl:#c0946f eyr:2024 hgt:152cm cid:277 iyr:2015 pid:872373191 byr:1988
      
      pid:544267207 cid:113
      iyr:2015
      hgt:181cm
      hcl:#6b5442
      ecl:gry
      byr:1971
      
      ecl:gry
      hgt:161cm iyr:2012 byr:1965
      pid:574527322 hcl:#fffffd
      
      iyr:2018 byr:1976 hcl:#b6652a
      pid:024582079 hgt:169cm ecl:oth eyr:2021
      
      pid:020478204
      byr:1945 hcl:#7d3b0c
      cid:239 eyr:2025 hgt:188cm
      ecl:grn
      iyr:2012
      
      eyr:2026 pid:202653345
      byr:1988
      hcl:#2cdc09
      hgt:185cm iyr:2010
      ecl:hzl
      
      hgt:183cm iyr:2017
      hcl:#18171d byr:1977 eyr:2029 pid:804559436 ecl:grn
      
      hcl:#602927 pid:812072269 hgt:170cm eyr:2026 byr:1955 iyr:2020 ecl:gry
      
      eyr:2023 iyr:2010
      hcl:#cfa07d pid:592419048 byr:1943
      ecl:brn
      hgt:172cm
      
      ecl:brn iyr:2013 pid:558179058
      hcl:#fffffd eyr:2022
      byr:1922
      cid:331 hgt:64in
      
      ecl:xry
      hcl:ade850 eyr:1995 pid:976028541
      iyr:2030 hgt:179cm
      byr:2030
      
      ecl:#2872b1 pid:158cm eyr:1927 hcl:ee8e92
      iyr:2014 hgt:190cm
      byr:2025
      
      hgt:155cm cid:283 eyr:2020 ecl:blu pid:755165290 byr:1936 hcl:#733820 iyr:2012
      
      eyr:2030
      byr:1943
      cid:323 pid:906418061 hgt:157cm ecl:amb iyr:2010
      hcl:#7d3b0c
      
      hcl:#fffffd
      pid:873200829 hgt:192cm eyr:2022 ecl:blu iyr:2016 byr:1920 cid:200
      
      eyr:2021
      byr:1963
      hcl:#a97842 pid:585551405
      iyr:2019 cid:91
      ecl:brn hgt:60cm
      
      byr:1946
      pid:520273609 hcl:#341e13 cid:66
      iyr:2020 hgt:154cm eyr:2024
      ecl:brn
      
      ecl:brn hcl:#d64d7b eyr:2020
      byr:1957 hgt:181cm iyr:2019 pid:378496967 cid:135
      
      pid:002446580
      eyr:2027 byr:1939 hcl:#888785
      iyr:2011 cid:168
      ecl:oth hgt:160cm
      
      iyr:2019 hgt:70in hcl:#7d3b0c byr:1983
      eyr:2024 pid:369493064 cid:54 ecl:oth
      
      iyr:1979 pid:170cm
      hgt:65cm eyr:1933 hcl:z
      
      ecl:zzz pid:193cm hcl:z eyr:2020 byr:2013 iyr:2016 hgt:177in
      
      iyr:2010 hgt:187cm
      byr:1932
      hcl:z ecl:oth pid:665967850 eyr:2030
      
      eyr:2029
      iyr:2013 hcl:#b6652a ecl:amb
      byr:1936 pid:516025566
      hgt:181cm
      
      hcl:#c0946f pid:238825672 byr:2000
      iyr:2013 eyr:2028 ecl:amb hgt:183cm
      
      eyr:2021 hcl:#866857
      cid:77 iyr:2017 hgt:156cm pid:271118829 ecl:amb
      
      iyr:2014
      hcl:#fffffd
      cid:321 hgt:159cm ecl:gry
      pid:691381062 eyr:2022 byr:1991
      
      pid:111506492 hcl:#c1d296 iyr:2011
      byr:1934 hgt:176cm cid:263 eyr:2028 ecl:amb
      
      iyr:2014 hgt:64in eyr:2024 cid:193 hcl:#b6652a byr:1967
      ecl:oth pid:138677174
      
      hgt:168cm iyr:2020 eyr:2030
      hcl:#6b5442 ecl:brn pid:975843892 byr:1927
      
      byr:1957 ecl:amb iyr:2012 pid:177266671 eyr:2026
      hcl:#866857 hgt:162cm
      
      eyr:2029
      hcl:#341e13
      hgt:175cm pid:465809700 ecl:amb byr:1974
      iyr:2010
      
      hcl:#a97842 iyr:2010
      hgt:176cm eyr:2029 byr:1931 ecl:grt pid:161604244
      
      eyr:2024 iyr:2018 hgt:170in byr:1959 ecl:gmt hcl:#888785
      pid:94163132
      
      iyr:2011
      hgt:186cm pid:998471478 byr:1956 ecl:amb
      eyr:2029
      hcl:#efcc98
      cid:76
      
      ecl:brn
      byr:2001 pid:378527883 iyr:2013 hcl:#83bdc5 eyr:2020 hgt:181cm
      
      iyr:2017 ecl:grn hgt:172cm hcl:#888785 cid:100
      eyr:2022 byr:2030
      pid:311562177
      
      pid:097558436
      cid:141 hgt:152cm iyr:2019
      ecl:brn eyr:2023
      byr:1940
      hcl:#6b5442
      
      iyr:2016 eyr:2023 byr:1992
      hgt:174cm ecl:amb
      pid:691291640 cid:190 hcl:#fffffd
      
      hcl:#623a2f ecl:brn
      eyr:2028 cid:227 iyr:2012 hgt:74in pid:964273950 byr:1965
      
      hcl:#ceb3a1 eyr:2028
      iyr:2013 pid:175294029 hgt:150cm ecl:grn
      byr:1936
      cid:143
      
      byr:1935 hcl:#a97842 ecl:oth hgt:180cm iyr:2019
      pid:857891916
      eyr:2026
      
      pid:084518249 ecl:hzl eyr:2027 hcl:#c0946f hgt:192cm cid:315 byr:1961
      iyr:2010
      
      hgt:67cm pid:37925169 eyr:2022
      hcl:z iyr:2012 cid:315 byr:2028 ecl:dne
      
      hcl:#c0946f byr:1924
      hgt:176cm cid:87 pid:682212551 iyr:2011
      eyr:2026
      ecl:gry
      
      hgt:181cm byr:1935
      iyr:2018 pid:644964785
      eyr:2026 ecl:amb
      
      pid:789810179
      ecl:gry eyr:2021
      cid:159 hgt:185cm iyr:2020 hcl:#602927
      byr:1965
      
      pid:672386364
      iyr:2013 eyr:2021 byr:1951 hcl:#341e13
      ecl:gry hgt:173cm
      
      hcl:#18171d eyr:2030 pid:957722245 iyr:2012 byr:1955
      ecl:grn
      hgt:154cm
      
      byr:1955 ecl:oth
      hcl:#cfa07d
      eyr:2030
      iyr:2013 pid:361945273 hgt:154cm
      
      iyr:2012 eyr:2027 ecl:grn hcl:#16d373
      hgt:192cm
      
      pid:275525273
      byr:1986
      iyr:2017
      eyr:2022
      ecl:grn
      hgt:75in
      hcl:#919cc0
      
      eyr:2029
      cid:84 hcl:#cfa07d iyr:2013 hgt:78
      ecl:brn
      byr:1925 pid:281331549
      
      eyr:2027
      cid:219 iyr:2016 byr:1971 hcl:#7d3b0c hgt:179cm ecl:grn
      pid:301296222
      
      eyr:2030 iyr:2010 pid:995982765
      byr:1926 ecl:amb hcl:#888785 hgt:186cm
      
      byr:1955 iyr:2015 hgt:165cm cid:101
      eyr:2027 ecl:amb hcl:#602927
      pid:168654790
      
      hcl:#7d3b0c byr:1956 eyr:2029 hgt:155cm
      ecl:grn pid:816685992
      iyr:2016
      
      ecl:grn hcl:#cfa07d cid:71
      pid:914724136 iyr:2012 eyr:2024
      hgt:184cm byr:1938
      
      ecl:gry
      eyr:2029 hcl:#602927 pid:255062643 iyr:2015 hgt:175cm
      
      hcl:#341e13 iyr:2017 eyr:2028
      pid:459704815 byr:1922
      cid:312
      ecl:brn hgt:152cm
      
      ecl:dne eyr:1981
      pid:8356519470 hgt:176 iyr:1941 byr:2006 hcl:z
      
      ecl:amb pid:753377589 hcl:#a97842 eyr:2022 hgt:187cm
      cid:130 iyr:2013 byr:1961
      
      pid:952444443
      hcl:#bde835 byr:1963 iyr:2020 eyr:2025
      ecl:amb hgt:162cm
      
      eyr:2027 iyr:2018 hcl:#ceb3a1 hgt:152cm pid:882429463 ecl:blu byr:1969
      
      cid:134 eyr:2021 hcl:#a97842 hgt:63in
      ecl:grn byr:1975 iyr:2019 pid:154078695
      
      byr:1956 eyr:2027
      pid:396230480 hcl:#b6652a
      hgt:175cm iyr:2020 ecl:oth
      
      ecl:grn
      cid:263 hcl:#506937 byr:1924
      eyr:2030 pid:705511368 hgt:159cm
      iyr:2011
      
      eyr:2020 hgt:178cm ecl:grn
      byr:1947 hcl:#888785
      pid:177476829 iyr:2019
      
      ecl:hzl cid:211 iyr:2016 hgt:176cm pid:405182470
      byr:1952
      hcl:#866857 eyr:2028
      
      eyr:2032 cid:152 ecl:gmt hgt:150in
      pid:75969209
      byr:2019 hcl:z iyr:1940
      
      hcl:#fffffd hgt:193cm pid:607407479 cid:300 byr:1944 iyr:2017
      ecl:oth
      eyr:2026
      
      hcl:z
      cid:125 eyr:2040 ecl:dne byr:2015 pid:733096171 hgt:63cm
      iyr:1922
      
      pid:575721428 hgt:152cm cid:275
      hcl:#cfa07d eyr:2028
      byr:1935 ecl:hzl iyr:2016
      
      iyr:2012
      ecl:grn eyr:2027 hcl:#623a2f pid:029106453 byr:1984 hgt:168cm
      
      ecl:blu cid:140 eyr:2028 iyr:2018 hcl:#c0946f
      hgt:163cm byr:1944
      pid:709288293
      
      byr:1936
      hgt:172cm eyr:1997 hcl:#8b8c88 cid:50
      iyr:2016 pid:205477922 ecl:grn
      
      hgt:170cm pid:872750582 eyr:2027 byr:1985 iyr:2017 hcl:#d6976a ecl:blu
      
      hgt:163cm
      pid:189634089 cid:116 byr:1975 eyr:2030
      hcl:#efcc98 ecl:brn iyr:2020
      
      ecl:amb byr:1953 hcl:#6b5442 pid:418787965
      iyr:2018 hgt:193cm
      eyr:2026
      
      ecl:#3ec898 cid:339 hcl:#866857 eyr:2025 hgt:179cm pid:591430028 iyr:1936 byr:1995
      
      pid:285371937 hgt:159cm
      byr:1922
      iyr:2013 eyr:2023 hcl:#6b5442 ecl:amb
      
      pid:545260883 ecl:oth
      hgt:163cm
      iyr:2015 eyr:2021 byr:1975 hcl:#866857
      
      ecl:hzl hgt:182cm pid:053762098 eyr:2023 cid:174 hcl:#6daac4 iyr:2017 byr:1937
      
      hgt:178cm iyr:2015 byr:1956 pid:815359103
      ecl:blu hcl:#cfa07d eyr:2030
      
      hcl:#7d3b0c
      pid:438108851 hgt:162cm byr:1930 iyr:2014 eyr:2024 ecl:amb
      
      eyr:2027 iyr:2019 hcl:#90eb1c hgt:178cm
      pid:314810594 cid:278 ecl:amb
      byr:2001
      
      byr:1949 iyr:1942 hcl:#888785 ecl:hzl hgt:184cm eyr:2027 pid:899137640
      
      hgt:153cm
      eyr:2022 iyr:2011 byr:1975
      hcl:#602927
      ecl:amb pid:178cm
      
      hcl:#6b5442
      ecl:amb iyr:2018 eyr:2025 pid:418735327 byr:1922 hgt:74in
      
      ecl:gmt hcl:z iyr:2024
      eyr:1988 hgt:75cm cid:125 pid:690872200 byr:1928
      
      eyr:2024 hgt:184cm
      pid:4634589837 ecl:zzz iyr:2022 byr:2000 hcl:89c187
      
      iyr:2017 byr:1966 hcl:#efcc98 ecl:brn pid:473085232 eyr:2021 hgt:174cm
      
      hgt:67in eyr:2030 iyr:2014 byr:1943 hcl:#602927 cid:344
      ecl:oth
      pid:210476779
      
      byr:1955
      ecl:oth
      hgt:193cm iyr:2012 hcl:#623a2f pid:818289829 eyr:2021
      
      byr:2018 ecl:#872a51 iyr:2024 hcl:97783d
      pid:155cm hgt:174cm
      eyr:1964
      
      hcl:#6b5442 hgt:157cm byr:1932 ecl:brn pid:4275535874
      eyr:2024 iyr:2015
      
      pid:959861097
      hgt:151cm cid:140 byr:1935
      eyr:2029
      iyr:2018 ecl:hzl
      hcl:#623a2f
      
      hgt:181cm pid:911791767 eyr:2027
      iyr:2016 byr:1962
      ecl:grn hcl:#866857
      
      eyr:2021
      byr:1994
      hgt:162cm hcl:#866857 ecl:oth iyr:2014
      pid:712345689
      
      hcl:#7d3b0c
      hgt:170cm pid:600132416 eyr:2025
      iyr:2016 byr:1978 ecl:brn
      
      hcl:#0a9307
      cid:287 byr:1940 pid:786271493
      eyr:2028 hgt:186cm
      iyr:2019 ecl:oth
      
      eyr:2025 hgt:190cm ecl:hzl cid:228 iyr:2019
      byr:1932
      hcl:#623a2f pid:648307551
      
      pid:304587325 iyr:2019 byr:1923 hcl:#7d3b0c
      hgt:190cm
      ecl:gry eyr:2030
      
      hgt:188cm eyr:2027 byr:1958 pid:572934921
      hcl:#888785 ecl:hzl iyr:2010
      
      iyr:2019
      hgt:178cm ecl:grn hcl:#7d3b0c pid:007601227
      byr:1975 eyr:2023
      
      pid:808872803 byr:1929
      ecl:grn
      eyr:2022 iyr:2019 hgt:74in hcl:#602927
      
      iyr:2019
      cid:67 hcl:#602927 pid:292601338 ecl:hzl
      byr:2001 eyr:2023 hgt:171cm
      
      byr:1962 eyr:2022 hcl:#b6652a hgt:193cm
      ecl:oth
      iyr:2010
      
      hgt:70in iyr:2014 hcl:#a97842
      cid:169 eyr:2020 ecl:amb
      pid:329751670 byr:1959
      
      byr:1920
      ecl:oth hgt:172cm cid:57 pid:515139276
      eyr:2030
      hcl:#18171d
      iyr:2013
      
      iyr:2012
      hcl:#a97842 pid:946040810 hgt:65in
      byr:1936 ecl:amb eyr:2020
      
      byr:1948 hcl:#18171d
      iyr:2019
      ecl:hzl cid:185
      eyr:2023
      pid:583625200 hgt:191cm
      
      hgt:154cm eyr:2022
      pid:460137392 iyr:2010
      ecl:grn
      hcl:#ceb3a1
      
      eyr:2024
      iyr:2016 pid:890698391 hgt:172cm hcl:#a97842 cid:271 ecl:oth byr:1926
      
      hgt:162cm pid:340904964 hcl:#b6652a
      byr:1966
      iyr:2010
      cid:260 eyr:2028
      ecl:amb
      
      byr:1933 eyr:2029 pid:642043350
      iyr:2016 hcl:#b6652a ecl:grn
      
      pid:602218620 eyr:2023 ecl:blu
      hcl:#623a2f
      byr:1950 hgt:168cm iyr:2015
      
      ecl:gry pid:490792384
      byr:1974
      hcl:#a97842 iyr:2016 hgt:170cm
      
      iyr:2020 ecl:gry byr:2002
      eyr:2029 hcl:#9f45c4
      hgt:155cm pid:604239618
      
      hgt:190cm pid:560653271 iyr:2020 cid:349
      eyr:2024 ecl:blu hcl:#efcc98 byr:1936
      
      eyr:2021 byr:1964 hcl:#efcc98 ecl:grn iyr:2018
      hgt:165cm pid:218376636
      
      pid:186217101
      iyr:2019 hgt:155cm
      byr:2017 eyr:2022 ecl:grn cid:349 hcl:ece72e
      
      iyr:2015
      eyr:2026 pid:802832833
      hcl:#888785 hgt:190cm ecl:brn
      byr:1952
      cid:202
      
      cid:151 iyr:2017 hgt:152cm hcl:#a97842 eyr:2020 ecl:hzl
      pid:554959609 byr:1941
      
      cid:116
      iyr:2019 hgt:159cm byr:1992 pid:662111811
      hcl:#18171d ecl:oth eyr:2024
      
      ecl:grn byr:1966
      iyr:1950 pid:585351486
      eyr:2038 hgt:178in hcl:a27d2b
      
      iyr:2014 cid:238 hgt:187cm pid:523401750 ecl:amb hcl:#18171d eyr:2023 byr:1984
      
      eyr:2021 byr:1957
      pid:340752324
      iyr:2015 hgt:157cm
      hcl:#602927 cid:70
      ecl:oth
      
      pid:458479816 ecl:hzl
      eyr:2022 hcl:z
      hgt:60cm
      byr:2012 iyr:2005
      
      cid:57
      hgt:154cm pid:446142864
      hcl:#341e13 byr:1968 eyr:2030
      iyr:2019
      ecl:brn
      
      eyr:2028
      pid:243811429 byr:1977
      iyr:2011 hcl:#18171d hgt:185cm ecl:oth
      
      cid:205 byr:1976 eyr:2029 pid:649877471 hcl:#cfa07d hgt:152cm
      ecl:blu
      iyr:2013
      
      iyr:2009 pid:559014976 ecl:oth hgt:189cm byr:1936 eyr:2037
      hcl:#efcc98
      
      pid:134378987 byr:1983 iyr:2013 hgt:173cm
      ecl:oth hcl:#ceb3a1
      cid:80
      eyr:2020
      
      hgt:151cm byr:1964 ecl:grn iyr:2010 hcl:#b6652a pid:939492531
      eyr:2028
      
      byr:1961 iyr:2014 hcl:#733820 hgt:179cm
      eyr:2026 ecl:gry pid:732892920
      
      iyr:2018 byr:1996
      pid:944007809 ecl:hzl
      hcl:#866857 eyr:2021
      hgt:155cm
      
      pid:374875696 hcl:#7d3b0c
      ecl:oth
      hgt:193cm byr:1948 cid:238
      iyr:2020
      
      pid:305782299 hcl:#b6652a
      ecl:brn
      hgt:172cm
      iyr:2018 byr:1927
      
      pid:945869114 cid:95 byr:1989 hgt:173cm eyr:2025 hcl:#b6652a iyr:2012 ecl:amb
      
      pid:55484149
      eyr:1958
      iyr:1956 ecl:grn
      cid:95 byr:2028
      hcl:c2af7e
      
      hgt:176cm ecl:amb
      hcl:#a97842 eyr:2029 pid:937928270
      cid:251
      byr:1978
      iyr:2018
      
      hgt:154cm
      cid:213 pid:767329807 ecl:hzl
      iyr:2013
      hcl:#888785
      eyr:2026 byr:1998
      
      cid:158 hcl:#b6652a hgt:155cm iyr:2010 eyr:2025
      byr:1980 pid:338567803 ecl:amb
      
      hcl:#efcc98 byr:1940 hgt:62in ecl:oth pid:537307591
      eyr:2030
      iyr:2017
      cid:179
      
      byr:1965 eyr:2027 pid:691913618 hgt:75in
      hcl:#6b5442 ecl:gry iyr:2012
      
      hgt:163cm byr:1964 eyr:2025
      iyr:2010 hcl:#ceb3a1 ecl:oth
      pid:936536544
      
      pid:712946803
      cid:343
      hgt:187cm ecl:oth iyr:2020 byr:1983 eyr:2030
      hcl:#7873b3
      
      ecl:blu
      iyr:2010
      hcl:#fffffd
      eyr:2030
      hgt:175cm pid:047567505 byr:1963
      
      ecl:gry byr:1946 eyr:2026 hcl:#602927
      hgt:164cm
      iyr:2010
      
      pid:223378458
      iyr:2014 cid:151 ecl:hzl hgt:171cm
      eyr:2020
      hcl:#341e13 byr:1964
      
      ecl:brn byr:1948
      hcl:#866857
      hgt:193cm eyr:2024
      iyr:2013 cid:277
      
      hcl:#623a2f byr:1943 iyr:2011 ecl:oth
      hgt:184cm
      pid:371604584 eyr:2024 cid:176
      
      hcl:#efcc98
      eyr:2025 pid:241834382
      hgt:178cm
      byr:1985
      iyr:2017
      
      hcl:#c0946f
      byr:1996 pid:701366586 eyr:2026 hgt:163cm iyr:2015 ecl:oth
      
      hgt:65cm hcl:#18171d
      eyr:2024 ecl:brn pid:172cm
      iyr:2010
      byr:1990
      
      hcl:#fffffd pid:68659204 hgt:161cm iyr:2025
      ecl:#94b8aa byr:2021 eyr:2032
      
      ecl:blu iyr:2018 byr:1993 cid:184
      hgt:177cm pid:289871693 hcl:#733820 eyr:2026
      
      cid:138
      ecl:gry hgt:174cm eyr:2024 byr:1988 iyr:2014 hcl:#341e13 pid:864852584
      
      cid:321 eyr:2028 pid:93285596 hgt:173cm
      iyr:2013 ecl:gry hcl:#623a2f
      byr:1927
      
      pid:431242259 eyr:2022 ecl:hzl
      byr:1960 hgt:151cm hcl:#efcc98 iyr:2020
      
      hcl:#866857 eyr:2029 iyr:2016 ecl:grn pid:526060780 byr:1929
      cid:310 hgt:162cm
      
      ecl:blu hgt:183cm cid:168
      iyr:2015
      eyr:2021 byr:1951 hcl:#6b5442
      pid:594960553
      
      hcl:#ceb3a1
      iyr:2020 byr:1951 hgt:186cm eyr:2022 ecl:amb pid:317661479
      
      iyr:2016
      hgt:163in hcl:#accfa0
      ecl:brn
      pid:307377995 byr:2000 eyr:2028
      
      pid:933380459
      byr:1938
      cid:291 hcl:#c0946f
      ecl:oth iyr:2018
      eyr:2026 hgt:170cm
      
      byr:1974
      pid:262927116 eyr:2027 ecl:gry
      hcl:#341e13 iyr:2014 cid:232 hgt:161cm
      
      hcl:#602927
      byr:2001 iyr:2011
      hgt:177cm eyr:2028 pid:165733929 ecl:amb
      
      byr:1922 cid:144 pid:333716867 hgt:183cm iyr:2015
      hcl:#c25ea9 eyr:2022 ecl:blu
      
      eyr:2021 cid:147 byr:1978
      iyr:2020 pid:938828535
      hcl:#7d3b0c ecl:amb hgt:159cm
      
      hgt:153cm ecl:hzl
      cid:232 byr:1953 hcl:#a97842 iyr:2016 pid:356632792 eyr:2029
      
      pid:745727684 ecl:gry iyr:2020
      hcl:#a97842
      eyr:2025 cid:275
      hgt:65in
      byr:1957
      
      hcl:#733820
      ecl:grn iyr:2019 byr:1943 eyr:2024 hgt:70in
      pid:953607814
      
      ecl:gry eyr:2028 hcl:#cfa07d
      hgt:163cm
      byr:1942 iyr:2019 pid:310104177
      
      hgt:190cm
      eyr:2027 iyr:2010 byr:1978
      ecl:gry
      hcl:#964ba7
      
      cid:320
      eyr:2022 hgt:169cm
      ecl:blu hcl:#a97842 iyr:2015 pid:669007078 byr:1986
      
      iyr:2019 pid:901370677 hcl:7f2398 cid:305
      ecl:amb eyr:2011 hgt:190cm byr:1991
      
      ecl:brn
      cid:256 byr:1987 iyr:2017 eyr:2026 hcl:#623a2f pid:875646528
      hgt:160cm
      
      byr:1955 pid:120131971 hcl:#18171d
      hgt:156cm
      ecl:blu
      iyr:2011 eyr:2028
      
      iyr:2020 ecl:brn cid:188
      hgt:157cm
      eyr:2026
      pid:504067323 hcl:#733820 byr:1982
      
      cid:102 hgt:177cm
      hcl:#733820 ecl:hzl byr:1984 pid:542750146 eyr:2028 iyr:2020
      
      pid:419639528 iyr:2013 hgt:175cm ecl:blu
      eyr:2026 byr:1999 hcl:#733820
      
      byr:1963 eyr:2020
      pid:683641152 ecl:gry cid:207 hgt:180cm
      hcl:#cfa07d
      iyr:2020
      
      hgt:192cm pid:156436859 iyr:2020 hcl:#cfa07d
      ecl:blu byr:1963 eyr:2025 cid:147
      
      eyr:2002
      hcl:z iyr:2011
      pid:6830168962
      hgt:156in cid:288 byr:2029
      
      eyr:2021
      pid:277739802 byr:1992 ecl:hzl iyr:2020
      hcl:#7c5fe8 hgt:184cm
      
      byr:1989 pid:066973099
      iyr:2017
      eyr:2022 ecl:hzl hcl:#888785 hgt:76in
      
      hcl:#866857
      iyr:2016 cid:306
      ecl:hzl
      pid:453816800 byr:1971 hgt:71in eyr:2030
      
      pid:248573931 hcl:#cfa07d
      iyr:2014 eyr:2024 hgt:186cm byr:1970 cid:128 ecl:blu
      
      pid:172567579 ecl:brn iyr:2014 byr:1948 cid:309
      hgt:151cm hcl:#888785 eyr:2024
      
      hgt:153cm eyr:2026 byr:1929 ecl:hzl pid:684760742
      hcl:#c45e93 iyr:2018
      
      pid:#d50a43
      iyr:1940
      ecl:#7880a9 byr:2018 hcl:dc2fa7 hgt:185in eyr:1978
      
      hcl:#602927 cid:71 eyr:2020
      pid:620634584 hgt:157cm byr:1991
      iyr:2020 ecl:amb
      
      eyr:2023
      byr:1959 iyr:1947 hgt:152cm ecl:#503286 pid:63978523 hcl:57dd0d
      
      hgt:190cm
      byr:1955 ecl:blu
      pid:507892696
      hcl:#9bd1f0 eyr:2029
      iyr:2010
      
      pid:365539813
      eyr:2022 hcl:#623a2f iyr:2020 hgt:184cm
      ecl:oth byr:1920 cid:213
      
      cid:50 ecl:oth pid:774859218 hgt:193cm
      iyr:2017 byr:1925 hcl:#866857
      eyr:2021
      
      hgt:189cm
      iyr:2019 byr:1937
      hcl:#a97842
      eyr:2025 ecl:oth
      pid:787390180
      
      iyr:2019 eyr:2027 hgt:183cm
      ecl:hzl pid:549757712
      byr:1956
      hcl:#866857
      
      pid:755580715
      hcl:#602927 hgt:187cm iyr:2017 byr:1925 eyr:2020 ecl:blu
      
      iyr:2019 hgt:69in
      ecl:amb
      hcl:#602927 eyr:2026
      pid:951019647 byr:1974
      
      byr:1943 eyr:2034 hgt:150 pid:#36aedf ecl:oth
      hcl:z
      
      eyr:2024
      ecl:hzl pid:824745692 iyr:2012 hcl:06ab6e
      byr:1944
      hgt:159cm
      cid:183
      
      hgt:169cm ecl:blu
      eyr:2030 iyr:2013 byr:1945 pid:791359040 hcl:#7d3b0c
      
      iyr:2018
      ecl:hzl hgt:152cm
      hcl:#18171d eyr:2026 byr:1924 pid:534667048
      
      eyr:2029 pid:933295825
      iyr:2011
      hcl:#cfa07d byr:1981
      hgt:164cm ecl:grn
      
      ecl:amb byr:1964 iyr:2018
      pid:014457573
      cid:152
      eyr:2028 hgt:171cm hcl:#866857
      
      hgt:167cm
      byr:1974 iyr:2012 ecl:amb pid:512315114
      cid:278
      eyr:2028 hcl:#623a2f
      
      hgt:153cm ecl:oth iyr:2012
      eyr:2027 hcl:#888785 byr:1999 pid:416990697
      
      eyr:2025 ecl:blu byr:1991 hcl:#866857
      hgt:189cm pid:546461828
      
      iyr:2016
      byr:1988
      hgt:160cm eyr:2025 ecl:amb hcl:#602927
      pid:562766105
      
      ecl:oth byr:1942
      hcl:#341e13 pid:564975864 cid:158
      hgt:159cm eyr:2028
      iyr:2018
      
      pid:406209763 hgt:170cm cid:331
      iyr:2018 eyr:2026 byr:1981
      hcl:#733820 ecl:gry
      
      pid:279164109 ecl:oth
      cid:197 hcl:#7d3b0c
      eyr:2024
      hgt:185cm iyr:2020 byr:1925
      
      hcl:#efcc98 ecl:hzl
      cid:92 hgt:190cm pid:724466265 iyr:2020
      eyr:2025 byr:1996
      
      byr:1996
      cid:55 pid:906572505 ecl:grn eyr:2022 hcl:#602927 hgt:160cm iyr:2014
      
      eyr:2028 hcl:#b6652a ecl:hzl hgt:186cm iyr:2016 pid:132872161 byr:1932
      
      hcl:#fffffd iyr:2019 eyr:2020 hgt:188cm
      byr:1951 ecl:brn
      pid:842126902
      
      hcl:#602927
      hgt:158cm
      eyr:2023 iyr:2010
      pid:681061896 byr:1977 ecl:gry
      
      iyr:2018 hgt:192cm byr:1970 cid:200 ecl:grn eyr:2027
      pid:164408694 hcl:#888785
      
      eyr:2029
      pid:447061655 iyr:2010 hcl:#341e13 ecl:oth
      cid:187 hgt:185cm byr:1943
      
      byr:1925 iyr:2012 eyr:2025
      hgt:190cm hcl:#18171d pid:017534154 ecl:brn
      
      hgt:172cm byr:1923
      eyr:2026 iyr:2015
      pid:580812884 hcl:#c0946f ecl:hzl
      
      hcl:#888785 eyr:2028
      byr:1952 ecl:brn pid:818889983
      iyr:2010 hgt:180cm
      
      eyr:2026 ecl:gry byr:1982 hgt:188cm hcl:#c0946f pid:610689703 iyr:2011
      
      eyr:2028
      iyr:2018
      pid:921660781 ecl:amb
      hcl:#cfa07d hgt:178cm byr:1975
      
      byr:1977 pid:667631009 iyr:2010
      cid:86 eyr:2022 hgt:189cm hcl:#7d3b0c ecl:oth
      
      pid:214679440 hgt:190cm ecl:blu iyr:2017
      eyr:2025 cid:292
      
      ecl:amb
      iyr:2017 hcl:531ad3
      hgt:163 pid:689027667 byr:2006 eyr:2033
      
      hgt:68in byr:1928 iyr:2010 cid:227 eyr:2023
      ecl:hzl pid:#87bab9 hcl:#fffffd
      
      ecl:grn byr:1940 cid:294 hgt:152cm pid:310277488
      iyr:2015 hcl:#18171d eyr:2030
      
      byr:1965 pid:240720987
      eyr:2030 ecl:oth hgt:192cm hcl:#733820
      iyr:2016
      
      pid:830487275
      ecl:blu byr:1930
      hcl:#b6652a iyr:2013 hgt:188cm eyr:2025
      
      hgt:177cm byr:1955 eyr:2030 ecl:amb pid:476675886 iyr:2016 hcl:#c0946f
      
      pid:152702068 iyr:2016 hcl:#b6652a
      cid:82 ecl:blu eyr:2029 byr:1975 hgt:161cm
      
      pid:136852264
      eyr:2024 cid:339 ecl:oth byr:1949 iyr:2011
      
      iyr:2020 pid:772739059
      eyr:2025 hgt:157cm
      byr:1945 ecl:brn
      hcl:#6b5442
      
      hcl:#18171d eyr:2022
      iyr:2018 ecl:grn byr:1933 pid:053763751
      
      pid:214212776 hcl:#18171d
      eyr:2030
      iyr:2020 byr:1988
      cid:122
      hgt:170cm ecl:oth
      
      pid:883116919 iyr:2018 ecl:brn byr:1938 hgt:187cm eyr:2020
      
      iyr:2020 hcl:#a97842
      cid:329 eyr:2025 byr:1946 pid:636649774
      ecl:grn hgt:158cm
      
      eyr:2023
      ecl:blu hgt:161cm
      hcl:#341e13 byr:1951
      iyr:2020 pid:461889565 cid:97
      
      hgt:168cm pid:492241189
      eyr:2029
      iyr:2013
      cid:150
      byr:1980 hcl:#cfa07d ecl:hzl
      
      byr:1998 ecl:gry hgt:150cm eyr:2024 pid:401735295 cid:153 hcl:#733820 iyr:2016
      
      ecl:hzl hgt:184cm iyr:2018
      byr:2001
      pid:453480077 eyr:2025 hcl:#a97842`,
      naiveValidate
    )
  ).toBe(264);
});

it(`Solution 2/2`, () => {
  expect(
    validatePassports(
      `iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1 eyr:2026
      hgt:174cm
      pid:526744288
      
      pid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025
      
      ecl:oth hcl:#733820 cid:124 pid:111220591
      iyr:2019 eyr:2001
      byr:1933 hgt:159in
      
      pid:812929897 hgt:159cm hcl:#fffffd byr:1942 iyr:2026 cid:291
      ecl:oth
      eyr:2024
      
      cid:83 pid:524032739 iyr:2013 ecl:amb byr:1974
      hgt:191cm hcl:#ceb3a1 eyr:2028
      
      ecl:gry hcl:eefed5 pid:88405792 hgt:183cm cid:221 byr:1963 eyr:2029
      
      pid:777881168 ecl:grn
      hgt:181cm byr:1923 eyr:2021 iyr:2018 hcl:#18171d
      
      byr:1941 eyr:2027 ecl:gry iyr:2016 pid:062495008 hcl:#a5e1b5 hgt:178cm
      
      cid:56
      byr:1971
      hcl:#efcc98 pid:649868696 iyr:2011 eyr:2025 hgt:164cm
      
      ecl:blu
      pid:117915262 eyr:2023 byr:1925 iyr:2020 hcl:#888785
      hgt:188cm
      
      iyr:2012
      cid:174
      eyr:2024
      pid:143293382 ecl:brn byr:1946 hgt:193cm
      
      eyr:2021 iyr:2011
      hgt:192cm pid:251564680
      byr:1976
      ecl:blu hcl:#602927
      
      byr:1973 ecl:blu hgt:164cm
      eyr:2022 pid:695538656 iyr:2010 cid:244 hcl:#b6652a
      
      iyr:2014
      eyr:2027 pid:358398181 ecl:hzl hgt:74in byr:1949 cid:329
      hcl:#ceb3a1
      
      cid:211
      byr:1954 eyr:2023 hgt:172cm ecl:blu iyr:2019 hcl:#623a2f pid:657051725
      
      pid:562699115 eyr:2026 byr:2000
      hgt:162cm hcl:#602927 ecl:amb iyr:2018
      
      ecl:brn
      iyr:2013
      pid:835184859 byr:1981 hgt:157cm eyr:2027 hcl:#b6652a
      
      pid:763432667 byr:1981 hcl:#cfa07d ecl:brn
      iyr:2010 hgt:63in cid:107
      eyr:2027
      
      byr:2009
      hgt:177cm cid:314
      hcl:f55bf8 eyr:2025
      pid:632519974
      iyr:2015 ecl:amb
      
      eyr:2024 pid:614239656 hgt:169cm iyr:2014 ecl:hzl byr:1992
      hcl:#602927
      
      ecl:blu
      eyr:2026
      hcl:#efcc98
      byr:1980 iyr:2013
      hgt:161cm
      pid:065413599
      
      hgt:182cm
      eyr:2025 iyr:2013 pid:939088351 hcl:#b6652a byr:1994 ecl:amb
      
      hgt:65in cid:220 ecl:amb hcl:#ceb3a1
      iyr:2013 eyr:2025 pid:167894964 byr:1976
      
      hgt:185cm cid:88 ecl:blu iyr:2020
      eyr:2020
      hcl:#888785 pid:582683387
      byr:1981
      
      hcl:#866857 eyr:2020 byr:1948
      pid:358943355
      ecl:amb hgt:164cm iyr:2019
      
      pid:127467714
      hcl:#ceb3a1 byr:1991 hgt:163cm eyr:2020 iyr:2017 ecl:blu cid:229
      
      cid:156 byr:1942 eyr:2024 hcl:#cfa07d
      ecl:blu pid:843747591
      iyr:2014 hgt:173cm
      
      hcl:#a97842 hgt:165cm
      iyr:2013 ecl:#781088 byr:1952
      pid:516882944
      eyr:2026
      
      hgt:179cm
      byr:1969 pid:408297435 iyr:2020 ecl:oth hcl:#cfa07d eyr:2020
      
      ecl:amb iyr:2013 hcl:#b6652a eyr:2023 cid:88
      pid:324081998 hgt:66in byr:1945
      
      iyr:2012
      eyr:2024
      hcl:#18171d
      pid:756726480 byr:1947 ecl:oth
      hgt:164cm
      
      ecl:blu
      hcl:#fffffd byr:1951 iyr:2019 pid:544645775
      hgt:153cm eyr:2027
      
      pid:655906238 ecl:brn eyr:2028 byr:1959 hgt:63in cid:338
      iyr:2020
      
      eyr:2020
      hcl:#602927 hgt:72in iyr:2014
      pid:305025767
      cid:297 byr:1957 ecl:gry
      
      hgt:155cm byr:1942 hcl:#a97842
      iyr:2014 ecl:gry pid:593995708
      eyr:2022
      
      pid:219206471 byr:1955 eyr:2030
      hcl:#a97842 ecl:oth iyr:2015 cid:134 hgt:170cm
      
      iyr:2013 cid:268
      eyr:2020
      hcl:#a97842 ecl:grn pid:235279200 hgt:178cm
      byr:1952
      
      iyr:2013 pid:016384352 eyr:2027
      hcl:#866857 ecl:grn hgt:161cm byr:1943
      
      ecl:amb hgt:169cm pid:149540593
      iyr:2012
      eyr:2040 hcl:#a97842 byr:1954
      
      byr:1938
      ecl:brn hcl:#b6652a eyr:2026 hgt:184cm iyr:2018 pid:832531235
      
      byr:1945 iyr:2015 hgt:171cm eyr:2028 pid:998746896 ecl:hzl hcl:#866857
      
      hgt:73in ecl:hzl eyr:2023 cid:343 pid:458004221 iyr:2017 byr:1962 hcl:#efcc98
      
      byr:1970 hgt:159cm pid:925022199 iyr:2013
      eyr:2028 hcl:#888785
      ecl:hzl
      
      eyr:2027 iyr:2016 ecl:gry
      hcl:#cfa07d
      pid:006246552 byr:1939 cid:124 hgt:177cm
      
      byr:1982
      iyr:2016 hgt:159cm
      cid:102 hcl:#fffffd
      eyr:2029
      ecl:grn pid:619798285
      
      iyr:2018
      hgt:189cm hcl:#efcc98
      byr:1937 eyr:2023 pid:727551553 ecl:oth
      
      iyr:2014 byr:1976
      eyr:2020 hcl:#7d3b0c pid:125102070 ecl:amb
      hgt:186cm
      
      hgt:187cm byr:1949
      pid:027653233 eyr:2021 hcl:#341e13 ecl:hzl
      iyr:2020
      
      iyr:2016
      byr:1954 pid:545631256
      hcl:#602927 eyr:2023
      hgt:191cm ecl:amb
      
      pid:509762954
      hgt:190cm ecl:hzl byr:1991
      eyr:2022 iyr:2019
      cid:187
      
      hcl:#c0946f eyr:2024 hgt:152cm cid:277 iyr:2015 pid:872373191 byr:1988
      
      pid:544267207 cid:113
      iyr:2015
      hgt:181cm
      hcl:#6b5442
      ecl:gry
      byr:1971
      
      ecl:gry
      hgt:161cm iyr:2012 byr:1965
      pid:574527322 hcl:#fffffd
      
      iyr:2018 byr:1976 hcl:#b6652a
      pid:024582079 hgt:169cm ecl:oth eyr:2021
      
      pid:020478204
      byr:1945 hcl:#7d3b0c
      cid:239 eyr:2025 hgt:188cm
      ecl:grn
      iyr:2012
      
      eyr:2026 pid:202653345
      byr:1988
      hcl:#2cdc09
      hgt:185cm iyr:2010
      ecl:hzl
      
      hgt:183cm iyr:2017
      hcl:#18171d byr:1977 eyr:2029 pid:804559436 ecl:grn
      
      hcl:#602927 pid:812072269 hgt:170cm eyr:2026 byr:1955 iyr:2020 ecl:gry
      
      eyr:2023 iyr:2010
      hcl:#cfa07d pid:592419048 byr:1943
      ecl:brn
      hgt:172cm
      
      ecl:brn iyr:2013 pid:558179058
      hcl:#fffffd eyr:2022
      byr:1922
      cid:331 hgt:64in
      
      ecl:xry
      hcl:ade850 eyr:1995 pid:976028541
      iyr:2030 hgt:179cm
      byr:2030
      
      ecl:#2872b1 pid:158cm eyr:1927 hcl:ee8e92
      iyr:2014 hgt:190cm
      byr:2025
      
      hgt:155cm cid:283 eyr:2020 ecl:blu pid:755165290 byr:1936 hcl:#733820 iyr:2012
      
      eyr:2030
      byr:1943
      cid:323 pid:906418061 hgt:157cm ecl:amb iyr:2010
      hcl:#7d3b0c
      
      hcl:#fffffd
      pid:873200829 hgt:192cm eyr:2022 ecl:blu iyr:2016 byr:1920 cid:200
      
      eyr:2021
      byr:1963
      hcl:#a97842 pid:585551405
      iyr:2019 cid:91
      ecl:brn hgt:60cm
      
      byr:1946
      pid:520273609 hcl:#341e13 cid:66
      iyr:2020 hgt:154cm eyr:2024
      ecl:brn
      
      ecl:brn hcl:#d64d7b eyr:2020
      byr:1957 hgt:181cm iyr:2019 pid:378496967 cid:135
      
      pid:002446580
      eyr:2027 byr:1939 hcl:#888785
      iyr:2011 cid:168
      ecl:oth hgt:160cm
      
      iyr:2019 hgt:70in hcl:#7d3b0c byr:1983
      eyr:2024 pid:369493064 cid:54 ecl:oth
      
      iyr:1979 pid:170cm
      hgt:65cm eyr:1933 hcl:z
      
      ecl:zzz pid:193cm hcl:z eyr:2020 byr:2013 iyr:2016 hgt:177in
      
      iyr:2010 hgt:187cm
      byr:1932
      hcl:z ecl:oth pid:665967850 eyr:2030
      
      eyr:2029
      iyr:2013 hcl:#b6652a ecl:amb
      byr:1936 pid:516025566
      hgt:181cm
      
      hcl:#c0946f pid:238825672 byr:2000
      iyr:2013 eyr:2028 ecl:amb hgt:183cm
      
      eyr:2021 hcl:#866857
      cid:77 iyr:2017 hgt:156cm pid:271118829 ecl:amb
      
      iyr:2014
      hcl:#fffffd
      cid:321 hgt:159cm ecl:gry
      pid:691381062 eyr:2022 byr:1991
      
      pid:111506492 hcl:#c1d296 iyr:2011
      byr:1934 hgt:176cm cid:263 eyr:2028 ecl:amb
      
      iyr:2014 hgt:64in eyr:2024 cid:193 hcl:#b6652a byr:1967
      ecl:oth pid:138677174
      
      hgt:168cm iyr:2020 eyr:2030
      hcl:#6b5442 ecl:brn pid:975843892 byr:1927
      
      byr:1957 ecl:amb iyr:2012 pid:177266671 eyr:2026
      hcl:#866857 hgt:162cm
      
      eyr:2029
      hcl:#341e13
      hgt:175cm pid:465809700 ecl:amb byr:1974
      iyr:2010
      
      hcl:#a97842 iyr:2010
      hgt:176cm eyr:2029 byr:1931 ecl:grt pid:161604244
      
      eyr:2024 iyr:2018 hgt:170in byr:1959 ecl:gmt hcl:#888785
      pid:94163132
      
      iyr:2011
      hgt:186cm pid:998471478 byr:1956 ecl:amb
      eyr:2029
      hcl:#efcc98
      cid:76
      
      ecl:brn
      byr:2001 pid:378527883 iyr:2013 hcl:#83bdc5 eyr:2020 hgt:181cm
      
      iyr:2017 ecl:grn hgt:172cm hcl:#888785 cid:100
      eyr:2022 byr:2030
      pid:311562177
      
      pid:097558436
      cid:141 hgt:152cm iyr:2019
      ecl:brn eyr:2023
      byr:1940
      hcl:#6b5442
      
      iyr:2016 eyr:2023 byr:1992
      hgt:174cm ecl:amb
      pid:691291640 cid:190 hcl:#fffffd
      
      hcl:#623a2f ecl:brn
      eyr:2028 cid:227 iyr:2012 hgt:74in pid:964273950 byr:1965
      
      hcl:#ceb3a1 eyr:2028
      iyr:2013 pid:175294029 hgt:150cm ecl:grn
      byr:1936
      cid:143
      
      byr:1935 hcl:#a97842 ecl:oth hgt:180cm iyr:2019
      pid:857891916
      eyr:2026
      
      pid:084518249 ecl:hzl eyr:2027 hcl:#c0946f hgt:192cm cid:315 byr:1961
      iyr:2010
      
      hgt:67cm pid:37925169 eyr:2022
      hcl:z iyr:2012 cid:315 byr:2028 ecl:dne
      
      hcl:#c0946f byr:1924
      hgt:176cm cid:87 pid:682212551 iyr:2011
      eyr:2026
      ecl:gry
      
      hgt:181cm byr:1935
      iyr:2018 pid:644964785
      eyr:2026 ecl:amb
      
      pid:789810179
      ecl:gry eyr:2021
      cid:159 hgt:185cm iyr:2020 hcl:#602927
      byr:1965
      
      pid:672386364
      iyr:2013 eyr:2021 byr:1951 hcl:#341e13
      ecl:gry hgt:173cm
      
      hcl:#18171d eyr:2030 pid:957722245 iyr:2012 byr:1955
      ecl:grn
      hgt:154cm
      
      byr:1955 ecl:oth
      hcl:#cfa07d
      eyr:2030
      iyr:2013 pid:361945273 hgt:154cm
      
      iyr:2012 eyr:2027 ecl:grn hcl:#16d373
      hgt:192cm
      
      pid:275525273
      byr:1986
      iyr:2017
      eyr:2022
      ecl:grn
      hgt:75in
      hcl:#919cc0
      
      eyr:2029
      cid:84 hcl:#cfa07d iyr:2013 hgt:78
      ecl:brn
      byr:1925 pid:281331549
      
      eyr:2027
      cid:219 iyr:2016 byr:1971 hcl:#7d3b0c hgt:179cm ecl:grn
      pid:301296222
      
      eyr:2030 iyr:2010 pid:995982765
      byr:1926 ecl:amb hcl:#888785 hgt:186cm
      
      byr:1955 iyr:2015 hgt:165cm cid:101
      eyr:2027 ecl:amb hcl:#602927
      pid:168654790
      
      hcl:#7d3b0c byr:1956 eyr:2029 hgt:155cm
      ecl:grn pid:816685992
      iyr:2016
      
      ecl:grn hcl:#cfa07d cid:71
      pid:914724136 iyr:2012 eyr:2024
      hgt:184cm byr:1938
      
      ecl:gry
      eyr:2029 hcl:#602927 pid:255062643 iyr:2015 hgt:175cm
      
      hcl:#341e13 iyr:2017 eyr:2028
      pid:459704815 byr:1922
      cid:312
      ecl:brn hgt:152cm
      
      ecl:dne eyr:1981
      pid:8356519470 hgt:176 iyr:1941 byr:2006 hcl:z
      
      ecl:amb pid:753377589 hcl:#a97842 eyr:2022 hgt:187cm
      cid:130 iyr:2013 byr:1961
      
      pid:952444443
      hcl:#bde835 byr:1963 iyr:2020 eyr:2025
      ecl:amb hgt:162cm
      
      eyr:2027 iyr:2018 hcl:#ceb3a1 hgt:152cm pid:882429463 ecl:blu byr:1969
      
      cid:134 eyr:2021 hcl:#a97842 hgt:63in
      ecl:grn byr:1975 iyr:2019 pid:154078695
      
      byr:1956 eyr:2027
      pid:396230480 hcl:#b6652a
      hgt:175cm iyr:2020 ecl:oth
      
      ecl:grn
      cid:263 hcl:#506937 byr:1924
      eyr:2030 pid:705511368 hgt:159cm
      iyr:2011
      
      eyr:2020 hgt:178cm ecl:grn
      byr:1947 hcl:#888785
      pid:177476829 iyr:2019
      
      ecl:hzl cid:211 iyr:2016 hgt:176cm pid:405182470
      byr:1952
      hcl:#866857 eyr:2028
      
      eyr:2032 cid:152 ecl:gmt hgt:150in
      pid:75969209
      byr:2019 hcl:z iyr:1940
      
      hcl:#fffffd hgt:193cm pid:607407479 cid:300 byr:1944 iyr:2017
      ecl:oth
      eyr:2026
      
      hcl:z
      cid:125 eyr:2040 ecl:dne byr:2015 pid:733096171 hgt:63cm
      iyr:1922
      
      pid:575721428 hgt:152cm cid:275
      hcl:#cfa07d eyr:2028
      byr:1935 ecl:hzl iyr:2016
      
      iyr:2012
      ecl:grn eyr:2027 hcl:#623a2f pid:029106453 byr:1984 hgt:168cm
      
      ecl:blu cid:140 eyr:2028 iyr:2018 hcl:#c0946f
      hgt:163cm byr:1944
      pid:709288293
      
      byr:1936
      hgt:172cm eyr:1997 hcl:#8b8c88 cid:50
      iyr:2016 pid:205477922 ecl:grn
      
      hgt:170cm pid:872750582 eyr:2027 byr:1985 iyr:2017 hcl:#d6976a ecl:blu
      
      hgt:163cm
      pid:189634089 cid:116 byr:1975 eyr:2030
      hcl:#efcc98 ecl:brn iyr:2020
      
      ecl:amb byr:1953 hcl:#6b5442 pid:418787965
      iyr:2018 hgt:193cm
      eyr:2026
      
      ecl:#3ec898 cid:339 hcl:#866857 eyr:2025 hgt:179cm pid:591430028 iyr:1936 byr:1995
      
      pid:285371937 hgt:159cm
      byr:1922
      iyr:2013 eyr:2023 hcl:#6b5442 ecl:amb
      
      pid:545260883 ecl:oth
      hgt:163cm
      iyr:2015 eyr:2021 byr:1975 hcl:#866857
      
      ecl:hzl hgt:182cm pid:053762098 eyr:2023 cid:174 hcl:#6daac4 iyr:2017 byr:1937
      
      hgt:178cm iyr:2015 byr:1956 pid:815359103
      ecl:blu hcl:#cfa07d eyr:2030
      
      hcl:#7d3b0c
      pid:438108851 hgt:162cm byr:1930 iyr:2014 eyr:2024 ecl:amb
      
      eyr:2027 iyr:2019 hcl:#90eb1c hgt:178cm
      pid:314810594 cid:278 ecl:amb
      byr:2001
      
      byr:1949 iyr:1942 hcl:#888785 ecl:hzl hgt:184cm eyr:2027 pid:899137640
      
      hgt:153cm
      eyr:2022 iyr:2011 byr:1975
      hcl:#602927
      ecl:amb pid:178cm
      
      hcl:#6b5442
      ecl:amb iyr:2018 eyr:2025 pid:418735327 byr:1922 hgt:74in
      
      ecl:gmt hcl:z iyr:2024
      eyr:1988 hgt:75cm cid:125 pid:690872200 byr:1928
      
      eyr:2024 hgt:184cm
      pid:4634589837 ecl:zzz iyr:2022 byr:2000 hcl:89c187
      
      iyr:2017 byr:1966 hcl:#efcc98 ecl:brn pid:473085232 eyr:2021 hgt:174cm
      
      hgt:67in eyr:2030 iyr:2014 byr:1943 hcl:#602927 cid:344
      ecl:oth
      pid:210476779
      
      byr:1955
      ecl:oth
      hgt:193cm iyr:2012 hcl:#623a2f pid:818289829 eyr:2021
      
      byr:2018 ecl:#872a51 iyr:2024 hcl:97783d
      pid:155cm hgt:174cm
      eyr:1964
      
      hcl:#6b5442 hgt:157cm byr:1932 ecl:brn pid:4275535874
      eyr:2024 iyr:2015
      
      pid:959861097
      hgt:151cm cid:140 byr:1935
      eyr:2029
      iyr:2018 ecl:hzl
      hcl:#623a2f
      
      hgt:181cm pid:911791767 eyr:2027
      iyr:2016 byr:1962
      ecl:grn hcl:#866857
      
      eyr:2021
      byr:1994
      hgt:162cm hcl:#866857 ecl:oth iyr:2014
      pid:712345689
      
      hcl:#7d3b0c
      hgt:170cm pid:600132416 eyr:2025
      iyr:2016 byr:1978 ecl:brn
      
      hcl:#0a9307
      cid:287 byr:1940 pid:786271493
      eyr:2028 hgt:186cm
      iyr:2019 ecl:oth
      
      eyr:2025 hgt:190cm ecl:hzl cid:228 iyr:2019
      byr:1932
      hcl:#623a2f pid:648307551
      
      pid:304587325 iyr:2019 byr:1923 hcl:#7d3b0c
      hgt:190cm
      ecl:gry eyr:2030
      
      hgt:188cm eyr:2027 byr:1958 pid:572934921
      hcl:#888785 ecl:hzl iyr:2010
      
      iyr:2019
      hgt:178cm ecl:grn hcl:#7d3b0c pid:007601227
      byr:1975 eyr:2023
      
      pid:808872803 byr:1929
      ecl:grn
      eyr:2022 iyr:2019 hgt:74in hcl:#602927
      
      iyr:2019
      cid:67 hcl:#602927 pid:292601338 ecl:hzl
      byr:2001 eyr:2023 hgt:171cm
      
      byr:1962 eyr:2022 hcl:#b6652a hgt:193cm
      ecl:oth
      iyr:2010
      
      hgt:70in iyr:2014 hcl:#a97842
      cid:169 eyr:2020 ecl:amb
      pid:329751670 byr:1959
      
      byr:1920
      ecl:oth hgt:172cm cid:57 pid:515139276
      eyr:2030
      hcl:#18171d
      iyr:2013
      
      iyr:2012
      hcl:#a97842 pid:946040810 hgt:65in
      byr:1936 ecl:amb eyr:2020
      
      byr:1948 hcl:#18171d
      iyr:2019
      ecl:hzl cid:185
      eyr:2023
      pid:583625200 hgt:191cm
      
      hgt:154cm eyr:2022
      pid:460137392 iyr:2010
      ecl:grn
      hcl:#ceb3a1
      
      eyr:2024
      iyr:2016 pid:890698391 hgt:172cm hcl:#a97842 cid:271 ecl:oth byr:1926
      
      hgt:162cm pid:340904964 hcl:#b6652a
      byr:1966
      iyr:2010
      cid:260 eyr:2028
      ecl:amb
      
      byr:1933 eyr:2029 pid:642043350
      iyr:2016 hcl:#b6652a ecl:grn
      
      pid:602218620 eyr:2023 ecl:blu
      hcl:#623a2f
      byr:1950 hgt:168cm iyr:2015
      
      ecl:gry pid:490792384
      byr:1974
      hcl:#a97842 iyr:2016 hgt:170cm
      
      iyr:2020 ecl:gry byr:2002
      eyr:2029 hcl:#9f45c4
      hgt:155cm pid:604239618
      
      hgt:190cm pid:560653271 iyr:2020 cid:349
      eyr:2024 ecl:blu hcl:#efcc98 byr:1936
      
      eyr:2021 byr:1964 hcl:#efcc98 ecl:grn iyr:2018
      hgt:165cm pid:218376636
      
      pid:186217101
      iyr:2019 hgt:155cm
      byr:2017 eyr:2022 ecl:grn cid:349 hcl:ece72e
      
      iyr:2015
      eyr:2026 pid:802832833
      hcl:#888785 hgt:190cm ecl:brn
      byr:1952
      cid:202
      
      cid:151 iyr:2017 hgt:152cm hcl:#a97842 eyr:2020 ecl:hzl
      pid:554959609 byr:1941
      
      cid:116
      iyr:2019 hgt:159cm byr:1992 pid:662111811
      hcl:#18171d ecl:oth eyr:2024
      
      ecl:grn byr:1966
      iyr:1950 pid:585351486
      eyr:2038 hgt:178in hcl:a27d2b
      
      iyr:2014 cid:238 hgt:187cm pid:523401750 ecl:amb hcl:#18171d eyr:2023 byr:1984
      
      eyr:2021 byr:1957
      pid:340752324
      iyr:2015 hgt:157cm
      hcl:#602927 cid:70
      ecl:oth
      
      pid:458479816 ecl:hzl
      eyr:2022 hcl:z
      hgt:60cm
      byr:2012 iyr:2005
      
      cid:57
      hgt:154cm pid:446142864
      hcl:#341e13 byr:1968 eyr:2030
      iyr:2019
      ecl:brn
      
      eyr:2028
      pid:243811429 byr:1977
      iyr:2011 hcl:#18171d hgt:185cm ecl:oth
      
      cid:205 byr:1976 eyr:2029 pid:649877471 hcl:#cfa07d hgt:152cm
      ecl:blu
      iyr:2013
      
      iyr:2009 pid:559014976 ecl:oth hgt:189cm byr:1936 eyr:2037
      hcl:#efcc98
      
      pid:134378987 byr:1983 iyr:2013 hgt:173cm
      ecl:oth hcl:#ceb3a1
      cid:80
      eyr:2020
      
      hgt:151cm byr:1964 ecl:grn iyr:2010 hcl:#b6652a pid:939492531
      eyr:2028
      
      byr:1961 iyr:2014 hcl:#733820 hgt:179cm
      eyr:2026 ecl:gry pid:732892920
      
      iyr:2018 byr:1996
      pid:944007809 ecl:hzl
      hcl:#866857 eyr:2021
      hgt:155cm
      
      pid:374875696 hcl:#7d3b0c
      ecl:oth
      hgt:193cm byr:1948 cid:238
      iyr:2020
      
      pid:305782299 hcl:#b6652a
      ecl:brn
      hgt:172cm
      iyr:2018 byr:1927
      
      pid:945869114 cid:95 byr:1989 hgt:173cm eyr:2025 hcl:#b6652a iyr:2012 ecl:amb
      
      pid:55484149
      eyr:1958
      iyr:1956 ecl:grn
      cid:95 byr:2028
      hcl:c2af7e
      
      hgt:176cm ecl:amb
      hcl:#a97842 eyr:2029 pid:937928270
      cid:251
      byr:1978
      iyr:2018
      
      hgt:154cm
      cid:213 pid:767329807 ecl:hzl
      iyr:2013
      hcl:#888785
      eyr:2026 byr:1998
      
      cid:158 hcl:#b6652a hgt:155cm iyr:2010 eyr:2025
      byr:1980 pid:338567803 ecl:amb
      
      hcl:#efcc98 byr:1940 hgt:62in ecl:oth pid:537307591
      eyr:2030
      iyr:2017
      cid:179
      
      byr:1965 eyr:2027 pid:691913618 hgt:75in
      hcl:#6b5442 ecl:gry iyr:2012
      
      hgt:163cm byr:1964 eyr:2025
      iyr:2010 hcl:#ceb3a1 ecl:oth
      pid:936536544
      
      pid:712946803
      cid:343
      hgt:187cm ecl:oth iyr:2020 byr:1983 eyr:2030
      hcl:#7873b3
      
      ecl:blu
      iyr:2010
      hcl:#fffffd
      eyr:2030
      hgt:175cm pid:047567505 byr:1963
      
      ecl:gry byr:1946 eyr:2026 hcl:#602927
      hgt:164cm
      iyr:2010
      
      pid:223378458
      iyr:2014 cid:151 ecl:hzl hgt:171cm
      eyr:2020
      hcl:#341e13 byr:1964
      
      ecl:brn byr:1948
      hcl:#866857
      hgt:193cm eyr:2024
      iyr:2013 cid:277
      
      hcl:#623a2f byr:1943 iyr:2011 ecl:oth
      hgt:184cm
      pid:371604584 eyr:2024 cid:176
      
      hcl:#efcc98
      eyr:2025 pid:241834382
      hgt:178cm
      byr:1985
      iyr:2017
      
      hcl:#c0946f
      byr:1996 pid:701366586 eyr:2026 hgt:163cm iyr:2015 ecl:oth
      
      hgt:65cm hcl:#18171d
      eyr:2024 ecl:brn pid:172cm
      iyr:2010
      byr:1990
      
      hcl:#fffffd pid:68659204 hgt:161cm iyr:2025
      ecl:#94b8aa byr:2021 eyr:2032
      
      ecl:blu iyr:2018 byr:1993 cid:184
      hgt:177cm pid:289871693 hcl:#733820 eyr:2026
      
      cid:138
      ecl:gry hgt:174cm eyr:2024 byr:1988 iyr:2014 hcl:#341e13 pid:864852584
      
      cid:321 eyr:2028 pid:93285596 hgt:173cm
      iyr:2013 ecl:gry hcl:#623a2f
      byr:1927
      
      pid:431242259 eyr:2022 ecl:hzl
      byr:1960 hgt:151cm hcl:#efcc98 iyr:2020
      
      hcl:#866857 eyr:2029 iyr:2016 ecl:grn pid:526060780 byr:1929
      cid:310 hgt:162cm
      
      ecl:blu hgt:183cm cid:168
      iyr:2015
      eyr:2021 byr:1951 hcl:#6b5442
      pid:594960553
      
      hcl:#ceb3a1
      iyr:2020 byr:1951 hgt:186cm eyr:2022 ecl:amb pid:317661479
      
      iyr:2016
      hgt:163in hcl:#accfa0
      ecl:brn
      pid:307377995 byr:2000 eyr:2028
      
      pid:933380459
      byr:1938
      cid:291 hcl:#c0946f
      ecl:oth iyr:2018
      eyr:2026 hgt:170cm
      
      byr:1974
      pid:262927116 eyr:2027 ecl:gry
      hcl:#341e13 iyr:2014 cid:232 hgt:161cm
      
      hcl:#602927
      byr:2001 iyr:2011
      hgt:177cm eyr:2028 pid:165733929 ecl:amb
      
      byr:1922 cid:144 pid:333716867 hgt:183cm iyr:2015
      hcl:#c25ea9 eyr:2022 ecl:blu
      
      eyr:2021 cid:147 byr:1978
      iyr:2020 pid:938828535
      hcl:#7d3b0c ecl:amb hgt:159cm
      
      hgt:153cm ecl:hzl
      cid:232 byr:1953 hcl:#a97842 iyr:2016 pid:356632792 eyr:2029
      
      pid:745727684 ecl:gry iyr:2020
      hcl:#a97842
      eyr:2025 cid:275
      hgt:65in
      byr:1957
      
      hcl:#733820
      ecl:grn iyr:2019 byr:1943 eyr:2024 hgt:70in
      pid:953607814
      
      ecl:gry eyr:2028 hcl:#cfa07d
      hgt:163cm
      byr:1942 iyr:2019 pid:310104177
      
      hgt:190cm
      eyr:2027 iyr:2010 byr:1978
      ecl:gry
      hcl:#964ba7
      
      cid:320
      eyr:2022 hgt:169cm
      ecl:blu hcl:#a97842 iyr:2015 pid:669007078 byr:1986
      
      iyr:2019 pid:901370677 hcl:7f2398 cid:305
      ecl:amb eyr:2011 hgt:190cm byr:1991
      
      ecl:brn
      cid:256 byr:1987 iyr:2017 eyr:2026 hcl:#623a2f pid:875646528
      hgt:160cm
      
      byr:1955 pid:120131971 hcl:#18171d
      hgt:156cm
      ecl:blu
      iyr:2011 eyr:2028
      
      iyr:2020 ecl:brn cid:188
      hgt:157cm
      eyr:2026
      pid:504067323 hcl:#733820 byr:1982
      
      cid:102 hgt:177cm
      hcl:#733820 ecl:hzl byr:1984 pid:542750146 eyr:2028 iyr:2020
      
      pid:419639528 iyr:2013 hgt:175cm ecl:blu
      eyr:2026 byr:1999 hcl:#733820
      
      byr:1963 eyr:2020
      pid:683641152 ecl:gry cid:207 hgt:180cm
      hcl:#cfa07d
      iyr:2020
      
      hgt:192cm pid:156436859 iyr:2020 hcl:#cfa07d
      ecl:blu byr:1963 eyr:2025 cid:147
      
      eyr:2002
      hcl:z iyr:2011
      pid:6830168962
      hgt:156in cid:288 byr:2029
      
      eyr:2021
      pid:277739802 byr:1992 ecl:hzl iyr:2020
      hcl:#7c5fe8 hgt:184cm
      
      byr:1989 pid:066973099
      iyr:2017
      eyr:2022 ecl:hzl hcl:#888785 hgt:76in
      
      hcl:#866857
      iyr:2016 cid:306
      ecl:hzl
      pid:453816800 byr:1971 hgt:71in eyr:2030
      
      pid:248573931 hcl:#cfa07d
      iyr:2014 eyr:2024 hgt:186cm byr:1970 cid:128 ecl:blu
      
      pid:172567579 ecl:brn iyr:2014 byr:1948 cid:309
      hgt:151cm hcl:#888785 eyr:2024
      
      hgt:153cm eyr:2026 byr:1929 ecl:hzl pid:684760742
      hcl:#c45e93 iyr:2018
      
      pid:#d50a43
      iyr:1940
      ecl:#7880a9 byr:2018 hcl:dc2fa7 hgt:185in eyr:1978
      
      hcl:#602927 cid:71 eyr:2020
      pid:620634584 hgt:157cm byr:1991
      iyr:2020 ecl:amb
      
      eyr:2023
      byr:1959 iyr:1947 hgt:152cm ecl:#503286 pid:63978523 hcl:57dd0d
      
      hgt:190cm
      byr:1955 ecl:blu
      pid:507892696
      hcl:#9bd1f0 eyr:2029
      iyr:2010
      
      pid:365539813
      eyr:2022 hcl:#623a2f iyr:2020 hgt:184cm
      ecl:oth byr:1920 cid:213
      
      cid:50 ecl:oth pid:774859218 hgt:193cm
      iyr:2017 byr:1925 hcl:#866857
      eyr:2021
      
      hgt:189cm
      iyr:2019 byr:1937
      hcl:#a97842
      eyr:2025 ecl:oth
      pid:787390180
      
      iyr:2019 eyr:2027 hgt:183cm
      ecl:hzl pid:549757712
      byr:1956
      hcl:#866857
      
      pid:755580715
      hcl:#602927 hgt:187cm iyr:2017 byr:1925 eyr:2020 ecl:blu
      
      iyr:2019 hgt:69in
      ecl:amb
      hcl:#602927 eyr:2026
      pid:951019647 byr:1974
      
      byr:1943 eyr:2034 hgt:150 pid:#36aedf ecl:oth
      hcl:z
      
      eyr:2024
      ecl:hzl pid:824745692 iyr:2012 hcl:06ab6e
      byr:1944
      hgt:159cm
      cid:183
      
      hgt:169cm ecl:blu
      eyr:2030 iyr:2013 byr:1945 pid:791359040 hcl:#7d3b0c
      
      iyr:2018
      ecl:hzl hgt:152cm
      hcl:#18171d eyr:2026 byr:1924 pid:534667048
      
      eyr:2029 pid:933295825
      iyr:2011
      hcl:#cfa07d byr:1981
      hgt:164cm ecl:grn
      
      ecl:amb byr:1964 iyr:2018
      pid:014457573
      cid:152
      eyr:2028 hgt:171cm hcl:#866857
      
      hgt:167cm
      byr:1974 iyr:2012 ecl:amb pid:512315114
      cid:278
      eyr:2028 hcl:#623a2f
      
      hgt:153cm ecl:oth iyr:2012
      eyr:2027 hcl:#888785 byr:1999 pid:416990697
      
      eyr:2025 ecl:blu byr:1991 hcl:#866857
      hgt:189cm pid:546461828
      
      iyr:2016
      byr:1988
      hgt:160cm eyr:2025 ecl:amb hcl:#602927
      pid:562766105
      
      ecl:oth byr:1942
      hcl:#341e13 pid:564975864 cid:158
      hgt:159cm eyr:2028
      iyr:2018
      
      pid:406209763 hgt:170cm cid:331
      iyr:2018 eyr:2026 byr:1981
      hcl:#733820 ecl:gry
      
      pid:279164109 ecl:oth
      cid:197 hcl:#7d3b0c
      eyr:2024
      hgt:185cm iyr:2020 byr:1925
      
      hcl:#efcc98 ecl:hzl
      cid:92 hgt:190cm pid:724466265 iyr:2020
      eyr:2025 byr:1996
      
      byr:1996
      cid:55 pid:906572505 ecl:grn eyr:2022 hcl:#602927 hgt:160cm iyr:2014
      
      eyr:2028 hcl:#b6652a ecl:hzl hgt:186cm iyr:2016 pid:132872161 byr:1932
      
      hcl:#fffffd iyr:2019 eyr:2020 hgt:188cm
      byr:1951 ecl:brn
      pid:842126902
      
      hcl:#602927
      hgt:158cm
      eyr:2023 iyr:2010
      pid:681061896 byr:1977 ecl:gry
      
      iyr:2018 hgt:192cm byr:1970 cid:200 ecl:grn eyr:2027
      pid:164408694 hcl:#888785
      
      eyr:2029
      pid:447061655 iyr:2010 hcl:#341e13 ecl:oth
      cid:187 hgt:185cm byr:1943
      
      byr:1925 iyr:2012 eyr:2025
      hgt:190cm hcl:#18171d pid:017534154 ecl:brn
      
      hgt:172cm byr:1923
      eyr:2026 iyr:2015
      pid:580812884 hcl:#c0946f ecl:hzl
      
      hcl:#888785 eyr:2028
      byr:1952 ecl:brn pid:818889983
      iyr:2010 hgt:180cm
      
      eyr:2026 ecl:gry byr:1982 hgt:188cm hcl:#c0946f pid:610689703 iyr:2011
      
      eyr:2028
      iyr:2018
      pid:921660781 ecl:amb
      hcl:#cfa07d hgt:178cm byr:1975
      
      byr:1977 pid:667631009 iyr:2010
      cid:86 eyr:2022 hgt:189cm hcl:#7d3b0c ecl:oth
      
      pid:214679440 hgt:190cm ecl:blu iyr:2017
      eyr:2025 cid:292
      
      ecl:amb
      iyr:2017 hcl:531ad3
      hgt:163 pid:689027667 byr:2006 eyr:2033
      
      hgt:68in byr:1928 iyr:2010 cid:227 eyr:2023
      ecl:hzl pid:#87bab9 hcl:#fffffd
      
      ecl:grn byr:1940 cid:294 hgt:152cm pid:310277488
      iyr:2015 hcl:#18171d eyr:2030
      
      byr:1965 pid:240720987
      eyr:2030 ecl:oth hgt:192cm hcl:#733820
      iyr:2016
      
      pid:830487275
      ecl:blu byr:1930
      hcl:#b6652a iyr:2013 hgt:188cm eyr:2025
      
      hgt:177cm byr:1955 eyr:2030 ecl:amb pid:476675886 iyr:2016 hcl:#c0946f
      
      pid:152702068 iyr:2016 hcl:#b6652a
      cid:82 ecl:blu eyr:2029 byr:1975 hgt:161cm
      
      pid:136852264
      eyr:2024 cid:339 ecl:oth byr:1949 iyr:2011
      
      iyr:2020 pid:772739059
      eyr:2025 hgt:157cm
      byr:1945 ecl:brn
      hcl:#6b5442
      
      hcl:#18171d eyr:2022
      iyr:2018 ecl:grn byr:1933 pid:053763751
      
      pid:214212776 hcl:#18171d
      eyr:2030
      iyr:2020 byr:1988
      cid:122
      hgt:170cm ecl:oth
      
      pid:883116919 iyr:2018 ecl:brn byr:1938 hgt:187cm eyr:2020
      
      iyr:2020 hcl:#a97842
      cid:329 eyr:2025 byr:1946 pid:636649774
      ecl:grn hgt:158cm
      
      eyr:2023
      ecl:blu hgt:161cm
      hcl:#341e13 byr:1951
      iyr:2020 pid:461889565 cid:97
      
      hgt:168cm pid:492241189
      eyr:2029
      iyr:2013
      cid:150
      byr:1980 hcl:#cfa07d ecl:hzl
      
      byr:1998 ecl:gry hgt:150cm eyr:2024 pid:401735295 cid:153 hcl:#733820 iyr:2016
      
      ecl:hzl hgt:184cm iyr:2018
      byr:2001
      pid:453480077 eyr:2025 hcl:#a97842`,
      strongerValidate
    )
  ).toBe(224);
});

describe("strong validator", () => {
  it("invalid examples", () => {
    const invalidPassports = [
      createPassport([
        ["eyr", "1972"],
        ["cid", "100"],
        ["hcl", "#18171d"],
        ["ecl", "amb"],
        ["hgt", "170"],
        ["pid", "186cm"],
        ["iyr", "2018"],
        ["byr", "1926"],
      ]),
      createPassport([
        ["iyr", "2019"],
        ["hcl", "#602927"],
        ["eyr", "1967"],
        ["hgt", "170cm"],
        ["ecl", "grn"],
        ["pid", "012533040"],
        ["byr", "1946"],
      ]),
      createPassport([
        ["hcl", "dab227"],
        ["iyr", "2012"],
        ["ecl", "brn"],
        ["hgt", "182cm"],
        ["pid", "021572410"],
        ["eyr", "2020"],
        ["byr", "1992"],
        ["cid", "277"],
      ]),
      createPassport([
        ["hgt", "59cm"],
        ["ecl", "zzz"],
        ["eyr", "2038"],
        ["hcl", "74454a"],
        ["iyr", "2023"],
        ["pid", "3556412378"],
        ["byr", "2007"],
      ]),
    ];
    const results = invalidPassports.map((passport) =>
      strongerValidate(passport)
    );

    expect(results).toEqual([false, false, false, false]);
  });

  it("valid examples", () => {
    const validPassports = [
      createPassport([
        ["pid", "087499704"],
        ["hgt", "74in"],
        ["ecl", "grn"],
        ["iyr", "2012"],
        ["eyr", "2030"],
        ["byr", "1980"],
        ["hcl", "#623a2f"],
      ]),
      createPassport([
        ["eyr", "2029"],
        ["ecl", "blu"],
        ["cid", "129"],
        ["byr", "1989"],
        ["iyr", "2014"],
        ["pid", "896056539"],
        ["hcl", "#a97842"],
        ["hgt", "165cm"],
      ]),
      createPassport([
        ["hcl", "#888785"],
        ["hgt", "164cm"],
        ["byr", "2001"],
        ["iyr", "2015"],
        ["cid", "88"],
        ["pid", "545766238"],
        ["ecl", "hzl"],
        ["eyr", "2022"],
      ]),
      createPassport([
        ["iyr", "2010"],
        ["hgt", "158cm"],
        ["hcl", "#b6652a"],
        ["ecl", "blu"],
        ["byr", "1944"],
        ["eyr", "2021"],
        ["pid", "093154719"],
      ]),
    ];

    const results = validPassports.map((passport) =>
      strongerValidate(passport)
    );

    expect(results).toEqual([true, true, true, true]);
  });
});
