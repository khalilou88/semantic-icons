import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-maytag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Maytag</title>
      <path
        d="M22.167 9.864c-.714 0-1.193.194-1.513.465-.65.55-.648 1.373-.648 1.627 0 .297.025 1.285.61 1.784.338.286.72.396 1.312.396.62 0 .962-.407.962-.407h.026s.065.102.179.196c.105.085.256.16.256.16h.358s-.026-.249-.026-.716v-.662c0-.093.027-.159.081-.198a.483.483 0 0 1 .236-.073v-.31h-1.803v.31c.066 0 .272.008.348.056.077.048.15.09.15.262v.418c0 .134.036.266.036.266-.226.213-.731.242-.954.16-.343-.126-.532-.321-.532-1.635 0-.36-.025-1.078.281-1.409.178-.192.47-.23.678-.23.38 0 .622.11.794.47.075.159.246.561.246.561h.325l-.056-1.282c-.206-.082-.57-.209-1.346-.209zM.015 9.902v.345c.423 0 .582.077.582.287v2.843c0 .139-.05.238-.15.295-.099.056-.248.084-.447.084v.349h1.56v-.349c-.202 0-.344-.029-.428-.087-.083-.058-.125-.158-.125-.3v-2.7h.037l1.195 3.436h.579l1.047-3.435h.045v2.776c0 .108-.012.212-.118.268-.078.043-.274.042-.354.042v.349h3.526v-.349c-.09.002-.326-.016-.416-.054-.096-.04-.212-.159-.081-.58l.142-.462h1.303l.121.38c.15.465.195.595.078.66-.103.056-.303.056-.387.056v.349h2.064v-.35c-.045-.002-.158.002-.259-.07-.12-.096-.18-.268-.212-.367a68.88 68.88 0 0 1-.874-2.836 16.625 16.625 0 0 1-.155-.58H7.163l-1.03 3.099c-.08.24-.173.47-.28.6-.116.142-.297.155-.42.155-.279 0-.376-.05-.376-.31v-2.912c0-.21.16-.287.583-.287v-.345H3.659l-.749 2.623h-.037l-.878-2.623zm9.229 0v.345c.149 0 .262.017.33.049a.393.393 0 0 1 .171.192 74.949 74.949 0 0 1 1.026 2.23v.752a.281.281 0 0 1-.035.149.227.227 0 0 1-.113.087.709.709 0 0 1-.203.04 3.98 3.98 0 0 1-.283.01v.349h2.288v-.351a3.448 3.448 0 0 1-.14-.007.701.701 0 0 1-.212-.043.243.243 0 0 1-.118-.09.263.263 0 0 1-.037-.148v-.848l.816-1.78c.063-.147.167-.367.263-.434.096-.068.213-.064.41-.066.3-.002.357.04.405.104.042.057.052.184.051.363v2.669c0 .098-.053.17-.158.215a1.213 1.213 0 0 1-.403.064v.352h2.273v-.352a1.216 1.216 0 0 1-.403-.064c-.105-.045-.158-.117-.158-.215v-2.67c0-.178.009-.303.048-.358.047-.068.104-.108.404-.108.243 0 .338.006.413.066.12.096.21.31.275.457l.176.386h.294l-.067-1.345h-4.583v.349c.138 0 .272.02.315.113.058.125-.012.398-.167.786-.225.564-.389.956-.389.956H11.7l-.562-1.223c-.132-.287-.198-.464-.198-.53 0-.055.01-.105.33-.105v-.346zm8.309 0l-1.029 3.099c-.08.24-.167.44-.273.57a.468.468 0 0 1-.321.175v.359h1.424v-.349c-.09.002-.325-.016-.416-.054-.096-.04-.212-.159-.081-.58L17 12.66h1.3l.123.38c.15.465.194.595.077.66-.103.056-.303.056-.387.056v.349h2.065v-.35c-.046-.002-.159.002-.26-.07-.12-.096-.18-.268-.212-.367a70.46 70.46 0 0 1-.874-2.836c-.066-.24-.118-.424-.155-.58zm-10.247.66h.027l.475 1.761h-1.08zm10.39 0h.027l.475 1.761h-1.08Z"
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
export class SvgMaytagIcon {
  readonly class = input<string>('');
}
