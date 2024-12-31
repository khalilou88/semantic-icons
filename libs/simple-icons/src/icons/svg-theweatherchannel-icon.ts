import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-theweatherchannel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>The Weather Channel</title>
      <path
        d="M0 0v24h24V0Zm5.7324 6.1055c.0355.1689.0528.4568.0528.752v.6152c0 .095-.0118.2237-.0118.2597.211-.199.56-.334.873-.334.392 0 .7054.1698.8028.4414.0601.1744.0781.2766.0781.5723v2.1582h-.789V8.4961c0-.3071-.0843-.42-.3145-.42-.199 0-.4583.1198-.6386.2833v2.211h-.8184V7.002c0-.2898-.0239-.5777-.0605-.7051zm-4.205.2754h3.0195l-.1387.7011h-1v3.4883h-.8574V7.082H1.5273Zm7.8906 1.037c.3546 0 .691.1213.8906.3262.2831.2898.4102.704.4102 1.3496v.1875H8.9355v.0235c0 .476.235.748.6503.748.2765 0 .5362-.1024.7832-.3086l.3145.4825c-.3564.2879-.7313.4277-1.164.4277-.8867 0-1.459-.6274-1.459-1.5957.0005-.5566.115-.924.3867-1.2246.253-.2837.5607-.416.9707-.416m.0117.5898c-.3078 0-.4824.2426-.4824.67v.0117h.9336v-.0371c0-.229-.023-.3481-.0957-.463-.0782-.1196-.1932-.1816-.3555-.1816m5.959 3.6426c.0354.1689.0547.4568.0547.752v.6132c0 .0968-.0137.2237-.0137.2598.211-.199.5606-.332.875-.332.3913 0 .704.169.8008.4394.0595.1767.0781.2791.0781.5742v2.1582h-.789V14.041c0-.306-.0855-.4219-.3145-.4219-.199 0-.457.1217-.6367.2852v2.211h-.8203v-3.5684c0-.2897-.0245-.5777-.0606-.705zm-13.8926.2754h.8926l.3613 1.6523c.1689.7838.2227 1.379.2227 1.379.0174-.1624.0911-.7603.2168-1.338l.373-1.6933h.9219l.3886 1.875c.0782.3913.1797 1.1093.1797 1.1093.0115-.1334.1438-.9846.2286-1.3945l.3437-1.5898h.8848L5.498 16.1484h-.9218l-.375-1.7031c-.1263-.5602-.1865-1.1026-.1973-1.2168 0 0-.0725.5902-.2012 1.205l-.3476 1.715h-.957Zm12.043.17c-.0301.2818-.047.6197-.047.9335h.7228l-.2051.5547h-.5176v1.5488c0 .3913.0719.4942.3496.4942.0721 0 .1448-.0191.289-.0606l.1016.4805c-.2368.0967-.4472.1406-.6582.1406-.4093 0-.7339-.1808-.83-.4531-.0482-.134-.0548-.1947-.0548-.4766V13.582h-.3066v-.5527h.3067c0-.3005-.0008-.5007.0293-.7285zm7.8828.8593c.0727.1268.1137.2663.127.4394.1153-.1556.3062-.3239.459-.3906.066-.0294.1746-.0488.2636-.0488.1214 0 .174.0117.3008.0664l-.2207.7129c-.08-.042-.1462-.0606-.2364-.0606-.1815 0-.3437.0835-.4921.2578v2.1836h-.8106v-2.0625c0-.4147-.0472-.7286-.1133-.9023zm-13.5996.0078c.3552 0 .6942.1212.8925.3262.2838.2903.4102.7058.4102 1.3496v.1855H7.3418v.0254c0 .4755.2356.7461.6504.7461.2777 0 .5355-.1023.7832-.3066l.3144.4824c-.3558.2885-.73.4277-1.164.4277-.8854-.0006-1.459-.6267-1.459-1.5957 0-.5554.1137-.924.3848-1.2246.2536-.2837.5607-.416.9707-.416zm11.1308 0c.3559 0 .693.1212.8926.3262.2825.2903.4102.7058.4102 1.3496v.1855h-1.7852v.0254c0 .4755.2364.7461.6523.7461.2771 0 .5362-.1023.7832-.3066l.3125.4824c-.3552.2885-.7281.4277-1.1621.4277-.8854 0-1.459-.6267-1.459-1.5957 0-.5554.1137-.924.3848-1.2246.2536-.2837.5613-.416.9707-.416m-8.0527.002c.5175 0 .8733.1925.9941.5351.0415.1263.0607.223.0547.5547l-.0176 1.0371v.0528c0 .3306.054.4567.2891.6328l-.4277.4941c-.187-.0787-.3555-.2169-.4336-.375-.0601.059-.1274.122-.1875.164-.1509.1083-.3667.168-.6192.168-.6882 0-1.0625-.3499-1.0625-.9648 0-.723.4995-1.0586 1.4805-1.0586.0607 0 .1161-.0015.1816.004v-.127c0-.342-.0662-.457-.3613-.457-.2584 0-.5594.1279-.8906.3515l-.3438-.58c.1635-.1029.2838-.163.502-.252.3005-.1275.5593-.1797.8418-.1797m-3.0664.5879c-.3072 0-.4805.2425-.4805.6699v.0117h.9336v-.037c0-.2291-.0242-.3488-.0957-.463-.0793-.1214-.194-.1816-.3574-.1816m11.1035 0c-.2895.0146-.455.2559-.455.6699v.0117h.9355v-.037c0-.2291-.0256-.3488-.0977-.463-.0781-.1214-.1932-.1816-.3555-.1816-.0096 0-.018-.0005-.0273 0m-7.832 1.211c-.5614.0005-.754.104-.754.4706 0 .241.1519.4043.3575.4043.1502 0 .2997-.0787.4199-.211l.0137-.664zM5.912 17.289c.0349.1695.0547.457.0547.7539v.6133c0 .0962-.0117.223-.0117.2598.2103-.1996.5598-.332.873-.332.392 0 .704.1677.8008.4394.0607.1755.0781.2779.0781.5742v2.1562h-.789v-2.0742c0-.3065-.0841-.4218-.3125-.4218-.199 0-.4584.1197-.6387.2832v2.2129h-.8203v-3.5684c0-.2903-.0245-.5777-.0606-.7051zm15.6836.0039c.03.1689.043.3706.043.8027V20.5c0 .5302.0058.6014.0527.6856.03.0534.098.084.164.084.0301 0 .0459-.001.088-.0118l.1386.4824c-.1376.0541-.3055.084-.4804.084-.3445 0-.6195-.161-.7168-.4219-.0607-.1557-.0723-.2514-.0723-.6914v-2.3008c0-.4039-.013-.6514-.043-.9297zm-18.0566.1816c.4153 0 .8309.1331 1.0605.332l-.3789.5723q-.3164-.2344-.668-.2344c-.2837 0-.5626.1378-.7129.3614-.1623.2404-.2343.5906-.2343 1.078 0 .5723.0476.8916.1738 1.1212.1689.3077.4467.4687.8086.4687.2464 0 .4697-.0711.7168-.2695l.3847.5293c-.3318.2699-.6854.3906-1.162.3906-.579 0-1.024-.1862-1.3673-.5781-.3378-.3793-.5078-.8851-.5078-1.5 0-.5241.092-.9395.2832-1.3008.327-.6083.9285-.9707 1.6035-.9707zm8.5117 1.1153c.0721.1262.1132.2585.1132.3847.1197-.083.2227-.1557.3555-.2285.1623-.0835.3724-.1308.5528-.1308.3438 0 .6466.179.7421.4453.0427.1142.0606.247.0606.4394v2.2539h-.7969V19.746c0-.3492-.0591-.4512-.2695-.4512-.1623 0-.3724.109-.5606.2774v2.1816h-.8086v-2.2363c0-.2651-.0339-.5165-.1054-.7227zm3.1445 0c.071.1262.1133.2585.1133.3847.1208-.083.2238-.1557.3554-.2285.1641-.0835.375-.1308.5547-.1308.3433 0 .6447.179.7403.4453.0445.1142.0605.247.0605.4394v2.254h-.7949V19.746c0-.3492-.0611-.4511-.2715-.4511-.1623 0-.3748.109-.5605.2773v2.1816h-.8086v-2.2363c0-.265-.036-.5165-.1074-.7226zm-5.5312.0117c.5163 0 .8725.192.9921.5371.0433.1262.0633.2247.0567.5547l-.0176 1.037v.0528c0 .3318.0534.4573.289.6328l-.4296.4942c-.1864-.0788-.3541-.2175-.4317-.375-.0607.0613-.1274.1214-.1875.164-.1508.1088-.3674.168-.621.168-.687 0-1.0606-.3498-1.0606-.9629 0-.7237.5002-1.0625 1.4824-1.0625.0601 0 .1155-.0002.1817.006v-.125c0-.3451-.067-.4571-.3633-.4571-.2597 0-.5607.1266-.8907.3496l-.3457-.5801c.1635-.1022.285-.1618.502-.252.3018-.1274.5594-.1816.8438-.1816m9.2695 0c.3546 0 .6936.1212.8926.3262.283.2885.4101.7045.4101 1.3476v.1875H18.453v.0254c0 .4749.235.7461.6504.7461.2777 0 .5362-.1042.7832-.3086l.3145.4844c-.3559.2885-.7301.4258-1.1641.4258-.886 0-1.457-.6268-1.457-1.5957 0-.5548.1142-.9221.3847-1.2227.2537-.2843.5594-.416.9688-.416m.0117.5898c-.3065 0-.4805.2414-.4805.67v.0117h.9336v-.0352c0-.2296-.0235-.3512-.0957-.4648-.0793-.1214-.1939-.1817-.3574-.1817m-9.0781 1.211c-.5596 0-.75.104-.75.4707 0 .2416.148.4043.3535.4043.1509 0 .3017-.0795.4219-.213l.0117-.662z"
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
export class SvgTheweatherchannelIcon {
  readonly class = input<string>('');
}
