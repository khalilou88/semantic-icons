import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-videogame-asset-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.7 17.87c.76-.28 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83L20.7 17.87zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm2.99 11.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.2 1.2C2.54 6.41 2 7.15 2 8v8c0 1.1.9 2 2 2h11.17l3.9 3.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zM10 13H9v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.05.01-.11.01-.16l3.14 3.14A.68.68 0 0 1 10 13z"
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
export class SiVideogameAssetOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
