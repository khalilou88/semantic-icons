import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-border-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M20 4l0 16" />
    <svg:path d="M4 4l0 .01" />
    <svg:path d="M8 4l0 .01" />
    <svg:path d="M12 4l0 .01" />
    <svg:path d="M16 4l0 .01" />
    <svg:path d="M4 8l0 .01" />
    <svg:path d="M12 8l0 .01" />
    <svg:path d="M4 12l0 .01" />
    <svg:path d="M8 12l0 .01" />
    <svg:path d="M12 12l0 .01" />
    <svg:path d="M16 12l0 .01" />
    <svg:path d="M4 16l0 .01" />
    <svg:path d="M12 16l0 .01" />
    <svg:path d="M4 20l0 .01" />
    <svg:path d="M8 20l0 .01" />
    <svg:path d="M12 20l0 .01" />
    <svg:path d="M16 20l0 .01" />
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
export class SiBorderRightIcon {
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
