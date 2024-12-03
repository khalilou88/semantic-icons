import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-firework-rocket-4-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8215 2.75813C19.1912 2.65761 20.3307 3.79704 20.2301 5.16678L19.7719 11.4115C19.7504 11.7041 19.5603 11.9573 19.2853 12.0596C19.0103 12.1619 18.701 12.0944 18.4935 11.887L17.5474 10.9409L11.0526 17.4358C10.7597 17.7287 10.2848 17.7287 9.9919 17.4358L9.13514 16.579L8.14132 17.5728C7.64321 18.071 7.64321 18.8786 8.14132 19.3767C8.63943 19.8748 9.44704 19.8748 9.94515 19.3767C10.238 19.0838 10.7129 19.0838 11.0058 19.3767C11.2987 19.6696 11.2987 20.1444 11.0058 20.4373C9.92191 21.5212 8.16456 21.5212 7.08066 20.4373C5.99676 19.3534 5.99676 17.5961 7.08066 16.5122L8.07448 15.5184L7.47162 14.9155C7.4641 14.9237 7.45638 14.9318 7.44843 14.9397L5.04596 17.3422C4.75306 17.6351 4.27819 17.6351 3.98529 17.3422C3.6924 17.0493 3.6924 16.5744 3.98529 16.2815L6.38777 13.8791C6.39572 13.8711 6.40379 13.8634 6.412 13.8559L5.55655 13.0004C5.26366 12.7075 5.26366 12.2327 5.55655 11.9398L7.36338 10.1329C7.38966 10.102 7.41812 10.0737 7.44837 10.048L9.58266 7.91366C9.60804 7.88401 9.63541 7.85671 9.66446 7.83186L12.0514 5.44489L11.1013 4.49475C10.8938 4.2873 10.8264 3.97795 10.9287 3.70297C11.0309 3.428 11.2841 3.2379 11.5767 3.21643L17.8215 2.75813ZM18.7342 5.05699C18.7677 4.60041 18.3879 4.2206 17.9313 4.25411L13.3204 4.5925L18.3958 9.66791L18.7342 5.05699ZM9.68866 15.0112L10.5222 15.8448L12.2708 14.0962L8.05248 11.5652L7.14754 12.4701L9.64228 14.9648C9.6503 14.9722 9.6582 14.9798 9.66597 14.9875C9.67374 14.9953 9.6813 15.0032 9.68866 15.0112ZM9.14578 10.4719L13.3641 13.0029L14.4885 11.8785L10.2701 9.34751L9.14578 10.4719ZM11.3634 8.25421L15.5818 10.7852L16.4842 9.88282L13.1095 6.50813L11.3634 8.25421Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFireworkRocket4Icon {
  readonly class = input('');
}