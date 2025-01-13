import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-text-increase-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M1.99 19h2.42l1.27-3.58h5.65L12.59 19h2.42L9.75 5h-2.5L1.99 19zm4.42-5.61L8.44 7.6h.12l2.03 5.79H6.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z"
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
export class SiTextIncreaseIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
