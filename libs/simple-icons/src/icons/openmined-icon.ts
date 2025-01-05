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
  selector: 'svg[si-openmined-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>OpenMined</svg:title>
    <svg:path
      d="M12 0c-.486 0-.972.242-1.25.725L7.082 7.082.725 10.75a1.44 1.44 0 000 2.5l6.357 3.668 3.668 6.357a1.44 1.44 0 002.5 0l3.668-6.357 6.357-3.668c.967-.544.967-1.945 0-2.5l-6.357-3.668L13.25.725A1.429 1.429 0 0012 0zm.006 4.237l7.757 7.769-7.769 7.757-7.757-7.757zm-.012 3.112l-4.656 4.657 4.656 4.656 4.657-4.656z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenminedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'ED986C');
  }
}
