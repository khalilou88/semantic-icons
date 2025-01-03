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
  selector: 'svg[si-vuetify-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Vuetify</title>
    <svg:path
      d="M6.312 12.564 12.636 1.2H0l6.312 11.364ZM14.94 1.2 7.464 14.64 12 22.8 24 1.2h-9.06Zm4.98 2.4L12 17.856l-1.788-3.216L16.344 3.6h3.576ZM6.312 7.62 4.08 3.6h4.476L6.312 7.62Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVuetifyIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
