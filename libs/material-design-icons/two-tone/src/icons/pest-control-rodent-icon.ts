import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pest-control-rodent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.65 14.75c.22-.37.35-.79.35-1.25a2.5 2.5 0 0 0-2.5-2.5c-1.3 0-2.5 1.08-2.5 2.5 0 .69.28 1.32.73 1.77l-1.41 1.41A4.457 4.457 0 0 1 11 13.5c0-.92.28-1.76.75-2.47-.22.01-.44.02-.67.07a3.95 3.95 0 0 0-2.99 3.01c-.26 1.24.02 2.45.8 3.41.77.94 1.9 1.48 3.11 1.48h6.53a1.472 1.472 0 0 0 .99-2.56l-1.87-1.69zM17 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      opacity=".3"
    />
    <svg:circle cx="17" cy="17" r="1" />
    <svg:path
      d="m20.86 14.97-.93-.84c.48-3.45-2.87-6.04-6.05-4.82A5.79 5.79 0 0 0 12 9c-4.26 0-5.65 3.58-5.89 4.85A2.983 2.983 0 0 1 4 11c0-1.66 1.34-3 3-3h2.5a2.5 2.5 0 0 0 0-5H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.44 1.76 4.47 4.07 4.91A5.998 5.998 0 0 0 12 21h6.53c3.11 0 4.7-3.89 2.33-6.03zM18.53 19H12c-1.21 0-2.34-.54-3.11-1.48-.78-.95-1.06-2.16-.8-3.41a3.95 3.95 0 0 1 2.99-3.01c.22-.05.45-.06.67-.07-.47.71-.75 1.55-.75 2.47 0 1.24.5 2.37 1.32 3.18l1.41-1.41c-.45-.45-.73-1.08-.73-1.77 0-1.42 1.2-2.5 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5c0 .46-.13.88-.35 1.25l1.87 1.7c.31.28.48.67.48 1.09 0 .8-.66 1.46-1.47 1.46z"
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
export class SiPestControlRodentIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
