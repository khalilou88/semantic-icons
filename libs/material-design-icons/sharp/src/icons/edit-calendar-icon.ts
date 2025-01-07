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
  selector: 'svg[si-edit-calendar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7v2zm10.13-5.01 1.41-1.41-2.12-2.12-1.41 1.41 2.12 2.12zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3 2.12 2.12z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEditCalendarIcon implements OnInit {
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
