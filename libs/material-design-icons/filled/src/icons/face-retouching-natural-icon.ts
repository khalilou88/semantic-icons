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
    <svg:circle cx="9" cy="13" r="1.25" />
    <svg:path
      d="m20.77 8.58-.92 2.01c.09.46.15.93.15 1.41 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55A10 10 0 0 0 17.5 10c.45 0 .89-.04 1.33-.1l-.6-1.32-.88-1.93-1.93-.88-2.79-1.27 2.79-1.27.71-.32A9.86 9.86 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.47-.33-2.87-.9-4.13l-.33.71z"
    />
    <svg:circle cx="15" cy="13" r="1.25" />
    <svg:path
      d="M20.6 5.6 19.5 8l-1.1-2.4L16 4.5l2.4-1.1L19.5 1l1.1 2.4L23 4.5z"
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
