import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-3mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM10 10h3V9h-2V8h2V7h-3V5.5h4.5v6H10V10zm8 7h-3v1.5h-1.5v-6H18V17z"
    />
    <svg:path d="M15 14h1.5v1.5H15z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Si3mpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
