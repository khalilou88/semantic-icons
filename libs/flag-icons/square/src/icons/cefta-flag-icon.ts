import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cefta-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#039" d="M0 0h512v512H0z" />
    <svg:circle
      cx="256"
      cy="266.5"
      r="32.5"
      fill="none"
      stroke="#fc0"
      stroke-width="29.3"
    />
    <svg:circle
      cx="256"
      cy="266.5"
      r="94.2"
      fill="none"
      stroke="#fc0"
      stroke-width="29.3"
    />
    <svg:path fill="#039" d="m346.3 176.1 90.3 90.3-90.3 90.3-90.3-90.3z" />
    <svg:path
      fill="#fc0"
      d="M102.1 251.8h63.2v29.3h-63.2zm276.4 0h94.2v29.3h-94.2zm-76.6-51.9 41.3-41.3 20.7 20.7-41.3 41.3zM241.3 51.8h29.3V166h-29.3z"
    />
    <svg:circle cx="154.8" cy="170.3" r="14.7" fill="#fc0" />
    <svg:circle cx="68.6" cy="266.5" r="14.7" fill="#fc0" />
    <svg:circle cx="256" cy="406.8" r="14.7" fill="#fc0" />
    <svg:circle cx="256" cy="453.9" r="14.7" fill="#fc0" />
    <svg:circle cx="350.2" cy="266.5" r="14.7" fill="#fc0" />
    <svg:path
      fill="#fc0"
      d="m136.9 364.3 20.7-20.7 20.7 20.7-20.7 20.7zm218.5 22.3L376 366l20.7 20.7-20.7 20.8z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCeftaFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
