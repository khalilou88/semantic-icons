import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sunset-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 12a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
    <svg:path d="M21 12a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
    <svg:path
      d="M6.307 5.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414"
    />
    <svg:path
      d="M19.107 5.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0"
    />
    <svg:path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1 -1" />
    <svg:path d="M3 16h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2" />
    <svg:path d="M12 8a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002" />
    <svg:path d="M12 19a1 1 0 0 1 0 2h-5a1 1 0 0 1 0 -2z" />
    <svg:path d="M17 19a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunset2Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
