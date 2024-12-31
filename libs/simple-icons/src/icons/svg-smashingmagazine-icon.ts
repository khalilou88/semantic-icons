import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-smashingmagazine-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Smashing Magazine</title>
      <path
        d="M7.734 12.002c.766.524 1.662 1.01 2.708 1.443 1.785.742 2.985 1.387 3.601 1.936.615.547.928 1.248.928 2.104-.005 1.457-1.023 2.189-3.076 2.189-1.977 0-3.75-.627-5.326-1.875l-1.871 4.186c1.422.761 2.58 1.257 3.475 1.496l.141.033-1.798.416c-1.271.292-2.539-.503-2.832-1.771L.061 6.5c-.291-1.271.5-2.539 1.773-2.835l4.375-1.009c-.158.155-.307.316-.441.485l-.018.021c-.753.949-1.131 2.115-1.131 3.505 0 2.101 1.03 3.87 3.079 5.296l.046.029-.01.01zm10.358.072c-.84-.672-1.904-1.268-3.24-1.786-1.98-.784-3.271-1.41-3.871-1.872-.6-.465-.914-.981-.914-1.557 0-1.459.914-2.19 2.76-2.19 2.041 0 3.646.494 4.786 1.476l1.515-4.08c-1.095-.556-2.235-.96-3.405-1.216l-.06-.015c-.256-.061-.525-.12-.811-.164l2.625-.602c1.275-.285 2.535.511 2.836 1.771l3.63 15.647c.284 1.274-.51 2.551-1.784 2.835l-2.985.69c.824-1.051 1.245-2.34 1.245-3.87 0-1.575-.437-2.911-1.306-4.021-.285-.346-.615-.676-1.006-1.006l-.044-.029.029-.011z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSmashingmagazineIcon {
  readonly class = input<string>('');
}
