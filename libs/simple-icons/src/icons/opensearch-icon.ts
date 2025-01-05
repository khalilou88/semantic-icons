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
  selector: 'svg[si-opensearch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>OpenSearch</svg:title>
    <svg:path
      d="M23.1515 8.8125a.8484.8484 0 0 0-.8484.8485c0 6.982-5.6601 12.6421-12.6421 12.6421a.8485.8485 0 0 0 0 1.6969C17.5802 24 24 17.5802 24 9.661a.8485.8485 0 0 0-.8485-.8485Zm-5.121 5.4375c.816-1.3311 1.6051-3.1058 1.4498-5.5905-.3216-5.1468-4.9832-9.0512-9.3851-8.6281C8.372.1971 6.6025 1.6017 6.7598 4.1177c.0683 1.0934.6034 1.7386 1.473 2.2348.8279.4722 1.8914.7713 3.097 1.1104 1.4563.4096 3.1455.8697 4.4438 1.8265 1.5561 1.1467 2.6198 2.4759 2.2569 4.9606Zm-16.561-9C.6535 6.581-.1355 8.3558.0197 10.8405c.3216 5.1468 4.9832 9.0512 9.385 8.6281 1.7233-.1657 3.4927-1.5703 3.3355-4.0863-.0683-1.0934-.6034-1.7386-1.4731-2.2348-.8278-.4722-1.8913-.7713-3.0969-1.1104-1.4563-.4096-3.1455-.8697-4.4438-1.8265-1.5561-1.1467-2.6198-2.476-2.257-4.9606Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpensearchIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '005EB8');
  }
}
