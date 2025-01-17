import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-duplicate-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M112 80h288V56a24 24 0 00-24-24H66a34 34 0 00-34 34v310a24 24 0 0024 24h24V112a32 32 0 0132-32z"
    />
    <svg:path
      d="M456 112H136a24 24 0 00-24 24v320a24 24 0 0024 24h320a24 24 0 0024-24V136a24 24 0 00-24-24zm-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80z"
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
export class SiDuplicateSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
