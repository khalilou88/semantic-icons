import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-navigation-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.89945 2.29983L21.7052 8.56842C21.9672 8.65574 22.1088 8.93891 22.0215 9.20088C21.975 9.3404 21.8694 9.45238 21.7328 9.507L13.0002 13.0001L8.57501 21.8504C8.45151 22.0974 8.15118 22.1975 7.90419 22.074C7.77883 22.0113 7.68553 21.8989 7.64703 21.7641L2.26058 2.91153C2.18472 2.64601 2.33846 2.36927 2.60398 2.29341C2.70087 2.26573 2.80386 2.26796 2.89945 2.29983Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNavigationFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
