import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nhl-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>NHL</title>
      <path
        d="M5.455 0 4.61 2.314c-.262.72-.693 1.172-1.277 1.344l-1.914.565.812 1.843c.376.851.567 1.738.567 2.64 0 2.49-1.272 3.06-1.272 5.827 0 3.988 3.083 6.597 5.948 7.334 1.448.353 1.886.375 3.193.697L12 24l1.334-1.436c1.308-.322 1.744-.344 3.191-.697 2.865-.737 5.95-3.346 5.95-7.334 0-2.767-1.272-3.336-1.272-5.828 0-.9.191-1.788.567-2.639l.812-1.843-1.914-.565c-.585-.172-1.014-.624-1.277-1.344L18.545 0l-1.887 1.563c-.5.414-1.006.623-1.506.623-.668 0-1.429-.326-1.937-.829L12 .157l-1.215 1.2c-.508.503-1.269.829-1.937.829-.5 0-1.006-.21-1.506-.623L5.455 0zm.14.523 1.546 1.28c.508.42 1.09.697 1.707.697.827 0 1.646-.414 2.158-.92L12 .596l.996.984c.512.506 1.33.92 2.156.92.617 0 1.199-.276 1.707-.697l1.545-1.28.694 1.899c.298.817.796 1.335 1.48 1.537l1.572.463-.668 1.517a6.856 6.856 0 0 0-.591 2.766c0 2.591 1.271 3.108 1.271 5.828 0 3.643-2.711 6.257-5.713 7.03-1.484.375-2.177.413-3.283.722C13.022 22.436 12 23.54 12 23.54s-1.022-1.103-1.166-1.254c-1.106-.31-1.797-.347-3.281-.723-3.003-.772-5.715-3.386-5.715-7.029 0-2.72 1.271-3.237 1.271-5.828a6.87 6.87 0 0 0-.591-2.766L1.85 4.422l1.572-.463c.685-.202 1.183-.72 1.482-1.537L5.596.523zM12 1.607s-1.25 1.616-3.152 1.616c-1.475 0-2.93-1.498-2.93-1.498-.658 2.949-3.084 3.16-3.084 3.16s.988 1.746.988 3.814c0 2.654-1.27 3.406-1.27 5.834 0 2.675 1.833 5.482 5.178 6.328 1.59.402 2.687.504 3.495.795.103.097.775.826.775.826s.672-.729.775-.826c.808-.291 1.905-.393 3.495-.795 3.344-.846 5.177-3.653 5.177-6.328 0-2.428-1.267-3.18-1.267-5.834 0-2.068.986-3.814.986-3.814s-2.426-.211-3.084-3.16c0 0-1.455 1.498-2.93 1.498C13.251 3.223 12 1.607 12 1.607zm0 1.01s1.258 1.33 3.152 1.33c1.512 0 2.608-1.021 2.608-1.021.769 2.09 2.42 2.422 2.42 2.422s-.715 1.459-.715 3.351c0 2.809 1.27 3.623 1.27 5.834 0 3.091-2.41 5.058-4.643 5.625-1.769.45-2.925.5-3.701.875 0 0-.284.258-.391.377-.107-.119-.389-.377-.389-.377-.776-.375-1.934-.426-3.703-.875-2.233-.567-4.642-2.534-4.642-5.625 0-2.211 1.27-3.025 1.27-5.834 0-1.892-.716-3.351-.716-3.351s1.651-.333 2.42-2.422c0 0 1.096 1.021 2.608 1.021 1.894 0 3.152-1.33 3.152-1.33zm0 1.06c-.632.465-1.737 1.08-3.152 1.08-.934 0-1.729-.315-2.29-.628A4.515 4.515 0 0 1 4.862 5.79c.224.67.485 1.708.485 2.908 0 2.313-.79 3.396-1.123 4.705l11.582-8.697c-.209.033-.427.05-.653.05-1.414 0-2.52-.615-3.152-1.08zm5.674.805L4.08 14.69c.065 2.008 1.362 3.472 2.844 4.233l11.828-8.883c-.061-.4-.098-.84-.098-1.34 0-1.2.26-2.237.485-2.908a4.438 4.438 0 0 1-1.465-1.309zm-1.666 2.153v3.398l1.8-1.351s-.06.433 0 1.164l-2.822 2.12V8.304c0-.518-.494-.532-.494-.532l1.516-1.136zm-1.871 1.404v4.565l-.975.73v-1.668l-1.121.842v1.67l-1.023.767v-3.662c0-.518-.495-.531-.495-.531l1.518-1.139V11.3l1.121-.842V8.77l.975-.73zm4.838 3.012L7.949 19.33c.053.014.105.029.158.042 1.401.357 3.116.54 3.633.836.117.085.26.236.26.236s.143-.15.26-.236c.517-.296 2.232-.48 3.633-.836 1.941-.493 4.03-2.216 4.03-4.84 0-1.307-.573-2.168-.948-3.482zm-8.852.002v4.564l-1.053.791-1.133-1.738v2.59l-.996.746v-3.662c0-.518-.494-.531-.494-.531l1.41-1.06L9.13 14.7v-2.898l.994-.748zm10.346 9.799a.818.818 0 1 0 0 1.637.818.818 0 0 0 0-1.637zm0 .175a.643.643 0 1 1 0 1.285.643.643 0 0 1 0-1.285zm-.336.176v.934h.176v-.38h.125l.177.38h.194l-.184-.395a.276.276 0 0 0 .184-.262.277.277 0 0 0-.278-.277h-.394zm.176.176h.218a.101.101 0 1 1 0 .203h-.218v-.203z"
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
export class SvgNhlIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
