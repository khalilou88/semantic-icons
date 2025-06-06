import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nucleo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Nucleo</svg:title>
    <svg:path
      d="M12.025 0a3.868 3.868 0 00-1.964.525L1.354 5.55V6.5h15.853a3.9 3.9 0 003.463-2.115L13.922.508A3.868 3.868 0 0012.025 0zm9.81 5.072L13.91 18.801a3.9 3.9 0 00.1 4.056l6.734-3.908a3.865 3.865 0 001.914-3.35V5.55l-.822-.477zM1.46 7.848a3.9 3.9 0 00-.117.004l.017 7.787a3.868 3.868 0 001.946 3.334L12.008 24l.824-.475-7.926-13.73A3.9 3.9 0 001.46 7.848zM11.992 9.1a2.6 2.6 0 00-2.584 2.6 2.6 2.6 0 002.6 2.599 2.6 2.6 0 002.6-2.6 2.6 2.6 0 00-2.6-2.6 2.6 2.6 0 00-.016 0Z"
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
export class SiNucleoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#252B2D');
}
