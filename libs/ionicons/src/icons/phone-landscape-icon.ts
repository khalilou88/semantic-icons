import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-phone-landscape-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M0 176v160a64 64 0 0064 64h384a64 64 0 0064-64V176a64 64 0 00-64-64H64a64 64 0 00-64 64zm448-32a32 32 0 0132 32v160a32 32 0 01-32 32H64a32 32 0 01-32-32v-11.35a7.94 7.94 0 014.75-7.3A32 32 0 0056 288v-64a32 32 0 00-19.25-29.35 7.94 7.94 0 01-4.75-7.3V176a32 32 0 0132-32z"
    />
    <svg:path
      d="M48 176a11.88 11.88 0 004.69 9.53A48 48 0 0172 224v64a48 48 0 01-19.31 38.47A11.88 11.88 0 0048 336a16 16 0 0016 16h384a16 16 0 0016-16V176a16 16 0 00-16-16H64a16 16 0 00-16 16z"
    />
    <svg:path
      d="M0 176v160a64 64 0 0064 64h384a64 64 0 0064-64V176a64 64 0 00-64-64H64a64 64 0 00-64 64zm448-32a32 32 0 0132 32v160a32 32 0 01-32 32H64a32 32 0 01-32-32v-11.35a7.94 7.94 0 014.75-7.3A32 32 0 0056 288v-64a32 32 0 00-19.25-29.35 7.94 7.94 0 01-4.75-7.3V176a32 32 0 0132-32z"
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
export class SiPhoneLandscapeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
