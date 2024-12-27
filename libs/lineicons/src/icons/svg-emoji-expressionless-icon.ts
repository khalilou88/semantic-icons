import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-emoji-expressionless-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.6686 9.23256C9.6686 8.5422 9.10896 7.98256 8.4186 7.98256C7.72825 7.98256 7.1686 8.5422 7.1686 9.23256C7.1686 9.92291 7.72825 10.4827 8.4186 10.4827C9.10896 10.4827 9.6686 9.92291 9.6686 9.23256Z"
        fill="#323544"
      />
      <path
        d="M8.09302 14.2384C7.67881 14.2384 7.34302 14.5742 7.34302 14.9884C7.34302 15.4026 7.67881 15.7384 8.09302 15.7384H15.907C16.3212 15.7384 16.657 15.4026 16.657 14.9884C16.657 14.5742 16.3212 14.2384 15.907 14.2384H8.09302Z"
        fill="#323544"
      />
      <path
        d="M15.5814 7.98256C16.2718 7.98256 16.8314 8.5422 16.8314 9.23256C16.8314 9.92291 16.2718 10.4827 15.5814 10.4827C14.891 10.4827 14.3314 9.92301 14.3314 9.23266C14.3314 8.5423 14.891 7.98256 15.5814 7.98256Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
        fill="#323544"
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
export class SvgEmojiExpressionlessIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
