import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-khronosgroup-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Khronos Group</title>
      <path
        d="M.496 12.919H0V10.38h.496zm.008-1.261.768-1.278h.554l-.814 1.26.814 1.277h-.554zm3.02.23v1.031h-.497V10.38h.497v1.031h.818V10.38h.497v2.539h-.497v-1.031zm3.272 1.031h-.497V10.38h.603c.192 0 .335.006.429.02s.174.035.239.065c.145.068.255.162.33.283s.114.263.114.426c0 .197-.054.363-.162.5-.107.137-.254.223-.44.261l.635.984h-.592l-.658-1.177zm0-1.301h.11c.202 0 .355-.037.46-.11.104-.072.157-.179.157-.318 0-.135-.044-.234-.132-.298s-.224-.097-.41-.097h-.185zm8.262 1.301h-.488V10.38h.472l1.05 1.621V10.38h.488v2.539h-.461l-1.061-1.67zm2.876-1.275c0-.139.019-.271.056-.395.038-.124.093-.239.166-.347.125-.183.283-.324.472-.423.19-.099.396-.149.621-.149.169 0 .331.033.488.098.156.065.295.159.419.281.127.126.224.269.29.427.067.158.099.325.099.499 0 .182-.031.351-.094.51s-.154.301-.274.424c-.122.129-.265.228-.427.297-.161.069-.332.104-.509.104-.189 0-.363-.034-.524-.101q-.2385-.102-.423-.3a1.3 1.3 0 0 1-.27-.422c-.06-.158-.09-.325-.09-.503m.519-.018c0 .109.017.211.054.305.036.094.089.18.16.258.078.085.167.151.266.196s.202.069.307.069c.222 0 .409-.079.559-.237.151-.158.226-.355.226-.591 0-.215-.077-.4-.228-.553-.152-.152-.335-.229-.548-.229-.222 0-.411.077-.565.228-.153.153-.231.337-.231.554m3.291.507.455-.002v.037c0 .106.027.192.082.256s.129.096.221.096c.099 0 .177-.03.234-.089.058-.06.087-.14.087-.243 0-.163-.117-.281-.35-.351-.03-.009-.054-.016-.071-.023-.197-.061-.344-.149-.439-.262-.095-.112-.143-.257-.143-.43 0-.238.066-.43.198-.574s.307-.217.528-.217c.205 0 .37.064.491.192.122.128.191.309.205.539h-.45v-.021c0-.08-.026-.146-.074-.194-.049-.049-.113-.074-.192-.074-.082 0-.146.025-.193.076-.048.051-.07.12-.07.208 0 .038.005.07.015.098.01.029.025.054.046.076.048.053.15.101.307.146.07.019.123.034.161.047.174.059.303.145.386.255.082.11.124.252.124.424 0 .262-.073.471-.218.63-.146.159-.339.238-.578.238-.227 0-.409-.076-.549-.229-.138-.155-.21-.359-.213-.609m-4.886 1.298-.067.076a.34.34 0 0 0-.101-.063.28.28 0 0 0-.107-.02c-.078 0-.143.026-.195.081-.052.054-.078.121-.078.2s.027.145.078.199a.262.262 0 0 0 .195.082.27.27 0 0 0 .097-.017c.03-.011.059-.027.086-.049v-.168h-.151v-.099h.258v.326a.57.57 0 0 1-.143.083.41.41 0 0 1-.147.028c-.111 0-.202-.037-.275-.109-.073-.073-.109-.165-.109-.275a.39.39 0 0 1 .1-.261c.037-.04.079-.07.127-.091.047-.022.1-.032.157-.032.053 0 .105.01.154.029s.09.045.121.08m1.06-.091h.139q.0585 0 .096.006a.25.25 0 0 1 .067.022c.031.016.056.041.074.073.017.033.027.071.027.111 0 .047-.015.089-.046.124s-.073.056-.124.065l.222.301-.103.044-.245-.355v.337l-.109.009zm.109.095v.232h.039c.046 0 .082-.01.109-.031.025-.022.038-.05.038-.088s-.012-.065-.036-.084-.06-.029-.108-.029zm1.687-.114q.072 0 .135.024c.043.015.082.038.114.068.043.039.077.082.099.133.023.05.034.104.034.159 0 .047-.008.095-.026.14a.43.43 0 0 1-.075.122c-.037.04-.078.07-.127.091-.047.022-.1.032-.157.032a.4.4 0 0 1-.136-.024.33.33 0 0 1-.113-.068.39.39 0 0 1-.099-.134.38.38 0 0 1-.035-.159c0-.055.011-.109.035-.159a.38.38 0 0 1 .099-.133c.033-.029.07-.052.113-.068.045-.016.09-.024.139-.024m0 .102c-.078 0-.143.026-.194.081-.053.054-.078.121-.078.199 0 .079.026.146.078.2s.116.08.195.08c.078 0 .142-.028.195-.081.052-.054.079-.121.079-.2s-.027-.145-.078-.199a.27.27 0 0 0-.197-.08m1.518-.093v.414c0 .087.011.149.034.185.022.035.06.053.114.053s.093-.017.117-.05c.023-.034.036-.089.036-.167v-.424l.105-.01v.459c0 .059-.004.105-.012.137a.22.22 0 0 1-.044.082c-.02.024-.049.043-.084.058a.3.3 0 0 1-.112.021c-.087 0-.154-.025-.197-.074s-.065-.124-.065-.224v-.448zm1.471.01h.193c.082 0 .146.019.19.056.044.038.065.093.065.165 0 .067-.025.121-.075.161s-.119.059-.207.059c-.011 0-.03-.001-.055-.002h-.002v.288l-.109.009zm.109.096v.244l.03.003c.011.002.022.002.036.002.053 0 .093-.01.12-.032.028-.021.042-.051.042-.092 0-.043-.013-.074-.038-.094s-.065-.031-.119-.031zm-11.68-.683c-.871-.031-2.061-.428-2.308-1.003-.213-.522-.001-1.13 1.004-1.563.597-.248 1.499-.318 2.195-.254.987.09 1.927.6 1.928.603v.715l-.001.048s-.306-.277-.688-.5c-.36-.211-.69-.359-1.344-.419-.153-.014-.414-.049-.836.01-.171.024-.411.042-.953.28-.175.084-.337.173-.463.277-.065.054-.154.13-.216.195-.155.193-.236.339-.197.602.045.198.133.322.387.512.11.082.123.081.172.106.455.236.818.322 1.337.388zm.048-2.231c.873-.004 2.112.346 2.434.91.282.513.152 1.128-.794 1.598-.561.272-1.452.378-2.154.341-.997-.051-2.002-.524-2.004-.525l-.095-.713-.006-.048s.342.265.753.473c.388.195.736.331 1.397.365.154.008.418.031.832-.043.167-.03.405-.058.913-.316.164-.09.313-.186.423-.295.058-.056.137-.136.191-.203.128-.199.19-.347.117-.608-.072-.195-.176-.316-.454-.495-.121-.078-.133-.076-.186-.1-.485-.217-.859-.288-1.386-.334zM24 10.58c0 .046-.011.089-.035.129a.257.257 0 0 1-.094.094.265.265 0 0 1-.129.035.243.243 0 0 1-.129-.035.243.243 0 0 1-.094-.094.255.255 0 0 1-.035-.129c0-.047.011-.089.035-.13.022-.04.055-.071.094-.094.04-.022.082-.035.129-.035.046 0 .089.012.129.035s.071.054.094.094c.024.041.035.084.035.13m-.05 0c0-.058-.02-.107-.062-.147a.203.203 0 0 0-.146-.062c-.058 0-.107.021-.147.062-.04.04-.061.09-.061.147 0 .056.02.106.061.146.04.04.09.062.147.062s.106-.02.146-.062c.042-.04.062-.089.062-.146m-.325-.138h.123c.035 0 .06.007.076.021s.024.033.024.056c0 .019-.006.035-.017.048-.013.014-.032.024-.057.029.01.004.019.009.024.012a.14.14 0 0 1 .023.028c0 .001.015.028.045.08h-.082c-.026-.052-.043-.084-.052-.094s-.018-.015-.028-.015c-.002 0-.005 0-.009.001v.109h-.069zm.068.117h.03c.02 0 .034-.003.041-.01a.031.031 0 0 0 .013-.025.034.034 0 0 0-.011-.025c-.008-.006-.022-.01-.041-.01h-.032z"
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
export class SvgKhronosgroupIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
