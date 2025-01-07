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
  selector: 'svg[si-face-retouching-natural-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.01 4.05 20.6 3.4l-.65-1.41a.5.5 0 0 0-.91 0L18.4 3.4l-1.41.65a.5.5 0 0 0 0 .91l1.41.64.65 1.41a.5.5 0 0 0 .91 0l.64-1.41 1.41-.65c.39-.17.39-.73 0-.9z"
    />
    <svg:circle cx="9" cy="13" r="1.25" />
    <svg:circle cx="15" cy="13" r="1.25" />
    <svg:path
      d="M19.5 8.8c-.78 0-1.49-.46-1.82-1.17l-.41-.9-.9-.41A2.014 2.014 0 0 1 15.2 4.5c0-.66.34-1.26.87-1.63C14.83 2.32 13.45 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.45-.32-2.83-.87-4.07-.37.53-.97.87-1.63.87zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55A10 10 0 0 0 17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFaceRetouchingNaturalIcon implements OnInit {
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
