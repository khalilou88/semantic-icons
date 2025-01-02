import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-spotify-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.4386 10.2645C17.3601 10.2645 17.2816 10.2438 17.1868 10.2187C17.1618 10.2121 17.1356 10.2052 17.108 10.1983C15.0915 9.23967 12.9096 8.77686 10.5956 8.77686C9.57081 8.77686 8.44684 8.90909 7.28982 9.1405C6.89312 9.23967 6.49643 8.97521 6.39725 8.57851C6.3642 8.14876 6.62866 7.75207 7.02535 7.68595C8.28155 7.42149 9.50469 7.28926 10.6287 7.28926C13.1411 7.28926 15.5212 7.81818 17.7692 8.84297C18.1328 9.00826 18.2981 9.47107 18.1328 9.83471C18.0006 10.0992 17.7361 10.2645 17.4386 10.2645Z"
      fill="#323544"
    />
    <svg:path
      d="M16.0828 13.9008C16.182 13.9338 16.2812 13.9669 16.3803 13.9669C16.6448 13.9669 16.9093 13.8016 17.0415 13.5372C17.2068 13.1735 17.0415 12.7107 16.6779 12.5454C14.7605 11.6529 12.6779 11.19 10.6283 11.19C9.4382 11.19 8.38034 11.3223 7.35555 11.5867C6.95886 11.719 6.72745 12.1157 6.82662 12.5124C6.95886 12.9091 7.35555 13.1405 7.75224 13.0413C8.64481 12.7768 9.57043 12.6776 10.6613 12.6776C12.4795 12.6776 14.3638 13.1074 16.0828 13.9008Z"
      fill="#323544"
    />
    <svg:path
      d="M15.0248 17.438C15.124 17.4711 15.2562 17.5041 15.3554 17.5041C15.6199 17.5041 15.8843 17.3388 16.0165 17.0744C16.2149 16.7107 16.0496 16.2479 15.686 16.0826C13.2066 14.8595 10.3967 14.595 7.75209 15.2893C7.35539 15.4215 7.12399 15.8182 7.22316 16.2149C7.32233 16.6116 7.71903 16.843 8.11572 16.7438C10.3967 16.1488 12.8761 16.3802 15.0248 17.438Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 11.9835C2 17.5041 6.46282 22 11.9835 22C17.5041 22 22 17.5041 22 11.9835C22 6.49587 17.5041 2 11.9835 2C6.46282 2 2 6.46281 2 11.9835ZM3.4876 11.9835C3.4876 7.28926 7.28926 3.4876 11.9835 3.4876C16.6777 3.4876 20.5124 7.28926 20.5124 11.9835C20.5124 16.6777 16.6777 20.5124 11.9835 20.5124C7.28926 20.5124 3.4876 16.6777 3.4876 11.9835Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSpotifyAltIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
