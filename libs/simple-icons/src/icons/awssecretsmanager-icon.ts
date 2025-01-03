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
  selector: 'svg[si-awssecretsmanager-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>AWS Secrets Manager</title>
    <svg:path
      d="M11.469 13.44a.532.532 0 1 0 1.064-.001.532.532 0 0 0-1.064.001m-.857 0c0-.766.623-1.389 1.388-1.389s1.39.623 1.39 1.389c0 .615-.406 1.132-.96 1.314v1.103h-.858v-1.103a1.385 1.385 0 0 1-.96-1.314m5.246-2.297H8.143v5.571h7.715V15.43h-1.286v-.858h1.286v-1.285h-1.286v-.857h1.286zm-6.429-.857h5.142V8.143C14.573 7.022 13.348 6 12.003 6h-.001c-.656 0-1.317.246-1.817.675-.48.412-.755.948-.755 1.468zm6-2.143v2.143h.857c.237 0 .429.192.429.428v6.429a.43.43 0 0 1-.429.428H7.715a.43.43 0 0 1-.429-.428v-6.429c0-.236.192-.428.429-.428h.857V8.143c0-.77.384-1.543 1.054-2.118A3.7 3.7 0 0 1 12 5.143h.001c1.826 0 3.427 1.403 3.427 3zM3.089 18.45l.695-.502a10.04 10.04 0 0 1-1.9-5.519H3v-.857H1.886a10.04 10.04 0 0 1 1.898-5.486l-.695-.503a10.9 10.9 0 0 0-2.06 5.99H0v.856h1.027c.08 2.18.784 4.254 2.062 6.021m14.842 1.783a10.04 10.04 0 0 1-5.502 1.899V21h-.857v1.13a10.04 10.04 0 0 1-5.503-1.898l-.502.694a10.9 10.9 0 0 0 6.005 2.062V24h.857v-1.012a10.9 10.9 0 0 0 6.004-2.062zM6.069 3.8A10.04 10.04 0 0 1 11.572 1.9v1.1h.857V1.9c1.992.082 3.887.73 5.502 1.899l.503-.695a10.9 10.9 0 0 0-6.005-2.06V0h-.857v1.044a10.9 10.9 0 0 0-6.005 2.061zm16.903 7.771a10.9 10.9 0 0 0-2.061-5.989l-.695.503a10.04 10.04 0 0 1 1.899 5.486H21v.858h1.115a10.04 10.04 0 0 1-1.9 5.518l.695.503a10.9 10.9 0 0 0 2.062-6.021h1.028v-.858zM19.024 5.6l3.36-3.36-.606-.606-3.36 3.36zM4.978 18.433l-3.36 3.36.606.606 3.36-3.36zM7.144 6.537.784.177.176.783l6.36 6.36zm10.94 10.94 5.74 5.74-.607.606-5.74-5.74z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAwssecretsmanagerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
