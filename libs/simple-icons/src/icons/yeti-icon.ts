import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-yeti-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Yeti</svg:title>
    <svg:path
      d="M14.575 8.582v1.685h2.183v5.15h2.14v-5.15h2.183V8.583h-6.505ZM0 8.582l2.699 3.972v2.864h2.144v-2.864l2.693-3.971H5.172l-1.398 2.305-1.397-2.305zm8.022 0v6.836h5.84v-1.663h-3.694v-.974H13.3v-1.54h-3.132v-.974h3.589V8.583Zm13.832 0 .001 6.836H24V8.583Z"
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
export class SiYetiIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00263C');
}
