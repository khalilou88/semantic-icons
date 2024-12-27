import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-discord-chat-icon',
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
        d="M10.2221 10.4192C9.64145 10.4192 9.2221 10.9354 9.2221 11.516C9.2221 12.0966 9.67371 12.6128 10.2221 12.6128C10.8027 12.6128 11.2221 12.1289 11.2221 11.516C11.2544 10.9031 10.8027 10.4192 10.2221 10.4192Z"
        fill="#323544"
      />
      <path
        d="M13.836 12.5806C14.3883 12.5806 14.836 12.0896 14.836 11.4839C14.836 10.8781 14.3883 10.3871 13.836 10.3871C13.2837 10.3871 12.836 10.8781 12.836 11.4839C12.836 12.0896 13.2837 12.5806 13.836 12.5806Z"
        fill="#323544"
      />
      <path
        d="M18.7064 2H5.35161C4.22259 2 3.28711 2.90323 3.28711 4.03226V17.5484C3.28711 18.6774 4.19033 19.5806 5.31935 19.5806H16.6419L16.0935 17.7742L17.3516 18.9677L18.5774 20.0968L20.7064 22V4.03226C20.8032 2.90323 19.8355 2 18.7064 2ZM14.8355 15.0323C14.8355 15.0323 14.4806 14.6129 14.1581 14.2258C15.4806 13.871 15.9645 13.0323 15.9645 13.0323C15.5452 13.2903 15.1581 13.4839 14.8355 13.6129C14.3516 13.8387 13.8355 13.9677 13.3839 14.0323C12.4161 14.2258 11.5774 14.1613 10.8032 14.0323C10.2226 13.9355 9.77097 13.7742 9.35161 13.6129C9.12581 13.5161 8.83548 13.4194 8.60968 13.2903C8.57742 13.2903 8.57742 13.2581 8.5129 13.2581C8.5129 13.2581 8.48064 13.2581 8.48064 13.2258C8.2871 13.129 8.22258 13.0323 8.22258 13.0323C8.22258 13.0323 8.73871 13.8387 9.99677 14.2258C9.67419 14.5806 9.31935 15.0323 9.31935 15.0323C7.09355 14.9355 6.2871 13.5484 6.2871 13.5484C6.2871 10.3226 7.73871 7.74194 7.73871 7.74194C9.19032 6.64516 10.5452 6.70968 10.5452 6.70968L10.6419 6.83871C8.80323 7.32258 7.99677 8.12903 7.99677 8.12903C7.99677 8.12903 8.22258 8 8.57742 7.87097C9.67419 7.41936 10.4806 7.29032 10.8355 7.22581C10.8677 7.22581 10.9323 7.22581 11.029 7.22581C11.6097 7.12903 12.3516 7.12903 13.029 7.22581C13.9968 7.32258 14.9968 7.64516 16.029 8.19355C16.029 8.19355 15.2548 7.45161 13.5129 6.93548L13.6419 6.74194C13.6419 6.74194 14.9968 6.70968 16.4484 7.77419C16.4484 7.77419 17.9 10.3548 17.9 13.5806C17.9323 13.5484 17.0613 15 14.8355 15.0323Z"
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
export class SvgDiscordChatIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
