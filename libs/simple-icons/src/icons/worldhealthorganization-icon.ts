import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-worldhealthorganization-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>World Health Organization</svg:title>
    <svg:path
      d="M12.0214 1.4122c-1.064 0-.6118 1.5783-.5273 2.0925 0 .025.0857 3.5707.1024 4.3789.1619-.0429.3226-.0822.4761-.119l.3214-.081c.0154-.782.094-4.1658.0964-4.1837.0702-.551.6272-2.0877-.469-2.0877zm-.3118 12.0405c.119-.0405.238-.0762.3452-.1107l.2297-.0714c0-.2274.069-3.372.0809-3.9433a7.2271 7.2271 0 0 0-.732.2107c.0083.4285.0702 3.5719.0762 3.9147zm.3928 1.1926c-.0405.0143-.144.0583-.2095.081-.0655.0226-.1571.0606-.1571.0845 0 .0238.0666 3.6195.0666 3.6992 0 .744.3785.7487.3785 0 0-.0535.0762-3.9159.0762-3.9159s-.0905.0298-.1547.0512zm-.8558-10.1468a5.4953 5.4953 0 0 0-.8332.3392c-.2975.0988-.7141.119-1.151.588a5.8905 5.8905 0 0 0-.3963.5094c-.131.188-.1369.4904-.238.6535-.1381.238-.1048.3701-.1048.3701v.0072a.632.632 0 0 1-.1595.2952.6046.6046 0 0 1-.5546.2213c.1975.0988.476-.0392.476-.0392a3.6433 3.6433 0 0 0-.1047.3927c.2214-.501.425-.6843.488-.7355.0952.0214.2928.013.6594-.1976.4142-.238 1.0367-.6249 1.2129-.87a1.6175 1.6175 0 0 1 .7332-.5535c-.0131-.3773-.0203-.7035-.0274-.9808zM9.4993 6.0637L9.284 6.11l.257-.413.3.0095zm1.2795 8.64c0 .4665.3452.714.6892.9128 0-.0785-.0143-.801-.0143-.8129.0071-.144.1464-.2309.2595-.2845a5.6 5.6 0 0 1 .5463-.2082c.1023-.0358.1892-.0703.2868-.0988.6904-.2083 1.489-.4761 1.489-1.3093 0-.8332-.6844-1.1902-1.4283-1.4438 0 .2678-.013.6594-.019.9296.3166.119.526.275.526.5142 0 .3011-.3213.476-.5486.5618a5.9252 5.9252 0 0 1-.2797.0976c-.1833.0571-.381.119-.5654.1904a2.7126 2.7126 0 0 0-.2797.119c-.3285.1643-.663.406-.6618.832zm4.5753-8.1496c0-.8534-.619-1.8009-2.1365-2.1353a3.6528 3.6528 0 0 0-.463-.0536c0 .1286-.0095.4237-.0095.4237 0 .0929-.0095.4345-.012.5083a2.1424 2.1424 0 0 1 .2917.0404c.882.2107 1.1974.7142 1.1974 1.2165 0 .8105-.6927 1.1164-1.5473 1.3473l-.2821.0738c-.2583.0643-.5237.1262-.7868.1964a10.782 10.782 0 0 0-.2797.0797c-.9438.288-1.7556.7427-1.7556 1.9044 0 1.1617.926 1.5878 1.8294 1.8663q-.0083-.4987-.019-1.0022c-.3988-.1868-.6797-.4332-.6797-.8474 0-.4142.256-.6499.6475-.8332a3.0192 3.0192 0 0 1 .2786-.1083c.225-.0762.476-.1416.7439-.2059l.282-.0678c1.2724-.2976 2.7007-.6963 2.7007-2.4031zm-2.8482 9.5362c.4284.2166.8236.5165.989 1.0843.0726-.9403-.4546-1.3474-.9771-1.6223l-.012.538zM19.5199 5.29c.4595.5475 1.2629.87 1.733 1.4188-.3368-1.6223-1.589-2.947-3.0696-3.2637.7225.544.8784 1.2998 1.3366 1.845zM1.7235 9.4023c1.02-2.2198 2.5423-1.7497 3.1862-3.8647-.357.6487-2.0234.9224-2.7982 2.5852.394-.988.1964-2.4995.863-3.3148-1.9926 1.47-1.144 3.848-1.251 4.5943zm1.8472 5.324c.1833.864-.357 2.1114.5 3.304-.8856-.9926-2.7614-1.245-3.5256-2.7542.9522 3.6898 3.4517 2.928 4.5694 3.729-.9237-1.327-.1679-2.209-1.5438-4.2789zm-.2868 2.315c-.5463-2.0603.4273-2.7745-.3166-4.7503-.0774 1.114-.8201 1.6568-.319 3.6898C1.7639 14.2597.3963 13.6169 0 12.4338c.0274 3.2351 2.6269 3.7148 3.2839 4.6075zm3.992 3.4517c-.7653-1.0594-.238-1.658-2.3923-3.5815.4546.7023-.0143 1.5854 1.4354 2.959-1.4188-.8332-3.3755-.4761-4.3194-1.5962 1.6211 3.103 4.4694 1.8366 5.2763 2.2222zm10.4051-.6225c1.4497-1.3736.9808-2.2615 1.4354-2.959-2.1495 1.9235-1.627 2.5221-2.3923 3.5815.807-.3857 3.6552.8807 5.2751-2.2187-.9427 1.1213-2.8994.763-4.3182 1.5997zm2.2484-1.8437c.8534-1.1903.3166-2.44.4999-3.3041-1.376 2.0698-.6201 2.9518-1.5473 4.2848 1.1236-.801 3.6135-.0416 4.5693-3.729-.763 1.5069-2.6364 1.7592-3.522 2.7519zm-3.435 2.6126a10.617 10.617 0 0 0-2.3508-.3571 5.6834 5.6834 0 0 0-2.1424.3642 5.687 5.687 0 0 0-2.1424-.3642 10.617 10.617 0 0 0-2.3508.357c-1.2938.344-2.4114.6106-3.3862.119.9343.8332 2.0234 1.1249 3.5981.9523 1.3093-.1405 2.3698-.7963 3.6052-.7868h.0488a6.6023 6.6023 0 0 0-2.0377 1.5842l.5952.0798s.6272-1.2605 2.0698-1.589c1.4426.3285 2.0698 1.589 2.0698 1.589l.5951-.0798a6.6213 6.6213 0 0 0-2.0377-1.5758h.0488c1.2355-.0096 2.2936.6463 3.604.7867 1.5748.1702 2.665-.1262 3.5994-.9522-.9748.4868-2.0925.2202-3.3863-.1238zM3.0553 10.0569c-.5333 1.0236-1.3617 1.2581-1.27 3.3767-.45-1.883-1.5188-2.5804-1.5057-3.7813-.7427 3.1303 1.2426 3.5016 1.752 4.8133-.075-1.8794 1.1248-2.259 1.0236-4.4087zm.745-2.4162c-.1856.2595-.3154.3702-.8105.7785a4.0194 4.0194 0 0 0-1.4426 2.353c.0512-1.1473-.6582-2.7958-.1869-3.998-1.8246 2.577.1048 4.1207.1726 5.0538.4737-1.796 1.5616-1.8103 2.2674-4.1873zm18.6511 3.1316A4.0254 4.0254 0 0 0 21.01 8.4192c-.4951-.4083-.6249-.519-.8105-.7785.7058 2.3805 1.7937 2.3912 2.2614 4.1873.0679-.9331 1.9972-2.4769.1714-5.0537.4761 1.202-.232 2.8506-.1809 3.998zm1.5473 1.6663c-.3963 1.1831-1.764 1.8258-2.6483 3.5517.5011-2.0377-.238-2.5805-.319-3.6898-.7439 1.9782.238 2.6888-.3166 4.7503.6582-.9022 3.2577-1.3819 3.2851-4.617zm-3.0506-2.3817c-.1011 2.1496 1.0998 2.5293 1.0236 4.404.5106-1.3093 2.4995-1.683 1.752-4.8134.0143 1.201-1.0545 1.9044-1.5008 3.7754.0833-2.1079-.7451-2.3424-1.2748-3.366zM4.4824 5.296c.4607-.5474.6166-1.3009 1.3379-1.8448-1.4807.3166-2.7376 1.6413-3.0697 3.2636.463-.5546 1.2677-.8772 1.727-1.4247zm14.6126.2476c.644 2.1151 2.1663 1.645 3.1851 3.8648-.106-.7463.7427-3.1244-1.2497-4.5944.6665.8165.469 2.327.8629 3.3148-.7773-1.6687-2.44-1.9424-2.803-2.5911zm-5.1692 1.195a4.9895 4.9895 0 0 0-1.2176-.3273v.2714a4.761 4.761 0 0 1 1.1188.307.7141.7141 0 0 0 .0988-.251zM13.6175 4.12l.081-.0726-.1548-.0655-.407-.0083-.106.0738-.238-.0202v.0583a4.136 4.136 0 0 1 .419.044l.1987-.0178zm-.789 8.778c0-.069-.0917-.1368-.2274-.2011h-.025c0 .056 0 .332-.0084.4666.1679-.075.2607-.156.2607-.2655zM8.1126 7.7205a1.2997 1.2997 0 0 1 .0345-.1488.6891.6891 0 0 1-.1666.0167zm3.8956 11.9738a8.3031 8.3031 0 0 0 .8463-16.5598c0 .0155 0 .0321-.0095.0476-.0167.081-.0322.1535-.044.2178a8.0163 8.0163 0 0 1 4.8359 2.2615l-.9165.9165.0345-.162-.119-.0523-.1643-.0095.0345-.106-.1106-.3749-.2286-.2511-.7141-.3773-.062.0655-.1296.038a2.1424 2.1424 0 0 1 .3785 1.2034v.163l.357.4464-.1666.038.1107.1667-.313.3118-.1262-.238a2.133 2.133 0 0 1-.238.4678l.0702.0642-.9653.9653a3.2917 3.2917 0 0 0-.181-.1607 4.5833 4.5833 0 0 1-.2832.119l.0821.0643-.0488.0488-.119.0631-.0417.119-.0702-.0702-.2035.0679.056.0892.1404-.0369.0916.0072.0072-.05.0702-.0357.0214-.0417.1262-.0357h.0988c.019.0167.0392.0345.057.0524l-.388.369-.0285-.0405-.4.0654-.0892.0893-.0869.0107.2476-.238-.088-.044-.2322.3094.0679-.0071v.119l.0845.0333.0166.119-.1392-.0273-.1452.0261-.3571-.1797-.0286 1.4164c.8332.2785 1.708.6808 1.708 1.7378a1.3093 1.3093 0 0 1-.595 1.1164l-.018.0119-.0261.0179c-.3357.2213-.7665.3404-1.1403.457l-.0107.7403c.5951.2952 1.3152.7249 1.2486 1.9544-.0084.3023-.1262.3856-.2274.413a6.2511 6.2511 0 0 1-1.0712.1702v.2702a6.6499 6.6499 0 0 0 4.1397-1.8282l.964.9641a8.0186 8.0186 0 0 1-11.1049.0226l.9641-.964a6.6451 6.6451 0 0 0 4.0814 1.8031v-.2702a6.3785 6.3785 0 0 1-3.8945-1.7222l.257-.2583.3572.0405.188-.2024.4928.0167.0726-.1702-.0179-.0726a4.999 4.999 0 0 0 2.5102 1.0033v-.2713a4.7526 4.7526 0 0 1-2.7042-1.2403l.9653-.9652a3.4338 3.4338 0 0 0 .782.5249.913.913 0 0 1 .0976-.2536 3.1208 3.1208 0 0 1-.6892-.463l.9677-.9664a1.7687 1.7687 0 0 0 .5166.2868v-.2904a1.4842 1.4842 0 0 1-.319-.1893l.2725-.2725a6.7378 6.7378 0 0 1-.288-.0929l-.1833.1833a1.4759 1.4759 0 0 1-.2309-.344 3.2815 3.2815 0 0 1-.476-.2547 1.8675 1.8675 0 0 1-.9035-1.6401 1.9687 1.9687 0 0 1 .3904-1.2498l-.9617-.9617a4.7502 4.7502 0 0 1 2.5757-1.2664c0-.0928 0-.1845-.006-.2714a5.0204 5.0204 0 0 0-2.76 1.3498l-.1631-.1595a4.504 4.504 0 0 0-.1297.2511l.1023.1036a5.0145 5.0145 0 0 0-1.364 3.3552H5.6096a6.382 6.382 0 0 1 1.7699-4.3253l.4332.4345a.5487.5487 0 0 0 .062 0 .6546.6546 0 0 0 .2463-.0715l-.551-.551a6.488 6.488 0 0 1 .9521-.7594 1.7925 1.7925 0 0 1 .0679-.2 3.2053 3.2053 0 0 1 .2083-.2797 6.6653 6.6653 0 0 0-1.4188 1.0462l-.9641-.964a7.9984 7.9984 0 0 1 4.7729-2.2377 2.1298 2.1298 0 0 1-.012-.0595c-.0118-.0631-.0261-.1333-.0392-.2071a8.3043 8.3043 0 0 0 .8665 16.5622zm1.7985-5.731v-.0071zm4.0206-8.108a8.0056 8.0056 0 0 1 2.2198 5.4561h-1.37a6.626 6.626 0 0 0-.7141-2.9137l.0119-.0238.094.05.0226-.0726-.238-.4273-.2892-.3999-.3428-.2797c-.119-.1452-.238-.2857-.3654-.4213zm-1.7437 1.7462l.3273.0143.0786.094-.0393.1392.4511.2857.0893-.0107.5832.6665.238-.0833a6.3559 6.3559 0 0 1 .5952 2.6042h-1.364a4.9728 4.9728 0 0 0-.1274-1.0378l.063-.0846.0846-.4272-.0643-.4595-.1642-.5284-.381-.557.093.0487.0463-.0464-.3059-.2071-.0202.0678.3059.4369.1726.357.119.3571.0393.238.063.4024-.119.0083s-.132-.2464-.1725-.3476l.0607-.0916-.119-.1666V9.107l-.0834-.1047-.1035.013a2.924 2.924 0 0 0-.119-.2035l.0737.037.019-.0191-.0392-.0857.0893-.05-.0405-.05-.1321.05.0488-.207-.0786-.0453-.0702.1654a5.0752 5.0752 0 0 0-.4963-.6308zm-.2737 3.1981l.2451-.1333.25-.038.0547-.119.1393-.0834.0536-.119.0428-.2012a4.071 4.071 0 0 1 .0548.2155l-.1321.394v.1332l.1916-.2559a4.611 4.611 0 0 1 .0678.7142h-1.1902l-.0274-.1036.1393-.1107.0273-.0666.0607-.0452.162-.0167.0166-.0714zm-1.6378-.9367l.119-.0285v-.0286l-.119-.0821.0416-.2571.1464-.1464a3.2327 3.2327 0 0 1 .2536.3297l-.0512.1583-.1333-.0952-.1012.0273.05.094h.05l-.056.1393-.038-.056zm.5225 4.5313l-.2952-.0833-.088.032-.1667-.1273-.1571-.056c.0774-.0559.1524-.119.225-.176l.238.1713.1857.0976.0916.0917zm-.15-5.2633l.9653-.9653a4.8121 4.8121 0 0 1 .5951.8023l-.119.0333.006.2154.357.2286a4.6657 4.6657 0 0 1 .2262.6094l-.0631.0928-.131.0833-.032.2-.0893.05-.075.088-.075-.0273h-.1333l.0774-.1048.0559-.2725.088-.0548-.2487-.2559-.194.0655-.044.182-.119.1322-.1274-.1048-.0452-.1118.0726-.0453.0404.0738.0595-.0226-.0261-.119h-.0845l-.006.05-.056.0107-.3035-.3559-.1023-.0774.0393-.0428.0904-.031-.0833-.0333s-.106.0238-.119.0238l.0607.0762h-.1524a3.2982 3.2982 0 0 0-.3047-.3928zm.4916 5.136l-.131-.131.1-.1298.1262-.257-.0488-.0715.0833-.1904-.0095-.1714-.05-.1773-.119-.0417-.044.1-.0715-.019a3.235 3.235 0 0 0 .2857-.4988l.119-.0523.069-.0929.0334.0381.0833-.1-.0666-.0833.0607-.0167.1118.0453h.2107l.1274-.0667.3332-.088-.063-.1107-.0215-.1345.1786.0785.0666-.0393-.0333-.138-.2154.0869-.238-.05-.1834-.375h1.0439a4.7514 4.7514 0 0 1-1.3176 3.1042l-.1429-.144.062-.1917-.112-.4225zm.1845 2.6625l.1285-.2762-.05-.119.1893-.1666v-.1l-.1619-.1012.1333-.2654.2-.2618-.2-.2155h-.15l-.0928-.1511a7.5411 7.5411 0 0 0 .238-.206l.9654.9653a6.4725 6.4725 0 0 1-1.1998.8987zm1.2045-1.2736l.1071-.119-.1011-.5285-.069-.0273.0428-.0893-.2285-.0714-.044.188-.0227.238-.0476.0441-.4166-.4166a5.0192 5.0192 0 0 0 1.3973-3.2934h1.3653a6.3737 6.3737 0 0 1-1.7973 4.2587zm.3761.375a6.6463 6.6463 0 0 0 1.877-4.4492h1.364a8.008 8.008 0 0 1-2.2757 5.4144zm-8.2126-1.3224a5.1601 5.1601 0 0 1-.2833-.319l.0417-.3452-.144-.3308-.0358-.5178-.1618-.3142.0333-.1952-.1952-.375-.1702-.0856.069-.1988-.0702-.1571.0702-.1798h.1869l.0654-.1083h.319l.0488.094-.0595.3298-.038.0559.119.2607-.0786.0428-.0548-.069-.0238.0262.0548.1547.094.181h.044l.031-.1762-.0452-.0596v-.1095l-.0143-.2261.0595-.3975-.0643-.1072h.2286a3.3898 3.3898 0 0 0 .939 2.1627zm-.9046-2.6673l-.1286.2023h-.2213l-.0179-.013a4.849 4.849 0 0 1-.069-.6488h.4106l-.0988.3285zm.4487-.9368l.025-.2713.1619-.094.2892.0511.044.0524a3.2136 3.2136 0 0 0-.044.469h-.3273zm1.389 1.02l.0679-.0344.1702.1345-.0774.063.2012.1334-.0048-.1429.1071-.1773.1119.119.119.1643-.219.0452.094.188.144-.0761-.0142-.0595.1071-.0727.063-.2975a1.7746 1.7746 0 0 0 .3131.476l-.964.9642a3.1196 3.1196 0 0 1-.8451-1.8116l.1975.2107h.1857zm-.9926-3.9825l.964.9653a3.441 3.441 0 0 0-.5117.7368h-.0667l-.1357.0416h-.0476l-.144.1345.182-.038.1643-.0417-.0285.063-.144.0882h-.0726l-.212.1618-.2046-.0166-.2964.5522.0583.1107-.1607.1786-.025.238h-.6046a4.7514 4.7514 0 0 1 1.2855-3.1744zM7.283 15.4202l.3059.1797.063.0428-.2213.2214q-.1548-.1607-.3-.332zm-.306-3.8386c0 .1321.0168.2643.031.394l-.1666.038-.0345.1691-.3476.4428.0084.6082-.3571.119h-.1952a6.3654 6.3654 0 0 1-.3047-1.7723zm-1.3473 1.764l-.0797-.0155-.075-.0845-.3833-.0333.119.1606-.357-.0666.0928-.0857-.0869-.0857-.2559.1119-.0916.169.0357.3892.2952.6999.1416.2213.081.0298-.2226-.4225-.0488-.2155.05-.0523-.031-.119.1345.0178.206.3118.0511.0203v-.2274l.0833.0488.0179.119.2166.0572.0905-.0643.031.0214v.1655l.0951.119.119.0262.2524.4273.1535.0428.0476-.2a6.7034 6.7034 0 0 0 .9403 1.2141l-.964.9641a8.0127 8.0127 0 0 1-2.3115-5.4287h1.3652a6.6451 6.6451 0 0 0 .288 1.764zm.5952-7.514l.964.964a6.6546 6.6546 0 0 0-1.8496 4.5158h-1.364A8.008 8.008 0 0 1 6.219 5.8316zm9.879-.4975l-.0822-.1333-.1785-.0893-.1393.106.1786.0951.1916.1464zm-.8344 3.8504v.1047l.238-.0702.0726-.144-.163-.2143.0869-.1309.2202.1571.0404-.0321-.044-.031-.05-.0952.0905-.0523-.0881-.119-.2071.1047-.069.1297-.0417.113.0916.1536-.0333.0714zm-9.8671 6.1202l.0179-.0619-.119-.2666-.1453-.0536zm5.5798-5.1276c0 .2286.1393.3904.3928.5297v-.1024l-.1595-.1594.0845-.1536.069-.019c0-.2666-.0106-.5654-.0118-.6082h-.012c-.2356.1309-.363.288-.363.513Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWorldhealthorganizationIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
