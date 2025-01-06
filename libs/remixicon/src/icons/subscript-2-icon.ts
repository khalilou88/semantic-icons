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
  selector: 'svg[si-subscript-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 6V19H9V6H3V4H17V6H11ZM19.5507 16.5803C19.7042 16.4345 19.8 16.2284 19.8 16C19.8 15.5582 19.4418 15.2 19 15.2C18.5582 15.2 18.2 15.5582 18.2 16C18.2 16.0762 18.2107 16.15 18.2306 16.2198L17.0765 16.5496C17.0267 16.375 17 16.1906 17 16C17 14.8954 17.8954 14 19 14C20.1046 14 21 14.8954 21 16C21 16.5727 20.7593 17.0892 20.3735 17.4538L18.7441 19H21V20H17V19L19.5507 16.5803V16.5803Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSubscript2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
