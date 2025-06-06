import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-monitor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 6.42187C2 5.17923 3.00736 4.17188 4.25 4.17188H19.75C20.9926 4.17188 22 5.17923 22 6.42188V13.8281C22 15.0708 20.9926 16.0781 19.75 16.0781H12.75V18.3281H15C15.4142 18.3281 15.75 18.6639 15.75 19.0781C15.75 19.4923 15.4142 19.8281 15 19.8281H9.00003C8.58582 19.8281 8.25003 19.4923 8.25003 19.0781C8.25003 18.6639 8.58582 18.3281 9.00003 18.3281H11.25V16.0781H4.25C3.00736 16.0781 2 15.0708 2 13.8281V6.42187ZM4.25 5.67188C3.83579 5.67188 3.5 6.00766 3.5 6.42187V13.8281C3.5 14.2423 3.83579 14.5781 4.25 14.5781H19.75C20.1642 14.5781 20.5 14.2423 20.5 13.8281V6.42188C20.5 6.00766 20.1642 5.67188 19.75 5.67188H4.25Z"
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
export class SiMonitorIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
