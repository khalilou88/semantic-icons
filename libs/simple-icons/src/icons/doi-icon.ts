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
  selector: 'svg[si-doi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>DOI</svg:title>
    <svg:path
      d="M24 12c0 6.633-5.367 12-12 12S0 18.633 0 12 5.367 0 12 0s12 5.367 12 12ZM7.588 6.097v4.471c-.663-.925-1.403-1.373-2.406-1.373-2.046 0-3.244 1.441-3.244 3.847 0 2.357 1.325 3.848 3.166 3.848 1.12 0 1.88-.4 2.445-1.325l-.039 1.042h2.045V6.097Zm-1.763 8.942c-1.12 0-1.802-.76-1.802-2.045 0-1.325.682-2.085 1.802-2.085 1.081 0 1.802.76 1.802 2.085 0 1.285-.672 2.045-1.802 2.045Zm12.253-1.948c0-2.172-1.578-3.789-3.906-3.789-2.328 0-3.945 1.695-3.945 3.789 0 2.133 1.578 3.789 3.945 3.789 2.289 0 3.906-1.656 3.906-3.789Zm-2.094-.01c0 1.14-.711 1.89-1.851 1.89-1.139 0-1.851-.75-1.851-1.89 0-1.139.712-1.89 1.851-1.89 1.149 0 1.861.751 1.851 1.89Zm2.6-5.795c0 .633.517 1.227 1.189 1.227.633 0 1.188-.555 1.188-1.227a1.17 1.17 0 0 0-1.188-1.189c-.672 0-1.179.556-1.189 1.189Zm.166 9.341h2.055V9.604H18.75Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDoiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FAB70C');
  }
}
