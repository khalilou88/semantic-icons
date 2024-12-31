import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cm-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cm"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#007a5e" d="M0 0h170.7v512H0z" />
      <path fill="#ce1126" d="M170.7 0h170.6v512H170.7z" />
      <path fill="#fcd116" d="M341.3 0H512v512H341.3z" />
      <g fill="#fcd116" transform="translate(256 256)scale(5.6889)">
        <g id="cm-b">
          <path id="cm-a" d="M0-8-2.5-.4 1.3.9z" />
          <use
            xlink:href="#cm-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <use
          xlink:href="#cm-b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
      </g>
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
export class SvgCmFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
