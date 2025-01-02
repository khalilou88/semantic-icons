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
  selector: 'svg[si-brand-grindr-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M13 13.282c0 .492 .784 1.718 2.102 1.718c1.318 0 2.898 -.966 2.898 -2.062c0 -.817 -.932 -.938 -1.409 -.938c-.228 0 -3.591 .111 -3.591 1.282z"
    />
    <svg:path
      d="M12 21c-2.984 0 -6.471 -2.721 -6.63 -2.982c-2.13 -3.49 -2.37 -13.703 -2.37 -13.703l1.446 -1.315c2.499 .39 5.023 .617 7.554 .68a58.626 58.626 0 0 0 7.554 -.68l1.446 1.315s-.24 10.213 -2.37 13.704c-.16 .26 -3.646 2.981 -6.63 2.981z"
    />
    <svg:path
      d="M11 13.282c0 .492 -.784 1.718 -2.102 1.718c-1.318 0 -2.898 -.966 -2.898 -2.062c0 -.817 .932 -.938 1.409 -.938c.228 0 3.591 .111 3.591 1.282z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBrandGrindrIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
