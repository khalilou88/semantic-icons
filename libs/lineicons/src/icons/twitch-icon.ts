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
  selector: 'svg[si-twitch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.77375 2L2.45117 5.45161V19.4839H7.22535V22H9.90277L12.4512 19.4516H16.3221L21.5479 14.2258V2H3.77375ZM19.7415 13.3226L16.7415 16.3226H11.9995L9.45116 18.871V16.3226H5.4189V3.77419H19.7415V13.3226ZM16.7737 7.22581V12.4516H14.9995V7.22581H16.7737ZM11.9995 7.22581V12.4516H10.2254V7.22581H11.9995Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTwitchIcon implements OnInit {
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
