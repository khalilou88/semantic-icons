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
  selector: 'svg[si-electric-bolt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.69 2.21 4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiElectricBoltIcon implements OnInit {
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
