import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sketchfab-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sketchfab</title>
      <path
        d="M11.3 0A11.983 11.983 0 0 0 .037 11a13.656 13.656 0 0 0 0 2 11.983 11.983 0 0 0 11.29 11h1.346a12.045 12.045 0 0 0 11.3-11.36 13.836 13.836 0 0 0 0-1.7A12.049 12.049 0 0 0 12.674 0zM15 6.51l2.99 1.74s-6.064 3.24-6.084 3.24S5.812 8.27 5.8 8.26l2.994-1.77 2.992-1.76zm-6.476 5.126L11 13v5.92l-2.527-1.4-2.46-1.43v-5.76zm9.461 1.572v2.924L15.5 17.574 13 19.017v-6.024l2.489-1.345 2.5-1.355z"
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
export class SvgSketchfabIcon {
  readonly class = input<string>('');
}
