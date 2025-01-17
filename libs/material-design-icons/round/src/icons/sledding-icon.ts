import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sledding-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4.92 14.74c-.13.39-.55.61-.95.48l-2.61-.85-.46 1.43 3.32 1.08c1.31.43 2.72-.29 3.15-1.61a2.52 2.52 0 0 0-1.07-2.91c-.32-.2-.45-.6-.3-.95.2-.44.71-.57 1.12-.31a4.01 4.01 0 0 1 1.68 4.62 4.003 4.003 0 0 1-5.04 2.57L1.74 17.6c-.39-.13-.63-.54-.52-.93.12-.41.55-.63.95-.5l3.22 1.05.46-1.43-3.19-1.04c-.39-.13-.63-.54-.52-.93.12-.41.55-.63.95-.5l.91.28v-2.78c0-.8.48-1.52 1.21-1.84.75-.32 4.11-1.76 4.26-1.83.41-.18.89-.21 1.35-.04.91.34 1.37 1.36 1.07 2.28l-1.04 3.2 2.15-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.22.4c.4.12.61.54.48.94zM6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82v3.43zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16.46-1.43zm.69-1.36-1.18-2.56-3.97.89 5.15 1.67z"
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
export class SiSleddingIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
