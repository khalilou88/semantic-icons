import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-qubesos-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Qubes OS</title>
      <path
        d="M21.893 20.79l-2.289-1.332 1.547-.895a2.402 2.402 0 0 0 1.2-2.08V7.098l-.003-.059a2.402 2.402 0 0 0-1.198-2.027l-3.899-2.255-4.21-2.436a2.473 2.473 0 0 0-.237-.118L12.77.187l-.093-.036-.052-.019c-.028-.01-.057-.018-.085-.027l-.062-.019-.079-.02-.072-.017-.073-.013-.079-.013-.068-.008-.087-.008-.063-.004A10.324 10.324 0 0 0 11.9 0h-.03l-.082.001-.076.002-.093.007-.064.006c-.037.004-.073.01-.11.016-.014.004-.029.006-.044.009a3.266 3.266 0 0 0-.154.034 2.39 2.39 0 0 0-.602.245L5.536 3.277l-3 1.736a2.407 2.407 0 0 0-1.201 2.083v9.385a2.405 2.405 0 0 0 1.2 2.08l8.108 4.693a2.395 2.395 0 0 0 2.4.002l1.804-1.044 2.302 1.339c1.03.599 2.687.599 3.716 0l1.03-.6c1.027-.597 1.027-1.562-.002-2.161zm-10.71-2.695l-4.46-2.583a1.324 1.324 0 0 1-.66-1.143V9.206c0-.236.063-.464.177-.662l.002.001c.116-.2.282-.368.482-.485l4.459-2.58c.092-.053.189-.093.289-.122l.034-.01c.035-.01.07-.015.105-.022.023-.004.045-.01.068-.013.031-.004.062-.004.093-.006.028 0 .055-.004.083-.004.036 0 .073.004.11.007.02.002.038.002.058.005.037.005.074.014.11.022.018.004.037.007.055.012.04.011.077.025.115.04l.045.015c.052.022.104.047.154.076l4.46 2.58c.198.116.364.283.48.483l.002.003-.003.002c.116.201.177.43.177.661v5.161c0 .15-.028.295-.076.433a1.32 1.32 0 0 1-.583.71l-4.46 2.582a1.312 1.312 0 0 1-1.316 0z"
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
export class SvgQubesosIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
