import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pagination-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.71968 11.4695C2.42678 11.7624 2.42677 12.2373 2.71966 12.5302L6.71966 16.5303C7.01255 16.8232 7.48742 16.8232 7.78032 16.5303C8.07322 16.2374 8.07323 15.7626 7.78034 15.4697L4.31066 11.9999L7.78032 8.53034C8.07322 8.23745 8.07323 7.76258 7.78034 7.46968C7.48745 7.17678 7.01258 7.17677 6.71968 7.46966L2.71968 11.4695Z"
      fill="#323544"
    />
    <svg:path
      d="M22.2803 12.5302C22.5732 12.2373 22.5732 11.7624 22.2803 11.4695L18.2803 7.46966C17.9874 7.17677 17.5126 7.17678 17.2197 7.46968C16.9268 7.76258 16.9268 8.23745 17.2197 8.53034L20.6893 11.9999L17.2197 15.4697C16.9268 15.7626 16.9268 16.2374 17.2197 16.5303C17.5126 16.8232 17.9874 16.8232 18.2803 16.5303L22.2803 12.5302Z"
      fill="#323544"
    />
    <svg:path
      d="M8.5 11.1C8.00294 11.1 7.6 11.5029 7.6 12C7.6 12.4971 8.00294 12.9 8.5 12.9C8.99706 12.9 9.4001 12.4971 9.4001 12C9.4001 11.5029 8.99706 11.1 8.5 11.1Z"
      fill="#323544"
    />
    <svg:path
      d="M11.6 12C11.6 11.5029 12.0029 11.1 12.5 11.1C12.9971 11.1 13.4001 11.5029 13.4001 12C13.4001 12.4971 12.9972 12.9 12.5001 12.9C12.003 12.9 11.6 12.4971 11.6 12Z"
      fill="#323544"
    />
    <svg:path
      d="M15.6 12C15.6 11.5029 16.0029 11.1 16.5 11.1C16.9971 11.1 17.4001 11.5029 17.4001 12C17.4001 12.4971 16.9972 12.9 16.5001 12.9C16.003 12.9 15.6 12.4971 15.6 12Z"
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
export class SiPaginationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
