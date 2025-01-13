import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-load-balancer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <svg:path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 16v3" />
    <svg:path d="M12 10v-7" />
    <svg:path d="M9 6l3 -3l3 3" />
    <svg:path d="M12 10v-7" />
    <svg:path d="M9 6l3 -3l3 3" />
    <svg:path d="M14.894 12.227l6.11 -2.224" />
    <svg:path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
    <svg:path d="M9.101 12.214l-6.075 -2.211" />
    <svg:path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
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
export class SiLoadBalancerIcon {
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
