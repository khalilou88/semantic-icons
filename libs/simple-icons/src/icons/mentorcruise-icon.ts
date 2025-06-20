import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mentorcruise-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MentorCruise</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm-.387 3.791v8.08H6.947c1.557-2.693 3.111-5.386 4.666-8.08Zm.774 0c1.554 2.694 3.11 5.387 4.666 8.08h-4.666Zm-9.244 8.854h17.714l-1.68 2.91H4.823Zm2.125 3.683h13.464l-1.68 2.908H6.948Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMentorcruiseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#172E59');
}
