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
  selector: 'svg[si-add-moderator-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 10c1.08 0 2.09.25 3 .68v-4.3a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.17-.95-.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 5.05 3.41 9.76 8 10.91.03-.01.05-.02.08-.02A6.996 6.996 0 0 1 10 17c0-3.87 3.13-7 7-7z"
    />
    <svg:path
      d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.5 5.5h-2v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2v-2c0-.28.22-.5.5-.5s.5.22.5.5v2h2c.28 0 .5.22.5.5s-.22.5-.5.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAddModeratorIcon implements OnInit {
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
