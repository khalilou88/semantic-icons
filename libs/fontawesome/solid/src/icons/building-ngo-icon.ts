import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-building-ngo-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM168 64l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 64 16 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 24c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-88c0-8.8 7.2-16 16-16zM304 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32zM61.3 71.1l34.7 52L96 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4L64 132.8 64 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4z"
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
export class SiBuildingNgoIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 384 512');
}
