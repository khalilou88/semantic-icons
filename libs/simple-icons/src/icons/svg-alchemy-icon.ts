import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-alchemy-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Alchemy</title>
      <path
        d="M12.0059 1.7635a.4383.4383 0 0 0-.2149.0547.4214.4214 0 0 0-.1562.1523L9.3613 5.834a.8191.8191 0 0 0-.1133.416c0 .146.0388.2896.1133.416l4.9512 8.4123a.8444.8444 0 0 0 .3125.3047.8584.8584 0 0 0 .4239.1113h4.5489a.4358.4358 0 0 0 .2129-.0566.4185.4185 0 0 0 .1543-.1524.4106.4106 0 0 0 .0586-.207.416.416 0 0 0-.0567-.209L12.3711 1.9745a.416.416 0 0 0-.1543-.1524.4276.4276 0 0 0-.211-.0586zM8.0195 8.5058a.4277.4277 0 0 0-.211.0566.4235.4235 0 0 0-.1562.1524L.0584 21.6095a.4083.4083 0 0 0-.002.418.4188.4188 0 0 0 .1563.1524c.065.0365.138.057.2129.0566h4.5509a.8586.8586 0 0 0 .4238-.1113.8389.8389 0 0 0 .3105-.3047l4.9532-8.4123a.8194.8194 0 0 0 .1133-.416.8264.8264 0 0 0-.1133-.418L8.3886 8.7148a.4235.4235 0 0 0-.1562-.1524.435.435 0 0 0-.213-.0566Zm3.0117 8.8244a.8645.8645 0 0 0-.4258.1113.8385.8385 0 0 0-.3105.3047l-2.2754 3.8614a.4123.4123 0 0 0-.0567.209.4059.4059 0 0 0 .0567.207.4228.4228 0 0 0 .1543.1543.432.432 0 0 0 .2129.0547h15.1897a.4319.4319 0 0 0 .2129-.0547.4222.4222 0 0 0 .1543-.1543.4059.4059 0 0 0 .0566-.207.4122.4122 0 0 0-.0566-.209L21.67 17.7462a.8384.8384 0 0 0-.3106-.3047.8573.8573 0 0 0-.4238-.1113z"
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
export class SvgAlchemyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
