import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-rewind-mini-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.0002 17.035C11.0002 17.1383 10.9682 17.239 10.9087 17.3234C10.7494 17.549 10.4375 17.6028 10.2119 17.4435L3.07889 12.4085C3.03228 12.3756 2.99164 12.335 2.95874 12.2883C2.7995 12.0627 2.85329 11.7508 3.07889 11.5915L10.2119 6.55648C10.2962 6.49693 10.3969 6.46497 10.5002 6.46497C10.7763 6.46497 11.0002 6.68882 11.0002 6.96497V17.035ZM12.0789 12.4085C12.0323 12.3756 11.9916 12.335 11.9587 12.2883C11.7995 12.0627 11.8533 11.7508 12.0789 11.5915L19.2119 6.55648C19.2962 6.49693 19.3969 6.46497 19.5002 6.46497C19.7763 6.46497 20.0002 6.68882 20.0002 6.96497V17.035C20.0002 17.1383 19.9682 17.239 19.9087 17.3234C19.7494 17.549 19.4375 17.6028 19.2119 17.4435L12.0789 12.4085Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRewindMiniFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
