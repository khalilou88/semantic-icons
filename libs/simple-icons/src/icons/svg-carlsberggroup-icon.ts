import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-carlsberggroup-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Carlsberg Group</title>
      <path
        d="M1.9512 5.2813a.1934.1934 0 0 0-.127.0507C.7221 6.3193 0 7.606 0 9.0918c0 2.1987 1.7596 3.8984 3.83 3.8984 1.0356 0 2.0103-.4576 2.6895-1.1347.1559-.1556-.0356-.3535-.2011-.2012-.5049.4655-1.232.7539-1.9727.7539-1.564 0-2.875-1.2885-2.875-2.8437 0-1.2878 1.0338-2.584 2.332-2.584.473 0 .9813.1897 1.2813.4902.0258.0247.0668.0247.0898-.0059l1.5938-2.0976a.0505.0505 0 0 0-.0371-.086H1.9512zm17.4824 0a.1691.1691 0 0 0-.1035.037c-.1101.0871-.2604.1134-.3946.0606a.251.251 0 0 0-.3105.1074.2534.2534 0 0 0 .0605.3242.4013.4013 0 0 1 .1465.3711.1632.1632 0 0 0 .0196.1075.1689.1689 0 0 0 .2304.0625l.2246-.129a.1277.1277 0 0 1 .1739.047.1254.1254 0 0 1-.047.1718l-.2245.1309a.1676.1676 0 0 0-.0606.2304c.0197.0347.0507.057.084.0703a.401.401 0 0 1 .248.3125.2523.2523 0 0 0 .25.2149.25.25 0 0 0 .2481-.2149.404.404 0 0 1 .248-.3125c.0344-.0134.0647-.0356.084-.0703.0468-.0804.0207-.1843-.0605-.2304l-.2227-.1309a.125.125 0 0 1-.0468-.1719.1256.1256 0 0 1 .1718-.0468l.2247.1289a.1687.1687 0 0 0 .2304-.0625.165.165 0 0 0 .0196-.1075.401.401 0 0 1 .1464-.371.2524.2524 0 0 0 .0606-.3243c-.064-.1101-.1952-.1524-.3106-.1074a.4007.4007 0 0 1-.3945-.0605.1669.1669 0 0 0-.1035-.0371c-.0928 0-.168.0767-.168.1699v.2578a.1271.1271 0 0 1-.127.127.1265.1265 0 0 1-.1269-.127v-.2578a.1704.1704 0 0 0-.17-.17zM8.6172 6.6288a.055.055 0 0 0-.0547.0566v.1348c0 .0307.0312.0496.0547.0567l.168.0488c.0231.0068.0488.0236.0488.0547v3.3886c0 .721.5484.9258.914.9258h1.879c.4258 0 .832-.3108.832-.8125 0-.7579-1.168-.69-1.168-1.125 0-.1758.1718-.2383.3848-.2383.1603 0 .3807.0711.5039.1622.043.0321.0751.0003.086-.0235l.289-.6601c.0127-.0286-.0034-.0762-.0508-.0762h-1.3496c-.3685 0-.6953.3184-.6953.711 0 .781 1.0156.6427 1.0156 1.1718 0 .205-.1636.3809-.3906.3809-.4485 0-.638-.2996-.6582-.4727-.0044-.0333-.0464-.0564-.0762-.045l-.1855.0743c-.0353.0139-.0424.0626-.0235.086.0322.0393.0508.0782.0508.1406a.2205.2205 0 0 1-.2226.2207c-.1287 0-.2188-.1085-.2188-.2207V6.6855a.0569.0569 0 0 0-.0566-.0566H8.6172zm3.961 0a.055.055 0 0 0-.0548.0566v.1348c0 .031.0306.0491.0547.0567l.168.0488c.0243.0065.0488.0236.0488.0547v3.3789c0 .5698.4092.9355 1.0645.9355h.4453c.4766 0 .7793-.3283.7793-.7676v-.5175c.1261.082.2965.162.4668.2129.1434.6678.7362 1.1582 1.4394 1.1582.749 0 1.1167-.5062 1.1973-.6914.0828-.1912-.0943-.2292-.168-.1329-.1606.2109-.3916.3223-.7011.3223-.5259 0-.793-.4336-.793-.5508.8506 0 1.398-.4593 1.4101-1.0683.1607-.1105.3393-.211.4532-.211.1235 0 .2226.0674.2226.2227v1.9668c0 .0305.0239.0566.0547.0566h1.0762a.0575.0575 0 0 0 .0566-.0566v-.1367c0-.0316-.0327-.0478-.0566-.0547l-.166-.0508c-.0242-.0062-.0489-.0233-.0489-.0547V9.2461c0-.1361.1238-.2422.2598-.2422.2281 0 .1801.2422.5313.2422.2975 0 .6562-.3038.6562-.873 0-.3497-.1737-.6575-.5176-.8555-.1363-.0788-.2525.0866-.1445.1758.1582.1314.3203.3524.3203.4941 0 .1482-.1158.248-.2148.248-.23 0-.383-.2792-.6504-.2792-.1487 0-.2852.1234-.2852.2597 0 .0714.0371.1293.0371.205 0 .0622-.0476.1173-.1093.1173-.1816 0-.1824-.3028-.5508-.3028-.3293 0-.7353.2644-1.002.4708-.129-.2596-.4157-.4708-.8672-.4708-.8071 0-1.449.6312-1.4726 1.4258a2.864 2.864 0 0 1-.4336-.2343V8.578a.0556.0556 0 0 0-.0547-.0566h-.8047a.0572.0572 0 0 0-.0566.0566v.7735c0 .0741.0377.111.0879.1406l.371.2246v.7422c0 .2909-.2488.371-.459.371-.1917 0-.457-.118-.457-.3905v-3.754a.0565.0565 0 0 0-.0566-.0566h-1.0762zM3.6444 8.4355c-.6993 0-1.2695.6622-1.2695 1.4727 0 .8164.5702 1.4727 1.2695 1.4727.6496 0 .6635-.3848.8965-.3848.2681 0 .223.3848.5781.3848.3213 0 .9363-.5937 1.2403-.9082v.7656c0 .031.0258.0566.0566.0566h1.0762a.0572.0572 0 0 0 .0566-.0566v-.1367c0-.0317-.033-.048-.0566-.0547l-.166-.0508c-.0239-.0065-.0508-.0233-.0508-.0547V9.2461a.239.239 0 0 1 .2422-.2422c.0804 0 .1484.068.1484.1484 0 .1084-.086.112-.086.2735 0 .1664.1416.3144.3145.3144.3653 0 .6563-.2892.6563-.6543 0-.3653-.291-.6504-.6563-.6504-.4977 0-.5286.42-.711.42-.2012 0-.1145-.42-.6815-.42-.3277 0-.5372.2537-.5372.3711 0 .0623.05.1309.1309.1309.0876 0 .0885-.0625.1563-.0625.0557 0 .1074.0313.1074.0996v1.0547c-.2275.2034-.6113.5215-.791.5215-.099 0-.1914-.0809-.1914-.1797V8.875c0-.0315.0247-.0491.0488-.0566l.168-.0489c.0242-.0073.0546-.0259.0546-.0566V8.578a.0563.0563 0 0 0-.0546-.0566h-.8985c-.0369 0-.0604.0265-.0664.0566-.0188.099-.058.166-.1445.166-.1398 0-.2686-.3086-.8399-.3086zm18.3516 0c-.699 0-1.2695.662-1.2695 1.4727 0 .8165.5704 1.4727 1.2695 1.4727.532 0 .625-.2657.7207-.2657.0652 0 .0957.036.0957.0977v.545c0 .383-.2736.6679-.6387.6679-.3647 0-.6543-.2667-.6543-.6192 0-.037-.032-.0546-.0566-.0546h-.211a.054.054 0 0 0-.0546.0546c0 .3525-.6135 1.4063-2.7168 1.4063-2.4935 0-4.609-1.504-7.6465-1.504-1.5531 0-3.7493.6616-5.2656 1.9474-.0303.0256-.0155.0713.0136.0878l2.293 1.252c.0377.0212.0598.0128.0879-.0156 1.231-1.2344 2.414-1.7188 4.207-1.7188 1.306 0 3.8178.7305 5.2969.7305 2.685 0 3.6063-1.0906 3.8906-1.5977.2111.3587.6258.5762 1.0957.5762.6902 0 1.2754-.5569 1.2754-1.25V8.875c0-.031.0253-.0488.0488-.0566l.166-.0489c.0246-.007.0567-.0257.0567-.0566V8.578a.0574.0574 0 0 0-.0566-.0566h-.8965a.069.069 0 0 0-.0684.0566c-.019.099-.056.166-.1426.166-.1405 0-.2682-.3086-.8398-.3086zm-4.8828.5508c.2594 0 .2851.2045.2851.2852 0 .234-.322.711-.9218.711 0-.6246.3272-.9965.6367-.9962zM3.9727 9.086c.2352 0 .4882.1842.4882.3692v.9101c0 .1849-.253.3711-.4882.3711-.433 0-.713-.346-.713-.8281 0-.4832.28-.8223.713-.8223zm18.3496 0c.2356 0 .4902.1842.4902.3692v.9101c0 .185-.2546.3711-.4902.3711-.4327 0-.711-.3457-.711-.8281 0-.4832.2783-.8223.711-.8223zm-8.9649 5.2403c-.877.0314-1.4316.5538-1.4316 1.789 0 1.3227.4517 1.8106 1.3164 1.8106.2433 0 .549-.0718.7305-.1621.0477-.0244.0724-.043.1152-.043.0622 0 .0865.0526.1152.086.038.0427.0715.0624.1621.0624h.1758v-1.6054c0-.0767-.0282-.1094-.0996-.1094h-.2578v1.0547c0 .1338-.005.1635-.1055.2305 0 0-.2474.1425-.6054.1425-.874 0-1.1426-.3731-1.1426-1.4668 0-1.127.4262-1.4609 1.1328-1.4609.2815 0 .4959.0622.668.1816.0428.0285.0757.043.0996.043.0289 0 .044-.019.0586-.0527l.1093-.3242s-.4395-.1758-.955-.1758c-.029 0-.0577-.001-.086 0zm4.2344 1.0195c-.7353 0-1.1309.4557-1.1309 1.291 0 .8407.3956 1.289 1.1309 1.289.7355 0 1.1328-.4483 1.1328-1.289 0-.8403-.3973-1.291-1.1328-1.291zm-1.4121.0059c-.2107.0082-.4201.0775-.5586.162-.0477.0292-.0672.043-.1055.043-.0431 0-.0534-.0372-.0918-.0898-.0284-.0428-.0557-.0586-.1562-.0586h-.1348v2.3496c0 .0762.03.1113.1016.1113h.252v-1.8964c0-.0527.0003-.0569.0527-.0997.0619-.0522.273-.1914.5644-.1914.0955 0 .209.0137.209.0137v-.3398s-.0516-.004-.0898-.004c-.014 0-.029-.0005-.043 0zm6.5469 0c-.2245 0-.4535.0722-.6016.162-.0475.0292-.0672.043-.1055.043-.0428 0-.0534-.0372-.0918-.0898-.0284-.0425-.0559-.0586-.1562-.0586h-.1348v3.2012c0 .0763.0302.1093.1016.1093h.252v-.8847c0-.071.0154-.0996.0488-.0996.0193 0 .0426.0098.0761.0293.1576.0805.363.162.6114.162.5108 0 .998-.4017.998-1.2948 0-.8929-.444-1.2793-.998-1.2793zm-3.5684.0566v1.6953c0 .5587.2965.8223.879.8223.2146 0 .44-.0718.5878-.1621.0477-.029.067-.043.1055-.043.0426 0 .0516.0372.0898.0898.029.0428.0579.0586.1582.0586h.1328v-2.3496c0-.0764-.028-.1113-.0996-.1113h-.2539v1.9063c0 .0527.0019.0623-.0508.1054-.062.0526-.2682.1914-.5976.1914-.4584 0-.5977-.1687-.5977-.6035v-1.4883c0-.0764-.028-.1113-.0996-.1113h-.2539zm-1.6113.2305c.0153-.0007.029 0 .0449 0 .5062 0 .7559.339.7559.998 0 .6592-.2497.998-.7559.998s-.754-.3386-.754-.998c0-.638.2343-.9775.709-.998zm5.0644.0273c.487 0 .7364.3403.7364.9707 0 .7262-.3407.9746-.7559.9746-.2915 0-.4869-.1388-.5488-.1914-.0525-.0431-.0528-.0527-.0528-.1054V15.959c0-.0526.0098-.0635.0528-.1016.0619-.0523.2433-.1914.5683-.1914z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCarlsberggroupIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
