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
  selector: 'svg[si-clevercloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Clever Cloud</title>
    <svg:path
      d="M4.823 11.139 11.253 0 1.608 5.57zM1.235 6.646v10.708L4.325 12zM12 23.57l6.43-11.14H5.57zM12 .43 5.57 11.57h12.86zm10.764 16.924V6.646L19.674 12zm.001.862-.374.215-3.215-5.57L12.746 24zm0-12.431L12.745 0l6.431 11.139 3.215-5.57zM1.235 18.216 11.254 24l-6.43-11.138-3.216 5.569z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClevercloudIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
