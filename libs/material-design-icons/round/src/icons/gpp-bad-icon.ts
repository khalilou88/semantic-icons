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
  selector: 'svg[si-gpp-bad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m18.7 4.51-6-2.25c-.45-.17-.95-.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.94 3.27 9.57 7.71 10.83.19.05.39.05.57 0C16.73 20.66 20 16.03 20 11.09v-4.7c0-.84-.52-1.58-1.3-1.88zm-3.9 10.28c-.39.39-1.02.39-1.41.01L12 13.42l-1.39 1.38a.996.996 0 1 1-1.41-1.41L10.59 12 9.2 10.61a.996.996 0 1 1 1.41-1.41L12 10.59l1.39-1.39a.996.996 0 1 1 1.41 1.41L13.42 12l1.38 1.38c.39.39.39 1.02 0 1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGppBadIcon implements OnInit {
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
