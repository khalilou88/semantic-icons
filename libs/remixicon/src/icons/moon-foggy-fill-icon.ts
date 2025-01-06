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
  selector: 'svg[si-moon-foggy-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 20.3345V18H14V14H3.33238C3.11567 13.2034 3 12.3652 3 11.5C3 6.93954 6.21346 3.1296 10.4996 2.211C10.1765 3.07941 10 4.01909 10 5.00001C10 9.41829 13.5817 13 18 13C19.4531 13 20.8157 12.6126 21.9902 11.9354C21.8178 15.7576 19.3867 18.9916 16 20.3345ZM7 20H14V22H7V20ZM2 16H12V18H2V16Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoonFoggyFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
