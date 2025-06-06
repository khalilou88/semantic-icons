import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-lock-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.65111 11.6306 12 5.04736l3.0095 3.70405c-.627.41739-1.1433.9879-1.4955 1.65809C13.0696 10.1492 12.5522 10 12 10c-1.6569 0-3.00001 1.3432-3.00001 3 0 1.3076.8365 2.4197 2.00351 2.8306-.0023.0561-.0035.1126-.0035.1694v2c0 .7286.1948 1.4117.5351 2H4c-.55228 0-1-.4477-1-1v-7h2.87499c.30113 0 .58623-.1357.77612-.3694Z"
    />
    <svg:path
      fill-rule="evenodd"
      d="M16.1022 10.427C15.4372 10.8762 15 11.6371 15 12.5V14c-.0584 0-.1162.0025-.1733.0074-.9663.083-1.7363.853-1.8193 1.8193l-.0006.0067c-.0045.055-.0068.1105-.0068.1666v2c0 1.1046.8954 2 2 2h5.0079C21.1088 19.9957 22 19.1019 22 18v-2c0-.7403-.4022-1.3866-1-1.7324-.0154-.009-.031-.0177-.0467-.0262C20.6699 14.0874 20.3452 14 20 14v-1.5c0-.1712-.0172-.3384-.05-.5-.2316-1.1411-1.2405-2-2.45-2-.4425 0-.8581.115-1.2187.3167-.0613.0343-.1211.0711-.1791.1103ZM17.5 12c-.2761 0-.5.2239-.5.5V14h1v-1.5c0-.2761-.2239-.5-.5-.5Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M21.2422 10c-.8072-1.20598-2.182-2-3.7422-2-.1695 0-.3369.00938-.5016.02764L15.351 6.00001H18c.3148 0 .6112.1482.8.4L21.5 10h-.2578Zm-8.3308 2.5879C12.7544 12.2412 12.4054 12 12 12c-.5523 0-1 .4477-1 1 0 .4054.2412.7544.5879.9114.3304-.5386.7848-.9931 1.3235-1.3235ZM5.2 6.40001 2.5 10h2.89902l3.25-3.99999H6c-.31476 0-.61115.1482-.8.4Z"
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
export class SiSchoolLockAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
