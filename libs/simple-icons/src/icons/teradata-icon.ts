import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-teradata-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Teradata</svg:title>
    <svg:path
      d="M12 0C5 0 0 5.65 0 12.08C0 18.83 5 24 12 24S24 18.83 24 12.08C24 5.65 19 0 12 0M8.47 3.44H11.97V6.7H15.55V9.56H11.97V14.78C11.97 16.36 12.74 17.05 13.9 17.05C14.32 17.05 14.88 16.93 15.41 16.73C15.79 17.73 16.46 18.63 17.18 19.35A7 7 0 0 1 13.66 20.32C10.54 20.32 8.47 18.67 8.47 15.04V3.45Z"
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
export class SiTeradataIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F37440');
}
