import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-au-torres-strait-islands-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="m0 128 256-32 256 32v256l-256 32L0 384Z" />
      <svg:path fill="#333" d="m0 96 256-32 256 32v32H0Z" />
      <svg:path fill="#6da544" d="M0 0h512v96H0Z" />
      <svg:path fill="#333" d="m0 416 256 32 256-32v-32H0Z" />
      <svg:path fill="#6da544" d="M0 512h512v-96H0Z" />
      <svg:path
        fill="#eee"
        d="M245 144c-106 32-101 112-67 186l-40 38 73-27v-98c24-35 66-35 90 0v98l73 27-40-38c34-74 39-154-67-186l-11 46-11-46zm11 83-9 27h-28l23 17-9 28 23-17 23 17-9-28 24-17h-29l-9-27z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAuTorresStraitIslandsFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
