import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-channel4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Channel 4</svg:title>
    <svg:path
      d="m14.309 0-.33.412v4.201l2.382-2.95zm-1.155 1.201L10.707 4.22v8.674h2.447zm3.268 1.701-2.443 3.02v14.81h2.443zM9.887 5.236l-6.201 7.657h3.142L9.887 9.12Zm-6.766 8.48v2.444h10.033v-2.443Zm14.125 0v2.444h3.633v-2.443Zm-6.539 3.268V24h2.443v-7.016Zm-3.271 4.573V24h2.443v-2.443zm6.543 0V24h5.189v-2.443z"
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
export class SiChannel4Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#AAFF89');
}
