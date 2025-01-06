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
  selector: 'svg[si-contract-left-right-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.793 5.79285 12.5859 12 18.793 18.2071 20.2072 16.7928 15.4143 12 20.2072 7.20706 18.793 5.79285ZM5.20694 18.2072 11.414 12.0001 5.20694 5.793 3.79272 7.20721 8.58562 12.0001 3.79272 16.793 5.20694 18.2072Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiContractLeftRightLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
