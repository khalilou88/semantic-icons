import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-velocity-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Velocity</svg:title>
    <svg:path
      d="m7.623 6.719-4.752.959a.65.65 0 0 0-.44.324L.083 12.248a.65.65 0 0 0 .045.701l2.986 4.076a.66.66 0 0 0 .657.256l4.736-.957a.65.65 0 0 0 .363-.215h11.694a.542.542 0 0 0 0-1.084h-2.95a.53.53 0 0 1-.394-.152.545.545 0 0 1 0-.78.55.55 0 0 1 .394-.152h5.875a.53.53 0 0 0 .512-.33v-.422a.53.53 0 0 0-.512-.33h-9.79a.547.547 0 0 1-.544-.543.54.54 0 0 1 .543-.54h5.85a.544.544 0 0 0 .525-.542.54.54 0 0 0-.525-.543H15.68a.54.54 0 1 1 0-1.082h5.86a.546.546 0 0 0 .524-.543.54.54 0 0 0-.525-.54H9.416L8.279 6.972a.65.65 0 0 0-.656-.254M7.576 7.77a.527.527 0 0 1 .207.715l-1.451 2.631a.88.88 0 0 0 .059.945L8.1 14.39a.528.528 0 0 1-.854.623l-1.709-2.326a.88.88 0 0 0-.88-.344l-2.897.586a.523.523 0 0 1-.621-.412.525.525 0 0 1 .41-.621l3.14-.635a.9.9 0 0 0 .596-.438l1.576-2.845a.524.524 0 0 1 .715-.206m13.608 2.92a.54.54 0 1 0-.001 1.082.54.54 0 0 0 0-1.082"
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
export class SiVelocityIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1BBAE0');
}
