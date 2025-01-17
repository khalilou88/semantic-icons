import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-patreon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 9.64475C22 13.6125 18.7742 16.8383 14.8065 16.8383C10.8387 16.8383 7.6129 13.6125 7.6129 9.64475C7.6129 5.67701 10.8387 2.4512 14.8065 2.4512C18.7742 2.41895 22 5.64475 22 9.64475ZM2 21.5802H5.54839V2.41895H2V21.5802Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPatreonIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
