import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-check-square-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.75 18.5V8.67794L19.25 10.1779V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H18.314L19.2936 3.77034C19.3842 3.67974 19.4806 3.59848 19.5816 3.52657C19.2607 3.35027 18.8921 3.25 18.5 3.25H5.5C4.25736 3.25 3.25 4.25736 3.25 5.5V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H18.5C19.7426 20.75 20.75 19.7426 20.75 18.5Z"
        fill="#323544"
      />
      <path
        d="M20.4838 6.51868C20.7767 6.22578 20.7767 5.75091 20.4838 5.45802C20.1909 5.16512 19.7161 5.16512 19.4232 5.45802L11.9298 12.9514L8.57686 9.59849C8.28396 9.3056 7.80909 9.3056 7.5162 9.5985C7.22331 9.89139 7.22331 10.3663 7.5162 10.6592L11.3995 14.5424C11.6924 14.8353 12.1672 14.8353 12.4601 14.5424L20.4838 6.51868Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCheckSquare2Icon {
  readonly class = input<string>('');
}
