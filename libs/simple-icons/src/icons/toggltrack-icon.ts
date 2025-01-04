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
  selector: 'svg[si-toggltrack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Toggl Track</svg:title>
    <svg:path
      d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-.883 4.322h1.766v8.757h-1.766zm-.74 2.053v1.789a4.448 4.448 0 1 0 3.247 0V6.375a6.146 6.146 0 1 1-5.669 10.552 6.145 6.145 0 0 1 2.421-10.552z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiToggltrackIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
