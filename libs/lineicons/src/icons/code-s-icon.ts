import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-s-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.2764 7.24902C11.0337 7.24902 10.0264 8.25638 10.0264 9.49902V10.4992C10.0264 11.7419 11.0337 12.7492 12.2764 12.7492H12.8214C13.2357 12.7492 13.5714 13.085 13.5714 13.4992V14.4994C13.5714 14.9136 13.2357 15.2494 12.8214 15.2494H10.7764C10.3622 15.2494 10.0264 15.5852 10.0264 15.9994C10.0264 16.4136 10.3622 16.7494 10.7764 16.7494H12.8214C14.0641 16.7494 15.0714 15.7421 15.0714 14.4994V13.4992C15.0714 12.2566 14.0641 11.2492 12.8214 11.2492H12.2764C11.8622 11.2492 11.5264 10.9134 11.5264 10.4992V9.49902C11.5264 9.08481 11.8622 8.74902 12.2764 8.74902H14.3214C14.7357 8.74902 15.0714 8.41324 15.0714 7.99902C15.0714 7.58481 14.7357 7.24902 14.3214 7.24902H12.2764Z"
      fill="#323544"
    />
    <svg:path
      d="M7.82913 7.46867C8.12204 7.76155 8.12206 8.23642 7.82918 8.52933L5.06651 11.2923C4.67601 11.6828 4.67603 12.3159 5.06654 12.7064L7.82916 15.4691C8.12205 15.762 8.12205 16.2368 7.82916 16.5297C7.53627 16.8226 7.06139 16.8226 6.7685 16.5297L2.7685 12.5297C2.47561 12.2368 2.4756 11.762 2.76847 11.4691L6.76847 7.46872C7.06135 7.17581 7.53623 7.17579 7.82913 7.46867Z"
      fill="#323544"
    />
    <svg:path
      d="M17.2685 7.46867C16.9756 7.76155 16.9756 8.23642 17.2685 8.52933L20.0312 11.2923C20.4216 11.6828 20.4216 12.3159 20.0311 12.7064L17.2685 15.4691C16.9756 15.762 16.9756 16.2368 17.2685 16.5297C17.5614 16.8226 18.0363 16.8226 18.3292 16.5297L22.3292 12.5297C22.622 12.2368 22.6221 11.762 22.3292 11.4691L18.3292 7.46872C18.0363 7.17581 17.5614 7.17579 17.2685 7.46867Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCodeSIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}