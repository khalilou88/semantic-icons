import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-jhipster-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>JHipster</svg:title>
    <svg:path
      d="M20.709 7.171c-2.455-.029-6.332 1.749-8.684 2.962-3.434-1.75-10.178-4.729-10.942-1.54-1.03 4.297-2.187 7.563.985 8.167 2.207.42 7.122-2.43 9.912-4.205 2.78 1.771 7.746 4.66 9.96 4.231 3.168-.616 2-3.896.961-8.208-.24-1-1.067-1.394-2.192-1.407z"
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
export class SiJHipsterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3E8ACC');
}
