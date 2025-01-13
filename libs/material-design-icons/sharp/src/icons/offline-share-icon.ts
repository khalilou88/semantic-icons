import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-offline-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M6 5H4v18h12v-2H6z" />
    <svg:path d="M20 1H8v18h12V1zm-2 14h-8V5h8v10z" />
    <svg:path d="M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOfflineShareIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
