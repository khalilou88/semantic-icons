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
  selector: 'svg[si-garage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="15" cy="13" r="1" />
    <svg:circle cx="9" cy="13" r="1" />
    <svg:path d="m8.33 7.5-.66 2h8.66l-.66-2z" />
    <svg:path
      d="M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGarageIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
