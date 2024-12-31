import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-emoji-smile-side-icon',
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
        d="M17.0135 15.2237C17.2489 14.8829 17.1634 14.4157 16.8226 14.1804C16.4817 13.945 16.0146 14.0304 15.7792 14.3713C14.7857 15.8099 13.1276 16.75 11.25 16.75C10.8358 16.75 10.5 17.0858 10.5 17.5C10.5 17.9142 10.8358 18.25 11.25 18.25C13.6411 18.25 15.7519 17.0504 17.0135 15.2237Z"
        fill="#323544"
      />
      <path
        d="M8.74991 7.98256C9.44027 7.98256 9.99991 8.5422 9.99991 9.23256C9.99991 9.92291 9.44027 10.4827 8.74991 10.4827C8.05955 10.4827 7.49991 9.92301 7.49991 9.23266C7.49991 8.5423 8.05955 7.98256 8.74991 7.98256Z"
        fill="#323544"
      />
      <path
        d="M16.5001 9.23256C16.5001 8.5422 15.9404 7.98256 15.2501 7.98256C14.5597 7.98256 14.0001 8.5422 14.0001 9.23256C14.0001 9.92291 14.5597 10.4827 15.2501 10.4827C15.9404 10.4827 16.5001 9.92291 16.5001 9.23256Z"
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
export class SvgEmojiSmileSideIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
