import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vmware-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.6538 9.9879C13.1993 10.1607 13.5563 10.5316 13.7248 11.1005V14.2807H16.1482V14.2775H16.521V14.2709H16.5558V8.87531C16.2778 7.93664 15.689 7.32399 14.7896 7.03739H3.94294C3.04333 7.32293 2.4546 7.93557 2.17676 8.87531V20.2179C2.45479 21.1565 3.05616 21.7505 3.98085 22H14.7517C15.6764 21.7505 16.2778 21.1565 16.5558 20.2179V17.2608H13.7248V17.973C13.5563 18.5419 13.1919 18.9018 12.6317 19.0528H6.10404C5.54375 18.9018 5.17936 18.5419 5.01086 17.973V11.1005C5.17936 10.5316 5.53639 10.1607 6.08191 9.9879H12.6538Z"
      fill="#323544"
    />
    <svg:path
      d="M21.8237 3.83792C21.5457 2.89927 20.9569 2.28663 20.0575 2H9.21086C8.31144 2.28663 7.72274 2.89927 7.44467 3.83792V6.72279H10.2756V6.06312C10.4441 5.49424 10.8011 5.12338 11.3467 4.9505H17.9185C18.4641 5.12338 18.8211 5.49424 18.9896 6.06312V12.9356C18.8211 13.5045 18.4567 13.8644 17.8964 14.0154H11.3688C10.8085 13.8644 10.4441 13.5045 10.2756 12.9356V9.6733H7.44467V15.1805C7.72274 16.1191 8.32407 16.7132 9.24874 16.9626H20.0196C20.9443 16.7132 21.5457 16.1191 21.8237 15.1805V3.83792Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVmwareIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
