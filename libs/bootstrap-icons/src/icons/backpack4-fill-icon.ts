import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-backpack4-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m1 2a1 1 0 0 0-2 0zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11z"
    />
    <svg:path
      d="M14 7.599A3 3 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A3 3 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBackpack4FillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('16');

  readonly height = input<string | number>('16');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
