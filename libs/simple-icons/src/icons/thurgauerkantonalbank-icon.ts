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
  selector: 'svg[si-thurgauerkantonalbank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Thurgauer Kantonalbank</svg:title>
    <svg:path
      d="M21.872 2.262H10.775l-6.14 9.743 6.14 9.771h11.097l-6.135-9.77 6.135-9.744zM0 .297v23.406h24V.297H0zm23.057 22.486L.943 22.778V1.228h22.109l.005 21.555z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiThurgauerkantonalbankIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '006D41');
  }
}
