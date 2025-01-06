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
  selector: 'svg[si-keypad-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="80" y="16" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="208" y="16" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="336" y="16" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="80" y="144" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="208" y="144" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="336" y="144" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="80" y="272" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="208" y="272" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="208" y="400" width="96" height="96" rx="8" ry="8" />
    <svg:rect x="336" y="272" width="96" height="96" rx="8" ry="8" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeypadSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
