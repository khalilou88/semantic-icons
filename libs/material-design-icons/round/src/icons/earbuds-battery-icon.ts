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
  selector: 'svg[si-earbuds-battery-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 7h-1v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-7 2.38C14 7.51 12.49 6 10.62 6S7.25 7.51 7.25 9.38v5.25c0 1.04-.84 1.88-1.88 1.88s-1.87-.85-1.87-1.89v-4.7c.16.05.33.08.5.08 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2v6.62C2 16.49 3.51 18 5.38 18s3.38-1.51 3.38-3.38V9.38c0-1.04.84-1.88 1.88-1.88s1.88.84 1.88 1.88v4.7c-.18-.05-.35-.08-.52-.08-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V9.38z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEarbudsBatteryIcon implements OnInit {
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
