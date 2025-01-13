import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scissors-cut-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 5.9967C10 6.7292 9.80311 7.41571 9.45936 8.0062L12 10.5825L18.7279 3.85457C19.509 3.07352 20.7753 3.07352 21.5563 3.85457L9.44618 15.9647C9.79807 16.5603 10 17.2549 10 17.9967C10 20.2058 8.20914 21.9967 6 21.9967C3.79086 21.9967 2 20.2058 2 17.9967C2 15.7876 3.79086 13.9967 6 13.9967C6.74181 13.9967 7.43645 14.1986 8.03197 14.5505L10.5858 11.9967L8.03197 9.44289C7.43645 9.79478 6.74181 9.9967 6 9.9967C3.79086 9.9967 2 8.20584 2 5.9967C2 3.78756 3.79086 1.9967 6 1.9967C8.20914 1.9967 10 3.78756 10 5.9967ZM8 5.9967C8 4.89213 7.10457 3.9967 6 3.9967C4.89543 3.9967 4 4.89213 4 5.9967C4 7.10127 4.89543 7.9967 6 7.9967C7.10457 7.9967 8 7.10127 8 5.9967ZM21.5563 20.1388C20.7753 20.9199 19.509 20.9199 18.7279 20.1388L13.4113 14.8222L14.8255 13.408L21.5563 20.1388ZM16 10.9967H18V12.9967H16V10.9967ZM20 10.9967H22V12.9967H20V10.9967ZM6 10.9967H8V12.9967H6V10.9967ZM2 10.9967H4V12.9967H2V10.9967ZM6 19.9967C7.10457 19.9967 8 19.1013 8 17.9967C8 16.8921 7.10457 15.9967 6 15.9967C4.89543 15.9967 4 16.8921 4 17.9967C4 19.1013 4.89543 19.9967 6 19.9967Z"
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
export class SiScissorsCutLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
