import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gradienter-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8.12602 11H4.06189C4.02104 11.3276 4 11.6613 4 12C4 12.3387 4.02104 12.6724 4.06189 13H8.12602C8.04375 12.6804 8 12.3453 8 12C8 11.6547 8.04375 11.3196 8.12602 11ZM15.874 11C15.9562 11.3196 16 11.6547 16 12C16 12.3453 15.9562 12.6804 15.874 13H19.9381C19.979 12.6724 20 12.3387 20 12C20 11.6613 19.979 11.3276 19.9381 11H15.874ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
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
export class SiGradienterFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
