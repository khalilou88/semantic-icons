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
  selector: 'svg[si-quarto-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Quarto</title>
    <svg:path
      d="M12.65 12.854V24c6.042-.325 10.923-5.105 11.33-11.125H12.65Zm-1.504 0H.02c.427 5.94 5.166 10.699 11.105 11.105V12.854Zm1.505-1.505H24C23.675 5.247 18.753.325 12.65 0Zm-1.505 0V0C5.106.427.326 5.308 0 11.35Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiQuartoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
