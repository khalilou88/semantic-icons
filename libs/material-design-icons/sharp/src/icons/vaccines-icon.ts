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
  selector: 'svg[si-vaccines-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 5.5H8V4h1.5V2h-5v2H6v1.5H2v2h1V17h3v4l2 1.5V17h3V7.5h1v-2zM9 9H6.5v1.5H9V12H6.5v1.5H9V15H5V7.5h4V9zm10.5 1.5V10h1V8h-7l-.01 2h1.01v.5c0 .5-1.5 1.16-1.5 3V22h8v-8.5c0-1.84-1.5-2.5-1.5-3zm-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3zM15 20v-1.5h4V20h-4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVaccinesIcon implements OnInit {
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
