import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-add-reaction-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M24 4c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1zm-2.48 4.95c.31.96.48 1.99.48 3.05 0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.5 0 2.92.34 4.2.94-.12.33-.2.68-.2 1.06 0 1.35.9 2.5 2.13 2.87A3.003 3.003 0 0 0 21 9c.18 0 .35-.02.52-.05zM7 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5zm9.31 4.5H7.69c-.38 0-.63.42-.44.75.95 1.64 2.72 2.75 4.75 2.75s3.8-1.11 4.75-2.75a.503.503 0 0 0-.44-.75zM17 9.5c0-.83-.67-1.5-1.5-1.5S14 8.67 14 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"
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
export class SiAddReactionIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
