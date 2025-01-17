import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-baht-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M144 0c-17.7 0-32 14.3-32 32l0 32L37.6 64C16.8 64 0 80.8 0 101.6L0 224l0 41.7L0 288 0 406.3c0 23 18.7 41.7 41.7 41.7l70.3 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c61.9 0 112-50.1 112-112c0-40.1-21.1-75.3-52.7-95.1C280.3 222.6 288 200.2 288 176c0-61.9-50.1-112-112-112l0-32c0-17.7-14.3-32-32-32zM112 128l0 96-48 0 0-96 48 0zm64 96l0-96c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-64 64l0 96-48 0 0-96 48 0zm64 96l0-96 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-32 0z"
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
export class SiBahtSignIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 320 512');
}
