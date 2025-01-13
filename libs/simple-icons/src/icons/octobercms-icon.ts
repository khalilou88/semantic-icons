import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-octobercms-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>October CMS</svg:title>
    <svg:path
      d="M20.949 11.496C20.573 5.365 13.894.06 11.143 0 8.391-.059 3.247 6.435 3.04 13.033 2.844 19.219 8.124 23.462 10.397 24c.063-2.91.296-13.627.335-14.877.082-2.553.207-6.527.634-6.659.244-.076.578 2.158.537 3.478-.008.252-.011 1.068-.011 2.226.46-.469.94-.955 1.233-1.242.8-.787 1.155-.693.77.009-.236.432-1.253 1.868-2.001 2.909.004 2.099.013 4.74.023 7.202 1.057-1.237 2.35-2.72 3.03-3.378 1.425-1.382 1.576-1.207.903.243-.413.888-2.434 3.258-3.925 5.127.009 2.185.016 4.021.018 4.898 4-.88 9.373-6.42 9.006-12.44"
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
export class SiOctobercmsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DB6A26');
}
