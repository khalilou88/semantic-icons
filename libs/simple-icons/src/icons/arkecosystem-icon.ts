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
  selector: 'svg[si-arkecosystem-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ARK Ecosystem</svg:title>
    <svg:path
      d="M1.8 0C.806 0 0 .805 0 1.8v20.4c0 .995.805 1.8 1.8 1.8h20.4c.995 0 1.8-.805 1.8-1.8V1.8c0-.995-.805-1.8-1.8-1.8H1.8zm10.223 4.39l9.29 15.098-9.29-9.82-9.351 9.82 9.351-15.097zm0 7.583l1.633 1.691h-3.285l1.652-1.691zM9.31 14.762h5.41l1.496 1.574H7.813l1.496-1.574z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArkecosystemIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#C9292C');
  }
}
