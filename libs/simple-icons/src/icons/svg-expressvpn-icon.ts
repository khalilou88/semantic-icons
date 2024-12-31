import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-expressvpn-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ExpressVPN</title>
      <path
        d="M11.705 2.349a4.874 4.874 0 00-4.39 2.797L6.033 7.893h14.606c.41 0 .692.308.692.668 0 .359-.282.666-.692.666H2.592L0 14.772h2.824c-.796 1.72-1.002 2.567-1.002 3.26 0 2.105 1.72 3.62 4.416 3.62h8.239c1.771 0 3.337-1.412 3.337-3.03 0-1.411-1.206-2.515-2.772-2.515H5.596c-.873 0-1.284-.59-.924-1.335h11.859c4.004 0 7.469-3.029 7.469-6.802 0-3.183-2.618-5.621-6.16-5.621z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgExpressvpnIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
