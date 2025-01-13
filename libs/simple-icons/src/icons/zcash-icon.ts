import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-zcash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Zcash</svg:title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12.013 12.013 0 0 0 12 12 12 12 0 1 0 0-24zm-1.008 4.418h2.014v2.014l3.275-.002v1.826l-5.08 6.889h5.08v2.423h-3.275v2.006h-2.012v-2.006H7.72v-1.826l5.074-6.888H7.719V6.432h3.273V4.418z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZcashIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F3B724');
}
