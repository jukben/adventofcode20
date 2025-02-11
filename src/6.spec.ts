import { anyoneSaidYes, getSumOfCounts, everyoneSaidYes } from "./6";

it(`anyoneSaidYes`, () => {
  expect(anyoneSaidYes(["abcx", "abcy", "abcz"])).toEqual(6);
  expect(anyoneSaidYes(["a", "b", "c"])).toEqual(3);
  expect(anyoneSaidYes(["a", "a", "a", "a"])).toEqual(1);
});

it(`Simple test 1/2`, () => {
  expect(
    getSumOfCounts(
      `abc

  a
  b
  c
  
  ab
  ac
  
  a
  a
  a
  a
  
  b`,
      anyoneSaidYes
    )
  ).toBe(11);
});

it(`Solution 1/2`, () => {
  expect(
    getSumOfCounts(
      `
    tr
rt
tr
rt
tr

fdrhu
gwuksvro

tesnouwyrdf
twofuspcmvenh

cnxpsmuqiaw
cxovminqpawus
qwaxjmupnsic

anpskchzojyeguwr
soqauprxzgmycvef
sorplgezycau
ngrecposyizwau
ayeptrilsnguzco

mvwcl
vlcwxm
uwcflhpkjor
blnvwtic
wcmzl

hyvowmqzixc
lacsrjdyxiz
fyczpbxlti

qxjhrgefbkm
eqrgbfhjxkcm

catsrkyjulmfzvixe
teyxvimulfkczqrjsa
xrtlyaqemsucjzkifv
drjlmncsiftxaeyzvpuk

ocgrnldhja
jicwgntvuhk
cxgajhln

hczyoipegqwsubvxma
zapvqdbyeiulmrsx
qmuxbtispezvayk
ibpqvsxaueymzr
jpzavtxymusibeq

iomtep
obmfpitqde
hrmoiept
iprtomeh

dvqtfm
vfqdmt
vfmqtd

svacthonwbmxiyukjr
rmtjsowahbxn
wopxrhjdantsblme

kunw
nlar
wson
eranj
zfpignmvxqc

mjulrb
mjrlbu

sjdlfgertkv
lwvfoaxjknuh

usapkhx
afpuhsx
uaphsx
haupexsf
qhmryxjuaps

mpjfb
mjbfp

zbdpmvijwyxkgroshe
yjblgvprhmoszfwdxe
dyrjngwpueozmshvbx
pevyiohbdgxrjsmzw
ybmexhpidzsgojvwr

obcqvydzetjsuhgif
yvdqgeithsfjzucob
jfqzsiovutgwychbed
qizcbjpshyretdgoflnvu
hbefytgcvdzuaisqjo

avfgq
gq
lqg
qwgr

fekswrjbzhyng
sfwnkybhzegjr
hkgywzefsnrbj
zfkivbjeyrwnhdgsx

ztusijyhclvowf
cwvjzuflhsyito
wfjuyholzcsivt
yfuhovjsitczwl

rvp
kmihlj

ocmqzuwjtan
vbrlcghznqxead
acngzq
shiypqlnckzdva

evypwdushz
imabuen
uqgjekm

d
p
p

vktlzey
jucbqh

cwzepoasyivtufdl
cturlyvoaipwznefhms

brut
mwurt
urt
urt

anpqzltgbw
yajxbermic
gwhtzlvquandbof

tcjafrlghixm
hltgkoxcrsqnia
echylaxrjfgti

etqhafdzg
rmzyaefcqhdo
ehgtdqfzal

eiplbwvqhgdrykmjzf
cnotkxsvzlu

juszboldxphtqywkv
lzspkjmgqhviter
hsqkpzitvlnaj

kx
jxrmousta
cx
qxfw
hxq

vezygtuhqmklcb
cmxrlzjsgphi

wdvigexqfotmnsbc
egwibdomtvcqnsxf
sxtipmcndowbvfeqg
tcdiefsqmgvxbown
ceqwvtifnbmgdsoxz

sgtcvxmiqynfzehr
yvhawlcmtun

bncirlgwyqudh
ybzlqwdangu
fuqjekwynmvtgxsd
wqydnpgbuo

ojkqnxidugfch
rwoqnhmbxjztapfdu

gzlejskuptnb
ekzlpujnbstg
lutzbpjkensg
nktlpugbjzes

omhqnxljiwkpvzudbtreay
yqiknzbxvormgpjualtfwde
jowmpeaqbxltzvdrynuki

atdpobxsvic
wzcvlbuotyxreqspa
aotbscvdxp
vipcabotsx
potaxbvcs

jgzstxmyknhvd
hbnjzgvmxkclsytdi

xljyqrtu
uqlyrxtj
rytlqjux
tyxrjqlu

lmdjczyw

fcdqgipmehturbnwvaoyx
qkaruovhfscxglbmweznyit

znqixgs
zmxqiwsng

zvuh
hzuv
vhuz

jy
jy
yjh
yj
yj

rtcxjbpgs
zpgrcxmajstbn
rhpasbtgcex
oyrfsqucgdwxpitl

dcsyezmrvquixwpogakfjntbhl
anovfcsitzebgxdkpjwqmlyhur

ywaflnbmov
blwoynmav
nmblwayvo
ymawvlnbgo
lyvobwanm

xuceq
qgxvkwm

yqgcviulxpjz
yuqptgcavzix
gyvxicuzpq

lpufgwaebhtckdriqy
locrabdyihufpwgqe
lcdqfeubwrgaihpyk
hoclfpgubwqdraiey
frayspqundziewcgxbmhl

a
a
aw

ceqnfpyhkwaomzdlrigjutsv
qdsjlwiobvyknxzuechpfgta
iyhflgtqakvwedpznjcuos

viwbayqdumknsjzo
dzmuinwqybskjotla
suzjnbkdoqawmiy

iuvdjaxn
vjdixnau
vnjaxdiu

tqg
tqg
qtg

vyncxbksgorfaijzdeqhtplw
dxjyesngbrotzlaqckwfph

tgsqcmzbirkoapy
oayqpgrcstm
asrocipymhgqt
vacyxomgrsqpt

odvreuapq
deqropau
oruqbdeap
uordpeqa
uarodepq

cewlri
il
bil

pfsmjcerdb
cgbmjerdsp
gdbpcemrjs

olnbwczufamjsrtipvkqyhxg
hqbirpwczgoualvmfktsjynx
wvkypxhoaujrlzbnsiqgctmf

xqiawmgh
agbxr
gsxab

juqhvc
vqjuhbc
uhjcvq
hjcuvq
cuvhqj

mkntuosgpawy
mjpgvtaysfrck

l
l
l
l
l

a
ze
w

zp
lp
p
p

g
ysbel
iqhxtnavjw
pczsm
dfkc

ucjs
eszuo
lseugi

xiubmhvoejrfyp
vrepyojmihx

xktarvmjgzfyhpioldecq
elhdmcripxqfvotygjk
mcyfrvgtlhxpjiqekdo
rlvodgxtchfipjykemq
dxcvlrhmpyqkitoeujgf

wslomfkcbvq
qcsowkvbt
ywcxhgjsnkoqpze
amwsucfoqk
oqiskmrwc

zepulif
lijefp
plibfyre

dnb
b

hvu
ujobdmqsna
ulwt
uflpec
zruk

g
g
g
g
g

kmugldxtea
jgkotaelmux
txkomeluag

cujxkyze
crmgxjkzy

bzutydn
nztybdu
ntzbydfu

dzbjyeap
rxgpyjqmbd
odhbpjy

rchkvqu
jurthlkcqs

p
p
p
ps
p

arlofnhbd
rhadnblf
jhnrxldaf

ztukfgr
gufkt
fdktsujgy

kjyhd
dcyj
jyde

dxvgzptbfhniquylok
hlnzpgfuvxktbydq
yugtqxdpbnklhvfz

aser
sra

ejkht
doevsaktyfulpjhxzrb
gwjteiqnkch

eqtwvaxkhjysf
sahmxqevjtc

gyeivjsdrzwubomkpaflt
wmlpbuaojiykvzrfdste
oueiabrdzyfsjmklvtpw
rfteozmijdypwabuvksl

nqiycrwsjgdohmkvuzl
ougqkdscrywnjihvl
owsvkugqldnjcyrxiah
dvhykqlnusowicjgr

kurqvjnbgzxocwhlfeditys
toxuhcldgybfesiqzjnwr

dhkloqwpmicyzva
kmwiaplhty
lmuieakwhfyp
saklihpwyfm

tuxlhze
flni
adjcpbymrsk

umzqhct
zuhmqt
mtgzohuvq

tzuxk
ktxuz
mputbxokz
vxztku
txzuk

ogs
us

oarnvdkyuz
fpeqwtibhjs

qcoyuawvktbldpzermfj
cjyvuzkpqrwbftemodla
tabdoukcrlyvmfpjzwqe
fytknqplmduzxhbrecajosvgiw
qfvyerdktapobmwjzulc

gfyznr
vnpoi
hdnwaqmejb
ctkfn
unik

zvactkmwqijosfngler
fgosnalrvwkjiumtcz

cflqhz
ughqcfl
mwflcqh
hzqlfc
hclfq

vhs
hvs
vhs

fisvlybdg
bciulx

vbkoruxqcgp
qpzrxubckg

rblgszhvua
vsqrbuozhjg
trzushvgb

qkauenxhwmtrob
nefzodwmysqplvbtxhk
bxhemunqkwot

eipjy
pei
mfweitdlp
ipe

mjuy
yumjc
mjyu

hcaivxjntwopfbud
dxcajbzvpinofuthw
xwubvdhtnfpjicoa
ipahvxtnobjdwucf
pdajicbovxhntwuf

uxtbzyqoijcgnkrps
scuojrikthyzbpnq

rdmnztsi
rumthsozjdin
mistcxnfzadry
qzrndtsim

ki
kix
ki
ki

luihqbcygnpvokrjwxa
qxnjklouahviycrbpgw
ryhqvbkjxanpwuolgci

ifmy
mixplfsyo
yifm
fiym

iojlkgqnfpc
ixuqcpfonmlyjk
ikcjoqnplf
kniwopcfaqhjl
pwqfcnioargvjlek

izpbgvruchjtsyxf
tiyxeshupcgjkmdnb

wufhb
hwubf
ahufbwk
uwbfh
hfbwu

wrbsjcniyaeqvdufzxoplg
edjzpltwqihmygxoca

yag
zyawxk

b
v
b

jmxvwdoc
cdmosxjrv
oycvnjxmbdkar
jkdmvcxobs

zmojfdc
ctxmj

vkpaliosgnqejm
pcqoinkeljmvasg
nvbzjlopmgqeasik

lezonbtdpxk
euiohtlpnqrxvb
olpgetfmnykxb
tnlopzabxyeg

tecjf
ewv

ehysltzaoxfwcikgupmbdj
oditawxjkeushbmyczflpg
ikycstwfjdbxpegzauolmh
ayxchoitgufzewskbmljpd
xdshbltjzeupfcymigaownk

tbkhy
wuejmqdz

um
uml
wmu
yum
um

goidsnkyrzpul
gexkdyhilna
kiydnzljg

vzespaw
svqak
vajs
sav
basjv

negfu
negfu
ungezqf
wufnge
wunegf

p
n
n

nxtzpvhjugs
knlztuhgpv
mehgcizytvw

l
l
l

tmwjsoiqfxbae
ivhdxeofspjumabcrtkwz
mbneowitsgfxjqa

hr
hr

jyrlf
ufcqr
frn
rzafy
rkfbpw

cdvnobw
kovwndy
vwnod
vadbonwl

mqbwikvtlnauysporx
jxyzmnabiecvtpuo
guxhvmnyocbpait

graltxsdfnbeuzc
vpqgosmjhb

mvok
movk

wevqpmrblnfdkcja
aprbvjwixcldeyf
ecwjdupovbahzltf

nwdjv
jwvnd
nwdjv
jdwvn
dvjnw

plzqokjdmehc
kzljpqohtecdm
peclzqjwohdmk

pmf
puwmf
jfmp
mpf
fpm

sgrf
sgfr
grsf
grsf

mk
fk

ldyqkn
fknqzvlsd
tlnkydq

yjtwhgckazeslb
imodapxfq
avouixnd

gzjumhcslyfkwnbqx
qrlniepavtbdo

thosbezjxwcumnyrkv
wrynhxmcuevqizspatbok

pjmwys
mysjpw
ysjwmp
wmjysp
ywmjsp

fm
mnup
rmzid

ir
w
dwl
bqsacgumfzpj

givl
u
pwu
wj
m

j
j
j
j
pj

mybwe
uwmeby
weymb
mwbey

zfsbjpg
fzjs
vfzscjk
sfzj

yv
vy
yv
yv
vy

roydftqkjman
hrzmgsqbfuvyx

lanexhgcf
ehmcxagnl
xaglnwceh

guk
j
j
i
yr

wfhx
xhwf
hctwbxf
hxwf
hwxf

uzlheoysartmnwpqi
zrjqlaiosptuyw
ipatowrsyuzlvq
pajsyiultrqocwz
qtyciuzlpsorwa

fqiehbrjgpzla
dtqzbhloanj
lmwbdjqnxzha
wnjqvzuhladybs

fekzbo
hfbzeok

upjz
ua

fcgzitupjlom
mlzfitjpoucg
ljzgfpcmitou

wjavhtfgulxbs
jlbhaugwesftxv

abulpizgs
axyszlo
hfrdkqjv

pxnqsbefvijroumzckwt
cxmtpbjfnesuqowrkvi
sfcpjunwoivekbrmqxt
evupsfnxrbmjciwqtko

xriqnwvgusceydhmjoalt
jdvrcnmpsqayugewhio

chyd
syphcr
yhoc
ych
ych

qye
wqoe
qzue
qkevy
qe

gehqsfybktionvlazuxjpd
ginvqthklyspxbfoajud

hpblkjfyguov
ywvhlpgbnc

xoeynm
dtojpzgwbyfne
hnqyoe
eymno
ovqyen

xnrlksc
nxlc
nvwjmxc

xuoyb
yoblx

gzdx
xzvd
dxtz
duzxj

mxpzaovctejy
xlitevzyk
txvgfezyrkh

zh
ghxk
dlaopuj
f
z

kptczhbqrn
cqhztbpnr
fqbtrucpzhn
brthnqpzc

u
eqrwi

cwoarjgxesbfpz
erxbtojas
dajsroexb
pgedrabjsox

mjkviqy
mkqjyi
qmykij
qmjhiky
mjkviyq

hqo
qhjr
xhjqtrw

lfaxc
lxzfc
czxfl
clxft
fcxl

umoecsdkqji
cskqpoudm

qubm
muq
dmiual

xvbgm
mvxq
mvlx
vmx

p
pvg
p

uvckgbzxdytoams
weqcnkfjmihprx

wgyiqkxfpzlatbousrvn
zfqlgwktyivruoxabnsp
fbtragkovyiwsxnlqzup

xonjzkrghmdyiu
xduizjmgronhyk
mhdgryiuzknjxo
dkrxougihnzmjy

anyjhkobzplrqfg
gfpknwqdhsxacjmoblz
pkflqubgzanjho
hyzgunfviqobpjakl

nzs
ipu
egfac
us
s

ixskmrynfbctozadew
lsvnjyumfhzkpbg

goqdapfivwkmexb
swiqafmdoxgbekvp
pmkbaiqcewfvxdgo
fvoepywahjqkdzgibmx
wigfkqvsebpoxadm

ornhgxjqkytvub
zmekbicruqgd

cwnd
dwnc
dcown

aerds
asr
vraps
arfgson
xscrau

owpihungbxfvql
pvontulxsbiwqjrgczkf
vdmhxbgunplewiqyfo

xq
ix
x
xi
exl

jckv
cknvwj
ckqvjd
qcjrvk
qcvjrk

oelmztvsjfkdaquwgb
swgqozmadfklbihxetuvj

wmlhcndgfj
dvgojfhlnscm
xbgkertlzmyhfncdp
lfgwmdhcn

ylxpvqawm
vxqwlpyma
waxmlypvq
vxqpyalwm

ylrpqkzda
lzfdkpqray
zagdyqprls
rztwihlaypbednoq

xtdvrwmqfylacokz
odrcyqkzmflwxvat
qomxsptajeyczkdlvrfh

wms
msw
smw

jviyckehx
jykczevi
ceybtkjiv
ejhvkiyc
vceykji

a
ap

ohgqctumnfy
qyofntmhjcxg
lkzmqdpcgtyof
toqjgacfmy

lfyzxtmdvehroupbsq
krmdvzqetfjiguobhxsc

koudbxpeaygwnsfqzl
jxqnowpuvkfayse
raysekchowuxntpqf
ekaycpfowstqunxv

zueald
mkcgpniq
ueoyfhtbawl

ynfdh
jdynh
xbdvm
ad

vaigbf
aibgvf
iaybvgf

rglhpjedmnkczwsaxvuyiftq
sgvncpmqrlzdykjoiewxtuhfa

thoirlzbakne
zfsj
ydzsw
z
wxzm

yxnumzostgjea
dfcykpltobeg

hltvqgopwrbakjmxy
otanfpdscqkmwg
fkwpgaztoumqn

zeflkcnvpojytshxgia
xycazlfokejnhspgmvtq
anytosfkzehvgpcjlx
evbcxadzysgophrfnulktj

kvdfiewxtyq
zjynrgp
aoyz
aoyhsm
uyobalc

rfk
fur
fnrx
mfr
srfjab

jrmoskacxpvibhftgnlywuz
tpyvrloamuchkiwfxbgnjz

jdtmvinzkoflgquha
ewkisqucopyx

bthnz
rkujdylnxw

wlciqdhptv
tqsugawvoc
vcwqt
twyqvc
wcuvqts

rxzgyqui
gzruiqyx
yrzqiugx
xgouzylqmir
uyiqxgrz

xmbngtwkzfv
djzsf

qvhtkcrswxnzimjdabl
cskjmxtqbiofnhl
jhyqxlukicmstbn
bgihlkmjsncxqt

dftriecaujqygkp
dpitkrqgaefcjuy
ctheqrfyigpjukda

pxcsqf
hxyfsqc
fcsvxq
xgfqsvc

fwrz
vkpeischdg
zojmnw
yuj

biydmusjhap
pxdvufaimohgrb

eyncz
meyzc
gecphy

nqjp
bxcgur

qxewsoa
qvwxgclo
iqpowtxmn

qwhbyirsmvkfjzpueact
camfypikohjurvqtswbe
hisewcbvjoqrmtkfpyua

zmnvldi
znlmdvi
mvliznd
mldvizn
nivdlmz

klejadniyugvs
raeuygvinldksj
dyjnsakeguivlh
ulsnyhgjiakedv
kalgednsuihvyj

qtgfmuipbkrsxn
wfucprkgxlmq
macgfhpurwqkex

h
rn

ybj
yjb
biyjs
yjb

gqsukyfdrzopbatmjvln
hrpltybxqugzkdvcesimfjawn

ewfsbyzoxd
ozxdbyefsw
zdbwyxsfoe
xeofzswydb

mt
f
jb
wqhg

jbnqmogsreyku
eonrkbsyugjqm
yqokjreuvbnpgms
ubgqomjeysrkn

iqbxvszjmgnalfpu
pixmsbnavzujflqg
kqismpjzaxvbgcunfl

xosqhlgpm
sqohbmwgy
qchjsikuo

lcojtkr
crkotj

iaufs
fvoau

pfgzydt
ztypgfd

fp
f
f
f

kspetr
pjrosvkx

wvcexodslhftbnakimgzjy
mztdslovfixkhjyneabcwg
gkiwcedhxtnomyfjlbzsva

qphgrcf
mhdz
ih

q
q
q
q

ztoneqhcgjrwdvf
tienuyqajhmwbog

bploycnt
lbnoyv
ylnoeb

drwzouehkbjlfyingqcas
wzvjcqgrmasyopbhtn

azn
na
na
na

bz
bz
bz
tzb
zb

vusoma
smaouv

sglxdivzmbohnacjup
pudzbmivaxnhclsjk

vkph
suw

gyrhscio
hiyrcsgo
trhysciog
yicshrog

zdkynwxqigusb
lkopzrbdwfncx
wnmhzxdtvbjka
sibezwyxdnk

pc
c

ocyebmjsnxrit
yijstbmgeoxr
moxbritsydej
jmosbexyirt

bysfraicxq
baxqfsywirc
raxcbiqsfy
bsyqcixrfa

iwdgnztphbkocqvsyel
zeosypvkwbdhnilcgqt
bzhkwnclpyvoqisgtde
pfgovzctdwqelhbnyksi
tywvlghspczidnboqke

rxwadjshp
fwcztneu

dgkbnmrlhcaivzojuyq
muicgxvkpwfzqjnrhlosyb

p
p
p
p
p

a
y
y
y
y

adw
a
a

wsvugr
chzpwxy
qipynwbj
ejwbanfxo

kdhenitqpzxjams
skxyimzhpqtnd
lytjmoaqixnkszphd
pzhdnbxtmqeski
fwpdhknrcxsztiqmv

jnkitbvq
vnkbjietq
iqjkntb
ktdznbqji
jqnibtk

qyxkdjzhi
khqjtbeyridz

smwnoyl
nqobwylsm
lmawoyns

ju
ilu
qhwnr
l

gftdncbp
btndfgcp
bpfngdct
npefbgdtc

mtqruap
uprmqat

yum
uym
uym
umy
ymu

aymdqeu
wesmqkdfuj
qvduamey

juoxaevysk
yoajxs
joaysznx

nrhdifpxvk
nvwzxrpi
panivqxrle

xcbqhjsafrn
zpgimltewvu
kzyidto

qpymaniv
knipyw

uhsgya
qsegy
wfbzsjckg

ilmqn
lmiq
qlmi
ilqm

b
cb
b
b
b

qiu
laru

l
j
j
l
x

kpujxtyerivfgomsdhnlwzc
ewacvmrdjtlnykhxuszifbo

hcotvyqlzkm
ytmfozklhqbn

wxkgcidnpybfutvmhz
pkuhzmxgnfycdtwobi
uwgnvmpfyzkcxthbid

qeplrhsifuv
uhflevspqri
lihufeqvprsa
ehfqiuprlvs
phivqlsufre

vitspgyendmzbuo
dvnsmguitpboyzea
tmaubsexvgolpydnzi
bmieuzvpdotrgsyn

hwxjumrlocdt
hurtjwdxplmoc
rojlutxwkdyhcm
locwmjxrhdut
dcrxjmohtwul

zrnh
fmnxgwbq
ivunasyd
dkhjn

uhya
yhuw

iuexp
gm
zkhyg
o

pglyfuieczhtw
hyicguvpemtlfd
tlrhepcfzyuwig

eqgkufbpc
kbuqci
qbukc

vpfkqoiemg
mkeoqipg
zogwipmkeq
iopkmgwqteu

nzorbiu
zuqbri
zgueirbj

lsujqrcktmnwxi
oqnfkzsctlbjv

elhxw
xwehl
wlxfh
zxwchl

qkzwgpmlv
mvqphjli
mpqrhliv
spvlmq

vjuarpbtxenhks
pdeixalsqunbhvj
asbuhvpjnxe
vbphxujensroac

ocsnjwthqidua
qozmhuandtcjiws
hzsdjuqnwtixacor
jqwxhsodcriazntu
uadcwhqtlnjbosi

exjimgzntqwvf
efdzgviwtn
znoefrvcwibp
tifykegzwvnj

ojfmzaxnctuhgi
oichzukfjmgtnx
ofxucjlnghmdite

y
dtj
fxy
nm

buehacmtso
stmobucae
ubmtavesco
btuypecahsmo
ubsamotec

bd
d
d
d
xwda

v
va
v

drebgljwqhypumaifx
juradeolqfbwmihnxp

zshwtgqvxk
hsqxgkjtw
gkhtqwxisra
ktbjgxwqsh

gklyvoszr
zgqrysov
vogzsry
lroyzvgpsk
jrzydovgnisac

ltdkaw
fpyqjsbwechir
wvmz
wtok

cbwqltxjfpigahuond
ckvjxsqe

mclzokrbiut
ktmoczbulr

zsavj
jasvz
zsajuv
azjvs

hnamj
hre
cjvqwkn
siytlfzguo
wm

ba
ba

dsohcqbz
hdqcsbz
budzh

dnwhf
s
vpt

v
v
v
v
v

zvfbpucdkmjqeio
adtpyxrmgskhwbf

zwdpfscunaqmligo
qawystolvmjhxgbr

flindhuycw
ycjkpshfwitndm

wm
wmg
wm
msw
mw

sgmzqpwlifcryjabxend
namrfposzgbqywcixelj
fxrblzajswpctihqygenm
zrmxisnfajygkwlcqebp

dgu
dug
imuqgd
dug

gtwxdb
tgxbwd
dxwtbg

jolnaczkdfbsmu
rlatnfdicmuhe

jzoqvxg
vzogjxq
jqzgxvo
qgvijozx
vgqoxzj

vruspmhlewokn
nojmeblhuprks

tfrh
ihr
r
rehmt
xpkuysr

lrgveotsf
ovfsret
vtesorfk

v
v
ov
vn

yxfzesqgr
yxqfsgr
ritshypvfq

k
k
k
xk

tfuivc
icufl
ubfic
iypucf

foknbeaujiphd
xgnpdkhaeoujf
hnwaeofpmyvjkudl

ynfoewkix
kywxndsf
wnyfqxcki
pzxvyabwurlkfn
hsxnkmyfgw

ycxspo
yxbpzsco
pcyxso

ri
ir
ir
ri
ri

ngeojlwvkcymsdu
dunjgkomvlwy
vkwdomlyjung

iswlyvtgndqkbcopjxmferuazh
ludyrjxgqswhkmofpneictzabv

h
h
h
n
h

nwmulejyqx
ydulhfmnxac
mgyxlcpnudo
iuxyrlnmtz
xnmidtysul

ipfdrqs
iprxdavg
cyinpkdwrmhjue
xipadbrzolg
ftropxid

vexqt
xqetv
emtqxbvk

hzkifwmxeonu
pcaygtldsqvb

dyv
veyd
vyd
vdy

txhdkerybmua
afhyuxdkbertm
cyuxrewtbmdkjh

fpvxgdki
pxfgdvki
kfvgixpd
dgvifxpk
vtybfxskgrdpin

sjtbzwmuxcnlp
jsxnbwzhcmptlu
wzusacxbjnmplt
qiwkszmjptxcnulb

t
d
t

osiz
dfr

vjnihrbmfkl
bmylxvnkir
snirvcbkml

onatgjeqdfu
tofjugqnaed
njfadqwugoet
ojaefunqtdg
jdngfteuqao

lfjsnmywoari
imjnyarlwof
aiolyfjwrmn

lstramdyop
sdrtlepnoyam
yplsdtroam
rysuomdpalt
dumlsyaotpr

gfxlnvejorkw
ruoljnfxke

sjyuobmlgzkit
lmkgyrtojduz
znpglmatuqekyjo
gulvozkmytj
zsytjlogumk

ktehudzxrmaj
vqjhmydruxk
ghnmxcjkld

pnhizmdws
ptceojmgb

hvfrokunzditcmexlwjgasq
ahtsizfglkdecqnymuwjx

cgmrlkpzu
nuwgm
amug
ghmu

ykih
ikyh
kiyh
iyhk
kyhi

mvcjruf
mfcjurv
frmvucj
rucvmfj
ujrfvcm

rzvug
ruzg

pgdqucvliaekwy
vyilsqcukagew
cylwivaugeskq
wiquaecyklgv
quocakwyegvzlri

j
j
j

yafuivm
fmzyivua
mvayjqfbieu
vymuafi

sbw
bws
s
sj

c
nlpkz

jhiyszxcpumkdregl
yceuljzxdbspmgnhtir

lvstgahuqycwempik
htcpdimwlev
eilhvtwpcm

ocsrqubwnlhemxpyfjkgd
mslzhunejpfdwryq

fkslizewn
lesifzknw
eknizfws
keznsroifpw

wztapg
zcaugetw
wazcugt

enkw
zyekmcj

rqsdx
xqrdbsf
xtdusyr
jdsxabrv

ildhoswzeb
oedzhlfb
zohldbme
ehldbofz

glzpahcrsxoiq
dqaxhzces
gzanixv
bzaumfxk
oznxat

t
t
t

dponyflcbgzu
oluycbzedngf

xrcilmyqzhf
ndfxpekhtlba
fowjxlqh

abuvz
uzab
uazgpmbd
abuz
zybua

xkigl
gkxli
lgixk
kilxg

ksyt
hv

gaiwkqjmf
bhivlayzgf

tpxnhbkrcziymuqjwsagfvol
gfxywqtikanvorulmshczjbp

dtplfzajrcug
dutapblcjfgrzi
uztnapflcjdvrg
frdguctzljpai

zfuersgq
grfuesqvk
sergaukqfy
qfsiutrwcgnejob

vb
vb
vb

muxydwqtzv
jnvxmfyetdsu
xvdmytiukgr

xh
jha
bnurvpy

vakpuwesyqnr
ksypwevi
kpvsyhwj

nehqwmxt
zswvrla
wbocdzfgs

toxqdwzhvrpbfl
egcnsmiky

rtzujanlky
kdsatijn

yxms
xsmy
osmyb
sym

rbt
tvbaru
bwrst
ritb

vziqwsjmehdyocntuxbl
glqjxndpmcyakheuvrw

bvldiakteryfznq
qebljwgvdoacszk
lzxvqeapbdkyn

lykqpt
mqkdlp

jixerawshokm
jiwramksehxo
ekxmirwaojhs
iearwhokmjxs

m
r
r
b
r

rvblioszxngkad
wbogjpsivkxfn

jpcwsnuxkriblehvfyd
jnyxehusfvqablrcowidkp

amws
ads
as

ahjfgpq
ambsfvh
sxihbfruacp
tajchyf
ahodnflkew

njayect
ywfreujv

cnfayqmdpie
tcqixpvzdaonrym

qnlofvpikj
wue

njylcxwbksdrqa
fwaqodzxg
xudoeqmhaw
xhiadwfq

hqu
qihu
huq
uqhcr
xhquw

dimvrngsoeazpkfwyctj
groanpvszyemkfwjtcid
jvwonsraytdgemifzcpk
tdsecwafikzongmvryjp
zelpgjotxyqscnidwvfuamrk

khopamsbet
mtoqjbwexfpk
eopdumbkty
pmkoetb
ogptnbkmed

segnxfbtzoq
noxbkzfsgt

dhfozyqasempnlciwbkrt
owezgcvudlnhmsqkxp
pswqnomzldgecxkh

ptogxfrdwz
glkzfxrow
awryscxofzvm
wohrtifbzuxnj

czemryisbjdptxq
tpcbisqyezjrmd
ybjpctrmzdsqie
zsqcmypibrjedt
ztwcbpsyijqrdme

atwukjeorighvfsn
fjohkugxzvnqwmtsabe
vuwenfoagktshj
lwdhiauepytcsgokfjnv

cylvzghwmjf
lwfvzgjyhcm
fzgyjlmcvwh
vwjygmzhclf

ab
mb
bh

fjgwbhceioxmsz
zejxhbmtocgfdw
eblapcygxwvzhofmj
gmxfhjzcewbo

fhpqtjzdeyluwnogm
duemozjhlpqnwfygt
zfmewnhqdpgjoytul
eofygnuphwjmlqztd

wva
oevfabqwd
kvawg

gxprowhvytbiamfcjesu
excvhbsujfatrpmwgi

xylsrgiecwzpaoj
vbscjyqre

pjcltyis
psiclt
cstiklp
hisapclt

lq
v
v
vq
p

m
m
m
m
m

fzhuvrqsonwdcmgibj
dqibvhgfrmnjcuwsz
gkfvsznchrybwilejqdu
rdibnqwfzghucjvs

juqckrl
ojlhsyfcn

jngdhxfesqzwcptlmvb
tlpyhvnoxsagwmqrdzcue`,
      anyoneSaidYes
    )
  ).toBe(6310);
});

it(`everyoneSaidYes`, () => {
  expect(everyoneSaidYes(["abcx", "abcy", "abcz"])).toEqual(3);
  expect(everyoneSaidYes(["a", "b", "c"])).toEqual(0);
  expect(everyoneSaidYes(["ab", "ac"])).toEqual(1);
  expect(everyoneSaidYes(["b"])).toEqual(1);
  expect(everyoneSaidYes(["abc"])).toEqual(3);
  expect(everyoneSaidYes(["a", "a", "a", "a"])).toEqual(1);
  expect(everyoneSaidYes(["tr", "rt", "tr", "rt", "tr"])).toEqual(2);
  expect(everyoneSaidYes(["fdrhu", "gwuksvro"])).toEqual(2);
});

it(`Simple test 2/2`, () => {
  expect(
    getSumOfCounts(
      `abc

  a
  b
  c
  
  ab
  ac
  
  a
  a
  a
  a
  
  b`,
      everyoneSaidYes
    )
  ).toBe(6);
});

it(`Solution 2/2`, () => {
  expect(
    getSumOfCounts(
      `tr
rt
tr
rt
tr

fdrhu
gwuksvro

tesnouwyrdf
twofuspcmvenh

cnxpsmuqiaw
cxovminqpawus
qwaxjmupnsic

anpskchzojyeguwr
soqauprxzgmycvef
sorplgezycau
ngrecposyizwau
ayeptrilsnguzco

mvwcl
vlcwxm
uwcflhpkjor
blnvwtic
wcmzl

hyvowmqzixc
lacsrjdyxiz
fyczpbxlti

qxjhrgefbkm
eqrgbfhjxkcm

catsrkyjulmfzvixe
teyxvimulfkczqrjsa
xrtlyaqemsucjzkifv
drjlmncsiftxaeyzvpuk

ocgrnldhja
jicwgntvuhk
cxgajhln

hczyoipegqwsubvxma
zapvqdbyeiulmrsx
qmuxbtispezvayk
ibpqvsxaueymzr
jpzavtxymusibeq

iomtep
obmfpitqde
hrmoiept
iprtomeh

dvqtfm
vfqdmt
vfmqtd

svacthonwbmxiyukjr
rmtjsowahbxn
wopxrhjdantsblme

kunw
nlar
wson
eranj
zfpignmvxqc

mjulrb
mjrlbu

sjdlfgertkv
lwvfoaxjknuh

usapkhx
afpuhsx
uaphsx
haupexsf
qhmryxjuaps

mpjfb
mjbfp

zbdpmvijwyxkgroshe
yjblgvprhmoszfwdxe
dyrjngwpueozmshvbx
pevyiohbdgxrjsmzw
ybmexhpidzsgojvwr

obcqvydzetjsuhgif
yvdqgeithsfjzucob
jfqzsiovutgwychbed
qizcbjpshyretdgoflnvu
hbefytgcvdzuaisqjo

avfgq
gq
lqg
qwgr

fekswrjbzhyng
sfwnkybhzegjr
hkgywzefsnrbj
zfkivbjeyrwnhdgsx

ztusijyhclvowf
cwvjzuflhsyito
wfjuyholzcsivt
yfuhovjsitczwl

rvp
kmihlj

ocmqzuwjtan
vbrlcghznqxead
acngzq
shiypqlnckzdva

evypwdushz
imabuen
uqgjekm

d
p
p

vktlzey
jucbqh

cwzepoasyivtufdl
cturlyvoaipwznefhms

brut
mwurt
urt
urt

anpqzltgbw
yajxbermic
gwhtzlvquandbof

tcjafrlghixm
hltgkoxcrsqnia
echylaxrjfgti

etqhafdzg
rmzyaefcqhdo
ehgtdqfzal

eiplbwvqhgdrykmjzf
cnotkxsvzlu

juszboldxphtqywkv
lzspkjmgqhviter
hsqkpzitvlnaj

kx
jxrmousta
cx
qxfw
hxq

vezygtuhqmklcb
cmxrlzjsgphi

wdvigexqfotmnsbc
egwibdomtvcqnsxf
sxtipmcndowbvfeqg
tcdiefsqmgvxbown
ceqwvtifnbmgdsoxz

sgtcvxmiqynfzehr
yvhawlcmtun

bncirlgwyqudh
ybzlqwdangu
fuqjekwynmvtgxsd
wqydnpgbuo

ojkqnxidugfch
rwoqnhmbxjztapfdu

gzlejskuptnb
ekzlpujnbstg
lutzbpjkensg
nktlpugbjzes

omhqnxljiwkpvzudbtreay
yqiknzbxvormgpjualtfwde
jowmpeaqbxltzvdrynuki

atdpobxsvic
wzcvlbuotyxreqspa
aotbscvdxp
vipcabotsx
potaxbvcs

jgzstxmyknhvd
hbnjzgvmxkclsytdi

xljyqrtu
uqlyrxtj
rytlqjux
tyxrjqlu

lmdjczyw

fcdqgipmehturbnwvaoyx
qkaruovhfscxglbmweznyit

znqixgs
zmxqiwsng

zvuh
hzuv
vhuz

jy
jy
yjh
yj
yj

rtcxjbpgs
zpgrcxmajstbn
rhpasbtgcex
oyrfsqucgdwxpitl

dcsyezmrvquixwpogakfjntbhl
anovfcsitzebgxdkpjwqmlyhur

ywaflnbmov
blwoynmav
nmblwayvo
ymawvlnbgo
lyvobwanm

xuceq
qgxvkwm

yqgcviulxpjz
yuqptgcavzix
gyvxicuzpq

lpufgwaebhtckdriqy
locrabdyihufpwgqe
lcdqfeubwrgaihpyk
hoclfpgubwqdraiey
frayspqundziewcgxbmhl

a
a
aw

ceqnfpyhkwaomzdlrigjutsv
qdsjlwiobvyknxzuechpfgta
iyhflgtqakvwedpznjcuos

viwbayqdumknsjzo
dzmuinwqybskjotla
suzjnbkdoqawmiy

iuvdjaxn
vjdixnau
vnjaxdiu

tqg
tqg
qtg

vyncxbksgorfaijzdeqhtplw
dxjyesngbrotzlaqckwfph

tgsqcmzbirkoapy
oayqpgrcstm
asrocipymhgqt
vacyxomgrsqpt

odvreuapq
deqropau
oruqbdeap
uordpeqa
uarodepq

cewlri
il
bil

pfsmjcerdb
cgbmjerdsp
gdbpcemrjs

olnbwczufamjsrtipvkqyhxg
hqbirpwczgoualvmfktsjynx
wvkypxhoaujrlzbnsiqgctmf

xqiawmgh
agbxr
gsxab

juqhvc
vqjuhbc
uhjcvq
hjcuvq
cuvhqj

mkntuosgpawy
mjpgvtaysfrck

l
l
l
l
l

a
ze
w

zp
lp
p
p

g
ysbel
iqhxtnavjw
pczsm
dfkc

ucjs
eszuo
lseugi

xiubmhvoejrfyp
vrepyojmihx

xktarvmjgzfyhpioldecq
elhdmcripxqfvotygjk
mcyfrvgtlhxpjiqekdo
rlvodgxtchfipjykemq
dxcvlrhmpyqkitoeujgf

wslomfkcbvq
qcsowkvbt
ywcxhgjsnkoqpze
amwsucfoqk
oqiskmrwc

zepulif
lijefp
plibfyre

dnb
b

hvu
ujobdmqsna
ulwt
uflpec
zruk

g
g
g
g
g

kmugldxtea
jgkotaelmux
txkomeluag

cujxkyze
crmgxjkzy

bzutydn
nztybdu
ntzbydfu

dzbjyeap
rxgpyjqmbd
odhbpjy

rchkvqu
jurthlkcqs

p
p
p
ps
p

arlofnhbd
rhadnblf
jhnrxldaf

ztukfgr
gufkt
fdktsujgy

kjyhd
dcyj
jyde

dxvgzptbfhniquylok
hlnzpgfuvxktbydq
yugtqxdpbnklhvfz

aser
sra

ejkht
doevsaktyfulpjhxzrb
gwjteiqnkch

eqtwvaxkhjysf
sahmxqevjtc

gyeivjsdrzwubomkpaflt
wmlpbuaojiykvzrfdste
oueiabrdzyfsjmklvtpw
rfteozmijdypwabuvksl

nqiycrwsjgdohmkvuzl
ougqkdscrywnjihvl
owsvkugqldnjcyrxiah
dvhykqlnusowicjgr

kurqvjnbgzxocwhlfeditys
toxuhcldgybfesiqzjnwr

dhkloqwpmicyzva
kmwiaplhty
lmuieakwhfyp
saklihpwyfm

tuxlhze
flni
adjcpbymrsk

umzqhct
zuhmqt
mtgzohuvq

tzuxk
ktxuz
mputbxokz
vxztku
txzuk

ogs
us

oarnvdkyuz
fpeqwtibhjs

qcoyuawvktbldpzermfj
cjyvuzkpqrwbftemodla
tabdoukcrlyvmfpjzwqe
fytknqplmduzxhbrecajosvgiw
qfvyerdktapobmwjzulc

gfyznr
vnpoi
hdnwaqmejb
ctkfn
unik

zvactkmwqijosfngler
fgosnalrvwkjiumtcz

cflqhz
ughqcfl
mwflcqh
hzqlfc
hclfq

vhs
hvs
vhs

fisvlybdg
bciulx

vbkoruxqcgp
qpzrxubckg

rblgszhvua
vsqrbuozhjg
trzushvgb

qkauenxhwmtrob
nefzodwmysqplvbtxhk
bxhemunqkwot

eipjy
pei
mfweitdlp
ipe

mjuy
yumjc
mjyu

hcaivxjntwopfbud
dxcajbzvpinofuthw
xwubvdhtnfpjicoa
ipahvxtnobjdwucf
pdajicbovxhntwuf

uxtbzyqoijcgnkrps
scuojrikthyzbpnq

rdmnztsi
rumthsozjdin
mistcxnfzadry
qzrndtsim

ki
kix
ki
ki

luihqbcygnpvokrjwxa
qxnjklouahviycrbpgw
ryhqvbkjxanpwuolgci

ifmy
mixplfsyo
yifm
fiym

iojlkgqnfpc
ixuqcpfonmlyjk
ikcjoqnplf
kniwopcfaqhjl
pwqfcnioargvjlek

izpbgvruchjtsyxf
tiyxeshupcgjkmdnb

wufhb
hwubf
ahufbwk
uwbfh
hfbwu

wrbsjcniyaeqvdufzxoplg
edjzpltwqihmygxoca

yag
zyawxk

b
v
b

jmxvwdoc
cdmosxjrv
oycvnjxmbdkar
jkdmvcxobs

zmojfdc
ctxmj

vkpaliosgnqejm
pcqoinkeljmvasg
nvbzjlopmgqeasik

lezonbtdpxk
euiohtlpnqrxvb
olpgetfmnykxb
tnlopzabxyeg

tecjf
ewv

ehysltzaoxfwcikgupmbdj
oditawxjkeushbmyczflpg
ikycstwfjdbxpegzauolmh
ayxchoitgufzewskbmljpd
xdshbltjzeupfcymigaownk

tbkhy
wuejmqdz

um
uml
wmu
yum
um

goidsnkyrzpul
gexkdyhilna
kiydnzljg

vzespaw
svqak
vajs
sav
basjv

negfu
negfu
ungezqf
wufnge
wunegf

p
n
n

nxtzpvhjugs
knlztuhgpv
mehgcizytvw

l
l
l

tmwjsoiqfxbae
ivhdxeofspjumabcrtkwz
mbneowitsgfxjqa

hr
hr

jyrlf
ufcqr
frn
rzafy
rkfbpw

cdvnobw
kovwndy
vwnod
vadbonwl

mqbwikvtlnauysporx
jxyzmnabiecvtpuo
guxhvmnyocbpait

graltxsdfnbeuzc
vpqgosmjhb

mvok
movk

wevqpmrblnfdkcja
aprbvjwixcldeyf
ecwjdupovbahzltf

nwdjv
jwvnd
nwdjv
jdwvn
dvjnw

plzqokjdmehc
kzljpqohtecdm
peclzqjwohdmk

pmf
puwmf
jfmp
mpf
fpm

sgrf
sgfr
grsf
grsf

mk
fk

ldyqkn
fknqzvlsd
tlnkydq

yjtwhgckazeslb
imodapxfq
avouixnd

gzjumhcslyfkwnbqx
qrlniepavtbdo

thosbezjxwcumnyrkv
wrynhxmcuevqizspatbok

pjmwys
mysjpw
ysjwmp
wmjysp
ywmjsp

fm
mnup
rmzid

ir
w
dwl
bqsacgumfzpj

givl
u
pwu
wj
m

j
j
j
j
pj

mybwe
uwmeby
weymb
mwbey

zfsbjpg
fzjs
vfzscjk
sfzj

yv
vy
yv
yv
vy

roydftqkjman
hrzmgsqbfuvyx

lanexhgcf
ehmcxagnl
xaglnwceh

guk
j
j
i
yr

wfhx
xhwf
hctwbxf
hxwf
hwxf

uzlheoysartmnwpqi
zrjqlaiosptuyw
ipatowrsyuzlvq
pajsyiultrqocwz
qtyciuzlpsorwa

fqiehbrjgpzla
dtqzbhloanj
lmwbdjqnxzha
wnjqvzuhladybs

fekzbo
hfbzeok

upjz
ua

fcgzitupjlom
mlzfitjpoucg
ljzgfpcmitou

wjavhtfgulxbs
jlbhaugwesftxv

abulpizgs
axyszlo
hfrdkqjv

pxnqsbefvijroumzckwt
cxmtpbjfnesuqowrkvi
sfcpjunwoivekbrmqxt
evupsfnxrbmjciwqtko

xriqnwvgusceydhmjoalt
jdvrcnmpsqayugewhio

chyd
syphcr
yhoc
ych
ych

qye
wqoe
qzue
qkevy
qe

gehqsfybktionvlazuxjpd
ginvqthklyspxbfoajud

hpblkjfyguov
ywvhlpgbnc

xoeynm
dtojpzgwbyfne
hnqyoe
eymno
ovqyen

xnrlksc
nxlc
nvwjmxc

xuoyb
yoblx

gzdx
xzvd
dxtz
duzxj

mxpzaovctejy
xlitevzyk
txvgfezyrkh

zh
ghxk
dlaopuj
f
z

kptczhbqrn
cqhztbpnr
fqbtrucpzhn
brthnqpzc

u
eqrwi

cwoarjgxesbfpz
erxbtojas
dajsroexb
pgedrabjsox

mjkviqy
mkqjyi
qmykij
qmjhiky
mjkviyq

hqo
qhjr
xhjqtrw

lfaxc
lxzfc
czxfl
clxft
fcxl

umoecsdkqji
cskqpoudm

qubm
muq
dmiual

xvbgm
mvxq
mvlx
vmx

p
pvg
p

uvckgbzxdytoams
weqcnkfjmihprx

wgyiqkxfpzlatbousrvn
zfqlgwktyivruoxabnsp
fbtragkovyiwsxnlqzup

xonjzkrghmdyiu
xduizjmgronhyk
mhdgryiuzknjxo
dkrxougihnzmjy

anyjhkobzplrqfg
gfpknwqdhsxacjmoblz
pkflqubgzanjho
hyzgunfviqobpjakl

nzs
ipu
egfac
us
s

ixskmrynfbctozadew
lsvnjyumfhzkpbg

goqdapfivwkmexb
swiqafmdoxgbekvp
pmkbaiqcewfvxdgo
fvoepywahjqkdzgibmx
wigfkqvsebpoxadm

ornhgxjqkytvub
zmekbicruqgd

cwnd
dwnc
dcown

aerds
asr
vraps
arfgson
xscrau

owpihungbxfvql
pvontulxsbiwqjrgczkf
vdmhxbgunplewiqyfo

xq
ix
x
xi
exl

jckv
cknvwj
ckqvjd
qcjrvk
qcvjrk

oelmztvsjfkdaquwgb
swgqozmadfklbihxetuvj

wmlhcndgfj
dvgojfhlnscm
xbgkertlzmyhfncdp
lfgwmdhcn

ylxpvqawm
vxqwlpyma
waxmlypvq
vxqpyalwm

ylrpqkzda
lzfdkpqray
zagdyqprls
rztwihlaypbednoq

xtdvrwmqfylacokz
odrcyqkzmflwxvat
qomxsptajeyczkdlvrfh

wms
msw
smw

jviyckehx
jykczevi
ceybtkjiv
ejhvkiyc
vceykji

a
ap

ohgqctumnfy
qyofntmhjcxg
lkzmqdpcgtyof
toqjgacfmy

lfyzxtmdvehroupbsq
krmdvzqetfjiguobhxsc

koudbxpeaygwnsfqzl
jxqnowpuvkfayse
raysekchowuxntpqf
ekaycpfowstqunxv

zueald
mkcgpniq
ueoyfhtbawl

ynfdh
jdynh
xbdvm
ad

vaigbf
aibgvf
iaybvgf

rglhpjedmnkczwsaxvuyiftq
sgvncpmqrlzdykjoiewxtuhfa

thoirlzbakne
zfsj
ydzsw
z
wxzm

yxnumzostgjea
dfcykpltobeg

hltvqgopwrbakjmxy
otanfpdscqkmwg
fkwpgaztoumqn

zeflkcnvpojytshxgia
xycazlfokejnhspgmvtq
anytosfkzehvgpcjlx
evbcxadzysgophrfnulktj

kvdfiewxtyq
zjynrgp
aoyz
aoyhsm
uyobalc

rfk
fur
fnrx
mfr
srfjab

jrmoskacxpvibhftgnlywuz
tpyvrloamuchkiwfxbgnjz

jdtmvinzkoflgquha
ewkisqucopyx

bthnz
rkujdylnxw

wlciqdhptv
tqsugawvoc
vcwqt
twyqvc
wcuvqts

rxzgyqui
gzruiqyx
yrzqiugx
xgouzylqmir
uyiqxgrz

xmbngtwkzfv
djzsf

qvhtkcrswxnzimjdabl
cskjmxtqbiofnhl
jhyqxlukicmstbn
bgihlkmjsncxqt

dftriecaujqygkp
dpitkrqgaefcjuy
ctheqrfyigpjukda

pxcsqf
hxyfsqc
fcsvxq
xgfqsvc

fwrz
vkpeischdg
zojmnw
yuj

biydmusjhap
pxdvufaimohgrb

eyncz
meyzc
gecphy

nqjp
bxcgur

qxewsoa
qvwxgclo
iqpowtxmn

qwhbyirsmvkfjzpueact
camfypikohjurvqtswbe
hisewcbvjoqrmtkfpyua

zmnvldi
znlmdvi
mvliznd
mldvizn
nivdlmz

klejadniyugvs
raeuygvinldksj
dyjnsakeguivlh
ulsnyhgjiakedv
kalgednsuihvyj

qtgfmuipbkrsxn
wfucprkgxlmq
macgfhpurwqkex

h
rn

ybj
yjb
biyjs
yjb

gqsukyfdrzopbatmjvln
hrpltybxqugzkdvcesimfjawn

ewfsbyzoxd
ozxdbyefsw
zdbwyxsfoe
xeofzswydb

mt
f
jb
wqhg

jbnqmogsreyku
eonrkbsyugjqm
yqokjreuvbnpgms
ubgqomjeysrkn

iqbxvszjmgnalfpu
pixmsbnavzujflqg
kqismpjzaxvbgcunfl

xosqhlgpm
sqohbmwgy
qchjsikuo

lcojtkr
crkotj

iaufs
fvoau

pfgzydt
ztypgfd

fp
f
f
f

kspetr
pjrosvkx

wvcexodslhftbnakimgzjy
mztdslovfixkhjyneabcwg
gkiwcedhxtnomyfjlbzsva

qphgrcf
mhdz
ih

q
q
q
q

ztoneqhcgjrwdvf
tienuyqajhmwbog

bploycnt
lbnoyv
ylnoeb

drwzouehkbjlfyingqcas
wzvjcqgrmasyopbhtn

azn
na
na
na

bz
bz
bz
tzb
zb

vusoma
smaouv

sglxdivzmbohnacjup
pudzbmivaxnhclsjk

vkph
suw

gyrhscio
hiyrcsgo
trhysciog
yicshrog

zdkynwxqigusb
lkopzrbdwfncx
wnmhzxdtvbjka
sibezwyxdnk

pc
c

ocyebmjsnxrit
yijstbmgeoxr
moxbritsydej
jmosbexyirt

bysfraicxq
baxqfsywirc
raxcbiqsfy
bsyqcixrfa

iwdgnztphbkocqvsyel
zeosypvkwbdhnilcgqt
bzhkwnclpyvoqisgtde
pfgovzctdwqelhbnyksi
tywvlghspczidnboqke

rxwadjshp
fwcztneu

dgkbnmrlhcaivzojuyq
muicgxvkpwfzqjnrhlosyb

p
p
p
p
p

a
y
y
y
y

adw
a
a

wsvugr
chzpwxy
qipynwbj
ejwbanfxo

kdhenitqpzxjams
skxyimzhpqtnd
lytjmoaqixnkszphd
pzhdnbxtmqeski
fwpdhknrcxsztiqmv

jnkitbvq
vnkbjietq
iqjkntb
ktdznbqji
jqnibtk

qyxkdjzhi
khqjtbeyridz

smwnoyl
nqobwylsm
lmawoyns

ju
ilu
qhwnr
l

gftdncbp
btndfgcp
bpfngdct
npefbgdtc

mtqruap
uprmqat

yum
uym
uym
umy
ymu

aymdqeu
wesmqkdfuj
qvduamey

juoxaevysk
yoajxs
joaysznx

nrhdifpxvk
nvwzxrpi
panivqxrle

xcbqhjsafrn
zpgimltewvu
kzyidto

qpymaniv
knipyw

uhsgya
qsegy
wfbzsjckg

ilmqn
lmiq
qlmi
ilqm

b
cb
b
b
b

qiu
laru

l
j
j
l
x

kpujxtyerivfgomsdhnlwzc
ewacvmrdjtlnykhxuszifbo

hcotvyqlzkm
ytmfozklhqbn

wxkgcidnpybfutvmhz
pkuhzmxgnfycdtwobi
uwgnvmpfyzkcxthbid

qeplrhsifuv
uhflevspqri
lihufeqvprsa
ehfqiuprlvs
phivqlsufre

vitspgyendmzbuo
dvnsmguitpboyzea
tmaubsexvgolpydnzi
bmieuzvpdotrgsyn

hwxjumrlocdt
hurtjwdxplmoc
rojlutxwkdyhcm
locwmjxrhdut
dcrxjmohtwul

zrnh
fmnxgwbq
ivunasyd
dkhjn

uhya
yhuw

iuexp
gm
zkhyg
o

pglyfuieczhtw
hyicguvpemtlfd
tlrhepcfzyuwig

eqgkufbpc
kbuqci
qbukc

vpfkqoiemg
mkeoqipg
zogwipmkeq
iopkmgwqteu

nzorbiu
zuqbri
zgueirbj

lsujqrcktmnwxi
oqnfkzsctlbjv

elhxw
xwehl
wlxfh
zxwchl

qkzwgpmlv
mvqphjli
mpqrhliv
spvlmq

vjuarpbtxenhks
pdeixalsqunbhvj
asbuhvpjnxe
vbphxujensroac

ocsnjwthqidua
qozmhuandtcjiws
hzsdjuqnwtixacor
jqwxhsodcriazntu
uadcwhqtlnjbosi

exjimgzntqwvf
efdzgviwtn
znoefrvcwibp
tifykegzwvnj

ojfmzaxnctuhgi
oichzukfjmgtnx
ofxucjlnghmdite

y
dtj
fxy
nm

buehacmtso
stmobucae
ubmtavesco
btuypecahsmo
ubsamotec

bd
d
d
d
xwda

v
va
v

drebgljwqhypumaifx
juradeolqfbwmihnxp

zshwtgqvxk
hsqxgkjtw
gkhtqwxisra
ktbjgxwqsh

gklyvoszr
zgqrysov
vogzsry
lroyzvgpsk
jrzydovgnisac

ltdkaw
fpyqjsbwechir
wvmz
wtok

cbwqltxjfpigahuond
ckvjxsqe

mclzokrbiut
ktmoczbulr

zsavj
jasvz
zsajuv
azjvs

hnamj
hre
cjvqwkn
siytlfzguo
wm

ba
ba

dsohcqbz
hdqcsbz
budzh

dnwhf
s
vpt

v
v
v
v
v

zvfbpucdkmjqeio
adtpyxrmgskhwbf

zwdpfscunaqmligo
qawystolvmjhxgbr

flindhuycw
ycjkpshfwitndm

wm
wmg
wm
msw
mw

sgmzqpwlifcryjabxend
namrfposzgbqywcixelj
fxrblzajswpctihqygenm
zrmxisnfajygkwlcqebp

dgu
dug
imuqgd
dug

gtwxdb
tgxbwd
dxwtbg

jolnaczkdfbsmu
rlatnfdicmuhe

jzoqvxg
vzogjxq
jqzgxvo
qgvijozx
vgqoxzj

vruspmhlewokn
nojmeblhuprks

tfrh
ihr
r
rehmt
xpkuysr

lrgveotsf
ovfsret
vtesorfk

v
v
ov
vn

yxfzesqgr
yxqfsgr
ritshypvfq

k
k
k
xk

tfuivc
icufl
ubfic
iypucf

foknbeaujiphd
xgnpdkhaeoujf
hnwaeofpmyvjkudl

ynfoewkix
kywxndsf
wnyfqxcki
pzxvyabwurlkfn
hsxnkmyfgw

ycxspo
yxbpzsco
pcyxso

ri
ir
ir
ri
ri

ngeojlwvkcymsdu
dunjgkomvlwy
vkwdomlyjung

iswlyvtgndqkbcopjxmferuazh
ludyrjxgqswhkmofpneictzabv

h
h
h
n
h

nwmulejyqx
ydulhfmnxac
mgyxlcpnudo
iuxyrlnmtz
xnmidtysul

ipfdrqs
iprxdavg
cyinpkdwrmhjue
xipadbrzolg
ftropxid

vexqt
xqetv
emtqxbvk

hzkifwmxeonu
pcaygtldsqvb

dyv
veyd
vyd
vdy

txhdkerybmua
afhyuxdkbertm
cyuxrewtbmdkjh

fpvxgdki
pxfgdvki
kfvgixpd
dgvifxpk
vtybfxskgrdpin

sjtbzwmuxcnlp
jsxnbwzhcmptlu
wzusacxbjnmplt
qiwkszmjptxcnulb

t
d
t

osiz
dfr

vjnihrbmfkl
bmylxvnkir
snirvcbkml

onatgjeqdfu
tofjugqnaed
njfadqwugoet
ojaefunqtdg
jdngfteuqao

lfjsnmywoari
imjnyarlwof
aiolyfjwrmn

lstramdyop
sdrtlepnoyam
yplsdtroam
rysuomdpalt
dumlsyaotpr

gfxlnvejorkw
ruoljnfxke

sjyuobmlgzkit
lmkgyrtojduz
znpglmatuqekyjo
gulvozkmytj
zsytjlogumk

ktehudzxrmaj
vqjhmydruxk
ghnmxcjkld

pnhizmdws
ptceojmgb

hvfrokunzditcmexlwjgasq
ahtsizfglkdecqnymuwjx

cgmrlkpzu
nuwgm
amug
ghmu

ykih
ikyh
kiyh
iyhk
kyhi

mvcjruf
mfcjurv
frmvucj
rucvmfj
ujrfvcm

rzvug
ruzg

pgdqucvliaekwy
vyilsqcukagew
cylwivaugeskq
wiquaecyklgv
quocakwyegvzlri

j
j
j

yafuivm
fmzyivua
mvayjqfbieu
vymuafi

sbw
bws
s
sj

c
nlpkz

jhiyszxcpumkdregl
yceuljzxdbspmgnhtir

lvstgahuqycwempik
htcpdimwlev
eilhvtwpcm

ocsrqubwnlhemxpyfjkgd
mslzhunejpfdwryq

fkslizewn
lesifzknw
eknizfws
keznsroifpw

wztapg
zcaugetw
wazcugt

enkw
zyekmcj

rqsdx
xqrdbsf
xtdusyr
jdsxabrv

ildhoswzeb
oedzhlfb
zohldbme
ehldbofz

glzpahcrsxoiq
dqaxhzces
gzanixv
bzaumfxk
oznxat

t
t
t

dponyflcbgzu
oluycbzedngf

xrcilmyqzhf
ndfxpekhtlba
fowjxlqh

abuvz
uzab
uazgpmbd
abuz
zybua

xkigl
gkxli
lgixk
kilxg

ksyt
hv

gaiwkqjmf
bhivlayzgf

tpxnhbkrcziymuqjwsagfvol
gfxywqtikanvorulmshczjbp

dtplfzajrcug
dutapblcjfgrzi
uztnapflcjdvrg
frdguctzljpai

zfuersgq
grfuesqvk
sergaukqfy
qfsiutrwcgnejob

vb
vb
vb

muxydwqtzv
jnvxmfyetdsu
xvdmytiukgr

xh
jha
bnurvpy

vakpuwesyqnr
ksypwevi
kpvsyhwj

nehqwmxt
zswvrla
wbocdzfgs

toxqdwzhvrpbfl
egcnsmiky

rtzujanlky
kdsatijn

yxms
xsmy
osmyb
sym

rbt
tvbaru
bwrst
ritb

vziqwsjmehdyocntuxbl
glqjxndpmcyakheuvrw

bvldiakteryfznq
qebljwgvdoacszk
lzxvqeapbdkyn

lykqpt
mqkdlp

jixerawshokm
jiwramksehxo
ekxmirwaojhs
iearwhokmjxs

m
r
r
b
r

rvblioszxngkad
wbogjpsivkxfn

jpcwsnuxkriblehvfyd
jnyxehusfvqablrcowidkp

amws
ads
as

ahjfgpq
ambsfvh
sxihbfruacp
tajchyf
ahodnflkew

njayect
ywfreujv

cnfayqmdpie
tcqixpvzdaonrym

qnlofvpikj
wue

njylcxwbksdrqa
fwaqodzxg
xudoeqmhaw
xhiadwfq

hqu
qihu
huq
uqhcr
xhquw

dimvrngsoeazpkfwyctj
groanpvszyemkfwjtcid
jvwonsraytdgemifzcpk
tdsecwafikzongmvryjp
zelpgjotxyqscnidwvfuamrk

khopamsbet
mtoqjbwexfpk
eopdumbkty
pmkoetb
ogptnbkmed

segnxfbtzoq
noxbkzfsgt

dhfozyqasempnlciwbkrt
owezgcvudlnhmsqkxp
pswqnomzldgecxkh

ptogxfrdwz
glkzfxrow
awryscxofzvm
wohrtifbzuxnj

czemryisbjdptxq
tpcbisqyezjrmd
ybjpctrmzdsqie
zsqcmypibrjedt
ztwcbpsyijqrdme

atwukjeorighvfsn
fjohkugxzvnqwmtsabe
vuwenfoagktshj
lwdhiauepytcsgokfjnv

cylvzghwmjf
lwfvzgjyhcm
fzgyjlmcvwh
vwjygmzhclf

ab
mb
bh

fjgwbhceioxmsz
zejxhbmtocgfdw
eblapcygxwvzhofmj
gmxfhjzcewbo

fhpqtjzdeyluwnogm
duemozjhlpqnwfygt
zfmewnhqdpgjoytul
eofygnuphwjmlqztd

wva
oevfabqwd
kvawg

gxprowhvytbiamfcjesu
excvhbsujfatrpmwgi

xylsrgiecwzpaoj
vbscjyqre

pjcltyis
psiclt
cstiklp
hisapclt

lq
v
v
vq
p

m
m
m
m
m

fzhuvrqsonwdcmgibj
dqibvhgfrmnjcuwsz
gkfvsznchrybwilejqdu
rdibnqwfzghucjvs

juqckrl
ojlhsyfcn

jngdhxfesqzwcptlmvb
tlpyhvnoxsagwmqrdzcue`,
      everyoneSaidYes
    )
  ).toBe(3193);
});
