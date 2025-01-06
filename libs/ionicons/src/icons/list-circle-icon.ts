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
  selector: 'svg[si-list-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-88 302a24 24 0 1124-24 24 24 0 01-24 24zm0-71a24 24 0 1124-24 24 24 0 01-24 24zm0-73a24 24 0 1124-24 24 24 0 01-24 24zm184 135H224a16 16 0 010-32h128a16 16 0 010 32zm0-71H224a16 16 0 010-32h128a16 16 0 010 32zm0-72H224a16 16 0 010-32h128a16 16 0 010 32z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiListCircleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
