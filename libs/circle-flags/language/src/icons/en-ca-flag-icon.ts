import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-en-ca-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M144 0 45 512h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-72 32-72-32Z"
      />
      <svg:path
        fill="#0052b4"
        d="M512 68 404 176h108V68zM404 336l108 108V336H404zm-228 68L68 512h108V404zm160 0v108h108L336 404z"
      />
      <svg:path
        fill="#d80027"
        d="M0 0v512h45l131-131v-45l-32 32V0H0zm368 0v144L512 0H368zM256 34l-22 33h-23l23 45-45-22v22l-22 11 45 22-12 23h45v33h22v-33h45l-11-23 44-22-22-11V90l-45 22 23-44h-23l-22-34zm48 174-96 96v208h96V304h208v-96H304zm32 128 176 176v-45L381 336h-45z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEnCaFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
