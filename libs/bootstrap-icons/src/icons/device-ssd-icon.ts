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
  selector: 'svg[si-device-ssd-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.75 4a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zM5 8V5h6v3zm0-5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    />
    <svg:path
      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm11 12V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 0 1-1m-7.25 1v-2H5v2zm1.75 0v-2h-.75v2zm1.75 0v-2H8.5v2zM11 13h-.75v2H11z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDeviceSsdIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '16');
    this.render.setAttribute(svg, 'height', '16');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}