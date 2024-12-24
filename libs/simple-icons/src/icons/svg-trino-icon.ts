import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-trino-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Trino</title>
      <path
        d="M14.124 16.8529a.1615.1615 0 1 1 .1576.1614.1577.1577 0 0 1-.1576-.1614zm-5.607-.1576a.1614.1614 0 1 0 0 .3228.1614.1614 0 0 0 0-.3228zm10.1341-.6648v1.9869c-.031.5788-.524 1.0237-1.1029.9954h-.3843a5.0596 5.0596 0 0 1-1.1298 1.7178.3192.3192 0 0 0 0 .465l.2382.2191a.3036.3036 0 0 1 .0385.4304c-1.126 1.3835-2.9669 2.1521-5.0498 2.1521a6.575 6.575 0 0 1-4.8192-1.8985c-.0029-.0032-.0059-.0063-.0087-.0096a.6302.6302 0 0 1 .0548-.8896c.137-.1265.1371-.3462 0-.4727a4.944 4.944 0 0 1-1.126-1.714h-.3497c-.5797.0284-1.0737-.416-1.1068-.9954v-1.9869c.0351-.5779.5286-1.02 1.1068-.9915h.2728a5.7648 5.7648 0 0 1 2.0791-3.0936c-.4227-1.0991-1.1529-3.2551-1.226-5.0075C6.0229 4.4705 6.2189.078 7.8253.001c1.6064-.0768 1.3719 4.0275 1.0991 6.6946a32.732 32.732 0 0 0-.123 4.4503 6.994 6.994 0 0 1 2.4826-.4304 7.2414 7.2414 0 0 1 1.7371.2075c.2614-1.2682.8762-3.574 2.0292-5.1958 1.6717-2.352 3.4357-4.7808 4.6116-4.1006 1.176.6802-.3074 3.1398-1.3297 4.4272-1.0222 1.2874-2.7862 3.2089-3.3742 4.2274-.2114.3843-.4304.8032-.5956 1.1529a5.7375 5.7375 0 0 1 2.9169 3.6125h.073v-2.3058a.3075.3075 0 0 0-.1806-.2844.9148.9148 0 0 1-.5573-.8148 1.0184 1.0184 0 0 1 .9045-.9044c.5593-.0598 1.061.3452 1.1208.9044a.9187.9187 0 0 1-.5534.8148.3074.3074 0 0 0-.1691.2844v2.1522a.3113.3113 0 0 0 .1691.2805.9724.9724 0 0 1 .5648.857zm-1.0222-3.9737a.4345.4345 0 0 0 .4612-.4151.4151.4151 0 1 0-.4612.4151zm-.4227 3.4779c.0978.4794.148.9672.1498 1.4565v.3651h.4113a.3228.3228 0 0 0 .3228-.319v-1.0069c-.0111-.2967-.2733-.5256-.5688-.4957h-.3151zm-3.7278-4.481.611.2383a36.6046 36.6046 0 0 1 2.3828-3.8661c1.2874-1.7255 2.3365-3.5817 1.8715-3.8699-.465-.2883-1.6179 1.2297-2.7708 3.109a34.8978 34.8978 0 0 0-2.0945 4.3887zm-4.0544.6726.0154 1.3335c-.0039.2007.1881.3587.3843.3152a6.4317 6.4317 0 0 1 1.4565-.1653 5.995 5.995 0 0 1 1.4527.1729c.1956.0398.3853-.1153.3843-.3151v-1.3412a.319.319 0 0 0-.2421-.3113 6.664 6.664 0 0 0-1.6026-.1845 6.7093 6.7093 0 0 0-1.6025.1845.3188.3188 0 0 0-.246.3113zm1.7063 6.8637v.3843a.6878.6878 0 0 1-.4996.269c-.3074 0-.538-.4189-.538-.4189a.073.073 0 0 0-.1-.0307l-.0024.0013a.0693.0693 0 0 0-.0245.0947c.0115.0231.2806.4957.6649.4957a.7144.7144 0 0 0 .3843-.1268.3267.3267 0 0 1 .3612 0 .8332.8332 0 0 0 .4727.1345.957.957 0 0 0 .6572-.4803.0692.0692 0 0 0-.0269-.0961.0692.0692 0 0 0-.0999.0269c0 .0231-.2191.3843-.5419.4074a.8036.8036 0 0 1-.5765-.269v-.3843a.3154.3154 0 0 1 .1268-.2537c.196-.1499.415-.3958.415-.4919a.538.538 0 0 0-.5764-.4189c-.3766 0-.6533.2498-.6533.4573 0 .1345.2536.3382.4227.4612a.3226.3226 0 0 1 .1346.2383zM7.783 11.6455l.5765-.3074c-.0192-1.126-.0346-3.1436 0-4.5425.0538-2.0368.1537-4.5732-.5226-4.5463S6.6877 4.2285 6.949 7.007a33.0562 33.0562 0 0 0 .834 4.6385zm-3.305 5.3919a.319.319 0 0 0 .319.319h.3997a3.046 3.046 0 0 1 0-.3651 7.546 7.546 0 0 1 .1461-1.4565c-.0493.0002-.34.0005-.3866-.0021a.4881.4881 0 0 0-.4781.4979v1.0068zm.9184 1.4718a5.3254 5.3254 0 0 1-.123-.5573.3228.3228 0 0 0-.319-.2728h-.4957c.0007.0163-.0015.34.0009.355a.5188.5188 0 0 0 .5526.4827l.3842-.0076zm10.1265 2.917-.0884-.0807a.3229.3229 0 0 0-.3843-.0269 6.9823 6.9823 0 0 1-3.8046 1.0068 6.995 6.995 0 0 1-3.7932-1.0068.3228.3228 0 0 0-.3843.0269l-.0884.0807a.3154.3154 0 0 0 0 .4573 6.0305 6.0305 0 0 0 4.2927 1.5988 6.0453 6.0453 0 0 0 4.2889-1.5988.315.315 0 0 0-.0384-.4573zm1.4488-4.4158c0-2.4557-1.1529-4.3273-3.0245-5.2266-.2081-.1022-.4673.0594-.465.2921v1.3297a.3269.3269 0 0 0 .2037.296c1.7332.7109 2.9284 2.1866 2.9284 3.8776 0 2.2712-2.1559 3.8085-5.3419 3.8085-3.1859 0-5.3419-1.5411-5.3419-3.8085 0-1.691 1.1952-3.1667 2.9284-3.8776a.319.319 0 0 0 .2037-.296v-1.322c.0048-.2315-.2536-.3963-.4612-.2921-1.887.8839-3.0399 2.767-3.0399 5.2073 0 2.9899 2.2866 4.996 5.7108 4.996 3.4282.0001 5.6994-2.0098 5.6994-4.9844zm-8.6084-.538h-.0038a.5842.5842 0 1 0 .0038 0zm5.1614.5919c.0063.3226.2615.5789.584.5725a.5842.5842 0 1 0-.584-.5725zm4.5692.6225h-.4996a.3227.3227 0 0 0-.3151.2728c-.0346.173-.0768.3766-.1268.5573.0163.0007.3861-.0014.4012.0009a.5188.5188 0 0 0 .5366-.5004l.0037-.3306z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTrinoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
