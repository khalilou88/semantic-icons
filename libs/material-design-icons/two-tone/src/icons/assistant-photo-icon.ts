import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-assistant-photo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z" opacity=".3" />
    <svg:path
      d="M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2v-7zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7V6z"
    />
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
export class SiAssistantPhotoIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
