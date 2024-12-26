import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-moqups-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Moqups</title>
      <path
        d="M8.219 0c-2.367 0-3.55 0-4.824.41A5.053 5.053 0 0 0 .402 3.457c-.4 1.297-.4 2.501-.4 4.91v7.266c0 2.409 0 3.613.4 4.91a5.053 5.053 0 0 0 2.993 3.047c1.273.41 2.457.41 4.824.41h7.562c2.367 0 3.55 0 4.824-.41a5.053 5.053 0 0 0 2.993-3.047c.4-1.297.4-2.501.4-4.91V8.367c.003-2.409.002-3.613-.398-4.91A5.053 5.053 0 0 0 20.607.41C19.334 0 18.151 0 15.785 0ZM6.502 6.918a2.618 2.618 0 0 1 1.76.533c.266.226.456.528.545.865a4.309 4.309 0 0 1 3.056-1.398c.433-.017.86.102 1.221.342.342.266.547.67.559 1.103a5.014 5.014 0 0 1 1.564-1.123 3.984 3.984 0 0 1 1.563-.322c.502-.014.994.152 1.386.467.418.402.63.973.573 1.55-.001.201-.014.401-.04.6-.037.302-.044.359-.216 1.154l-.614 2.903a4.317 4.317 0 0 0-.115.842c-.02.16.032.321.143.439.145.09.316.13.486.113a1.76 1.76 0 0 0 1.037-.4c.229-.171.437-.368.62-.588a.08.08 0 0 1 .134.066h.004l-.395 1.895a.552.552 0 0 1-.228.348c-.676.453-1.477.772-2.395.775a2.12 2.12 0 0 1-1.386-.467 1.893 1.893 0 0 1-.573-1.55 6.34 6.34 0 0 1 .155-1.276c.244-1.126.48-2.253.716-3.38.066-.277.103-.559.114-.843a.542.542 0 0 0-.143-.439.785.785 0 0 0-.484-.115c-.38.018-.744.159-1.037.4a2.946 2.946 0 0 0-1.125 1.756l-1.157 5.463a.302.302 0 0 1-.294.24H9.98a.146.146 0 0 1-.142-.178l1.314-6.191a4.16 4.16 0 0 0 .133-.957.517.517 0 0 0-.142-.42.75.75 0 0 0-.465-.113c-.372.015-.73.149-1.02.383l-.01.005a3.063 3.063 0 0 0-1.187 1.838l-1.15 5.44a.244.244 0 0 1-.239.193h-2.08a.159.159 0 0 1-.156-.191l1.37-6.414c.056-.315.065-.586.067-.702a.764.764 0 0 0-.191-.533.56.56 0 0 0-.418-.21 1.42 1.42 0 0 0-.61.142 3.529 3.529 0 0 0-.59.353 3.1 3.1 0 0 0-.624.602l.451-2.094a.45.45 0 0 1 .201-.289c.146-.092.296-.177.45-.256a3.37 3.37 0 0 1 1.56-.361Z"
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
export class SvgMoqupsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
