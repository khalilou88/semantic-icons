import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-next-step-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.0854 4.5C19.0854 4.08579 18.7496 3.75 18.3354 3.75C17.9212 3.75 17.5854 4.08579 17.5854 4.5V9.83812L9.43248 4.27346C7.939 3.2541 5.91406 4.32365 5.91406 6.13185V17.868C5.91406 19.6762 7.939 20.7457 9.43248 19.7264L17.5854 14.1617V19.4999C17.5854 19.9142 17.9212 20.25 18.3354 20.25C18.7496 20.25 19.0854 19.9142 19.0854 19.4999V4.5ZM17.1843 12.6194L8.58687 18.4875C8.08904 18.8272 7.41406 18.4707 7.41406 17.868L7.41406 6.13185C7.41406 5.52912 8.08904 5.1726 8.58687 5.51238L17.1843 11.3805C17.6206 11.6782 17.6206 12.3216 17.1843 12.6194Z"
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
export class SiNextStep2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
