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
  selector: 'svg[si-bathroom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 14c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-3-7.5c-1.76 0-3.22 1.31-3.46 3h6.93a3.52 3.52 0 0 0-3.47-3M12 6c2.76 0 5 2.24 5 5v1H7v-1c0-2.76 2.24-5 5-5zM9 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm5-14H4v16h16V4m0-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBathroomIcon implements OnInit {
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
