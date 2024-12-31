import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bitbucket-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 2C7.2342 2 3.31934 3.2766 3.31934 4.89362C3.31934 5.31916 4.34058 11.3617 4.76611 13.7447C4.93635 14.851 7.74486 16.3829 12.0001 16.3829C16.2555 16.3829 18.9789 14.851 19.2342 13.7447C19.6597 11.3617 20.6809 5.31916 20.6809 4.89362C20.5959 3.2766 16.7661 2 12.0001 2ZM12.0001 14.4255C10.4682 14.4255 9.27676 13.234 9.27676 11.7021C9.27676 10.1702 10.4682 8.97873 12.0001 8.97873C13.532 8.97873 14.7235 10.1702 14.7235 11.7021C14.7235 13.1489 13.532 14.4255 12.0001 14.4255ZM12.0001 5.74469C8.93634 5.74469 6.46825 5.23397 6.46825 4.55321C6.46825 3.87231 8.93634 3.36172 12.0001 3.36172C15.0639 3.36172 17.532 3.87231 17.532 4.55321C17.532 5.23404 15.0639 5.74469 12.0001 5.74469Z"
        fill="#323544"
      />
      <path
        d="M18.2813 16.0425C18.111 16.0425 18.026 16.1276 18.026 16.1276C18.026 16.1276 15.8983 17.8298 12.0686 17.8298C8.23876 17.8298 6.11116 16.1276 6.11116 16.1276C6.11116 16.1276 5.94092 16.0425 5.8558 16.0425C5.68555 16.0425 5.51538 16.1276 5.51538 16.383V16.468C5.85586 18.2552 6.11116 19.5318 6.11116 19.7021C6.36645 20.9787 8.91966 22 11.9835 22C15.0473 22 17.6005 20.9787 17.8558 19.7021C17.8558 19.5318 18.1111 18.2552 18.4515 16.468V16.3829C18.5367 16.2127 18.4515 16.0425 18.2813 16.0425Z"
        fill="#323544"
      />
      <path
        d="M12.0001 12.9787C12.7522 12.9787 13.3619 12.3691 13.3619 11.617C13.3619 10.8649 12.7522 10.2553 12.0001 10.2553C11.2481 10.2553 10.6384 10.8649 10.6384 11.617C10.6384 12.3691 11.2481 12.9787 12.0001 12.9787Z"
        fill="#323544"
      />
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
export class SvgBitbucketIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
