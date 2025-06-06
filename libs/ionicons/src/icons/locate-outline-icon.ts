import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-locate-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 96V56M256 456v-40"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48px"
    />
    <svg:path
      d="M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144Z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:path
      d="M416 256h40M56 256h40"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48px"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLocateOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
