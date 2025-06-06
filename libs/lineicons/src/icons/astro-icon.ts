import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-astro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.23946 19.0349C8.33903 18.209 8.07616 16.4735 8.45131 15.2163C9.1018 16.009 10.0031 16.2601 10.9367 16.4018C12.3779 16.6205 13.7933 16.5387 15.1321 15.8777C15.2853 15.8021 15.4268 15.7015 15.5941 15.5995C15.7198 15.9652 15.7525 16.3345 15.7086 16.7102C15.6019 17.6254 15.1481 18.3324 14.4261 18.8682C14.1374 19.0826 13.832 19.2742 13.5338 19.4763C12.618 20.0975 12.3702 20.8259 12.7143 21.8854C12.7225 21.9112 12.7298 21.937 12.7483 22C12.2806 21.79 11.9391 21.4843 11.6788 21.0822C11.4039 20.6578 11.2731 20.1884 11.2662 19.6806C11.2627 19.4334 11.2627 19.184 11.2296 18.9404C11.1487 18.3464 10.8709 18.0803 10.3473 18.065C9.80993 18.0493 9.38487 18.3826 9.27216 18.9076C9.26356 18.9478 9.25108 18.9876 9.2386 19.0344L9.23946 19.0349Z"
      fill="#323544"
    />
    <svg:path
      d="M4.09961 15.007C4.09961 15.007 6.76596 13.7036 9.43976 13.7036L11.4557 7.44314C11.5312 7.14038 11.7516 6.93463 12.0003 6.93463C12.2491 6.93463 12.4695 7.14038 12.545 7.44314L14.5609 13.7036C17.7276 13.7036 19.9011 15.007 19.9011 15.007C19.9011 15.007 15.3721 2.62661 15.3632 2.60177C15.2332 2.23574 15.0138 2 14.7179 2H9.28321C8.98736 2 8.77678 2.23574 8.63794 2.60177C8.62816 2.62614 4.09961 15.007 4.09961 15.007Z"
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
export class SiAstroIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
