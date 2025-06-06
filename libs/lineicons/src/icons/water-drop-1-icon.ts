import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-water-drop-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.4355 2.62345L12.0233 3.25L11.611 2.62345C11.8612 2.45885 12.1853 2.45885 12.4355 2.62345Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.611 2.62345C11.6113 2.6233 11.611 2.62345 12.0233 3.25C12.4355 2.62345 12.4353 2.6233 12.4355 2.62345L12.4365 2.62412L12.4382 2.62525L12.4437 2.62887L12.4627 2.64156C12.4789 2.65242 12.5021 2.66807 12.5317 2.68837C12.5911 2.72898 12.6765 2.78826 12.7843 2.86523C12.9998 3.01912 13.3051 3.24406 13.6704 3.53223C14.3996 4.10763 15.3739 4.93994 16.3507 5.96678C18.275 7.98954 20.3414 10.905 20.3414 14.1818C20.3414 18.7758 16.6173 22.5 12.0233 22.5C7.42926 22.5 3.70508 18.7758 3.70508 14.1818C3.70508 10.905 5.77151 7.98954 7.69577 5.96678C8.67261 4.93994 9.6469 4.10763 10.3762 3.53223C10.7414 3.24406 11.0467 3.01912 11.2622 2.86523C11.37 2.78826 11.4554 2.72898 11.5148 2.68837C11.5445 2.66807 11.5676 2.65242 11.5838 2.64156L11.6028 2.62887L11.6083 2.62525L11.611 2.62345ZM12.0233 4.1656C11.8349 4.30228 11.59 4.48516 11.3053 4.70982C10.6155 5.25405 9.69777 6.0386 8.78256 7.00065C6.92274 8.95567 5.20508 11.5061 5.20508 14.1818C5.20508 17.9474 8.25768 21 12.0233 21C15.7888 21 18.8414 17.9474 18.8414 14.1818C18.8414 11.5061 17.1238 8.95567 15.264 7.00065C14.3487 6.0386 13.431 5.25405 12.7412 4.70982C12.4565 4.48516 12.2117 4.30228 12.0233 4.1656Z"
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
export class SiWaterDrop1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
