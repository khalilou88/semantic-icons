import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hail-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-4h2c0 2.7-.93 4.41-2.3 5.5-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1c-.3.1-.5.2-.6.3-.53.41-1.4 1.03-1.4 3.6H5c0-2.06.35-3.78 2.11-5.29C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C15.96 5.55 17 4.76 17 2zM4 16h3v6H4v-6z"
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
export class SiHailIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
