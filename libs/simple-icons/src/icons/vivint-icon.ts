import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vivint-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Vivint</svg:title>
    <svg:path
      d="M9.102 2.04a.81.81 0 0 0-.553.218L.514 9.756A1.62 1.62 0 0 0 0 10.939V21.15c0 .447.362.81.809.81h16.584a.81.81 0 0 0 .808-.81V10.94a1.62 1.62 0 0 0-.514-1.184l-8.035-7.5a.804.804 0 0 0-.55-.217zm0 4.964 5.252 4.904v6.203H3.848v-6.203l5.254-4.904zM21.648 17.35a2.305 2.305 0 0 0-2.26 2.304 2.305 2.305 0 0 0 2.307 2.307A2.305 2.305 0 0 0 24 19.654a2.305 2.305 0 0 0-2.305-2.304 2.305 2.305 0 0 0-.047 0z"
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
export class SiVivintIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#212721');
}
