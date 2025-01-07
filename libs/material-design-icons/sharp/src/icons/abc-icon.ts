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
  selector: 'svg[si-abc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5v2zM8 9v6H6.5v-1.5h-2V15H3V9h5zm-1.5 1.5h-2V12h2v-1.5zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM11 10.5v.75h2v-.75h-2zm2 2.25h-2v.75h2v-.75z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAbcIcon implements OnInit {
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
