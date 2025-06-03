import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-voelkner-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>voelkner</svg:title>
    <svg:path
      d="M19.4 3.502C18.093 8.84 15.018 16.05 11.964 16.05S5.841 8.827 4.552 3.502H0c.229 1.007 1.121 4.707 2.597 8.122 2.543 5.89 5.695 8.876 9.367 8.876s6.828-2.991 9.385-8.893C22.806 8.247 23.737 4.592 24 3.5h-4.6z"
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
export class SiVoelknerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#94C125');
}
