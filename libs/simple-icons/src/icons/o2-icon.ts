import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-o2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>O2</svg:title>
    <svg:path
      d="M9.473.191C3.827.191 0 4.271 0 9.917c0 5.317 3.86 9.726 9.472 9.726 5.61 0 9.433-4.409 9.433-9.726C18.905 4.27 15.116.19 9.473.19zm-.002 2.77c3.677 0 5.79 3.422 5.79 6.956 0 3.314-1.785 6.956-5.79 6.956-4.007 0-5.827-3.642-5.827-6.956 0-3.534 2.148-6.956 5.827-6.956zm11.69 12.48a5.47 5.47 0 0 0-2.44.588l.13 1.367c.543-.353 1.204-.66 1.9-.66.695 0 1.34.355 1.34 1.11 0 1.509-2.791 3.84-3.558 4.584v1.38H24v-1.298h-3.36c1.344-1.32 3.1-2.924 3.1-4.668 0-1.614-1.013-2.403-2.58-2.403z"
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
export class SiO2Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0050FF');
}
