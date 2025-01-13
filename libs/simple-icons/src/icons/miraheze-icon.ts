import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-miraheze-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Miraheze</svg:title>
    <svg:path
      d="m2.677 12.923 3.768.011 1.949 3.369-1.926 3.323H2.666L.727 16.292l1.95-3.369Zm-.004-8.6 3.761.011 1.944 3.367-1.922 3.326H2.662L.727 7.69l1.946-3.367Zm14.882 0 3.768.011 1.95 3.367-1.928 3.326h-3.801L15.606 7.69l1.949-3.367Zm0 8.6 3.768.011 1.95 3.369-1.928 3.323h-3.802l-1.937-3.334 1.949-3.369Zm-7.456 4.373 3.767.011 1.951 3.368L13.889 24h-3.801l-1.939-3.336 1.95-3.368Zm0-17.296 3.767.011 1.951 3.369-1.928 3.324h-3.801L8.149 3.368 10.099 0Zm0 8.628 3.767.011 1.951 3.368-1.928 3.325h-3.801l-1.939-3.336 1.95-3.368Z"
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
export class SiMirahezeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFFC00');
}
