import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-buildings-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.75 14.6667C12.75 14.2524 13.0858 13.9167 13.5 13.9167H16.5C16.9142 13.9167 17.25 14.2524 17.25 14.6667C17.25 15.0809 16.9142 15.4167 16.5 15.4167H13.5C13.0858 15.4167 12.75 15.0809 12.75 14.6667Z"
      fill="#323544"
    />
    <svg:path
      d="M13.5 8.58334C13.0858 8.58334 12.75 8.91913 12.75 9.33334C12.75 9.74756 13.0858 10.0833 13.5 10.0833H16.5C16.9142 10.0833 17.25 9.74756 17.25 9.33334C17.25 8.91913 16.9142 8.58334 16.5 8.58334H13.5Z"
      fill="#323544"
    />
    <svg:path
      d="M11.5 3.25C10.2574 3.25 9.25 4.25736 9.25 5.5V7.75H5.5C4.25736 7.75 3.25 8.75736 3.25 10V20C3.25 20.4142 3.58579 20.75 4 20.75H20C20.4142 20.75 20.75 20.4142 20.75 20V5.5C20.75 4.25736 19.7426 3.25 18.5 3.25H11.5ZM9.25 19.25H4.75V10C4.75 9.58579 5.08579 9.25 5.5 9.25H9.25V11.5H7.75586C7.34165 11.5 7.00586 11.8358 7.00586 12.25C7.00586 12.6642 7.34165 13 7.75586 13H9.25V15.5H7.75586C7.34165 15.5 7.00586 15.8358 7.00586 16.25C7.00586 16.6642 7.34165 17 7.75586 17H9.25V19.25ZM10.75 12.2773C10.7503 12.2683 10.7505 12.2591 10.7505 12.25C10.7505 12.2409 10.7503 12.2317 10.75 12.2227V5.5C10.75 5.08579 11.0858 4.75 11.5 4.75H18.5C18.9142 4.75 19.25 5.08579 19.25 5.5V19.25H10.75V16.2773C10.7503 16.2683 10.7505 16.2591 10.7505 16.25C10.7505 16.2409 10.7503 16.2317 10.75 16.2227V12.2773Z"
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
export class SiBuildings1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
