import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-deblur-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="6" cy="14" r="1" />
    <svg:circle cx="6" cy="18" r="1" />
    <svg:circle cx="6" cy="10" r="1" />
    <svg:circle cx="3" cy="10" r=".5" />
    <svg:circle cx="6" cy="6" r="1" />
    <svg:circle cx="3" cy="14" r=".5" />
    <svg:circle cx="10" cy="21" r=".5" />
    <svg:circle cx="10" cy="3" r=".5" />
    <svg:circle cx="10" cy="6" r="1" />
    <svg:circle cx="10" cy="14" r="1.5" />
    <svg:circle cx="10" cy="10" r="1.5" />
    <svg:circle cx="10" cy="18" r="1" />
    <svg:path
      d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeblurIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
