import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-devbox-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Devbox</svg:title>
    <svg:path
      d="m19.546 7.5726-1.531-1.5703c-.4881.4371-.965.8647-1.442 1.2922l-.959.8596c1.3076 1.3446 2.5887 2.6624 3.8756 3.987l-2.4261 2.4956-1.4508 1.4924c.55.4988 1.0916.9897 1.6397 1.4864l.765.6933 2.209-2.2773c1.2588-1.2976 2.5141-2.5916 3.7736-3.8905v-.001a20797.5906 20797.5906 0 0 1-4.454-4.5674ZM2.992 9.0716A16808.14 16808.14 0 0 1 0 12.141c2.0108 2.0727 3.9927 4.1152 5.9838 6.1666l.5111-.4635c.638-.5786 1.2616-1.144 1.8924-1.715l-1.447-1.4888c-.8134-.8368-1.6208-1.6676-2.431-2.5015 1.0462-1.075 2.0745-2.132 3.1094-3.1959l.7674-.7888c-.4342-.3892-.861-.7718-1.2883-1.1546l-1.114-.9983v.0011c-.9996 1.0251-1.9958 2.0472-2.992 3.0694Zm12.585-6.0372c-1.317 6.199-2.6283 12.3689-3.9453 18.5656l-.1962-.0387a2911.4317 2911.4317 0 0 0-3.0284-.5957c.8529-4.0118 1.7034-8.0133 2.5549-12.0196L12.3533 2.4z"
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
export class SiDevboxIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#280459');
}
