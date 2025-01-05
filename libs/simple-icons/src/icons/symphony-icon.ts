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
  selector: 'svg[si-symphony-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Symphony</svg:title>
    <svg:path
      d="M20.471 8.118v-4.22c0-.864-.468-1.677-1.22-2.12C18.124 1.113 15.684 0 12 0S5.876 1.113 4.75 1.777a2.476 2.476 0 0 0-1.22 2.12v6.338l13.412 3.882v2.824c0 .382-.24.65-.648.849L12 19.941l-4.315-2.162c-.386-.188-.626-.456-.626-.838v-2.118L3.53 13.764v3.177c0 1.744 1 3.228 2.588 4.001L12 24l5.86-3.047c1.61-.784 2.61-2.268 2.61-4.011v-5.294L7.059 7.765V4.542C8.017 4.08 9.651 3.529 12 3.529c2.349 0 3.983.55 4.941 1.013v2.517l3.53 1.059z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSymphonyIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '0098FF');
  }
}
