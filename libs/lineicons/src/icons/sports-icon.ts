import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sports-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.67188 11.0771C4.67188 7.03048 7.95235 3.75 11.999 3.75C16.0457 3.75 19.3262 7.03048 19.3262 11.0771V13.4065C20.16 13.7359 20.75 14.549 20.75 15.5V19C20.75 20.2426 19.7426 21.25 18.5 21.25C17.2574 21.25 16.25 20.2426 16.25 19V15.5C16.25 14.4921 16.9127 13.639 17.8262 13.3526V11.0771C17.8262 9.22626 16.9632 7.57692 15.6177 6.50952C15.704 6.82503 15.75 7.15714 15.75 7.5C15.75 9.57107 14.0711 11.25 12 11.25C9.92893 11.25 8.25 9.57107 8.25 7.5C8.25 7.15649 8.29617 6.82376 8.38264 6.50767C7.03581 7.57502 6.17188 9.22519 6.17188 11.0771V13.352C7.08634 13.6378 7.75 14.4914 7.75 15.5V19C7.75 20.2426 6.74264 21.25 5.5 21.25C4.25736 21.25 3.25 20.2426 3.25 19V15.5C3.25 14.5498 3.83903 13.7371 4.67188 13.4073V11.0771ZM11.999 5.25C10.7567 5.25 9.75 6.25704 9.75 7.5C9.75 8.74264 10.7574 9.75 12 9.75C13.2426 9.75 14.25 8.74264 14.25 7.5C14.25 6.25768 13.242 5.25 11.999 5.25ZM5.5 14.75C5.08579 14.75 4.75 15.0858 4.75 15.5V19C4.75 19.4142 5.08579 19.75 5.5 19.75C5.91421 19.75 6.25 19.4142 6.25 19V15.5C6.25 15.0858 5.91421 14.75 5.5 14.75ZM18.5 14.75C18.0858 14.75 17.75 15.0858 17.75 15.5V19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19V15.5C19.25 15.0858 18.9142 14.75 18.5 14.75Z"
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
export class SiSportsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 24 25');

  readonly fill = input<string>('none');
}
