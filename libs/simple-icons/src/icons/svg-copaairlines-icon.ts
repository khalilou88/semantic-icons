import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-copaairlines-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Copa Airlines</title>
      <path
        d="M0 .105v6.456c.69-.02 1.48.208 2.336.32l-1.502.191c-.256.01-.545.033-.834.06v.339a20.066 20.066 0 0 1 3.387-.344c9.682-2.296 17.7-.135 17.7-.135C19.368 6.602 9.78 5.302 0 9.122v.58c1.452-.489 2.986-.867 4.453-1.04 2.176-.267 4.2-.147 5.902.332 7.157-.509 12.342 1.016 12.342 1.016C20.75 9.694 10.303 8.269 0 12.953v.465c2.852-1.355 5.844-2.138 8.395-2.305 2.585-.138 4.896.228 6.634 1.256 4.1-.063 7.225.467 8.971.889V.105H0zm7.264 7.397a7.27 7.27 0 0 1 1.859.787l-.734-.115c-.63-.236-1.377-.394-2.118-.498.321-.07.635-.13.993-.174zm-.059 1.807C5.014 9.306 2.491 9.697 0 10.518v.752c2.566-.993 5.155-1.598 7.639-1.956a17.752 17.752 0 0 0-.434-.005zm5.643.75c.511.336 1.198.871 1.605 1.38l-.426-.138c-.605-.435-1.239-.831-2.058-1.164.274-.018.557-.062.879-.078zm-3.323 2.224c-2.884.008-6.186.705-9.525 2.096v1.453c4.215-2.037 8.514-3.007 12.258-3.328-.855-.15-1.771-.223-2.733-.22zm9.104.865c-5.013.01-12.024.842-18.629 4.598v.606c.29-.165.58-.321.854-.467 2.156-1.153 4.31-1.957 6.464-2.446 2.039-.483 4.035-.653 5.86-.492 3.45.308 5.93 1.808 7.123 4.395.01.02.863 1.919.945 3.71l-.414-1.025c-.11-.512-.252-1.038-.521-1.51-.884-1.707-2.606-2.935-4.93-3.654-2.11-.662-4.882-.69-7.758-.13-2.552.48-5.15 1.438-7.623 2.656v4.506h.24c1.483-1.097 3.083-1.901 4.746-2.557 4.36-1.865 8.601-2.43 11.784-1.59 2.336.665 3.864 2.038 4.486 4.147H24V13.447a46.901 46.901 0 0 0-5.371-.299zm-1.912.397c.127.094.25.21.365.351.044.063 1.468 1.458 1.945 2.877l-.605-.664c-.727-1.066-1.648-1.873-2.926-2.49.382-.045.862-.058 1.22-.074zm-4.211 7.443a19.97 19.97 0 0 0-3.332.344c-2.37.43-4.854 1.23-7.242 2.563h18.226c-.849-1.231-2.199-2.02-3.85-2.471-1.17-.309-2.442-.455-3.802-.436z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCopaairlinesIcon {
  readonly class = input<string>('');
}
