import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-local-gas-station-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m19.77 7.23.01-.01-3.19-3.19a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.58 1.58c-1.05.4-1.76 1.47-1.58 2.71.16 1.1 1.1 1.99 2.2 2.11.47.05.88-.03 1.27-.2v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.5h1.5v4.86c0 1.31.94 2.5 2.24 2.63a2.5 2.5 0 0 0 2.76-2.49V9c0-.69-.28-1.32-.73-1.77zM12 10H6V6c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLocalGasStationIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
