import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-device-gamepad-3-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-device-gamepad-3"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0m-6.707 -6.293a1 1 0 0 1 .707 .293l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.707 .293h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -.707 -.293l-3 -3a1 1 0 0 1 0 -1.414l3 -3a1 1 0 0 1 .707 -.293zm-6 -6a2 2 0 0 1 2 2v2a1 1 0 0 1 -.293 .707l-3 3a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.293 -.707v-2a2 2 0 0 1 2 -2z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDeviceGamepad3Icon {
  readonly class = input('');
}
