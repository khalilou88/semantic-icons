import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-id-card-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M408 16H104a24 24 0 00-24 24v432a24 24 0 0024 24h304a24 24 0 0024-24V40a24 24 0 00-24-24zm-61.1 296.77a43 43 0 11-40.71-40.71 43 43 0 0140.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z"
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
export class SiIdCardSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
