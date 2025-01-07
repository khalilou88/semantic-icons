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
  selector: 'svg[si-signal-cellular-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm-12 10c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5S5 19.33 5 18.5v-3c0-.83.67-1.5 1.5-1.5zm6-5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSignalCellularAltIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
