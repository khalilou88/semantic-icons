import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-color-fill-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M419.1 337.45a3.94 3.94 0 00-6.1 0c-10.5 12.4-45 46.55-45 77.66 0 27 21.5 48.89 48 48.89h0c26.5 0 48-22 48-48.89 0-31.11-34.3-65.26-44.9-77.66zM387 287.9L155.61 58.36a36 36 0 00-51 0l-5.15 5.15a36 36 0 000 51l52.89 52.89 57-57L56.33 263.2a28 28 0 00.3 40l131.2 126a28.05 28.05 0 0038.9-.1c37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3a6.53 6.53 0 004.57-11.2z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiColorFillOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
