import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mood-crazy-happy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-mood-crazy-happy"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-7.493 -6.493a1 1 0 0 0 -1.414 1.414l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l.793 -.792l.793 .792a1 1 0 1 0 1.414 -1.414l-.792 -.793l.792 -.793a1 1 0 1 0 -1.414 -1.414l-.793 .792zm7 0a1 1 0 0 0 -1.414 1.414l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l.793 -.792l.793 .792a1 1 0 0 0 1.414 -1.414l-.792 -.793l.792 -.793a1 1 0 1 0 -1.414 -1.414l-.793 .792z"
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
export class SvgMoodCrazyHappyIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
