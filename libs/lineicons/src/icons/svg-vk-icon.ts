import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vk-icon',
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
        d="M14.729 3H9.27097C4.19032 3 3 4.19032 3 9.27097V14.7871C3 19.8097 4.19032 21 9.27097 21H14.7871C19.8097 21 21 19.8097 21 14.729V9.27097C21 4.19032 19.8097 3 14.729 3ZM17.5161 15.8323H16.2097C15.7161 15.8323 15.5419 15.4258 14.6419 14.5258C13.8581 13.7419 13.5097 13.6548 13.3355 13.6548C13.1032 13.6548 13.0161 13.6839 13.0161 14.0613V15.2516C13.0161 15.571 12.929 15.7452 12.0871 15.7452C10.6935 15.7452 9.18387 14.8742 8.08065 13.3355C6.45484 11.0419 6.04839 9.32903 6.04839 8.95161C6.04839 8.74839 6.07742 8.57419 6.45484 8.57419H7.76129C8.08064 8.57419 8.22581 8.69032 8.34194 9.06774C9.00968 10.9548 10.0548 12.5806 10.5194 12.5806C10.6935 12.5806 10.7516 12.4935 10.7516 12.0871V10.171C10.7226 9.27097 10.2581 9.24194 10.2581 8.86452C10.2581 8.74839 10.3742 8.54516 10.5774 8.54516H12.6097C12.9 8.54516 12.9871 8.66129 12.9871 9.03871V11.6226C12.9871 11.9129 13.1032 12 13.1903 12C13.3645 12 13.5097 11.9129 13.8 11.5935C14.729 10.5194 15.3968 8.92258 15.3968 8.92258C15.4839 8.71935 15.629 8.54516 15.9774 8.54516H17.2839C17.6903 8.54516 17.7774 8.74839 17.6903 9.03871C17.5161 9.82258 15.9194 12.0581 15.9194 12.0581C15.8032 12.2613 15.7161 12.3774 15.9194 12.6387C16.0355 12.8419 16.529 13.2194 16.8194 13.5677C17.4 14.2355 17.8065 14.7581 17.9226 15.1355C18.0677 15.629 17.8935 15.8323 17.5161 15.8323Z"
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
export class SvgVkIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
