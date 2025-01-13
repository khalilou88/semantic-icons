import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brex-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Brex</svg:title>
    <svg:path
      d="M18.69 2.319a3.868 3.868 0 0 0-3.108 1.547l-.759 1.007a1.658 1.658 0 0 1-1.313.656H0V21.68h5.296a3.87 3.87 0 0 0 3.108-1.547l.759-1.006a1.656 1.656 0 0 1 1.313-.657H24V2.319h-5.31Zm1.108 11.949h-5.66a3.87 3.87 0 0 0-3.108 1.547l-.759 1.007a1.658 1.658 0 0 1-1.313.656H4.202V9.731h5.661a3.868 3.868 0 0 0 3.107-1.547l.759-1.006a1.658 1.658 0 0 1 1.313-.657h4.771l-.015 7.747Z"
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
export class SiBrexIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#212121');
}
