import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-psychology-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 5c-2.65 0-4.79 2.06-4.97 4.67L6.7 12H8v4h3v3h3v-3.95l.89-.42A5.015 5.015 0 0 0 18 10c0-2.76-2.24-5-5-5zm-.5 9c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74zm1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8z"
      opacity=".3"
    />
    <svg:path
      d="M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68a7.016 7.016 0 0 0 3.94-7.26zm-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63z"
    />
    <svg:path
      d="M12.5 12.54c-.41 0-.74.31-.74.73 0 .41.33.74.74.74.42 0 .73-.33.73-.74a.71.71 0 0 0-.73-.73zm0-5.54c-1.03 0-1.74.67-2 1.45l.96.4c.13-.39.43-.86 1.05-.86.95 0 1.13.89.8 1.36-.32.45-.86.75-1.14 1.26-.23.4-.18.87-.18 1.16h1.06c0-.55.04-.65.13-.82.23-.42.65-.62 1.09-1.27.4-.59.25-1.38-.01-1.8-.31-.49-.9-.88-1.76-.88z"
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
export class SiPsychologyAltIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
