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
  selector: 'svg[si-cash-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M48 368h416v32H48zM80 416h352v32H80zM480 176a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96h16v-64zM256 304a96 96 0 1196-96 96.11 96.11 0 01-96 96z"
    />
    <svg:path
      d="M96 80V64H16v80h16a64.07 64.07 0 0064-64zM32 272H16v80h80v-16a64.07 64.07 0 00-64-64zM480 144h16V64h-80v16a64.07 64.07 0 0064 64zM416 336v16h80v-80h-16a64.07 64.07 0 00-64 64z"
    />
    <svg:circle cx="256" cy="208" r="64" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCashSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
