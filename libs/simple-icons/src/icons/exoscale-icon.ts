import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-exoscale-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Exoscale</svg:title>
    <svg:path
      d="M12 1.608 0 22.392h1.665L12 4.593v2.929l-8.612 14.87H5.11L12 10.507v2.986l-5.167 8.9h1.722L12 16.477v2.929l-1.722 2.985H24Z"
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
export class SiExoscaleIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DA291C');
}
