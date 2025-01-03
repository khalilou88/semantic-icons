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
  selector: 'svg[si-np-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M228.4 0H512v512h-27.4L159.4 258.5z" />
      <svg:path
        fill="#0052b4"
        d="M510.5 283.8 228.5 0h-39.3l-70.9 253.8L445.2 512h39.4L256.4 283.8h254z"
      />
      <svg:path fill="#d80027" d="M445.2 256 189.2 0H0v512h445.2l-256-256z" />
      <svg:path
        fill="#eee"
        d="m243.5 378-31.3-14.7L229 333l-34 6.5-4.3-34.3-23.6 25.2-23.7-25.2-4.3 34.3-34-6.5 16.7 30.3L90.4 378l31.3 14.7-16.6 30.3 34-6.5 4.2 34.3 23.7-25.2 23.6 25.2 4.3-34.3 34 6.5-16.7-30.3zM149.8 89l-3.2 25-24.7-4.7 12.1 22-22.7 10.7h-11.1a66.8 66.8 0 0 0 133.5 0h-11.1L200 131.3l12-22-24.6 4.7-3.1-25-17.2 18.4z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNpFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
