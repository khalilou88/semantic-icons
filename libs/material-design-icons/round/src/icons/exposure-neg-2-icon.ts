import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-exposure-neg-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m15.05 16.29 2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17s.41-.78.54-1.17.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46s-.44-.81-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.72 5.72 0 0 0 16.47 5c-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49s.6-.18.96-.18c.31 0 .58.05.81.15s.43.25.59.43.28.4.37.65c.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExposureNeg2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
