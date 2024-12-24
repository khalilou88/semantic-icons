import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-vespa-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vespa</title>
      <path
        d="m23.736 11.006-.029-.008c-.127.055-.274.05-.415.067-.202-.12-.4-.248-.606-.36-.079.06-.16.141-.256.168-.11.017-.235.017-.324-.053a.463.463 0 0 1-.22-.422l.207-.93-.01-.03c-.37.025-.753.01-1.131.01-.146.021-.094.197-.168.281-.208-.118-.419-.23-.66-.28-.707-.176-1.404.125-1.84.708-.118.13-.154.305-.297.415l-.915.57c-.02.007-.052.027-.071 0a1.491 1.491 0 0 0-.92-.972c-.873-.23-1.704.1-2.347.707-.032.097-.037.204-.069.3-.498.337-.987.7-1.488 1.031-.02.017-.062.015-.077-.011a1.782 1.782 0 0 0-.66-1.128c-.088-.054-.166-.145-.275-.145l-.462.404-2.458 2.128a.932.932 0 0 1-.693.113c-.028-.014-.089-.002-.086-.048l1.18-1.029.052-.08c-.069-.138-.127-.28-.233-.405-.371-.505-1.063-.643-1.634-.473-.576.176-.997.743-1.12 1.302l-2.45 1.59c-.019.008-.053.033-.066-.004.004-.39.078-.77.221-1.114.334-.85 1.268-1.584 2.204-1.56.045-.009.057-.054.042-.093a6.912 6.912 0 0 1-.747-1.158c-.35.06-.65.263-.95.471-.982.819-1.432 1.964-1.459 3.269-.496-.637-.782-1.354-.924-2.115-.18-.805.042-1.7.542-2.31.106-.155.26-.283.352-.442-.337-.358-.65-.751-.834-1.182-.047-.103-.073-.219-.127-.314-.172.072-.33.185-.48.32-.69.648-1.085 1.468-1.03 2.466.094 1.63 1.02 3.04 2.258 4.247-.101.045-.214.052-.321.079-.352.072-.713.136-1.057.218a2.004 2.004 0 0 1-.488.856c-.012.017-.038.053-.005.066l7.79-1.515 3.459-.69c.518-.096 1.03-.212 1.572-.272.021.166-.054.316-.058.498.343-.055.68-.127 1.019-.191l.043-.021.105-.572.033-.046 4.804-.941 2.813-.562 1.984-.368.044-.039a1.514 1.514 0 0 1-.264-.401zM6.364 14.131l-2.377.46 1.728-1.14c.163.015.196.207.313.304.124.143.286.24.428.346l-.092.03zm.388-.87a.57.57 0 0 1 .029-.41.592.592 0 0 1 .648-.247c.067-.001.103.058.148.1l-.008.035-.734.612c-.036-.011-.067-.055-.083-.09zm3.669-.37c-.113.193-.462.091-.407.378.022.065.08.123.106.181-.424.104-.859.173-1.291.25l.022-.052 1.5-1.299a.083.083 0 0 1 .066.005l.085.15a.439.439 0 0 1-.081.388zm2.937-.044c-.454.098-.912.193-1.375.268.027-.097.079-.196.127-.29.08-.085.19-.12.281-.19l1.096-.7.03.003c-.043.3-.063.628-.159.91zm1.573-.272-.446.076-.027-.032c.024-.098.023-.209.074-.293l.03.002a.954.954 0 0 0 .4.22l-.031.027zm.7-.746a.442.442 0 0 1-.41.169.61.61 0 0 1-.457-.355c-.071-.18-.064-.429.093-.567.158-.119.41-.107.571-.002a.645.645 0 0 1 .242.292.5.5 0 0 1-.038.463zm.964.439c.056-.12.162-.21.19-.34l1.16-.767c.014-.003.026-.015.043-.009a.95.95 0 0 0 .485.734l-1.878.382zm3.234-1.142a.417.417 0 0 1-.417.102c-.148-.044-.304-.176-.34-.334-.05-.132-.029-.319.076-.42.127-.124.325-.138.481-.067.104.05.208.152.256.263.063.139.05.34-.056.456zm.861.371c-.012-.054.058-.082.07-.132l.077-.174c.12.035.191.175.326.184-.136.068-.307.095-.473.122z"
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
export class SvgVespaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
