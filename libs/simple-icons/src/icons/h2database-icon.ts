import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-h2database-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>H2 Database</svg:title>
    <svg:path
      d="M17.17 13.27c.14-.015.28-.023.416-.023.7 0 1.228.159 1.599.469.37.314.555.756.555 1.334a2.861 2.861 0 0 1-.43 1.455c-.291.492-.775 1.066-1.46 1.727-.453.446-1.061.976-1.821 1.592a48.02 48.02 0 0 1-2.275 1.742v2.083h9.895V21.24H17.99c.219-.159.59-.435 1.11-.832.519-.4 1.033-.835 1.55-1.311.817-.76 1.425-1.5 1.822-2.215a4.624 4.624 0 0 0 .597-2.268c0-1.213-.416-2.154-1.247-2.815-.828-.662-2.033-.994-3.613-.994-.344 0-.692.015-1.036.049V6.04H13.86v4.701H8.965V6.04H5.65v12.846h3.315v-5.661h4.89v5.661h.039c.31-.242.623-.487.933-.74a28.564 28.564 0 0 0 1.826-1.588 14.854 14.854 0 0 0 .517-.529zM12.011 23.3A11.327 11.327 0 0 1 .7 11.99 11.305 11.305 0 0 1 12.011.699a11.286 11.286 0 0 1 11.29 11.29v.351H24v-.351A11.985 11.985 0 0 0 12.011 0 12.008 12.008 0 0 0 0 11.989 12.026 12.026 0 0 0 12.011 24h.352v-.7z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiH2databaseIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#09476B');
}
