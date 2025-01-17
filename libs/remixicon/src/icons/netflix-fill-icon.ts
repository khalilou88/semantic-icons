import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-netflix-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.2917 3.81415L13.3102 9.52081L13.7059 10.6371L13.7132 5.82625L13.7222 1.00908H17.9931L18.0004 11.8713C18.0031 17.8519 17.9967 22.7617 17.9849 22.7708C17.9731 22.7798 17.7762 22.7708 17.5493 22.7435C16.5601 22.6256 15.2596 22.5076 14.2096 22.4622C13.8629 22.4459 13.5761 22.4277 13.5725 22.4241C13.5698 22.4205 13.3002 21.6618 12.7966 20.2397L12.7967 20.2359C12.3051 18.8476 11.5851 16.8121 10.653 14.1746L10.3126 13.2214L10.3054 17.8066C10.299 22.1718 10.2954 22.4168 10.2482 22.4168C10.0849 22.4168 8.67819 22.5076 8.20809 22.553C7.89953 22.5802 7.28241 22.6437 6.83772 22.6982C6.39212 22.749 6.02185 22.7835 6.01459 22.7762C6.00733 22.7689 6.00098 17.8674 6.00098 11.8831V1.00182H6.00615L6.00551 1H10.2936L10.3217 1.08077C10.3288 1.09558 10.3865 1.25644 10.479 1.51683L11.1204 3.29515L11.2928 3.79066L11.2917 3.81415Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNetflixFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
