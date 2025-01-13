import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-virus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <svg:path d="M12 7v-4" />
    <svg:path d="M11 3h2" />
    <svg:path d="M15.536 8.464l2.828 -2.828" />
    <svg:path d="M17.657 4.929l1.414 1.414" />
    <svg:path d="M17 12h4" />
    <svg:path d="M21 11v2" />
    <svg:path d="M15.535 15.536l2.829 2.828" />
    <svg:path d="M19.071 17.657l-1.414 1.414" />
    <svg:path d="M12 17v4" />
    <svg:path d="M13 21h-2" />
    <svg:path d="M8.465 15.536l-2.829 2.828" />
    <svg:path d="M6.343 19.071l-1.413 -1.414" />
    <svg:path d="M7 12h-4" />
    <svg:path d="M3 13v-2" />
    <svg:path d="M8.464 8.464l-2.828 -2.828" />
    <svg:path d="M4.929 6.343l1.414 -1.413" />
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
export class SiVirusIcon {
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
