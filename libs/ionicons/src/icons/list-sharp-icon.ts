import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-list-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M144 144h320M144 256h320M144 368h320"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="48px"
    />
    <svg:path
      d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-linejoin="round"
      stroke-width="32px"
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
export class SiListSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
