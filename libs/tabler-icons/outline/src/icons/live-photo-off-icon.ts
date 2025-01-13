import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-live-photo-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M11.296 11.29a1 1 0 1 0 1.414 1.415" />
    <svg:path
      d="M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851"
    />
    <svg:path d="M15.9 20.11v.01" />
    <svg:path d="M19.04 17.61v.01" />
    <svg:path d="M20.77 14v.01" />
    <svg:path d="M20.77 10v.01" />
    <svg:path d="M19.04 6.39v.01" />
    <svg:path d="M15.9 3.89v.01" />
    <svg:path d="M12 3v.01" />
    <svg:path d="M8.1 3.89v.01" />
    <svg:path d="M4.96 6.39v.01" />
    <svg:path d="M3.23 10v.01" />
    <svg:path d="M3.23 14v.01" />
    <svg:path d="M4.96 17.61v.01" />
    <svg:path d="M8.1 20.11v.01" />
    <svg:path d="M12 21v.01" />
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
export class SiLivePhotoOffIcon {
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
