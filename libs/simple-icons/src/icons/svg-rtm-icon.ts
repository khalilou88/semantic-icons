import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rtm-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>RTM</title>
      <path
        d="M5.584 9.054H1.98l-.487 1.413h3.408c.54 0 .594.25.51.494-.084.244-.18.323-.719.323h-3.43L0 14.946h1.917l.892-2.454c.263 0 .33.024.436.257l1.043 2.197h2.084l-1.148-2.46c1.368-.15 1.985-.822 2.206-1.698.211-.837-.173-1.734-1.846-1.734m2.817 0-.487 1.413H10l-1.541 4.48 2.036-.001 1.54-4.479h1.94l.486-1.413H8.4zm7.89 0h-1.306l-.485 1.414h.624c.272 0 .416.22.322.493l-1.368 3.985h2.036l1.37-3.988c.37-1.08.053-1.905-1.194-1.904m3.186 0h-1.16l-.486 1.414h.48c.271 0 .415.22.322.493l-1.368 3.985H19.3l1.37-3.988c.37-1.08.053-1.904-1.194-1.904m3.185 0h-1.16l-.485 1.414h.479c.272 0 .416.22.323.493l-1.369 3.985h2.036l1.37-3.988c.37-1.08.054-1.904-1.194-1.904"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRtmIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
