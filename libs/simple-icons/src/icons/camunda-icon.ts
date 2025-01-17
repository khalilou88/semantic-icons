import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-camunda-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Camunda</svg:title>
    <svg:path
      d="M3.327 0A3.327 3.327 0 0 0 0 3.326v17.348A3.327 3.327 0 0 0 3.327 24h17.347A3.326 3.326 0 0 0 24 20.674V3.326A3.326 3.326 0 0 0 20.674 0H3.327Zm8.687 3.307c1.875 0 2.84 1.105 2.84 3.049v1.175H13.05V6.23c0-.867-.392-1.203-.994-1.203-.615-.014-.993.322-.993 1.189v6.56c0 .867.392 1.175.993 1.175.616 0 .994-.308.994-1.175v-1.734h1.804v1.608c-.014 1.945-.979 3.049-2.854 3.049-1.874 0-2.839-1.119-2.839-3.035V6.356c.014-1.944.979-3.049 2.853-3.049ZM9.161 17.476h5.693v3.217H9.161v-3.217Z"
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
export class SiCamundaIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FC5D0D');
}
