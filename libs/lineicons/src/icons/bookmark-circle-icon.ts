import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bookmark-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7197 6.85742C9.47709 6.85742 8.46973 7.86478 8.46973 9.10742V16.8574C8.46973 17.1358 8.62392 17.3913 8.87022 17.521C9.11652 17.6507 9.41442 17.6334 9.64398 17.4759L12.0755 15.8079C12.3312 15.6326 12.6684 15.6326 12.924 15.8079L15.3555 17.4759C15.5851 17.6334 15.883 17.6507 16.1293 17.521C16.3756 17.3913 16.5298 17.1358 16.5298 16.8574V9.10742C16.5298 7.86478 15.5224 6.85742 14.2798 6.85742H10.7197ZM9.96973 9.10742C9.96973 8.69321 10.3055 8.35742 10.7197 8.35742H14.2798C14.694 8.35742 15.0298 8.69321 15.0298 9.10742V15.4334L13.7725 14.571C13.0056 14.0449 11.9939 14.0449 11.227 14.571L9.96973 15.4334V9.10742Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5 2.23242C6.97715 2.23242 2.5 6.70957 2.5 12.2324C2.5 17.7553 6.97715 22.2324 12.5 22.2324C18.0228 22.2324 22.5 17.7553 22.5 12.2324C22.5 6.70957 18.0228 2.23242 12.5 2.23242ZM4 12.2324C4 7.538 7.80558 3.73242 12.5 3.73242C17.1944 3.73242 21 7.538 21 12.2324C21 16.9268 17.1944 20.7324 12.5 20.7324C7.80558 20.7324 4 16.9268 4 12.2324Z"
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
export class SiBookmarkCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
