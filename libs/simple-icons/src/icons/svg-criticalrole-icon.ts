import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-criticalrole-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Critical Role</title>
      <path
        d="M12.014 0c-.51.281-9.231 5.256-10.323 5.87a.23.23 0 00-.136.23v11.866l.089.15c.004.005 6.521 3.746 10.24 5.884h.14c.52-.295 9.26-5.28 10.263-5.842a.282.282 0 00.16-.272c-.006-3.915-.006-7.825 0-11.74 0-.145-.034-.253-.174-.309L12.094 0zm.324.863c3.066 1.763 6.123 3.516 9.19 5.279-.352.136-4.825 1.819-4.83 1.819l-.033.066c.038.084.07.173.099.262l.089.042c.117-.047 4.876-1.838 4.96-1.861v10.802c-.004-.005-3.282-5.692-3.624-6.282-.051-.085-.051-.085-.145-.07-.333.065-.207.037-.314.065l3.807 6.601h-8.754l-.089-.075-.042-1.256-.07-.061c-.366.065-.741.07-1.107.014l-.065.06v.517l-.047.051c-.807-.117-.643.01-1.937-1.547-.126-.15-.239-.31-.36-.464l-.01-.01.01-.098c.398-.478.745-.844.703-1.528a1.14 1.14 0 00-.586-.957c-.47-.277-1.05-.225-2.626-.225-.178 0-.22.178-.084.225l.22.028c.235.047.253.127.253.633.005 3.3.01 3.085-.051 3.723-.024.244-.16.173-.31.206l-.094.084.08.141c.099.028 1.505.024 1.58.005.16-.042.122-.22-.023-.23-.352-.028-.432-.019-.455-.225-.042-.347-.033-.3-.047-1.528l.084-.085c.624 0 .68-.033.783.113.338.46.68.914 1.027 1.369.338.445.652.59 1.004.595.97.01.862-.014.862.047v.417l-.08.08H2.553c-.089 0-.098.01-.06-.052l3.164-5.485-.038-.066c-.286-.018-.351-.06-.426.07l-3.005 5.205V6.47c.121.033 1.251.469 1.256.469.108.042.14.042.502-.24l-1.449-.543-.005-.019c3.034-1.73 6.067-3.46 9.1-5.185l.01.01h-.005c-1.34 2.32-2.686 4.65-4.041 6.985.16 0 .295.005.436-.005.084-.005 3.577-6.17 4.004-6.859.398.68 3.797 6.587 3.844 6.667.061.108.103.14.553.183l.014-.014zM11.93 4.05a.743.743 0 00-.675.76c.005.295.155.515.417.651l.075.131c-.019.328-.014.099-.047 1.388l-.084.084c-1.43-.009-1.482.01-1.744-.089-.094-.037-.14-.009-.16.09l-.154.843c-.01.052.07.277.183-.009.164-.417.37-.375 1.884-.399l.061.052a679.99 679.99 0 00-.173 5.687l-.094.127c-.544.173-1.153.801-.933 1.706.277 1.14 1.472 1.097 1.599 1.093 1.378-.066 1.575-1.191 1.51-1.744a1.153 1.153 0 00-.582-.905 3.21 3.21 0 00-.408-.188l-.056-.07-.174-5.725.047-.042c2.124.108 1.6.108 1.834.563l.121.01.038-.957-.122-.09a1.629 1.629 0 01-.258.038v.005c-.539.014-1.613.019-1.617.019l-.057-.052c-.051-1.613-.046-1.383-.046-1.411l.103-.202c.384-.244.436-.797.117-1.134a.687.687 0 00-.605-.23zm.07.394c.47 0 .45.703-.004.698-.45-.004-.455-.698.004-.698zM5.352 6.55c-.201.01-.417.037-.647.089-1.397.319-2.011 1.608-1.885 2.822.31 3.005 4.304 2.4 4.375 1.974 0-.01.075-.39.16-.895v-.047l-.141-.108c-.272.014.112.863-1.163.961-1.74.127-2.55-1.266-2.537-2.386.038-2.724 3.353-2.242 3.503-1.191.018.131-.005.422.187.342l.075-.108c.005-.037.052-.848.061-1.083.005-.131-.042-.173-.169-.187-.698-.09-1.214-.216-1.819-.183zm12.645 1.477l-.056.037c-.066.066-.014-.023-.863 1.95a6.97 6.97 0 01-.192.427.285.285 0 01-.277.16c-.112.004-.103.15.038.15h1.233c.183 0 .107-.15-.033-.174-.202-.042-.633.047-.572-.103.065-.174.136-.347.21-.516l.076-.047c.23-.014.455-.014.684-.004l.094.065c.061.16.127.32.192.478.09.207-.103.235.02.263l.168.038c.136.004-.506-.005 2.377.014.258 0 .192-.15.248-.483h-.004c.018-.108-.099-.263-.178.01-.052.177-.127.177-.75.158l-.15-.117c-.024-.108-.015-1.856-.015-1.931v-.02l.127-.116c.305-.033.169-.16.056-.16-1.06-.004-1.008 0-1.017.01-.117.112-.01.14.004.14.15.024.258-.01.258.202v1.936c-.004.15-.023.207-.197.202-.028 0-.206.033-.3-.094-.243-.338-.97-2.279-1.106-2.433l-.019-.019zm-2.363.028c-.399-.005-.867.08-1.196.408-.46.464-.66 1.603.324 2.123.623.333 1.458.17 1.533.16.31-.042.281-.59.281-.596-.042-.136-.089-.112-.145-.051-.047.051-.047.272-.324.356-.323.099-1.078.08-1.355-.647-.262-.694.043-1.781 1.276-1.416.21.061.337.202.356.427.01.112.127.117.16.014.009-.033.009-.206.028-.455.009-.136-.024-.192-.141-.22-.066-.014-.399-.099-.797-.103zm-4.534.051l-.895.005c-.155.052-.155.14.033.16.136.009.15.056.15.318-.01 2.124-.01 1.744-.024 1.904l-.103.098a.534.534 0 01-.464-.15c-.488-.51-.764-.867-.811-.924.098-.107.197-.21.29-.314.413-.468.038-1.012-.375-1.06-.347-.041-.853-.037-1.406-.032-.094 0-.277.122.051.16.132.013.155.07.155.23 0 .098-.014.674-.01 1.88 0 .332-.163.112-.276.285l.127.085h.914c.178 0 .178-.17-.042-.165-.188.005-.146-.056-.188-.825-.004-.093.31-.084.385.019.501.685.633.975 1.134.975.488-.004.97 0 1.458 0 .183 0 .118-.16 0-.16-.225.006-.234-.06-.239-.102-.014-.122-.033.051-.019-2.007.005-.169.02-.206.188-.216h.01c.168-.14-.029-.164-.043-.164zm1.735.005c-.084 0-.14.089-.019.145.07.033.22-.042.22.197-.009 2.208.052 2.133-.159 2.133-.16 0-.178.16 0 .16.37.005.708.005 1.013.005.122 0 .126-.155.005-.16-.146-.005-.282.024-.282-.169-.037-1.978 0-2.044 0-2.053.014-.131.15-.094.197-.117.108-.057.066-.104.019-.132zm-4.501.267a.493.493 0 01.581.432c.02.112.066.693-.572.628l-.098-.122c-.005-.23 0-.661 0-.872zm9.578.492l.286.741h-.576c.094-.244.187-.483.29-.74zM7.954 12.36c.174.004.361.037.408.051.708.207.868 1.144.586 1.824-.215.52-.66.399-1.2.342-.113-.01-.127-.028-.127-.14v-1.95c-.004-.104.16-.132.333-.127zm10.202.745c-.426.047-.06.024-1.744.028-.178 0-.169.16.028.16l.005.004c.178 0 .295-.23.183 2.406-.01.145-.14.112-.192.121-.113.02-.136.136-.01.16.033.004-.089.01 1.65.014.212 0 .216-.094.216-.113.019-.15.038-.3.061-.454.014-.113-.112-.136-.15-.029-.094.268.01.291-.769.268-.22-.005-.183-.188-.183-.765 0-.398-.117-.323.605-.28.174.009.117.154.174.248l.122-.014.051-.535c.01-.164-.122-.089-.14-.084-.254.089-.591.06-.737.07l-.075-.07v-.755l.075-.07c.633.028.718-.01.737.239.009.13.15.108.159.009.014-.16.033-.319.047-.478zm-3.061.028h-1.083c-.113 0-.132.132-.019.15.136.019.253 0 .267.174.01.15.028 1.495-.019 2.24-.009.15-.145.109-.239.132-.075.019-.07.145.02.16l1.79.009c.056 0 .258.056.244-.581 0-.01-.042-.155-.127-.052-.178.22.15.352-.881.295-.108-.004-.155-.065-.16-.168-.028-.582-.018-1.852-.018-1.946 0-.277.112-.24.234-.258.164-.014.145-.155-.01-.155zm-3.596.46c.014.093-.047 1.753-.052 1.847-.019.394 1.196.59 1.182.122 0-.024-.052-1.735-.052-1.833l.019-.005c.576.445.483 1.467.253 1.828a.844.844 0 01-1.05.333c-.98-.403-.961-1.94-.3-2.292zm1.28 4.402c9.039.005 8.504-.005 8.51.014-.723.417-8.459 4.815-9.256 5.275h-.159c-.825-.479-9.063-5.21-9.185-5.284h8.575c.094 0 .094 0 .094.094a67.963 67.963 0 01-.07 2.25c-.01.174.023.347.094.506.201.483.393.97.59 1.454.047.108.061.084.094.004.652-1.533.605-1.425.633-1.51.037-.116.056-.238.06-.36 0-.277-.055-2.358-.055-2.363z"
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
export class SvgCriticalroleIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
