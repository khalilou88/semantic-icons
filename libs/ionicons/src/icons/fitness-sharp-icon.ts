import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-fitness-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M480 272h-37.34a261.41 261.41 0 01-18.25 32H480zM32 240v32h37.34a225.1 225.1 0 01-12.4-32z"
    />
    <svg:path
      d="M304 259.78l-51.73 103.46-48-160L169.89 272H69.34c10 20.92 23.5 41.41 40.63 61.68 40.12 47.46 94.25 79.75 137 108.32l9 6 9-6c42.78-28.57 96.91-60.86 137-108.32A322.78 322.78 0 00424.41 304h-98.3z"
    />
    <svg:path
      d="M211.73 116.76l48 160L304 188.22 345.89 272h96.77A213.13 213.13 0 00464 176.65C463.37 114.54 413.54 64 352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64 98.46 64 48.63 114.54 48 176.65A211.23 211.23 0 0056.94 240h93.17z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFitnessSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
