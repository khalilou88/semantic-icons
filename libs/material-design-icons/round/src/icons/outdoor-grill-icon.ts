import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-outdoor-grill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 22c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.14l1.99-3.06a6.36 6.36 0 0 0 1.74 0l1.02 1.57c.42-.53.96-.95 1.6-1.21l-.6-.93c2.1-.95 3.64-2.9 4.02-5.24.1-.59-.39-1.13-.99-1.13H6.08c-.6 0-1.09.54-.99 1.14a7.013 7.013 0 0 0 4.02 5.24l-3.95 6.08a1 1 0 0 0 .29 1.38 1 1 0 0 0 1.38-.29l1-1.55h6.34c.43 1.16 1.53 2 2.83 2zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.5 6.47c-.02.28.18.53.46.53H10c.24 0 .44-.18.46-.42.1-.87.04-1.39-.94-2.54-.36-.43-.6-.69-.53-1.55.03-.26-.19-.49-.46-.49h-.05c-.24 0-.45.19-.47.43-.08.93.2 1.74.95 2.53.19.21.64.56.54 1.51zm2.49 0c-.03.28.18.53.46.53h.03c.24 0 .44-.18.46-.42.1-.87.04-1.39-.94-2.54-.36-.43-.61-.69-.53-1.55.03-.26-.19-.49-.46-.49h-.05c-.24 0-.45.19-.47.43-.08.93.2 1.74.95 2.53.19.21.64.56.55 1.51zm2.51 0c-.02.28.18.53.46.53H15c.24 0 .44-.18.46-.42.1-.87.04-1.39-.94-2.54-.36-.43-.61-.69-.53-1.55.03-.26-.19-.49-.46-.49h-.05c-.24 0-.45.19-.47.43-.08.93.2 1.74.95 2.53.19.21.64.56.54 1.51z"
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
export class SiOutdoorGrillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
