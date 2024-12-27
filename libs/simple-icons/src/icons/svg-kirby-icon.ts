import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kirby-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kirby</title>
      <path
        d="M16.571 12l-2.857 1.48v.234h2.857V16H7.43v-2.286h2.857v-.25L7.429 12V9.143L12 11.598l4.571-2.455M12 0l10.286 5.999V18L12 24 1.714 18.001V6zM2.857 6.682v10.636L12 22.651l9.143-5.333V6.682L12 1.349Z"
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgKirbyIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
