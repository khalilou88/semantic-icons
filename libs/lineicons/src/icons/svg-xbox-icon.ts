import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-xbox-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.88825 7.94173L9.30746 7.45802L8.56577 6.81307C7.34037 5.71666 6.53419 5.16846 5.7925 4.91048C5.21205 4.68475 5.14755 4.71699 4.66384 5.23295C3.53518 6.45835 2.53552 8.45769 2.24529 10.1668C2.01956 11.5857 1.98731 11.9404 2.0518 12.6176C2.30978 14.6492 2.76125 16.0681 3.72867 17.487C4.14788 18.0674 4.21238 18.2286 4.08339 17.9062C3.88991 17.4547 4.05114 16.3583 4.43811 15.3264C5.1798 13.3593 7.08239 10.1668 8.88825 7.94173Z"
        fill="#323544"
      />
      <path
        d="M7.40518 3.3947C8.75933 3.3947 10.0323 3.82145 11.2426 4.42662C11.6296 4.6846 12.0166 4.84583 12.0166 4.81358C12.0166 4.81358 12.4358 4.6201 12.8872 4.39437C14.3706 3.65268 15.7895 3.29796 16.7569 3.36245L17.2406 3.3947L16.9182 3.29796C16.241 2.84649 14.9511 2.39503 13.9192 2.1693C12.9195 1.94357 11.0491 1.94357 10.0495 2.1693C9.17879 2.36278 8.50159 2.58852 7.72766 2.94324C6.85698 3.3947 6.79248 3.45919 7.40518 3.3947Z"
        fill="#323544"
      />
      <path
        d="M12.1131 10.1344C11.9196 10.1022 10.1138 11.6823 8.85612 13.0367C6.5988 15.4552 5.27666 17.5191 5.27666 18.7445C5.27666 19.3249 5.50239 19.6474 6.63105 20.3891C7.98544 21.292 9.53331 21.8402 11.0812 21.9692C12.3388 22.066 13.8867 21.937 15.1121 21.55C16.5632 21.0985 18.5303 19.8731 18.8206 19.2927C19.2398 18.5187 18.4013 16.7129 16.6277 14.5201C15.5313 13.1657 12.4678 10.1989 12.1131 10.1344Z"
        fill="#323544"
      />
      <path
        d="M21.82 10.0699C21.4976 8.65106 20.9171 7.36117 20.1432 6.20026C19.6595 5.52307 19.0145 4.84587 18.821 4.84587C18.4985 4.84587 17.8214 5.0716 17.3699 5.39408C16.7894 5.7488 16.2412 6.20026 15.4028 6.94195L14.7579 7.49016L15.3383 8.23185C17.1442 10.4892 19.1112 13.8751 19.6917 15.681C19.9497 16.4872 20.1109 17.3256 20.0142 17.7771C19.9819 18.0995 19.9819 18.0995 20.0464 18.0028C20.3044 17.6803 20.8526 16.7452 21.0783 16.2292C21.3363 15.5842 21.6588 14.5846 21.82 13.8751C22.0458 12.94 22.0135 10.9729 21.82 10.0699Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgXboxIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
