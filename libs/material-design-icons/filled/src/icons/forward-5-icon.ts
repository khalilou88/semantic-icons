import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-forward-5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"
    />
    <svg:path
      d="M12.03 15.38c-.44 0-.58-.31-.6-.56h-.84c.03.85.79 1.25 1.44 1.25.93 0 1.44-.63 1.44-1.43 0-1.33-.97-1.44-1.3-1.44-.2 0-.43.05-.64.16l.11-.92h1.7v-.71h-2.39l-.25 2.17.67.17c.13-.13.28-.23.57-.23.4 0 .69.23.69.75-.01.05.02.79-.6.79z"
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
export class SiForward5Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
