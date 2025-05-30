import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-diamonds-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.16509 4.45923C5.55285 3.71602 6.32162 3.25 7.15991 3.25H16.8414C17.6796 3.25 18.4484 3.71602 18.8362 4.45923L20.9472 8.50541C21.3717 9.31907 21.2595 10.309 20.6637 11.007L12.5711 20.4869C12.4286 20.6539 12.2201 20.75 12.0006 20.75C11.7812 20.75 11.5727 20.6539 11.4302 20.4869L3.33758 11.007C2.74173 10.309 2.62952 9.31907 3.05404 8.50541L5.16509 4.45923ZM7.15991 4.75C6.88048 4.75 6.62422 4.90534 6.49497 5.15308L4.38392 9.19926C4.24241 9.47048 4.27981 9.80046 4.47843 10.0331L12.0006 18.8448L19.5228 10.0331C19.7214 9.80046 19.7588 9.47048 19.6173 9.19926L17.5063 5.15308C17.377 4.90534 17.1208 4.75 16.8414 4.75H7.15991Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDiamonds2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
