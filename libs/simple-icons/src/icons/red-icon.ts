import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-red-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Red</svg:title>
    <svg:path
      d="M12 6.679V0L8.655 4.945Zm0 1.976v6.69l7.673-4L16.327 6.4zm0-1.976 3.345-1.734L12 0Zm8.655 6.133L12 17.322V24l12-6.242ZM12 24v-6.679l-8.655-4.509L0 17.758ZM4.327 11.345l7.673 4v-6.69L7.673 6.4Z"
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
export class SiRedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#B32629');
}
