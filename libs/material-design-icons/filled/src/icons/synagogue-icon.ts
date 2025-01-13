import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-synagogue-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 8v13h4v-5c0-1.1.9-2 2-2s2 .9 2 2v5h4V8l-6-5-6 5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zM1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 4h4v12h-4z"
    />
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
export class SiSynagogueIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
