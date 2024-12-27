import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brand-snapchat-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-snapchat"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 1.96a5.88 5.88 0 0 1 5.882 5.882c0 .618 .008 1.174 .03 1.678l.008 .21l.084 -.115q .46 -.627 1.102 -1.29l.187 -.19a1 1 0 0 1 1.414 1.415c-2.637 2.637 -2.51 3.795 .76 5.527l.048 .025a.98 .98 0 0 1 .46 .636l.004 .022l.003 .013l.006 .043l.006 .032v.009l.003 .025l.001 .051l.002 .026l-.001 .009v.025l-.003 .042l-.002 .034l-.002 .015l-.002 .02l-.004 .016l-.01 .06l-.007 .026l-.006 .02l-.016 .06l-.013 .029l-.005 .013l-.024 .062a1 1 0 0 1 -.197 .28l-.03 .025l-.016 .014l-.043 .039l-.013 .007l-.018 .015l-.051 .033l-.02 .014l-.008 .003l-.014 .01a1 1 0 0 1 -.098 .049l-.013 .003l-.146 .066c-.576 .255 -.81 .365 -1.008 .474l-.053 .03c-.27 .155 -.398 .277 -.558 .525c-.156 .245 -.293 .516 -.715 1.41a1 1 0 0 1 -.904 .573c-1.067 0 -1.798 .25 -2.879 .868l-.426 .246c-.176 .102 -.311 .178 -.447 .25c-.794 .423 -1.464 .636 -2.248 .636s-1.454 -.213 -2.248 -.636a15 15 0 0 1 -.447 -.25l-.426 -.246c-1.081 -.618 -1.812 -.868 -2.879 -.868a1 1 0 0 1 -.904 -.573c-.422 -.894 -.559 -1.165 -.715 -1.41a1.4 1.4 0 0 0 -.558 -.525c-.228 -.13 -.47 -.243 -1.227 -.577l.02 .007l-.013 -.003a1 1 0 0 1 -.098 -.05l-.014 -.009l-.028 -.017l-.051 -.033l-.018 -.015l-.013 -.007l-.043 -.039l-.012 -.01l-.004 -.004l-.03 -.025a1 1 0 0 1 -.197 -.28l-.024 -.062l-.005 -.013l-.013 -.028l-.016 -.061l-.005 -.012l-.008 -.035l-.01 -.059l-.004 -.016l-.002 -.02l-.002 -.015l-.002 -.035l-.004 -.041l.001 -.025l-.001 -.01l.002 -.025l.001 -.05l.003 -.026v-.01l.006 -.03l.006 -.044l.004 -.014l.002 -.021a.98 .98 0 0 1 .461 -.636l.048 -.025l.204 -.11c3.003 -1.635 3.132 -2.785 .72 -5.25l-.164 -.167a1 1 0 0 1 1.414 -1.414q .764 .763 1.289 1.479l.083 .115l.01 -.21q .025 -.628 .028 -1.374l.001 -.304a5.88 5.88 0 0 1 5.882 -5.882"
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
export class SvgBrandSnapchatIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
