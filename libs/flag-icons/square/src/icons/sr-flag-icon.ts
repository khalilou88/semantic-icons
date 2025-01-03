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
  selector: 'svg[si-sr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#377e3f" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 102.4h512v307.2H0z" />
    <svg:path fill="#b40a2d" d="M0 153.6h512v204.8H0z" />
    <svg:path
      fill="#ecc81d"
      d="m255.9 163.4 60.2 185.2-157.6-114.5h194.8L195.7 348.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
