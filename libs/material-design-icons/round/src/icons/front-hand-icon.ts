import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-front-hand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.5 14.5c0 .28-.22.5-.5.5-1.51 0-2.77 1.12-2.97 2.58-.03.24-.25.42-.49.42-.3 0-.54-.27-.5-.57a4.03 4.03 0 0 1 3.46-3.4V3.25a1.25 1.25 0 0 0-2.5 0v7.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V1.25a1.25 1.25 0 0 0-2.5 0v9.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V2.75a1.25 1.25 0 0 0-2.5 0v8.75c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5.75a1.25 1.25 0 0 0-2.5 0v10c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75v-6.5a1.25 1.25 0 0 0-2.5 0v5.25z"
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
export class SiFrontHandIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
