import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-revanced-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ReVanced</title>
      <path
        d="M5.1 0a.28.28 0 0 0-.23.42l6.88 11.93a.28.28 0 0 0 .48 0L19.13.42A.28.28 0 0 0 18.9 0ZM.5 0a.33.33 0 0 0-.3.46L10.43 23.8c.05.12.17.2.3.2h2.54c.13 0 .25-.08.3-.2L23.8.46a.33.33 0 0 0-.3-.46h-2.32a.24.24 0 0 0-.21.14L12.2 20.08a.23.23 0 0 1-.42 0L3.03.14A.23.23 0 0 0 2.82 0Z"
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
export class SvgRevancedIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
