import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-directions-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-directions"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M10 22a1 1 0 0 1 0 -2h1v-2.001l-5 .001a1 1 0 0 1 -.707 -.293l-2 -2a1 1 0 0 1 0 -1.414l2 -2a1 1 0 0 1 .707 -.293l5 -.001v-1.999h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h3v-1a1 1 0 0 1 2 0v1h6a1 1 0 0 1 .707 .293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -.707 .293h-6v1.999l1 .001a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1l-1 -.001v2.001h1a1 1 0 0 1 0 2z"
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
export class SvgDirectionsIcon {
  readonly class = input<string>('');
}
