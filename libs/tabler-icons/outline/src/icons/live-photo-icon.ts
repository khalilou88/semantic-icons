import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-live-photo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <svg:path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <svg:path d="M15.9 20.11l0 .01" />
    <svg:path d="M19.04 17.61l0 .01" />
    <svg:path d="M20.77 14l0 .01" />
    <svg:path d="M20.77 10l0 .01" />
    <svg:path d="M19.04 6.39l0 .01" />
    <svg:path d="M15.9 3.89l0 .01" />
    <svg:path d="M12 3l0 .01" />
    <svg:path d="M8.1 3.89l0 .01" />
    <svg:path d="M4.96 6.39l0 .01" />
    <svg:path d="M3.23 10l0 .01" />
    <svg:path d="M3.23 14l0 .01" />
    <svg:path d="M4.96 17.61l0 .01" />
    <svg:path d="M8.1 20.11l0 .01" />
    <svg:path d="M12 21l0 .01" />
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
export class SiLivePhotoIcon {
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
