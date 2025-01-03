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
  selector: 'svg[si-paloaltosoftware-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Palo Alto Software</title>
    <svg:path
      d="M11.995.005c-.58 0-1.158.228-1.615.685L.685 10.385c-.913.913-.913 2.318 0 3.231l.842.843 8.01-8.15a3.435 3.435 0 0 1 4.847 0l8.079 8.08.842-.843c.914-.843.915-2.248.072-3.161L13.612.69a2.279 2.279 0 0 0-1.617-.685zm0 6.463c-.58 0-1.158.228-1.615.684L.685 16.848c-.913.913-.913 2.318 0 3.23l3.231 3.232c.914.913 2.318.913 3.232 0l4.847-4.846 4.848 4.846c.913.913 2.318.913 3.231 0l3.231-3.231c.914-.843.915-2.318.072-3.231l-9.765-9.696a2.279 2.279 0 0 0-1.617-.684z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPaloaltosoftwareIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}