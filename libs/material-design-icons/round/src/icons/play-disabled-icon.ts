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
  selector: 'svg[si-play-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9v6.35c0 .79.87 1.27 1.54.84l3.45-2.2 6.08 6.08a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zm15.58 9.33a1 1 0 0 0 0-1.69L9.54 5.98a1.01 1.01 0 0 0-.84-.11l7.75 7.75 1.23-.78z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayDisabledIcon implements OnInit {
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
