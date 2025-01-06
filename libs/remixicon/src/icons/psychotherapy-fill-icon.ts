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
  selector: 'svg[si-psychotherapy-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 2C15.0675 2 18.426 5.03562 18.9337 8.96494L21.1842 12.5037C21.3324 12.7367 21.3025 13.0847 20.9593 13.2317L19 14.071V17C19 18.1046 18.1046 19 17 19H15.001L15 22H6L6.00025 18.3061C6.00033 17.1252 5.56351 16.0087 4.7555 15.0011C3.65707 13.6313 3 11.8924 3 10C3 5.58172 6.58172 2 11 2ZM11 7C10.4477 7 10 7.44772 10 8V8.999L9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11L10 10.999V12C10 12.5523 10.4477 13 11 13C11.5523 13 12 12.5523 12 12V11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H12V8C12 7.44772 11.5523 7 11 7Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPsychotherapyFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
