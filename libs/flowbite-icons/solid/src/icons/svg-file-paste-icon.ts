import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-file-paste-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M6.5 3.85c0-.47.392-.85.875-.85h5.25c.483 0 .875.38.875.85h1.75c.966 0 1.75.761 1.75 1.7V6h-1c-.728 0-1.732-.06-2.434.095a4.01 4.01 0 0 0-.88.307.91.91 0 0 0-.061-.002h-.875V4.7h-3.5v1.7h-.875a.863.863 0 0 0-.875.85c0 .47.392.85.875.85h3.36L9.077 9.871a4 4 0 0 0-.892 1.526C7.97 12.083 8 13.268 8 14v5c0 .729.195 1.412.535 2H4.75C3.784 21 3 20.239 3 19.3V5.55c0-.939.784-1.7 1.75-1.7H6.5Z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M14 8.048V12h-3.907a2 2 0 0 1 .446-.763l2.434-2.603A2 2 0 0 1 14 8.048ZM16 8v4a2 2 0 0 1-2 2h-4v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3Z"
        clip-rule="evenodd"
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
export class SvgFilePasteIcon {
  readonly class = input<string>('');
}
