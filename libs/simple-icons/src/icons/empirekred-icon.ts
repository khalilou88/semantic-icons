import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-empirekred-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Empire Kred</svg:title>
    <svg:path
      d="M24 4.678c0-2.08-1.674-3.774-3.727-3.774H3.725C1.67.904 0 2.597 0 4.684v7.535c0 .336.045.667.135.997.03.134.07.264.12.39.25.623.653 1.17 1.173 1.593.51.524 1.17 1.095 1.965 1.71l.105.074.435.33.52.397c1.19.912 3.205 2.453 6.165 4.71.483.366 1.038.676 1.383.676.342 0 .901-.31 1.382-.676 2.96-2.257 4.972-3.798 6.164-4.71l.972-.74h-.002l.11-.085c.798-.612 1.463-1.19 1.968-1.71.514-.418.908-.96 1.15-1.576.166-.44.252-.906.254-1.376v-7.15h-.003l.003-.003v-.39zm-4.14 6.242a6.42 6.42 0 00-.283-.045c-.105 0-.226-.015-.33-.015a1.883 1.883 0 00-.81.164c-.214.1-.4.248-.54.436-.135.196-.23.415-.286.646-.06.254-.09.524-.09.81v2.88h-5.027l-3.733-5.583-1.556 1.575v3.975h-2.72V3.393H7.2v5.13l4.83-5.127h3.395l-4.83 4.885 5.166 7.293V9.395h1.662v1.182h.023c.084-.195.195-.38.33-.547.144-.168.3-.312.483-.43.18-.106.375-.21.58-.27.205-.06.42-.09.64-.09.114 0 .24.03.38.06z"
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
export class SiEmpirekredIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#72BE50');
}
