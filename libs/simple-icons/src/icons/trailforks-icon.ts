import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-trailforks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Trailforks</svg:title>
    <svg:path
      d="M12 1.608 0 22.392h24zm-1.292 5.698h2.584v5.885l2.664 1.917v5.587h-2.204V16.05L12 14.788l-1.752 1.262v4.645H8.044v-5.587l2.664-1.917z"
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
export class SiTrailforksIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFCD00');
}
