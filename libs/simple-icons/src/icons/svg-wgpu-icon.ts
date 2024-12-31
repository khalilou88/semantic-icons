import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wgpu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>wgpu</title>
      <path
        d="M3.9999 2.0001 0 22h8.0001L12 15.0002l3.9999 6.9997H24L20.0001 2l-5.0003 8L12 6 9.0002 9.9999Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWgpuIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
