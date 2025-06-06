import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-net-app-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>NetApp</svg:title>
    <svg:path d="M0 2v20h9.33V10h5.34v12H24V2Z" />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNetAppIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0067C5');
}
