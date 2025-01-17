import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-privatedivision-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Private Division</svg:title>
    <svg:path
      d="M12.384.248A.422.422 0 0 0 11.998 0a.427.427 0 0 0-.387.248L6.172 12.002l5.441 11.752a.428.428 0 0 0 .616.18.428.428 0 0 0 .157-.18l5.443-11.752L12.384.248Zm-.386 18.449-3.101-6.695 3.101-6.697 3.1 6.697-3.1 6.695Z"
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
export class SiPrivatedivisionIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
