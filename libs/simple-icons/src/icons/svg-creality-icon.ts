import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-creality-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Creality</title>
      <path
        d="m3.215 10.33-1.772.01c-.785.029-1.42.737-1.443 1.613v.088c.018.903.69 1.629 1.51 1.629h1.705c.01 0 .02-.011.02-.024v-.603a.022.022 0 0 0-.02-.022H1.508c-.501 0-.92-.443-.928-1.001-.007-.569.405-1.034.912-1.034l1.723-.007c.01 0 .02-.01.02-.022v-.603c0-.013-.01-.024-.02-.024zm.412 0c-.011 0-.02.011-.02.024v3.292c0 .013.009.024.02.024h.54c.012 0 .02-.011.02-.024V11c0-.012.009-.021.02-.021h1.606c.168 0 .314.145.32.333.006.198-.137.36-.313.36l-1.533.002c-.018 0-.028.023-.016.037l1.75 1.95c.004.005.009.009.014.009H6.8c.017 0 .026-.025.014-.04L5.64 12.32h.183c.496 0 .898-.454.89-1.01-.006-.546-.416-.98-.905-.98h-2.18Zm4.873 0c-.827 0-1.5.75-1.5 1.67 0 .92.673 1.67 1.5 1.67h1.68c.01 0 .02-.011.02-.024v-.603c0-.012-.01-.022-.02-.022H8.5c-.404 0-.75-.292-.871-.697h2.55c.012 0 .02-.01.02-.023v-.604c0-.012-.008-.021-.02-.021h-2.55c.123-.405.468-.697.872-.697h1.68c.01 0 .02-.012.02-.024v-.601c0-.013-.01-.024-.02-.024zm3.709 0c-.013 0-.026.009-.033.024l-1.7 3.28c-.007.016 0 .036.016.036h.625a.02.02 0 0 0 .018-.012l1.056-2.045a.02.02 0 0 1 .036 0l.71 1.375c.008.015-.002.033-.017.033h-.928c-.007 0-.012.005-.015.012l-.313.602c-.008.015.002.033.018.033h2.242c.015 0 .025-.018.017-.033l-1.697-3.281a.041.041 0 0 0-.035-.024zm2.03.002c-.01 0-.02.01-.02.022v2.94c0 .207.15.376.336.376h2.148c.01 0 .022-.011.022-.024v-.603a.022.022 0 0 0-.022-.022H14.82A.022.022 0 0 1 14.8 13v-2.646c0-.013-.01-.022-.02-.022h-.54zm2.84 0c-.01 0-.02.01-.02.022v3.292c0 .013.01.024.02.024h.542c.01 0 .02-.011.02-.024v-3.292c0-.013-.01-.022-.02-.022h-.54zm.85 0c-.01 0-.02.01-.02.022v.601c0 .012.01.024.02.024h1.169c.01 0 .02.009.02.021v2.646c0 .013.01.022.02.022h.54c.01 0 .02-.01.02-.022V11a.02.02 0 0 1 .02-.021h1.172a.02.02 0 0 1 .015.007l1.018 1.354a.02.02 0 0 1 .004.014v1.292c0 .013.008.024.02.024h.54c.011 0 .02-.011.02-.024v-1.292c0-.006.003-.01.006-.014l1.482-1.97c.011-.016.001-.038-.016-.038h-.705a.02.02 0 0 0-.015.008l-1.026 1.363a.02.02 0 0 1-.03 0l-1.026-1.363a.02.02 0 0 0-.016-.008z"
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
export class SvgCrealityIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
