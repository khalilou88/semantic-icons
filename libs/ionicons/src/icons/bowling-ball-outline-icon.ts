import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bowling-ball-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:circle cx="288" cy="200" r="24" />
    <svg:circle cx="296" cy="128" r="24" />
    <svg:circle cx="360" cy="168" r="24" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBowlingBallOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
