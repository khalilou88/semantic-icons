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
  selector: 'svg[si-zapier-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.5004 12.005C14.5005 12.7373 14.3703 13.4636 14.1161 14.1489C13.4412 14.407 12.7258 14.5394 12.0046 14.5395H11.9957C11.2745 14.5396 10.5592 14.4074 9.88418 14.1492C9.62961 13.4638 9.49917 12.7372 9.49924 12.0046V11.995C9.49924 11.2403 9.63564 10.5175 9.88263 9.85047C10.5577 9.59194 11.2733 9.45972 11.9948 9.46017H12.003C12.7464 9.46017 13.4579 9.59868 14.1146 9.85047C14.369 10.5359 14.4992 11.2625 14.4989 11.995V12.0046H14.4998L14.5004 12.005ZM21.8615 10.3072H16.0244L20.1514 6.11534C19.5025 5.18969 18.7057 4.38072 17.7941 3.72185L13.6665 7.91367V1.98513C13.1176 1.89136 12.562 1.84407 12.0055 1.84375H11.9948C11.4286 1.84375 10.874 1.8929 10.3335 1.98513V7.91367L6.20495 3.72153C5.75026 4.0502 5.32352 4.41699 4.9292 4.81807L4.92731 4.81999C4.53299 5.22078 4.17217 5.65417 3.84858 6.11566L7.97718 10.3072H2.13888C2.13888 10.3072 2 11.4209 2 11.9967V12.0037C2 12.5794 2.04808 13.1436 2.1392 13.6929H7.97747L3.84826 17.884C4.4977 18.8096 5.2945 19.6187 6.20589 20.2782L10.3338 16.0867V22.0155C10.8737 22.1074 11.4273 22.1559 11.993 22.1566H12.0071C12.563 22.1561 13.1179 22.1089 13.6662 22.0155V16.0867L17.7945 20.2791C18.2492 19.9501 18.6762 19.5834 19.0711 19.1826H19.0721C19.4662 18.7814 19.8269 18.3477 20.1505 17.8859L16.0235 13.6932H21.8618C21.9522 13.1442 22 12.5819 22 12.0075V11.9928C22 11.4279 21.9535 10.8647 21.8618 10.3078L21.8615 10.3072Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiZapierIcon implements OnInit {
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
