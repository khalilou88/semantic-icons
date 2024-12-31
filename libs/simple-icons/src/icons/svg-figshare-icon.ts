import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-figshare-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>figshare</title>
      <path
        d="M12 0a1.0073 1.0073 0 00-1.0078 1.0078c0 .5566.4506 1.0098 1.0078 1.0098.5578 0 1.0078-.4532 1.0078-1.0098C13.0078.451 12.5578 0 12 0zM8.6895.541A1.0069 1.0069 0 008.291.588c-.528.1706-.8194.7408-.6465 1.2695.1719.5304.7419.8213 1.2696.6485.5302-.1724.8208-.7423.6484-1.2715-.128-.3986-.481-.6607-.873-.6934zm6.621 0c-.3917.0331-.7451.2948-.873.6934-.1724.5292.118 1.0991.6484 1.2715.5297.1728 1.0984-.1181 1.2715-.6485.171-.5287-.1205-1.0966-.6504-1.2695a.9976.9976 0 00-.3965-.0469zM10.588 1.9902A.8517.8517 0 0010.416 2c-.4648.0743-.7815.508-.707.9727a.85.85 0 00.9746.707c.4638-.073.7794-.5099.707-.9727a.8537.8537 0 00-.8027-.7168zm2.8242 0a.8498.8498 0 00-.8008.7168c-.0745.464.242.8998.7051.9727.4635.0734.8998-.2415.9746-.705.0717-.466-.2428-.9004-.707-.9747a.8536.8536 0 00-.1719-.0098zm-7.9082.1094a1.0023 1.0023 0 00-.5566.1914c-.4495.327-.5522.9586-.2246 1.4102.3278.4502.96.5508 1.4101.2226.4506-.326.5508-.959.2227-1.4101-.2047-.2816-.5278-.4251-.8516-.414zm12.9922 0c-.3237-.011-.6472.1325-.8516.414-.3284.4508-.2278 1.0832.2227 1.4102.4505.327 1.0817.2281 1.4101-.2226.327-.4516.2273-1.0831-.2226-1.4102a1.0095 1.0095 0 00-.5586-.1914zm-10.7676.7871a.8428.8428 0 00-.3242.0918c-.4186.2126-.5855.7256-.3711 1.1445a.8463.8463 0 001.1426.3711c.4167-.213.5856-.725.373-1.1445a.8538.8538 0 00-.8203-.4629zm8.543 0a.8538.8538 0 00-.8203.463.8513.8513 0 00.373 1.1444c.4194.2145.9317.0487 1.1426-.371.2137-.419.0495-.932-.3691-1.1446a.8521.8521 0 00-.3262-.0918zM12 3.5625a.7086.7086 0 00-.709.709c0 .3927.3168.709.709.709a.7081.7081 0 00.709-.709.7088.7088 0 00-.709-.709zm-2.3281.3809a.7062.7062 0 00-.2793.0332c-.3724.1203-.5755.5197-.4551.8925a.7088.7088 0 00.8926.4551c.3711-.121.5781-.5208.457-.8926a.7123.7123 0 00-.6152-.4882zm4.6562 0c-.2754.0236-.5246.209-.6152.4882-.1209.3718.0847.7717.457.8926.3726.1207.7724-.0833.8926-.455a.7081.7081 0 00-.455-.8926.7053.7053 0 00-.2794-.0332zm-11.1836.5878a1.0132 1.0132 0 00-.8535.416c-.3265.4494-.2245 1.0812.2246 1.4083.4506.3279 1.0804.228 1.4063-.2227.3292-.4505.2311-1.082-.2207-1.4101a.9945.9945 0 00-.5567-.1914zm17.713 0a1.0028 1.0028 0 00-.5587.1915c-.4513.3281-.5491.9596-.2226 1.4101.327.4508.9577.5494 1.4082.2227.4516-.3282.552-.96.2226-1.4102-.2039-.281-.526-.4248-.8496-.414zm-15.4141.0586a.8494.8494 0 00-.6016.25c-.3328.3324-.334.8725-.002 1.2051a.8547.8547 0 001.2051 0c.3306-.3326.332-.873 0-1.205a.847.847 0 00-.6015-.25zm13.1152 0a.8523.8523 0 00-.6035.25c-.3321.3318-.3321.8725 0 1.2051.3332.3315.8724.3321 1.205 0 .3335-.332.3335-.8724 0-1.205a.8474.8474 0 00-.6015-.25zm-11.125.4493a.709.709 0 00-.3926.1347c-.3156.231-.3868.6735-.1562.9903.2304.3178.6733.3855.9902.1562a.7065.7065 0 00.1563-.9883.7073.7073 0 00-.5977-.293zm9.1328 0a.7074.7074 0 00-.5977.293c-.2297.3172-.16.7595.1563.9882a.707.707 0 00.9902-.1562.7081.7081 0 00-.5488-1.125zm-5.5469.0097a.5897.5897 0 00-.1191.0078c-.3213.0512-.5435.3521-.4922.6739.051.322.3557.5427.6777.4922.3222-.0509.5407-.3532.4903-.6758a.5906.5906 0 00-.5567-.498zm1.961 0a.5882.5882 0 00-.5547.498c-.0515.3215.1675.625.4883.6759.3221.051.6259-.1702.6757-.4922.0524-.3229-.168-.6233-.4902-.6739a.5904.5904 0 00-.1191-.0078zm-3.9453.623a.6048.6048 0 00-.2286.0645.5902.5902 0 00-.2578.793.592.592 0 00.795.2598c.2898-.1497.4077-.5062.2597-.797a.589.589 0 00-.5683-.3202zm5.9316 0c-.2294-.0165-.4582.102-.5684.3204-.1503.2918-.034.648.2559.795a.5923.5923 0 00.7969-.2579.5898.5898 0 00-.2598-.793.5863.5863 0 00-.2246-.0644zM12 6.1876a.4885.4885 0 00-.4883.4883c0 .2703.2186.4883.4883.4883.2704 0 .4902-.218.4902-.4883 0-.2693-.2198-.4883-.4902-.4883zm-1.6035.2617a.4835.4835 0 00-.1914.0235c-.2574.0832-.3985.3588-.3145.6152.0827.2564.3594.396.6153.3125a.4884.4884 0 00.3144-.6152.4917.4917 0 00-.4238-.336zm3.207 0a.4865.4865 0 00-.4219.336.488.488 0 00.3125.6152c.2566.0824.5322-.0561.6153-.3125.0826-.2564-.0561-.5326-.3125-.6152a.4897.4897 0 00-.1934-.0235zm-7.83.2988a.705.705 0 00-.5977.293c-.2308.3153-.1596.7587.1562.9883.317.2307.7605.16.9903-.1563.2296-.3165.159-.759-.1582-.9902a.702.702 0 00-.3907-.1348zm12.455 0a.7098.7098 0 00-.3926.1348.707.707 0 00-.1582.9902c.231.3163.675.3879.9903.1582.3175-.2314.3883-.6749.1582-.9902a.705.705 0 00-.5977-.293zm-10.7832.1075a.592.592 0 00-.418.1738c-.2312.2296-.2301.6047 0 .834a.5895.5895 0 00.836 0 .591.591 0 00.002-.836.5924.5924 0 00-.42-.1718zm9.1094 0a.5885.5885 0 00-.418.1738.5867.5867 0 000 .834.5887.5887 0 00.834 0c.2301-.2302.2315-.6033.002-.834a.5884.5884 0 00-.418-.1738zm-12.7559.084a.856.856 0 00-.8203.4648.849.849 0 00.373 1.1426c.419.2149.9316.046 1.1446-.3711.2136-.4186.0454-.9303-.373-1.1446a.843.843 0 00-.3243-.0917zm16.4043 0a.8529.8529 0 00-.3261.0918c-.4193.2128-.5854.725-.373 1.1445.213.4182.7269.5845 1.1444.371.4195-.2143.5867-.725.373-1.1425a.8538.8538 0 00-.8183-.4648zM8.8535 7.205a.483.483 0 00-.2695.0918c-.2182.158-.2662.4657-.1074.6836.1584.217.4635.2664.6816.1074a.489.489 0 00.1074-.6816.4844.4844 0 00-.412-.2012zm6.293 0a.4847.4847 0 00-.4121.2012c-.16.2184-.1088.5237.1093.6816a.4876.4876 0 00.6817-.1074c.1598-.2179.1088-.5261-.1094-.6836a.4831.4831 0 00-.2695-.0918zm-3.8125.0683a.3879.3879 0 00-.08.004c-.2205.0349-.3718.2414-.336.4609.0338.2193.24.3675.461.334.2194-.035.3678-.2412.3339-.461-.03-.1906-.192-.3296-.379-.3379zm1.332 0a.4009.4009 0 00-.3789.338c-.0324.2176.117.4244.334.4609.2216.0335.4267-.115.461-.336.034-.2178-.1164-.4232-.334-.459a.4094.4094 0 00-.082-.0039zm-11.205.3243c-.3915.0344-.744.2965-.8731.6933-.172.5306.118 1.0999.6484 1.2715.5291.173 1.0974-.1166 1.2696-.6465.1715-.5304-.119-1.0994-.6485-1.2734a1.0013 1.0013 0 00-.3965-.045zm21.078 0a1.0009 1.0009 0 00-.3964.0449c-.5304.1734-.8208.743-.6485 1.2734.1738.53.7409.8195 1.2696.6465.5315-.1716.821-.741.6484-1.2715-.1292-.3968-.482-.6589-.873-.6933zm-12.5546.0996a.409.409 0 00-.1563.043c-.196.1004-.2756.342-.1758.539a.4005.4005 0 00.541.1758c.1973-.101.277-.342.1758-.539a.397.397 0 00-.3847-.2188zm4.0312 0a.3988.3988 0 00-.3847.2168.4012.4012 0 00.1757.541c.1975.1009.4374.022.5391-.1758a.4005.4005 0 00-.1758-.541.3983.3983 0 00-.1543-.041zm-6.3047.6855c-.1568-.0054-.3144.0641-.412.2012-.159.217-.1098.523.1074.6816.2181.1596.5225.1084.6816-.1093.1592-.2186.1093-.523-.1074-.6817a.4847.4847 0 00-.2696-.0918zm8.5801 0a.4904.4904 0 00-.2715.0918.4873.4873 0 00-.1074.6816c.1598.2178.464.268.6816.1094.2187-.1597.2672-.4645.1075-.6816a.481.481 0 00-.4102-.2012zm-9.9863.1035a.594.594 0 00-.5703.3223.5913.5913 0 00.2597.793.5867.5867 0 00.793-.2559c.1484-.292.0326-.649-.2578-.7969a.5837.5837 0 00-.2246-.0625zm11.3926 0a.59.59 0 00-.2266.0625c-.2913.1472-.4053.5048-.2578.7969a.5895.5895 0 00.793.2578.5898.5898 0 00.2578-.795.5867.5867 0 00-.5664-.3222zM8.9043 8.5a.4096.4096 0 00-.2871.1191.4023.4023 0 00.002.5684.4024.4024 0 00.5683 0 .4023.4023 0 000-.5684.4.4 0 00-.2832-.1191zm6.1934.002a.4004.4004 0 00-.2852.1171.3993.3993 0 00.002.5684.3998.3998 0 00.5664 0c.1577-.158.1568-.4129 0-.5684a.3991.3991 0 00-.2832-.1171zm-10.5079.4042c-.2752.0234-.5233.2071-.6132.4864-.1217.3721.0827.7708.455.8926a.7074.7074 0 00.8926-.4532c.12-.373-.0814-.7734-.455-.8925a.7026.7026 0 00-.2794-.0333zm14.8204 0a.703.703 0 00-.2793.0333c-.3729.1191-.5758.5195-.4551.8925.12.3718.5203.5743.8926.4532.3717-.1218.578-.5205.457-.8926a.7113.7113 0 00-.6152-.4863zM8.127 9.6113a.4015.4015 0 00-.3868.2188.4.4 0 00.1758.539.3974.3974 0 00.539-.1738.401.401 0 00-.1757-.541.3936.3936 0 00-.1523-.043zm7.746 0a.3923.3923 0 00-.1523.043.4008.4008 0 00-.1758.541.4031.4031 0 00.539.1738.3989.3989 0 00.1759-.541.4033.4033 0 00-.3868-.2168zm-13.0722.088a.8528.8528 0 00-.8028.7167.8519.8519 0 00.709.9727.8477.8477 0 00.9727-.7051c.0735-.4642-.2409-.9007-.705-.9746a.8745.8745 0 00-.174-.0098zm18.3984 0a.854.854 0 00-.1719.0097.8498.8498 0 00-.707.9746.8477.8477 0 00.9727.705.8494.8494 0 00.707-.9726c-.0643-.4055-.4057-.6986-.8008-.7168zm-14.3047.1679a.4876.4876 0 00-.4218.336.4873.4873 0 00.3144.6152c.2558.084.5329-.0558.6152-.3125.0838-.2558-.0578-.5337-.3144-.6172a.4888.4888 0 00-.1934-.0215zm10.211 0a.489.489 0 00-.1934.0215c-.2555.0835-.3971.3614-.3144.6172a.4896.4896 0 00.6171.3125c.2564-.0827.3947-.3593.3106-.6153-.0601-.192-.2299-.3192-.42-.336zm-11.4942.5332a.5899.5899 0 00-.5547.498c-.0511.323.1676.6266.4883.6778.3235.0518.6274-.1689.6778-.4903a.5926.5926 0 00-.4922-.6777.5862.5862 0 00-.1192-.0078zm12.7774 0a.593.593 0 00-.1192.0078.5923.5923 0 00-.4922.6777.5897.5897 0 00.6758.4903c.322-.0512.5414-.3548.4903-.6778a.5905.5905 0 00-.5547-.498zm-10.7325.5137c-.1853.0095-.3472.145-.3789.3359a.4024.4024 0 00.336.461.4009.4009 0 00.457-.332.4025.4025 0 00-.334-.463.3937.3937 0 00-.08-.002zm8.6875 0a.4169.4169 0 00-.082.0039.4023.4023 0 00-.332.461c.0341.2184.2406.3656.459.332a.4019.4019 0 00.334-.459c-.0301-.1928-.1917-.3291-.379-.338zm-15.3359.078C.4508 10.9922 0 11.4437 0 12c0 .5575.4503 1.0078 1.0078 1.0078A1.0069 1.0069 0 002.0156 12c0-.5564-.4506-1.0078-1.0078-1.0078zm21.9844 0c-.558 0-1.0098.4509-1.0098 1.0079 0 .5569.4518 1.0078 1.0098 1.0078C23.5466 13.0078 24 12.5575 24 12c0-.5564-.4534-1.0078-1.0078-1.0078zm-18.7207.299a.7086.7086 0 00-.709.7089c.001.3924.317.709.709.709a.7086.7086 0 00.709-.709.709.709 0 00-.709-.709zm15.457 0c-.3904 0-.709.3171-.709.7089 0 .3924.3186.709.709.709a.7062.7062 0 00.707-.709c0-.3918-.3146-.709-.707-.709zm-13.0527.2187c-.27 0-.4883.2213-.4883.4902 0 .269.2183.4879.4883.4863.269 0 .4883-.2174.4883-.4863 0-.269-.2194-.4902-.4883-.4902zm10.6484 0c-.2698 0-.4883.2213-.4883.4902a.486.486 0 00.4883.4863.4867.4867 0 00.4883-.4863c0-.269-.218-.4902-.4883-.4902zm-1.0176.7734c-.1861.0074-.3464.147-.377.3379-.0348.2202.1128.426.3321.461.2187.0331.4252-.1146.461-.334a.3976.3976 0 00-.334-.459.4076.4076 0 00-.082-.0059zm-8.6132.002a.4168.4168 0 00-.082.0039c-.2181.0347-.37.239-.334.459.035.2198.2407.3674.4609.334a.404.404 0 00.334-.461c-.0306-.192-.192-.3278-.379-.336zm-2.0274.1328a.6064.6064 0 00-.121.0058c-.3208.0504-.5395.3529-.4884.6758a.5894.5894 0 00.6739.4922.5917.5917 0 00.4922-.6777c-.0441-.2816-.2813-.4838-.5567-.4961zm12.668 0a.5905.5905 0 00-.5567.498c-.0513.3214.168.625.4903.6758.3231.0514.6244-.1701.6758-.4922.051-.323-.1671-.6254-.4903-.6758a.585.585 0 00-.1191-.0058zm-15.455.1816a.8538.8538 0 00-.172.0098c-.4638.0735-.7817.5105-.709.9746.074.4642.511.7812.9747.707.466-.0732.7808-.5105.707-.9746a.8497.8497 0 00-.8008-.7168zm18.242 0c-.396.0179-.7384.3103-.8026.7168-.0727.4641.2442.901.709.9746.4636.0739.8983-.243.9726-.707.0726-.4648-.2409-.9011-.705-.9746a.8735.8735 0 00-.174-.0098zm-14.1405.5586a.4917.4917 0 00-.1934.0215.4892.4892 0 00-.3144.6172c.082.2566.3585.3958.6152.3125.2566-.0827.397-.3606.3144-.6153a.4879.4879 0 00-.4218-.3359zm10.041 0a.4896.4896 0 00-.4238.336c-.0822.2546.0589.5325.3144.6152.2564.0833.532-.056.6133-.3125.084-.2572-.0542-.5337-.3106-.6172a.4916.4916 0 00-.1933-.0215zm-8.9512.4277a.3959.3959 0 00-.1523.043.3983.3983 0 00-.1758.541.399.399 0 00.5371.1758.3994.3994 0 00.1758-.539c-.0759-.1482-.2297-.2314-.3848-.2208zm7.8613 0a.4052.4052 0 00-.3886.2188.4037.4037 0 00.1758.541c.1983.101.4418.0231.543-.1758.1005-.196.0196-.4391-.1778-.541a.3905.3905 0 00-.1524-.043zm-11.2207.0938a.7048.7048 0 00-.2793.0332c-.3723.1218-.5767.5213-.455.8945a.7072.7072 0 00.8925.4531c.3737-.12.575-.5195.4551-.8925a.7111.7111 0 00-.6133-.4883zm14.5782 0a.7118.7118 0 00-.6133.4902c-.1196.372.0822.7705.455.8906a.7071.7071 0 00.8926-.453c.1226-.3733-.0833-.7728-.455-.8946a.7042.7042 0 00-.2793-.0332zm-13.0704.6543a.5803.5803 0 00-.2246.0625c-.2907.148-.4083.5042-.2597.795a.59.59 0 00.7949.2577.5864.5864 0 00.2578-.793.5911.5911 0 00-.5683-.3222zm11.5625 0a.5917.5917 0 00-.5683.3203.5902.5902 0 00.2578.795c.2907.1473.6475.0327.795-.2579.1488-.2907.0317-.6469-.2598-.795a.5784.5784 0 00-.2247-.0624zm-16.1484.0566a.992.992 0 00-.3965.0469c-.5303.1712-.8205.741-.6484 1.2715.172.5289.741.8182 1.2695.6465.53-.173.8197-.741.6485-1.2715a1.009 1.009 0 00-.873-.6934zm20.7344 0a1.0107 1.0107 0 00-.873.6934c-.1707.5305.118 1.0985.6484 1.2715.5292.1717 1.0972-.1176 1.2695-.6465.1726-.5306-.117-1.1003-.6484-1.2715a.992.992 0 00-.3965-.0469zm-14.6914.25a.4847.4847 0 00-.2695.0938c-.2175.159-.2663.4639-.1094.6816a.4893.4893 0 00.6836.1094c.2167-.1586.2683-.4658.1093-.6836a.494.494 0 00-.414-.2012zm8.6484 0a.4911.4911 0 00-.412.2012.4897.4897 0 00.1073.6836c.2185.1585.525.11.6817-.1094a.4875.4875 0 00-.1075-.6816.4844.4844 0 00-.2695-.0938zm-7.4199.0547c-.1028 0-.2064.037-.2852.1152a.4016.4016 0 000 .5684c.1582.1572.4118.1574.5684.002a.403.403 0 000-.5704.3973.3973 0 00-.2832-.1152zm6.1914 0a.3975.3975 0 00-.2832.1172c-.1579.1565-.1568.4122 0 .5684.1589.1565.4117.1565.5684 0a.4016.4016 0 000-.5684.4026.4026 0 00-.2852-.1172zm-11.42.666a.8422.8422 0 00-.3241.0899c-.4186.2135-.5862.7252-.373 1.1445.2132.4186.7252.5859 1.1444.373.4185-.2139.5867-.7263.373-1.1445-.1596-.3135-.4891-.4857-.8202-.4629zm16.6485 0a.8553.8553 0 00-.8203.463c-.2134.4181-.0462.9305.373 1.1445.4187.2128.9304.0455 1.1446-.3731.214-.4193.0459-.931-.373-1.1445a.8397.8397 0 00-.3243-.0899zM13.959 15.5a.4037.4037 0 00-.1543.043c-.195.1015-.2742.3435-.1738.541a.3988.3988 0 00.539.1758c.1964-.1017.277-.3433.1758-.541a.4006.4006 0 00-.3867-.2188zm-3.918.002c-.1569-.0107-.3114.0691-.3867.2167a.4012.4012 0 00.1758.541c.1978.1.4387.0222.539-.1757.1023-.198.0228-.4393-.1738-.541a.402.402 0 00-.1543-.041zm-1.1523.3164a.487.487 0 00-.4121.2011.4874.4874 0 10.789.5723c.158-.217.1098-.5226-.1074-.6816a.4826.4826 0 00-.2695-.0918zm6.2246 0a.4833.4833 0 00-.2696.0918c-.2181.159-.2675.4646-.1093.6816.1573.2192.4643.2671.6816.1094.2182-.159.2692-.4645.1094-.6817a.4863.4863 0 00-.4121-.2011zm-9.3906.0156a.6996.6996 0 00-.3907.1328c-.3158.2309-.3867.6757-.1562.9922a.7044.7044 0 00.9883.1562c.3172-.2307.3884-.6724.1582-.9882a.711.711 0 00-.5996-.293zm12.5546 0a.7134.7134 0 00-.5996.293.7052.7052 0 00.1582.9882c.3173.2312.761.162.9903-.1562.2301-.3165.1593-.7613-.1582-.9922a.699.699 0 00-.3907-.1328zm-6.9804.0879c-.188.008-.3496.1486-.3809.3418-.0333.2182.1183.4223.338.459.2195.0349.4232-.116.4589-.336.0335-.2184-.1165-.4225-.334-.459a.4123.4123 0 00-.082-.0058zm1.4062.002a.4108.4108 0 00-.082.0038c-.2196.035-.3667.2411-.332.461a.4013.4013 0 00.459.334.3987.3987 0 00.332-.459.3996.3996 0 00-.377-.3399zm-5.2578.039a.59.59 0 00-.418.1738.5905.5905 0 00.836.834c.2313-.2306.2324-.6037.002-.834a.5958.5958 0 00-.42-.1738zm9.1094 0a.5891.5891 0 00-.418.1738.5867.5867 0 000 .834.5875.5875 0 00.834 0 .5893.5893 0 000-.834.5849.5849 0 00-.416-.1738zm-6.2422.6133a.4878.4878 0 00-.4219.336.4857.4857 0 00.3145.6151.489.489 0 00.6152-.3125c.0834-.2569-.0579-.5344-.3144-.6171a.4904.4904 0 00-.1934-.0215zm3.375 0a.4907.4907 0 00-.1934.0215c-.255.0827-.3961.3602-.3125.6171.0824.2559.3589.3944.6153.3125a.4885.4885 0 00.3125-.6152.4877.4877 0 00-.4219-.336zM12 16.8359a.4878.4878 0 00-.4883.4883c0 .2698.2186.4883.4883.4883.2704 0 .4902-.2185.4902-.4883 0-.2703-.2198-.4883-.4902-.4883zm-2.8828.3125a.5908.5908 0 00-.5684.3204c-.1467.2916-.0318.6463.2578.7949a.5923.5923 0 00.797-.2578c.1469-.2902.0316-.6464-.2579-.795a.6008.6008 0 00-.2285-.0625zm5.7656 0a.59.59 0 00-.2265.0625c-.2917.1479-.4058.504-.2598.795.1494.291.5061.4064.7969.2578a.59.59 0 00.2558-.795.5864.5864 0 00-.5664-.3203zm-11.8105.3028a1.0037 1.0037 0 00-.5567.1933c-.4502.3271-.5514.9589-.2226 1.4102.327.4491.9581.549 1.4082.2207.4518-.3276.5497-.9583.2226-1.4082a1.0092 1.0092 0 00-.8515-.416zm17.8554.002c-.3235-.011-.6468.133-.8515.414-.3285.4499-.2287 1.0811.2226 1.4082.452.3284 1.082.2284 1.4082-.2207.3293-.4513.2284-1.083-.2226-1.4102a1.0005 1.0005 0 00-.5567-.1914zm-13.4453.0898a.7077.7077 0 00-.5976.293c-.2306.3159-.1594.7591.1562.9902.3175.23.7595.1583.9902-.1582.23-.317.1605-.7607-.1562-.9903a.704.704 0 00-.3926-.1347zm9.0352 0a.7037.7037 0 00-.3926.1347c-.316.2296-.386.6733-.1563.9903a.7096.7096 0 00.9903.1582c.317-.2302.387-.6743.1562-.9903a.707.707 0 00-.5976-.293zm-11.0742.162a.8466.8466 0 00-.6016.25c-.3328.3325-.3328.8713 0 1.2032.3322.3323.8696.3323 1.2031 0a.8518.8518 0 00-.6015-1.4531zm13.1152.002a.8552.8552 0 00-.6035.248.85.85 0 000 1.2032c.3332.3323.8707.3314 1.205 0a.85.85 0 000-1.2031.8443.8443 0 00-.6015-.248zm-7.5918.0625c-.2745.0126-.514.2163-.5586.498-.0513.322.1692.625.4922.6759a.5907.5907 0 00.6758-.4922c.0527-.3215-.168-.6227-.4903-.6739a.5935.5935 0 00-.1191-.0078zm2.0664 0a.5911.5911 0 00-.1191.0078c-.3208.0503-.5398.3524-.4883.6739.0505.3222.3509.5441.6738.4922a.5893.5893 0 00.4902-.6758c-.0436-.2818-.282-.486-.5566-.498zm-3.4824.873a.7095.7095 0 00-.6133.4884.708.708 0 00.455.8925c.3734.1214.7732-.0839.8946-.455.1211-.3726-.0859-.772-.457-.8926a.7066.7066 0 00-.2793-.0332zm4.8984 0a.7056.7056 0 00-.2793.0313c-.3723.1212-.5779.522-.457.8946.1208.3711.5218.5764.8945.455.3717-.1217.5762-.5197.4551-.8925a.7086.7086 0 00-.6133-.4883zM12 19.0196a.7086.7086 0 00-.709.709c0 .3916.3168.709.709.709a.7088.7088 0 00.709-.709.7089.7089 0 00-.709-.709zm-4.1504.3946a.8518.8518 0 00-.8183.4629c-.2126.4187-.0453.9295.373 1.1425.419.2138.9304.0484 1.1426-.3691.213-.419.0486-.9328-.3711-1.1465a.8503.8503 0 00-.3262-.0898zm8.3008 0a.8595.8595 0 00-.3281.0898c-.4181.2137-.5848.7261-.3711 1.1465.2138.4186.7278.5829 1.1465.3691.4175-.2125.5833-.7238.3691-1.1425a.8465.8465 0 00-.8164-.463zm-10.5762.4687a1.0087 1.0087 0 00-.8515.416c-.3276.4503-.225 1.0812.2246 1.4082a1.0076 1.0076 0 001.4082-.2226c.3281-.4506.2279-1.0811-.2227-1.4082a1.0096 1.0096 0 00-.5586-.1934zm12.8516 0a1.0122 1.0122 0 00-.5586.1934c-.4505.327-.5511.9576-.2227 1.4082.328.4513.9583.5508 1.4102.2226.45-.3265.5497-.958.2226-1.4082a1.0083 1.0083 0 00-.8515-.416zm-7.914.4258c-.3956.0179-.7384.3119-.8028.7187-.0739.4623.2422.8998.707.9727.4626.0743.9001-.244.9727-.709.0745-.4639-.242-.8983-.7051-.9726a.8516.8516 0 00-.1719-.0098zm2.9784 0a.8513.8513 0 00-.879.9844c.0734.4642.5083.7813.9728.707.4642-.0729.7806-.509.707-.9727-.0638-.4068-.4067-.7008-.8008-.7187zm-4.9726 1.1406c-.391.0338-.7442.2962-.873.6934-.173.5292.117 1.0971.6464 1.2695.5306.1726 1.1008-.1183 1.2715-.6484.1724-.5296-.1182-1.097-.6484-1.2696a.9986.9986 0 00-.3965-.0449zm6.9648 0a.9988.9988 0 00-.3965.045c-.529.1725-.8218.74-.6504 1.2695.1714.53.743.821 1.2715.6484.5299-.1724.8213-.7403.6504-1.2695-.1298-.3972-.4834-.6596-.875-.6934zM12 21.9824c-.5572 0-1.0078.4532-1.0078 1.0098S11.4428 24 12 24a1.007 1.007 0 001.0078-1.0078c0-.5566-.45-1.0098-1.0078-1.0098Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFigshareIcon {
  readonly class = input<string>('');
}
