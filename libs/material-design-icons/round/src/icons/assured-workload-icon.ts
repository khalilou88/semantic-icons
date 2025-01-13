import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-assured-workload-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1zM2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1zm17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26l2-1zm.55 1.96-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5a.986.986 0 0 0-.9-.01zm-.97 6.08-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.44.44 1.88-1.85c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.23 2.21a.996.996 0 0 1-1.41 0z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAssuredWorkloadIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
