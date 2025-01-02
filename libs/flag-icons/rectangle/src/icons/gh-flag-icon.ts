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
  selector: 'svg[si-gh-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#006b3f" d="M0 0h640v480H0z" />
    <svg:path fill="#fcd116" d="M0 0h640v320H0z" />
    <svg:path fill="#ce1126" d="M0 0h640v160H0z" />
    <svg:path fill="#000001" d="m320 160 52 160-136.1-98.9H404L268 320z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGhFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
