import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-phone-portrait-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z"
    />
    <svg:path
      d="M336 48a11.88 11.88 0 00-9.53 4.69A48 48 0 01288 72h-64a48 48 0 01-38.47-19.31A11.88 11.88 0 00176 48a16 16 0 00-16 16v384a16 16 0 0016 16h160a16 16 0 0016-16V64a16 16 0 00-16-16z"
    />
    <svg:path
      d="M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z"
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
export class SiPhonePortraitIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
