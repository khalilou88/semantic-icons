import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-creative-commons-zero-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 12C17 8.68628 14.7615 6 12 6 9.23853 6 7 8.68628 7 12 7 15.3137 9.23853 18 12 18 14.7615 18 17 15.3137 17 12ZM10.7629 15.6451 14.3253 9.47241C14.7471 10.1614 15 11.0413 15 12 15 14.2091 13.6569 16 12 16 11.559 16 11.1401 15.873 10.7629 15.6451ZM9 12C9 9.79089 10.3431 8 12 8 12.441 8 12.8599 8.12695 13.2371 8.35486L9.67468 14.5276C9.25293 13.8386 9 12.9587 9 12ZM12 2C9.23987 2 6.73865 3.12134 4.93005 4.93005 3.12134 6.73865 2 9.23987 2 12 2 14.7601 3.12134 17.2614 4.93005 19.0699 6.73865 20.8787 9.23987 22 12 22 14.7601 22 17.2614 20.8787 19.0699 19.0699 20.8787 17.2614 22 14.7601 22 12 22 9.23987 20.8787 6.73865 19.0699 4.93005 17.2614 3.12134 14.7601 2 12 2ZM6.34424 6.34424C7.79358 4.8949 9.79224 4 12 4 14.2078 4 16.2064 4.8949 17.6558 6.34424 19.1051 7.79358 20 9.79224 20 12 20 14.2078 19.1051 16.2064 17.6558 17.6558 16.2064 19.1051 14.2078 20 12 20 9.79224 20 7.79358 19.1051 6.34424 17.6558 4.8949 16.2064 4 14.2078 4 12 4 9.79224 4.8949 7.79358 6.34424 6.34424Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCreativeCommonsZeroLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
