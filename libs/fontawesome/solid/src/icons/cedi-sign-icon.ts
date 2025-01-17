import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-cedi-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 34.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3l0 34.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-34.7c30.9-5.2 59.2-17.7 83.2-35.8c14.1-10.6 17-30.7 6.4-44.8s-30.7-17-44.8-6.4c-13.2 9.9-28.3 17.3-44.8 21.6L256 132c16.4 4.2 31.6 11.6 44.8 21.6c14.1 10.6 34.2 7.8 44.8-6.4s7.8-34.2-6.4-44.8c-24-18-52.4-30.6-83.2-35.8L256 32zM192 132L192 380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124z"
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
export class SiCediSignIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 384 512');
}
