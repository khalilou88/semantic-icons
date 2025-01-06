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
  selector: 'svg[si-slice-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.6909 12.9147L17.4587 14.6824C11.4482 20.6929 6.4985 20.6929 2.25586 19.2786L17.8122 3.72229L21.3477 7.25782L15.6909 12.9147ZM12.8625 12.9147L18.5193 7.25782L17.8122 6.55072L6.3145 18.0484C9.04606 18.1558 11.6722 17.142 14.5808 14.633L12.8625 12.9147Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSliceLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
