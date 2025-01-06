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
  selector: 'svg[si-gitlab-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.6634 9.98681L21.6354 9.91518L18.9164 2.8208C18.8612 2.68166 18.7634 2.56353 18.6371 2.48326C18.5098 2.40292 18.3607 2.36406 18.2104 2.37206C18.0601 2.38006 17.9159 2.43452 17.7979 2.52792C17.6809 2.62169 17.5966 2.75 17.5569 2.89453L15.7187 8.52037H8.28157L6.44336 2.89453C6.40366 2.75 6.31934 2.62169 6.20241 2.52792C6.08487 2.43389 5.94083 2.37903 5.79052 2.37102C5.64021 2.36301 5.49116 2.40226 5.36429 2.48326C5.2374 2.5632 5.13921 2.6814 5.08388 2.8208L2.36183 9.9245L2.33379 9.99512C1.94304 11.0182 1.895 12.1406 2.19691 13.1933C2.49882 14.2461 3.13436 15.1724 4.00794 15.8329L4.01832 15.8401L4.04221 15.8588L8.18917 18.9631L10.2393 20.5157L11.4856 21.4597C11.6319 21.5704 11.8104 21.6302 11.9939 21.6302C12.1774 21.6302 12.3559 21.5704 12.5023 21.4597L13.7486 20.5157L15.7997 18.9631L19.9706 15.8401L19.9819 15.8318C20.8585 15.1719 21.4966 14.2449 21.7999 13.1904C22.1033 12.1361 22.0553 11.0116 21.6634 9.98681Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGitlabFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
