import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-network-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M6.528 6.536a6 6 0 0 0 7.942 7.933m2.247 -1.76a6 6 0 0 0 -8.427 -8.425"
    />
    <svg:path
      d="M12 3c1.333 .333 2 2.333 2 6c0 .337 -.006 .66 -.017 .968m-.55 3.473c-.333 .884 -.81 1.403 -1.433 1.559"
    />
    <svg:path
      d="M12 3c-.936 .234 -1.544 1.29 -1.822 3.167m-.16 3.838c.116 3.029 .776 4.695 1.982 4.995"
    />
    <svg:path d="M6 9h3m4 0h5" />
    <svg:path d="M3 20h7" />
    <svg:path d="M14 20h7" />
    <svg:path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <svg:path d="M12 15v3" />
    <svg:path d="M3 3l18 18" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNetworkOffIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
