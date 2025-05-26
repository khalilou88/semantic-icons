import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-formbricks-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Formbricks</svg:title>
    <svg:path
      d="M8.658 0a5.714 5.714 0 0 0-5.715 5.714v1.532h14.49a3.623 3.623 0 0 0 0-7.246ZM2.943 8.377v7.246h14.49a3.623 3.623 0 0 0 0-7.246zm0 8.377v3.623a3.623 3.623 0 0 0 7.246 0v-3.623z"
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
export class SiFormbricksIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00C4B8');
}
