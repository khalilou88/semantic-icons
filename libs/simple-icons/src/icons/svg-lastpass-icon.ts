import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lastpass-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LastPass</title>
      <path
        d="M22.629,6.857c0-0.379,0.304-0.686,0.686-0.686C23.693,6.171,24,6.483,24,6.857 v10.286c0,0.379-0.304,0.686-0.686,0.686c-0.379,0-0.686-0.312-0.686-0.686V6.857z M2.057,10.286c1.136,0,2.057,0.921,2.057,2.057 S3.193,14.4,2.057,14.4S0,13.479,0,12.343S0.921,10.286,2.057,10.286z M9.6,10.286c1.136,0,2.057,0.921,2.057,2.057 S10.736,14.4,9.6,14.4s-2.057-0.921-2.057-2.057S8.464,10.286,9.6,10.286z M17.143,10.286c1.136,0,2.057,0.921,2.057,2.057 S18.279,14.4,17.143,14.4s-2.057-0.921-2.057-2.057S16.007,10.286,17.143,10.286z"
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
export class SvgLastpassIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
