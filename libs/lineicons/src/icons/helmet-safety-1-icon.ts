import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-helmet-safety-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 2.5C14.1998 2.5 15.1802 3.43903 15.2464 4.62222C18.8738 5.7833 21.5 9.1827 21.5 13.1955V14.6094H21.75C22.1642 14.6094 22.5 14.9452 22.5 15.3594V16.8594C22.5 17.2736 22.1642 17.6094 21.75 17.6094L3.25 17.6094C2.83579 17.6094 2.5 17.2736 2.5 16.8594V15.3594C2.5 14.9452 2.83579 14.6094 3.25 14.6094H3.5V13.1955C3.5 9.1827 6.12617 5.7833 9.75357 4.62222C9.81981 3.43903 10.8002 2.5 12 2.5H13ZM13 4H12C11.5858 4 11.25 4.33579 11.25 4.75V7.25C11.25 7.66421 10.9142 8 10.5 8C10.0858 8 9.75 7.66421 9.75 7.25V6.21568C6.96835 7.31251 5 10.0241 5 13.1955V14.6094H8.75V12.8594C8.75 12.4452 9.08579 12.1094 9.5 12.1094C9.91421 12.1094 10.25 12.4452 10.25 12.8594V14.6094H11.75V12.8594C11.75 12.4452 12.0858 12.1094 12.5 12.1094C12.9142 12.1094 13.25 12.4452 13.25 12.8594V14.6094H14.75V12.8594C14.75 12.4452 15.0858 12.1094 15.5 12.1094C15.9142 12.1094 16.25 12.4452 16.25 12.8594V14.6094H20V13.1955C20 10.0241 18.0317 7.31251 15.25 6.21568V7.25C15.25 7.66421 14.9142 8 14.5 8C14.0858 8 13.75 7.66421 13.75 7.25V4.75C13.75 4.33579 13.4142 4 13 4Z"
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
export class SiHelmetSafety1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
