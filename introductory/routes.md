The URL to get this JSON Response was https://maps.googleapis.com/maps/api/directions/json?origin=CN+Tower&destination=Niagra+Falls+Canada&key=AIzaSyAUo1lD94xydVP2R07g_e6w9npOnaJkE8k

However, not sure why a lot of the response is underlined. 

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJmzrzi9Y0K4gRgXUc3sTY7RU",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJuU2C7F5E04kRiKK9VmHF0kY",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.641677,
               "lng" : -79.0849436
            },
            "southwest" : {
               "lat" : 43.0895577,
               "lng" : -79.82934329999999
            }
         },
         "copyrights" : "Map data ©2021 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "127 km",
                  "value" : 126517
               },
               "duration" : {
                  "text" : "1 hour 16 mins",
                  "value" : 4538
               },
               "end_address" : "Niagara Falls, ON, Canada",
               "end_location" : {
                  "lat" : 43.0895577,
                  "lng" : -79.0849436
               },
               "start_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
               "start_location" : {
                  "lat" : 43.641677,
                  "lng" : -79.38665709999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 559
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 120
                     },
                     "end_location" : {
                        "lat" : 43.6406588,
                        "lng" : -79.3928978
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eBremner Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "owjiGrepcNBBDHHLHJLPRZLN?@?@@D?@@@@@NVx@hA@BFLDHHNDHBFDLBDPh@@HBJ@D@H@J@JBJ@X@H?N@L?L?N?NAJ?HSvBMrACZ?@Cf@ATOzAC^ETCX?R?J?H@F?D?B@F@PFj@D^F^Dd@"
                     },
                     "start_location" : {
                        "lat" : 43.641677,
                        "lng" : -79.38665709999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 217
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 43.6389547,
                        "lng" : -79.39253840000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSpadina Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cqjiGrlqcND^BZTI|@Wt@UjA_@b@Mj@Q\\IFA"
                     },
                     "start_location" : {
                        "lat" : 43.6406588,
                        "lng" : -79.3928978
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "56 m",
                        "value" : 56
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.6387454,
                        "lng" : -79.3931413
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto the \u003cb\u003eGardiner Expwy West\u003c/b\u003e ramp",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "mfjiGjjqcNJHBBBF@@?B@D@FBHBRDn@"
                     },
                     "start_location" : {
                        "lat" : 43.6389547,
                        "lng" : -79.39253840000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "14.1 km",
                        "value" : 14122
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 533
                     },
                     "end_location" : {
                        "lat" : 43.6095642,
                        "lng" : -79.5547808
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eGardiner Expressway W\u003c/b\u003e and merge onto \u003cb\u003eGardiner Expy W\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "eejiGbnqcNDJBF@RD^N~APfBH~@Dd@RpBHhAJbAFx@Dd@@HDp@Bd@Dv@?LBR@NBPBZ@pAAxA?p@An@Ap@A`AExAExA?RExAAvA@p@?H@|@Bx@@l@Bl@@^FrADp@n@jNFfBBx@@d@Bt@@v@B`A@v@?v@?d@?t@?zA?x@?z@?x@@Z?`@@Z@\\@\\@XD|@B\\BXD^BZDZDZDZDZD^FZTpAVpATnA\\rBXzARdAj@`D@B`@xBDPd@dCdA~FZdBLn@VzA`@|BLp@Lp@FZX~AF`@Hf@Lp@PbATjARdAP~@F^PbALl@DXBHNv@F\\N|@Ln@Jl@~@fFZfBLl@Jj@VxADRDVJx@@@BVDZBVB^D`@@ZBX@P@h@@b@@f@@Z?f@?\\A^?XCb@Cn@AVAPC\\Gt@Iz@Ip@AFYbB]~Aa@vAK`@IRw@`CIXUr@Yz@O\\Uv@W|@sBhGmAvDGR{@hCsCxIcA|CCFM`@Ut@Of@Mb@Wz@Mf@Md@Sv@Kj@Qt@WfAOv@Mt@Q`AOx@UrAQlAEZOfAOlAABQ~AQ`BKlAMzAKnACb@?BEf@?BIhAGpAEbAGpACt@E`ACnA?PCp@?LEfCA`B?X?N?|@?R?L@b@?J?d@?ZBrA@d@@Z?RD`AF`BHrAHdAF|@Fp@JjAP`BFj@Hp@Fl@L`A@BHr@Hh@Hd@@HFb@Jj@ZfBPx@Hd@BHH`@DPZpAXjAPp@t@nCj@jBTr@n@nBt@xB`AxCr@tBVn@L\\LXLVl@nARb@p@vA^t@f@`ANZh@~@d@~@FJf@bALXNZHRXl@^~@d@hA\\z@Pf@Zt@FLJV\\r@@?\\p@l@dAd@v@j@|@V`@`@l@bA~Al@`AV^V`@HLLNLPT\\JNLNX^Zb@n@|@p@`ALN`@j@\\f@l@|@Zf@\\j@\\n@JRLZVl@Tl@JZHXHVHZPp@Nr@H\\ZhBfA~GZtBd@zCLt@FZNbAV|AXbBRxADNj@|DzAvJl@|D\\vBtBjN`ApGv@jFJl@lAhIjBfNBTdBzMp@`G@BBH@D@HFf@LhAJx@`@fD?F`AjIFj@~CbXv@zGNvADb@LdAz@xHr@dG\\xCRdBv@`Hl@hFf@lEhArJBXFd@V~BrApLn@nFNtADXHx@p@`Gn@~FFh@ZnCZlC`@jDP~Al@xET`B?@ZnCFp@VpCH|@JrAJdAHpAPbCJhBFn@NfCf@nHLjBJ|A@L@PH|@Db@Hr@Db@Hl@Fd@N~@DXRdATdALf@Rv@Pn@J\\Tt@Zx@b@lAb@`Aj@lAj@bAt@lAb@l@V\\h@r@xAdB|@`AtDjEtB~B"
                     },
                     "start_location" : {
                        "lat" : 43.6387454,
                        "lng" : -79.3931413
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "17.1 km",
                        "value" : 17141
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 586
                     },
                     "end_location" : {
                        "lat" : 43.4858182,
                        "lng" : -79.67305619999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eQueen Elizabeth Way\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wndiGj`qdNvAhBlBzB|BdCjAtAnAvAbHbINPJLx@`Af@l@nAtANRvAzAhBnBnBxBZ\\pBzBb@d@tB`C^b@rBfCnDzDdAlA~BjCjD~DhCtC?@Z\\Z\\|BhCjBpB~DpEf@j@pFdG\\^`FvFx@z@jKlL~AdBfAnAJJ~AdBdAlAlH`IzCdDlDzDdH~HpAxAx@|@r@z@`@b@|JhL|HxIp@t@tCdD`EpEtB`C^^fApAdAjAzBdC|@bAt@z@dAnA~AlBX\\lCzCdBlBnAvAfAlAd@h@dDtDd@h@LL`BjBfBlBHJfAlAdAhAZ^Z\\RR~BjCvA|AjApADFjBrB~@bA`AbAfAjApAvAr@v@f@f@p@p@^\\ZX\\XPLVRr@f@r@d@b@Zj@\\rBtA~AdAjAv@TLbAp@rAz@hAv@f@\\jAv@v@h@nBnAnAz@p@d@`@Xb@Z\\TVPbAp@hBjAbBhATLh@\\p@b@f@\\DBp@d@x@j@d@\\b@\\f@`@\\X`@^v@v@dAhANR^d@V\\PTPVNTLR^l@j@dAZl@f@`ANZb@fAXr@Tn@JXTt@`@nA^pAFTVt@Tr@`@jAL\\Ph@N\\Tj@d@hAf@fAJVPZVj@Zn@Zj@b@v@`AbBJPl@bAlAjBtAlBd@l@r@x@p@v@l@r@v@z@`@b@t@x@p@v@t@x@^`@p@t@vA|AfBpB`BhB@BXXnC|CrB|BzBdCrB~BjDzDtAzAn@t@~ClDpAvA`BhB`@b@tA~At@x@lAtAfBpBLNZ\\nD~DjArA`EpEhDvDX\\zDlE|H`JDDnB|Bx@~@bAhAVX`BjBdAlAZ^vA~AnAtA`AfAn@r@zAhBn@r@v@|@t@|@n@r@n@p@zCfDbAfA`BdBp@r@tC~CtB~B`ClCFFlCzCz@bAv@z@`BhB`AhA|AhBh@l@HHRVhBpBx@~@xAbBFHlBvBxChDZ\\fAnAxBdCzMfOt@z@z@~@`FvFZ\\x@|@`FvFhDxDdJpKZ^TXnHvIl@n@~@hAf@h@VZh@h@X\\b@\\d@`@XR^Z^T^TXNTLZNXJXHz@X|@NVBh@F^Fb@Dl@@`BAzCAlG]fAIjDKz@AD?N?p@A|ACrACV?tBGnM]xDMhGQrDKX?rGM"
                     },
                     "start_location" : {
                        "lat" : 43.6095642,
                        "lng" : -79.5547808
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20.5 km",
                        "value" : 20513
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 705
                     },
                     "end_location" : {
                        "lat" : 43.3415121,
                        "lng" : -79.8233292
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eQueen Elizabeth Way\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-403 W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "kilhGrcheNzPe@hN]^Ap@AnGSd@Az@CvCEf@?z@?d@@rBHf@Bd@DJ@dAHtC\\zB`@z@PrA\\h@Nh@NtBt@pAd@jAf@~At@|@h@bBbAvA|@x@l@xAhALJl@h@~@z@fAfA|@~@@@jEzEvC~CdFvFHHLTfChC|GtH`FpFx@~@`@d@t@x@t@z@b@d@`BjB@?vA|A^`@b@h@rAtAJLdArAxBfCbBlB`AhA|@`Ar@x@n@v@NPv@|@b@d@l@v@n@x@z@hA`AlAbAnAp@r@zAbBnApAbAjA`AjAjBzBTZTZb@f@fC|BVZJJp@p@xB`CzA`Bp@r@l@n@vB~B@@|G~Hp@z@n@z@zBjCtBhC`CnCdD|Dt@|@nA|AfE|En@t@pCzC|CpDVXBB`AhA|AfBBDhCzCl@r@lCzCdE~EhBlBvBdCvBbCpC`DzAbB|I`KTb@nD|D|BnClHnIlGjHzJ`LrFlGvDbELPtAxAhApAfGzGdCvCx@dA~DtE~@dAtFnG~KhM`@f@jAvAdAlAzA`BjArAz@bAbIhI|D~Dx@z@x@z@RTbAfA`BfB~@bAbAjAnAtAn@v@zBfCf@l@^`@hBpBVZjCdDlAzArA`BnC`DxBdCdDpDt@z@f@d@vDfEzAbBlArAjArAb@d@jFxFpTlVvA|A~BhCpD~DdCnCPRtCbDtAzAvBbCdDpDvB~B|@`A|AdBnCzCtAzA`AdArC~CbDrDdBnBz@~@dAjArC`DzChDfCtChCrCrB`ChEzEhDrD|ClDpBxBrAzAb@f@d@f@lAtAfAlAdBlBfBpBhBrB~AjBtB`ChCtCfBtBdCnCdBpBzBfC~@dAhApAf@j@TThCxCtA|AdAlAbBnBxCfDhApAbOxPt@|@fE|E`IbJlC~C`O|PvBbCtJvK`BjB`@f@f@h@~FvGrCdDhAjAtAzAvBbCrA`Bp@|@|@lA|AtBxBvDx@~Af@z@\\r@d@~@`AvBr@`B|@zBnAdD~BjGbAnCZ~@~B`H|EvNXv@|@dCh@|AjAbDv@vBzAjEZx@Pb@@Bx@jC"
                     },
                     "start_location" : {
                        "lat" : 43.4858182,
                        "lng" : -79.67305619999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "63.4 km",
                        "value" : 63438
                     },
                     "duration" : {
                        "text" : "35 mins",
                        "value" : 2078
                     },
                     "end_location" : {
                        "lat" : 43.1527353,
                        "lng" : -79.1530393
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eQueen Elizabeth Way\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eQEW\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "mcpgGxnefNj@v@l@dB`AlCt@jBp@dBNVFL\\n@n@hA`@j@^f@z@dA|@|@b@`@h@`@h@`@^V\\R\\PHF^NNHbA`@n@R|@Tj@J~@L~@Jt@D`A@D?~@Cb@Av@Gn@In@Mf@Kf@M^K\\Mj@Sl@W~@c@t@]DCl@Yh@Wx@]tAo@~@c@TI\\KZGJIdAg@ZO\\Ox@a@j@Y`@S^SnAu@vBoAJIJIXSXQr@o@XWv@y@bBiBjAsApB}BFMjA}A`B}BbCiEpA_CrByDn@mA`CqEv@wAjAyBnCeFLWdAoBdAmBZm@\\q@pBqDvB_ERa@@Cn@iAVe@DKNYj@cABEVe@p@qAzAyCrAgCXm@n@oARc@\\q@PWLUVe@HM`@s@^k@d@o@BEZa@TYPU`@a@l@k@TW@?ZYPOLI\\WBAZS^U?A`@SXONIVKRILG\\Mn@UVIn@SxAa@b@MbAYTGfBg@n@SDCXMTIJE`@QRILGjHeDx@_@pBgA~Ao@dBy@bBy@`@Qf@WXM`@SbCkA~@e@@?`@S`Ae@XOzAu@\\O\\Q|BgA\\S@A^SxHsDHEh@W^Qn@[r@]^Sn@Yr@]pBaAVMZO`@SjKiF`@S`JmETKPId@WbCkA`Ae@bAg@^QtDiB`@S`@SdEqBxDkBvDgBBAp@]n@[fEoBlEqBzAq@`DkA`KyDtDwAbDmANG`@OHCVKjAe@j@Yb@WlAs@t@k@`@]TQHGTSd@c@tBoBh@g@l@k@\\]zCuChCcCf@e@lCgCtFkF|EsEdC_C`C}BLK|DuDBCfBeBx@u@r@o@j@g@dD}C\\[nAiAfF}E|A{AfE}D\\]DENQLKDEp@q@`CwBfDqCdAs@TS~@o@ROhAu@^WNKNIrBqAJGb@YROFC~ByA|AcArAy@zDcChCaB`Ak@bDqBpEoCzDcCdBgA|BwAp@a@^UfBkAZWz@k@x@g@lAs@hC_Bx@i@d@_@`@_@b@c@h@o@f@q@`@k@h@}@Xm@Zo@Vq@Vo@Ts@Le@Po@Ns@Ns@PaAPmA`@mC\\}Bb@{CbAyG\\{BL}@zB{NzA_Kx@mFrA}I`ByK`ByKJk@XmBb@uCPkAl@eEv@mFpAmIPmAzBcO?EpCyQ^aCvCqRt@cFnAgIz@{Ff@iDrAyIp@oEzCgS~BkOPqArBuMl@eEJm@PiAJq@j@wDd@_DdA}GRsABQ|@}FJo@lAeIZqBf@gDtDmVZsBhAqHHm@x@kFlAgIx@gF^gCn@cEhAqHXmBdBeLn@aEfEuXHo@xAoJvCoR?A\\}BJo@vD{Vz@oFxEi[Jo@Ho@t@{EhAqHf@cDVcBnBuMVcBjCwPj@{Dn@cEF]j@{DHe@|BkO`CuOvAiJt@{ElAaIXmBDY`BwKJk@Hm@T}A`@cCh@sDtCgRnAkIXaBl@{DbB}KvEwZfCwPlEiYhD_U|BaOHo@|BaOzBiOdAqGpAwIHk@`AkGJq@t@_FJm@dA_HD[jByL@InDsUz@qFjCmQ`BmKhHce@fG}`@|AcKD[rC}QBSFYxAuJJo@x@gFPiAtAyI^{BjDoUPoAp@iEPkAd@}CnAgIbAwGpE}YbAyGfBeLp@kExAmJRsAt@yE`@kCdAaHZqBxAmJfAiHj@{D`@yCj@iEl@sENqAJ{@Ho@RkBVaC^eDJgA^_EFq@JgAJiAVqCHcALeBd@sGJgBHwADuADsADuBBaA@}A@gA?{@AwF?aACkXAsN?mAEoUCwc@E}[AaF?sC?o@AsV@oF?mA@oAFyFF}HJmKJeJByBNwPRaRPiQNwNLcLNoK?ED_DHkGJ_ML_LD_FBmBF{GBqCFoGD{CJkM@MBuCF_HH}GDkFHqGLkMDwCFaHP{OD_GLsKNsO@YFuFNcO?a@LiL@q@?G@g@LmL@_A@o@PsO@{@@q@F}FFiGXiXDeFJiJ?UXoXZqYDuDD{EFuF@_A?cBAeCAoCAy@GkJAo@IqKAsCEcGAy@CeC?{@AoA?iB?}@@a@?M?k@@_A@u@BuADqAD_AFuBHyAF}AFk@XcD^{D`AoILaALaAX_BTqA@GDWR_AXwA\\_BVeAZsAZoAZmAt@gCL]BIPk@Ne@p@{BX{@Rm@vCkJJa@tAkE|C{JF[h@cBTy@\\oAd@kBZwAd@qBRcAPiAF_@Lw@Jw@L{@Jw@Hu@NqAJy@?CLkAJsAHqAHyAHqAD}@Bw@?ADoABaA@sABaA@qC?wAAsBC_D?w@GsEEiFIuI?C?m@CcCCcDAq@Ao@AcA?oAAe@EqGAa@AkBIoJCeDAaBAaBAq@C_C?SCgBAoBCyBCuCCyCAo@AeA?{@CiDA}AA{BA_E?mA?gDEeH?_@A{EA{AAkBKyLO}PC_BGwHAkB?cGCk@?eABqA?E@uABgBDiBDoB@a@DkADgADaAHmCBc@Bq@LiDLkDBg@JwC?Cp@iRRcFRwFXyHFkAX}HNiDToGFgAn@oQD{@r@mOTiId@eMDaAB_AXkGFiBBc@?GRwEDeAJkCLyC@]LsDNsDBeB@O?sA?o@?MEsAEsAEu@?IGo@?CKeAWuBQaAIc@My@mBmKAE{@yE{BmMq@uDM{@QaBGk@KaBGmAEiACsAAcA?iA@eA@iAFuAJeBHgAVmCHu@hCqUxCiXpAmL`AsIPcBV{BhAwJhAyJ~@iIt@yG\\cDz@gIXaCVaCd@}Dl@aFz@{Ht@}Gx@qHl@eFNkAJu@NcA|@oGb@sCPkARoAXkBp@mEf@gD`AqGRsADWL{@dAwGrByMHg@VcBd@gDvAeJfAiHPeA^gCDS^kCb@{CF_@b@{CPoAt@kFRwAL_AHq@Hm@Fm@H}@HgADc@@MD_@F_AHgABa@@a@Bk@B{@FsBBwABuAB{D@e@@}B?}@@yEAsE@aB?aBBsM?k@?C?U?}@@qF?mA?wB@uDBuBF}AB_ALaBHeAXgCN}@L}@Nw@R_AZsAZeAx@oCpAkEj@kBvBgHfB{FV}@~@yCpEeOPm@dAkD|CiKfBcGpAoEt@cCNg@fBwGXgArBaI`BiGTaAPq@j@yB`@{Ax@cDz@_Dx@_D\\yAz@_Dr@sCv@yCt@{Cj@qBjBaH@GBKf@kB@GDQf@iB\\mAJa@Le@`AwDp@eC^kAd@_BX}@\\_AbAqC"
                     },
                     "start_location" : {
                        "lat" : 43.3415121,
                        "lng" : -79.8233292
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.2 km",
                        "value" : 6165
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 210
                     },
                     "end_location" : {
                        "lat" : 43.1057687,
                        "lng" : -79.11997660000002
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork to continue on \u003cb\u003eQueen Elizabeth Way\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "sgkfGnqbbNd@qAlAiDj@aBp@mBRk@hAaD@ChA}C`@oAj@_B@?x@wB@Av@eB^s@f@_AbAcBVa@d@o@\\k@RWRU`@g@HINQ\\a@n@m@RSn@m@~AuA|BoBTSFG`BuAtBkB~DkDrBoBj@k@fBgB`BcBrAuAxA{AzC}CtBuBn@q@j@k@hAiAhAkAfBiB`C_ChBiBlCiCdAcAdCaCXYZ]\\[p@o@fCeCjAmA`@a@zBwBhCeCxAyAhAgAl@k@~A{A|@_ADCtA_Bt@}@JKnGwGpDkD`CoBvCsBtBoAhEuBxB{@zDmAfBc@`Ce@jBWvCY`BMjCGz@CJ?lCIzBCtFIpAE~DIP?JAL?H?H?nIOzBGlFMjBE`CCJArA@xAAxFGrACnHQ"
                     },
                     "start_location" : {
                        "lat" : 43.1527353,
                        "lng" : -79.1530393
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1590
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 57
                     },
                     "end_location" : {
                        "lat" : 43.0956854,
                        "lng" : -79.1097362
                     },
                     "html_instructions" : "Take the \u003cb\u003eON-420\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eThe Falls\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNiagara Falls\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S.A\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "abbfGzb|aNLMHGDADA@?rAGjBGNCnBMbAGd@CxAMl@I|BQnBSr@G^ErAMx@Kd@G^K\\Id@ODAd@QZOZODCf@[^[TQRSDGd@e@\\a@RYVa@Ra@R_@Rc@@Cb@cA\\y@`@cATo@^gALe@ZcAT_A\\wA@EZyAReAN{@?AT{ANmABSJcABYH{@JgBDk@LkC"
                     },
                     "start_location" : {
                        "lat" : 43.1057687,
                        "lng" : -79.11997660000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1987
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 43.0961059,
                        "lng" : -79.08528009999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-420 E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ac`fGzbzaNFwBBoCAkD?OCuAC{D?OGqHE_HAqCC_AWcLM}FAcCGqFEeGEiLAmLCgK@yC?eB?aAAqM"
                     },
                     "start_location" : {
                        "lat" : 43.0956854,
                        "lng" : -79.1097362
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 729
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 87
                     },
                     "end_location" : {
                        "lat" : 43.0895577,
                        "lng" : -79.0849436
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eStanley Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 102\u003c/b\u003e (signs for \u003cb\u003eRegional Road 102 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eStanley Avenue\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ue`fG~iuaN|@CXAHAP?b@A^AdBEzGMdEEbBI`FKfAAn@AdACX?"
                     },
                     "start_location" : {
                        "lat" : 43.0961059,
                        "lng" : -79.08528009999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "owjiGrepcN~CzE|@vBRbB@jB_AbLGjBh@fFjIcC\\r@fCbX\\nFQtPEvFFnDpAf[R|Wd@bGzBzMpKhl@tEjWdD|Qf@dFLbGYjGo@xEuAlFcHhTqKl\\cCnJeCnNkBtQi@dKYbO@~E^|LpAnNbAbH`CbLhC`JzExNtE`KtEbJ|DrJ`FzI~LrQ~EdIxBjHtNf~@zFv_@bHbh@|AjMvSbiBtMtjAzCnX~B`]|@bLrBxKnA|D~C`HzClEbMrN~W|ZnO|Plp@fu@hhAfnAnx@d~@bc@pf@dOlPdLpLj[`TvYrRtDlC~CrCnExFnCbFbBfEzD|LpDvI|HdN`FlG|DlE|MfOvn@~r@xq@zv@xNlP~SlUpa@~d@ncAjjAdQ|RjFjDlD~@dCXnC?hL_@tHWj_@}@bz@sBhO_@|FJ~CTpG~@nCn@zGzBlIjExF`ErFlFh_@ta@pP~Q|[b_@pF`H`HtHxE~FnElE~VzX`WvZlq@zv@jm@tr@bj@dn@bc@hg@lZp[lQbSxUzXjhAdnA~v@r{@zeBtoBx_BziB`HbJxFfKxEtKnH`S~T|o@hBlFxA|CvBxFfBzDlDbFtDbDdBdAbDnAhFz@|DBzDa@lCs@nEmB`J}DnHiDrFcDrB_B`GoGfHgJnW{e@xRs^nJ_RvDaG|D_EfDsB~EiBnK_Dpb@}Rb\\}Opk@_Y~WoM|GcDrS_JzZmLrEqCvAkA~QeQx`@k_@|c@ib@dKqI|DmC~IwFjb@uWnPoKvH}EvCeD`CgErA{DbAyEtBuNvPuhAr]i~Bpv@aeF|kCmdQhrAcuIbGk`@fDsV|CyY`C{ZZwJFcHWmlCFax@vDmtDtFmrFvAyvAn@ym@AyLc@_m@@oMr@wRhCqV~@{F|DgQhEgN|N_f@zByJr@yExAyMp@gOF_KM_P[{^o@ky@_@y{@o@w{@TuPdEujAdHyiBvAo`@OiKk@oFwCmPkFcZs@kHSoHJoHv@qJvL}fAlKa`A~Iuw@vMy|@jQ_lAvAoMf@aJXy[Bo^@wLPiM`AmJlAiGjOig@fUiv@xZ}kAtFwSjG}TpKkZnGqPbDyFjBiClHkHrUuSdVoVxh@kh@tQsQbOmOxGcF~HeEtHiChFiAbGq@lFUpIQxOYrYm@zHElIK|H_@VK~Ha@rPwArEm@nBm@tDiCnBcC|@iBxBqF~AqFdCeN\\mDf@wKS_e@k@sZUe`@Cu`@AsOvAE~AEjTc@xLS"
         },
         "summary" : "Queen Elizabeth Way/QEW",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
