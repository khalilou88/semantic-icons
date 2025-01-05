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
  selector: 'svg[si-uniqlo-ja-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Uniqlo</svg:title>
    <svg:path
      d="M0 .01v23.98h24V.01ZM4.291 3.29h4.553l.006 5.803h1.511v1.511h-6.82V9.094h3.783v-4.29H4.291zm10.11 0h5.302v1.514H14.4zm-.762 5.807h6.816v1.511H13.64zM4.29 13.385l6.072.002-1.513 7.322H2.777l.305-1.516h4.553l.892-4.29H5.49l-.457 2.148H3.521Zm9.348 0h6.816v7.324H13.64zm1.517 1.517v4.291h3.787v-4.29z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUniqloJaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF0000');
  }
}
