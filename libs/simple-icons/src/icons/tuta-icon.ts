import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-tuta-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tuta</svg:title>
    <svg:path
      d="m23.993 7.033-5.16 16.755-.043.12a.144.144 0 0 1-.11.091H1.425a.14.14 0 0 1-.13-.191L6.441 6.98a.473.473 0 0 1 .024-.076.134.134 0 0 1 .124-.091H23.82c.14 0 .202.086.173.22zM23.94 4.25 19.885.146c-.178-.173-.192-.144-.384-.144H2.007a.14.14 0 0 0-.14.14c0 .004-.004.061.044.114l.004.005L6 4.393c.096.096.192.12.336.12h17.533c.12 0 .182-.153.072-.263zM4.127 5.805.25 1.95c-.048-.043-.105-.038-.11-.038a.14.14 0 0 0-.14.14v16.975c0 .077.063.14.14.14a.14.14 0 0 0 .13-.092c.004-.005.004-.014.009-.024 0-.004.01-.038.01-.043L4.199 6.164c.048-.144.048-.24-.072-.36z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTutaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#850122');
  }
}
