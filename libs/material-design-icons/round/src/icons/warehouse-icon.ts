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
  selector: 'svg[si-warehouse-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 19V8.35c0-.82-.5-1.55-1.26-1.86l-8-3.2c-.48-.19-1.01-.19-1.49 0l-8 3.2C2.5 6.8 2 7.54 2 8.35V19c0 1.1.9 2 2 2h3v-9h10v9h3c1.1 0 2-.9 2-2zm-11 0H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWarehouseIcon implements OnInit {
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
