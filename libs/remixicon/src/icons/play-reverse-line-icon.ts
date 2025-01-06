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
  selector: 'svg[si-play-reverse-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.60558 12.0001L14 7.7371V16.263L7.60558 12.0001ZM4.62407 12.4161L15.2227 19.4818C15.4524 19.635 15.7629 19.5729 15.9161 19.3432C15.9708 19.261 16 19.1645 16 19.0658V4.93433C16 4.65818 15.7762 4.43433 15.5 4.43433C15.4013 4.43433 15.3048 4.46355 15.2227 4.5183L4.62407 11.584C4.39431 11.7372 4.33222 12.0477 4.4854 12.2774C4.52201 12.3323 4.56914 12.3795 4.62407 12.4161Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayReverseLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
