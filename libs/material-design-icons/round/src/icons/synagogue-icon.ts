import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-synagogue-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 8.94V21h4v-4.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v5h4V8.94a2 2 0 0 0-.72-1.54l-4-3.33c-.74-.62-1.82-.62-2.56 0l-4 3.33c-.46.38-.72.94-.72 1.54zM13.5 10c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm0 16h2V9H1v10c0 1.1.9 2 2 2zM21 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 16h2c1.1 0 2-.9 2-2V9h-4v12z"
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
export class SiSynagogueIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
