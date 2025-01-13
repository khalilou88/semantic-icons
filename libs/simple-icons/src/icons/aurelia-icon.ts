import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-aurelia-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Aurelia</svg:title>
    <svg:path
      d="M15.716 4.636L13.49 6.122l-2.295-3.439 2.228-1.486zM17.527 14.967l3.806 5.703-4.533 3.025-3.806-5.703-.664-.995 4.533-3.025zM11.817 18.777l.838 1.256-3.45 2.303-1.503-2.25.754-.504 2.697-1.8zM19.413 12.27l.968-.645 1.501 2.25-2.227 1.487-.838-1.256 1.26-.84zm-.596 1.836l-.664-.995 1.26-.84.664.994zM3.792 12.593l-.753.503L.744 9.657l3.45-2.302 1.61 2.41-2.698 1.8 2.697-1.8.686 1.029zM11.513 5.954l.687 1.029-4.534 3.025L6.98 8.98 3.21 3.33 7.742.305zM14.749 5.282l-1.26.84-.686-1.028-1.609-2.41 2.228-1.487 2.295 3.439zM9.12 20.577l-.664-.995 2.697-1.8.664.995zM18.817 14.106l-.664-.995 1.26-.84.664.994zM3.792 12.593l-.686-1.028 2.697-1.8.686 1.029zM13.489 6.122l-.686-1.028 1.26-.84.686 1.028zM17.527 14.967l-4.533 3.025-.664-.995 4.533-3.025zM11.513 5.954l.687 1.029-4.534 3.025L6.98 8.98zM2.507 5.132l.855 1.283-1.282.855-.856-1.282zM7.127 20.505l.856 1.283-1.282.855-.856-1.282zM3.754 21.797L0 16.125 20.063 2.706 24 8.287z"
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
export class SiAureliaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#ED2B88');
}
