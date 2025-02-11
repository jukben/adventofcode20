import { hackDevice, analyzeProgram } from "./8";

it("simple 1a/2", () => {
  expect(
    analyzeProgram(`nop +0
    acc +1
    jmp +4
    acc +3
    jmp -3
    acc -99
    acc +1
    jmp -4
    acc +6`).acc
  ).toBe(5);
});

it("solution 1/2", () => {
  expect(
    analyzeProgram(`jmp +265
    jmp +326
    acc +41
    acc +21
    nop +255
    jmp +104
    jmp +563
    jmp +568
    acc -12
    acc -7
    jmp +9
    jmp +3
    acc -8
    jmp +360
    acc -10
    acc +35
    jmp +527
    acc +27
    jmp +176
    jmp +511
    acc +27
    acc -18
    acc +7
    jmp +272
    jmp +1
    acc +45
    jmp -24
    acc +47
    jmp -26
    jmp +344
    acc -17
    acc +26
    acc -7
    jmp +193
    acc +45
    jmp +238
    acc +13
    acc +0
    acc -13
    acc +33
    jmp +381
    acc +16
    acc -11
    acc +14
    acc +21
    jmp +194
    acc +48
    acc +14
    nop +271
    jmp -8
    acc +24
    acc -6
    acc +36
    jmp +501
    jmp -35
    jmp +1
    jmp +294
    acc -3
    jmp +181
    nop +371
    acc -12
    jmp +198
    nop +120
    jmp +108
    acc +45
    acc +46
    nop +193
    jmp +346
    acc +30
    acc +26
    jmp +200
    acc +0
    nop +187
    acc +31
    acc +30
    jmp +40
    acc +39
    acc +2
    acc +40
    jmp +316
    jmp +279
    acc +0
    acc +11
    jmp +120
    acc +32
    nop +336
    acc +13
    jmp +178
    acc -11
    jmp +144
    jmp +136
    acc -3
    nop +245
    acc +34
    jmp -23
    acc -5
    acc -11
    jmp +217
    acc +28
    acc +22
    acc +18
    jmp +329
    jmp +1
    nop +350
    nop -45
    acc +13
    jmp -87
    acc -13
    jmp +479
    acc +31
    acc -19
    nop +342
    jmp -78
    acc +18
    jmp +1
    jmp +1
    acc +18
    jmp +278
    nop +328
    acc +6
    jmp +1
    acc -11
    jmp +77
    jmp +4
    acc +32
    acc +48
    jmp +188
    acc +14
    acc +32
    jmp +122
    acc -6
    acc -16
    jmp -42
    acc +32
    acc +26
    acc +33
    jmp +48
    acc +3
    jmp +1
    jmp +163
    acc +34
    acc +17
    jmp -58
    nop +254
    acc +26
    jmp +223
    acc +7
    nop +94
    acc +12
    jmp +433
    acc +30
    acc -17
    acc +3
    acc +50
    jmp -95
    jmp +1
    acc +42
    jmp -146
    acc +12
    acc +33
    jmp -101
    acc +18
    jmp +244
    nop +243
    jmp -130
    acc -8
    jmp +55
    acc +39
    acc +45
    nop +2
    jmp +239
    acc -19
    acc +23
    acc +36
    jmp +59
    acc -14
    acc +29
    jmp -158
    acc +31
    acc +6
    jmp +223
    jmp +126
    jmp +306
    jmp +214
    acc -16
    jmp +102
    acc -6
    acc +19
    jmp -174
    jmp +283
    acc -13
    acc +12
    acc -8
    jmp +72
    jmp +252
    acc +16
    acc +26
    nop -19
    jmp +377
    jmp -15
    acc -7
    acc +34
    jmp +352
    jmp -101
    jmp -154
    acc +32
    nop -1
    acc +49
    jmp -167
    jmp +110
    jmp +127
    acc -3
    acc +17
    jmp +330
    acc +27
    jmp -50
    acc +25
    acc +8
    acc +21
    acc +4
    jmp +189
    jmp -157
    nop +231
    acc +27
    acc +27
    jmp +77
    acc +6
    jmp -198
    nop +274
    acc -16
    acc +31
    acc +5
    jmp +122
    jmp -30
    nop -79
    acc +43
    acc +24
    acc -1
    jmp +349
    jmp +80
    jmp +352
    acc +15
    acc +6
    acc +46
    acc -11
    jmp -35
    acc -9
    acc -16
    acc +22
    nop -71
    jmp +280
    acc +28
    acc +17
    jmp +127
    acc -15
    acc +14
    acc +0
    acc +45
    jmp +311
    acc -19
    jmp +309
    acc +36
    acc +7
    nop +102
    jmp -31
    nop +278
    nop +259
    acc +35
    jmp -86
    jmp +1
    jmp +84
    acc +30
    jmp -111
    jmp +263
    acc -14
    acc -8
    acc +7
    jmp -263
    jmp -259
    jmp -14
    acc +26
    acc +4
    jmp -56
    acc +31
    acc +49
    acc +42
    jmp +263
    acc -15
    acc -13
    acc -7
    acc +35
    jmp +270
    acc -3
    acc +31
    jmp -148
    acc +8
    acc +14
    jmp -247
    acc -1
    nop +255
    acc -15
    jmp +140
    acc +38
    nop +106
    acc +29
    jmp +244
    jmp +62
    acc +5
    nop -218
    acc +47
    acc -18
    jmp +208
    nop +47
    jmp +46
    acc +27
    jmp +126
    acc +50
    nop +129
    jmp -147
    nop -278
    jmp +1
    acc +37
    acc -17
    jmp +17
    acc +18
    acc +21
    jmp -121
    acc +12
    acc +37
    acc +48
    acc +24
    jmp -176
    acc +18
    acc -3
    nop -169
    acc -4
    jmp +23
    acc +42
    jmp +30
    jmp +15
    acc +33
    acc +33
    acc +36
    acc -7
    jmp +262
    acc -16
    jmp -27
    acc -14
    jmp +17
    jmp -79
    jmp +242
    acc +1
    acc -12
    jmp -3
    acc +11
    acc +44
    nop -254
    jmp +52
    jmp -294
    acc -9
    acc +50
    acc -9
    jmp -229
    acc +6
    jmp +211
    nop -132
    jmp +136
    jmp +74
    acc +39
    acc +18
    jmp +51
    nop -281
    jmp -211
    nop -19
    jmp +114
    nop -97
    jmp +1
    nop -282
    acc +45
    jmp +30
    jmp -191
    acc -13
    acc -4
    acc -8
    jmp +159
    acc +36
    acc +21
    acc -13
    acc +3
    jmp -266
    acc +45
    acc +29
    nop -55
    acc +39
    jmp +121
    jmp +58
    jmp -101
    acc -17
    acc +44
    jmp -319
    acc -15
    acc -7
    jmp -132
    acc +31
    jmp +165
    jmp -191
    jmp +87
    acc +23
    jmp +54
    acc +6
    nop -330
    jmp +26
    jmp -9
    acc +43
    acc +50
    acc +49
    jmp +63
    jmp +1
    acc -6
    acc +17
    jmp -311
    acc +50
    acc -13
    acc -15
    acc +33
    jmp -279
    acc +7
    acc -7
    acc +40
    jmp -374
    acc +18
    acc -14
    acc +42
    jmp -106
    acc +49
    acc +50
    jmp -156
    jmp -314
    acc +28
    acc +49
    jmp +114
    acc +15
    jmp -12
    acc +11
    acc +9
    jmp -386
    jmp +1
    jmp -376
    acc +6
    acc -9
    acc -2
    acc +49
    jmp +36
    acc -2
    jmp +1
    acc -2
    jmp -361
    acc -14
    acc -16
    nop -452
    acc +40
    jmp -107
    nop -378
    acc -17
    acc +26
    acc -11
    jmp -272
    acc +9
    acc +8
    acc +20
    acc -19
    jmp -106
    acc -13
    jmp -466
    acc +40
    acc +43
    acc +28
    acc +24
    jmp +15
    acc +21
    nop -456
    acc +7
    jmp -97
    acc +46
    jmp +1
    acc -5
    acc +49
    jmp +38
    acc +42
    jmp -470
    acc +33
    acc -10
    jmp +57
    acc -19
    acc +10
    acc +29
    jmp -218
    acc +2
    acc +19
    acc -4
    acc -16
    jmp -187
    acc +41
    acc +16
    jmp -414
    acc +30
    acc +1
    jmp -229
    acc -2
    acc +42
    jmp -269
    acc +39
    acc -2
    acc +7
    jmp -300
    jmp -301
    acc -4
    jmp +1
    jmp -357
    acc +22
    acc +47
    jmp +4
    acc +45
    nop -428
    jmp -115
    nop -402
    jmp -312
    acc -3
    acc +2
    jmp -345
    acc +49
    acc -12
    acc +30
    acc +21
    jmp -335
    jmp -440
    acc -8
    acc +24
    jmp -30
    acc -14
    acc +32
    acc +11
    jmp -188
    nop -7
    acc +15
    acc -14
    jmp +53
    acc +5
    jmp -366
    acc -13
    acc +24
    jmp -492
    acc +38
    jmp -258
    acc +47
    jmp -40
    nop -485
    acc -13
    acc -2
    acc +0
    jmp -154
    acc +25
    acc +38
    acc +47
    jmp -257
    acc +0
    acc +37
    acc +32
    jmp -549
    acc +15
    acc +29
    acc +29
    acc +5
    jmp -111
    jmp -392
    acc +15
    acc +24
    acc +38
    jmp +9
    nop -299
    nop -381
    jmp -552
    acc +50
    nop -488
    acc +45
    jmp -305
    jmp -404
    acc +34
    jmp -410
    acc +15
    acc +25
    jmp -332
    acc +2
    jmp -388
    acc +31
    acc +45
    nop -555
    nop -247
    jmp -248
    acc +3
    jmp -576
    acc +22
    nop -420
    acc +36
    acc +33
    jmp -372
    nop -551
    acc +27
    nop -567
    nop -554
    jmp +1`).acc
  ).toBe(1941);
});

it("simple 1b/2", () => {
  const { acc, reason } = analyzeProgram(`nop +0
  acc +1
  jmp +4
  acc +3
  jmp -3
  acc -99
  acc +1
  nop -4
  acc +6`);

  expect(acc).toBe(8);
  expect(reason).toBe("OUT");
});

it("simple 1c/2", () => {
  const { acc, reason } = analyzeProgram(`jmp +0
  nop +1`);

  expect(acc).toBe(0);
  expect(reason).toBe("INF");
});

it("simple 2/2", () => {
  const acc = hackDevice(`nop +0
  acc +1
  jmp +4
  acc +3
  jmp -3
  acc -99
  acc +1
  jmp -4
  acc +6`);

  expect(acc).toBe(8);
});

it("solution 2/2", () => {
  expect(
    hackDevice(`jmp +265
    jmp +326
    acc +41
    acc +21
    nop +255
    jmp +104
    jmp +563
    jmp +568
    acc -12
    acc -7
    jmp +9
    jmp +3
    acc -8
    jmp +360
    acc -10
    acc +35
    jmp +527
    acc +27
    jmp +176
    jmp +511
    acc +27
    acc -18
    acc +7
    jmp +272
    jmp +1
    acc +45
    jmp -24
    acc +47
    jmp -26
    jmp +344
    acc -17
    acc +26
    acc -7
    jmp +193
    acc +45
    jmp +238
    acc +13
    acc +0
    acc -13
    acc +33
    jmp +381
    acc +16
    acc -11
    acc +14
    acc +21
    jmp +194
    acc +48
    acc +14
    nop +271
    jmp -8
    acc +24
    acc -6
    acc +36
    jmp +501
    jmp -35
    jmp +1
    jmp +294
    acc -3
    jmp +181
    nop +371
    acc -12
    jmp +198
    nop +120
    jmp +108
    acc +45
    acc +46
    nop +193
    jmp +346
    acc +30
    acc +26
    jmp +200
    acc +0
    nop +187
    acc +31
    acc +30
    jmp +40
    acc +39
    acc +2
    acc +40
    jmp +316
    jmp +279
    acc +0
    acc +11
    jmp +120
    acc +32
    nop +336
    acc +13
    jmp +178
    acc -11
    jmp +144
    jmp +136
    acc -3
    nop +245
    acc +34
    jmp -23
    acc -5
    acc -11
    jmp +217
    acc +28
    acc +22
    acc +18
    jmp +329
    jmp +1
    nop +350
    nop -45
    acc +13
    jmp -87
    acc -13
    jmp +479
    acc +31
    acc -19
    nop +342
    jmp -78
    acc +18
    jmp +1
    jmp +1
    acc +18
    jmp +278
    nop +328
    acc +6
    jmp +1
    acc -11
    jmp +77
    jmp +4
    acc +32
    acc +48
    jmp +188
    acc +14
    acc +32
    jmp +122
    acc -6
    acc -16
    jmp -42
    acc +32
    acc +26
    acc +33
    jmp +48
    acc +3
    jmp +1
    jmp +163
    acc +34
    acc +17
    jmp -58
    nop +254
    acc +26
    jmp +223
    acc +7
    nop +94
    acc +12
    jmp +433
    acc +30
    acc -17
    acc +3
    acc +50
    jmp -95
    jmp +1
    acc +42
    jmp -146
    acc +12
    acc +33
    jmp -101
    acc +18
    jmp +244
    nop +243
    jmp -130
    acc -8
    jmp +55
    acc +39
    acc +45
    nop +2
    jmp +239
    acc -19
    acc +23
    acc +36
    jmp +59
    acc -14
    acc +29
    jmp -158
    acc +31
    acc +6
    jmp +223
    jmp +126
    jmp +306
    jmp +214
    acc -16
    jmp +102
    acc -6
    acc +19
    jmp -174
    jmp +283
    acc -13
    acc +12
    acc -8
    jmp +72
    jmp +252
    acc +16
    acc +26
    nop -19
    jmp +377
    jmp -15
    acc -7
    acc +34
    jmp +352
    jmp -101
    jmp -154
    acc +32
    nop -1
    acc +49
    jmp -167
    jmp +110
    jmp +127
    acc -3
    acc +17
    jmp +330
    acc +27
    jmp -50
    acc +25
    acc +8
    acc +21
    acc +4
    jmp +189
    jmp -157
    nop +231
    acc +27
    acc +27
    jmp +77
    acc +6
    jmp -198
    nop +274
    acc -16
    acc +31
    acc +5
    jmp +122
    jmp -30
    nop -79
    acc +43
    acc +24
    acc -1
    jmp +349
    jmp +80
    jmp +352
    acc +15
    acc +6
    acc +46
    acc -11
    jmp -35
    acc -9
    acc -16
    acc +22
    nop -71
    jmp +280
    acc +28
    acc +17
    jmp +127
    acc -15
    acc +14
    acc +0
    acc +45
    jmp +311
    acc -19
    jmp +309
    acc +36
    acc +7
    nop +102
    jmp -31
    nop +278
    nop +259
    acc +35
    jmp -86
    jmp +1
    jmp +84
    acc +30
    jmp -111
    jmp +263
    acc -14
    acc -8
    acc +7
    jmp -263
    jmp -259
    jmp -14
    acc +26
    acc +4
    jmp -56
    acc +31
    acc +49
    acc +42
    jmp +263
    acc -15
    acc -13
    acc -7
    acc +35
    jmp +270
    acc -3
    acc +31
    jmp -148
    acc +8
    acc +14
    jmp -247
    acc -1
    nop +255
    acc -15
    jmp +140
    acc +38
    nop +106
    acc +29
    jmp +244
    jmp +62
    acc +5
    nop -218
    acc +47
    acc -18
    jmp +208
    nop +47
    jmp +46
    acc +27
    jmp +126
    acc +50
    nop +129
    jmp -147
    nop -278
    jmp +1
    acc +37
    acc -17
    jmp +17
    acc +18
    acc +21
    jmp -121
    acc +12
    acc +37
    acc +48
    acc +24
    jmp -176
    acc +18
    acc -3
    nop -169
    acc -4
    jmp +23
    acc +42
    jmp +30
    jmp +15
    acc +33
    acc +33
    acc +36
    acc -7
    jmp +262
    acc -16
    jmp -27
    acc -14
    jmp +17
    jmp -79
    jmp +242
    acc +1
    acc -12
    jmp -3
    acc +11
    acc +44
    nop -254
    jmp +52
    jmp -294
    acc -9
    acc +50
    acc -9
    jmp -229
    acc +6
    jmp +211
    nop -132
    jmp +136
    jmp +74
    acc +39
    acc +18
    jmp +51
    nop -281
    jmp -211
    nop -19
    jmp +114
    nop -97
    jmp +1
    nop -282
    acc +45
    jmp +30
    jmp -191
    acc -13
    acc -4
    acc -8
    jmp +159
    acc +36
    acc +21
    acc -13
    acc +3
    jmp -266
    acc +45
    acc +29
    nop -55
    acc +39
    jmp +121
    jmp +58
    jmp -101
    acc -17
    acc +44
    jmp -319
    acc -15
    acc -7
    jmp -132
    acc +31
    jmp +165
    jmp -191
    jmp +87
    acc +23
    jmp +54
    acc +6
    nop -330
    jmp +26
    jmp -9
    acc +43
    acc +50
    acc +49
    jmp +63
    jmp +1
    acc -6
    acc +17
    jmp -311
    acc +50
    acc -13
    acc -15
    acc +33
    jmp -279
    acc +7
    acc -7
    acc +40
    jmp -374
    acc +18
    acc -14
    acc +42
    jmp -106
    acc +49
    acc +50
    jmp -156
    jmp -314
    acc +28
    acc +49
    jmp +114
    acc +15
    jmp -12
    acc +11
    acc +9
    jmp -386
    jmp +1
    jmp -376
    acc +6
    acc -9
    acc -2
    acc +49
    jmp +36
    acc -2
    jmp +1
    acc -2
    jmp -361
    acc -14
    acc -16
    nop -452
    acc +40
    jmp -107
    nop -378
    acc -17
    acc +26
    acc -11
    jmp -272
    acc +9
    acc +8
    acc +20
    acc -19
    jmp -106
    acc -13
    jmp -466
    acc +40
    acc +43
    acc +28
    acc +24
    jmp +15
    acc +21
    nop -456
    acc +7
    jmp -97
    acc +46
    jmp +1
    acc -5
    acc +49
    jmp +38
    acc +42
    jmp -470
    acc +33
    acc -10
    jmp +57
    acc -19
    acc +10
    acc +29
    jmp -218
    acc +2
    acc +19
    acc -4
    acc -16
    jmp -187
    acc +41
    acc +16
    jmp -414
    acc +30
    acc +1
    jmp -229
    acc -2
    acc +42
    jmp -269
    acc +39
    acc -2
    acc +7
    jmp -300
    jmp -301
    acc -4
    jmp +1
    jmp -357
    acc +22
    acc +47
    jmp +4
    acc +45
    nop -428
    jmp -115
    nop -402
    jmp -312
    acc -3
    acc +2
    jmp -345
    acc +49
    acc -12
    acc +30
    acc +21
    jmp -335
    jmp -440
    acc -8
    acc +24
    jmp -30
    acc -14
    acc +32
    acc +11
    jmp -188
    nop -7
    acc +15
    acc -14
    jmp +53
    acc +5
    jmp -366
    acc -13
    acc +24
    jmp -492
    acc +38
    jmp -258
    acc +47
    jmp -40
    nop -485
    acc -13
    acc -2
    acc +0
    jmp -154
    acc +25
    acc +38
    acc +47
    jmp -257
    acc +0
    acc +37
    acc +32
    jmp -549
    acc +15
    acc +29
    acc +29
    acc +5
    jmp -111
    jmp -392
    acc +15
    acc +24
    acc +38
    jmp +9
    nop -299
    nop -381
    jmp -552
    acc +50
    nop -488
    acc +45
    jmp -305
    jmp -404
    acc +34
    jmp -410
    acc +15
    acc +25
    jmp -332
    acc +2
    jmp -388
    acc +31
    acc +45
    nop -555
    nop -247
    jmp -248
    acc +3
    jmp -576
    acc +22
    nop -420
    acc +36
    acc +33
    jmp -372
    nop -551
    acc +27
    nop -567
    nop -554
    jmp +1`)
  ).toBe(2096);
});
