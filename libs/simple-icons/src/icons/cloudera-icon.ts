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
  selector: 'svg[si-cloudera-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Cloudera</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.344 20.251a8.25 8.25 0 1 1 0-16.502 8.21 8.21 0 0 1 5.633 2.234L15.519 8.53a4.686 4.686 0 0 0-3.175-1.239 4.709 4.709 0 1 0 3.284 8.081l2.657 2.346a8.224 8.224 0 0 1-5.941 2.533z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClouderaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#F96702');
  }
}
