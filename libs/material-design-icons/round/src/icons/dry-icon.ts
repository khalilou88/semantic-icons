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
  selector: 'svg[si-dry-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M1.94 11.79c-.6.57-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03l-6.46 6.11zm15.05-3.72c0 .52-.42.93-.93.93-.52 0-.93-.42-.93-.93.03-.67-.22-1.33-.71-1.86l-.07-.06c-.9-.89-1.38-2.03-1.34-3.22a.92.92 0 0 1 .92-.93c.51 0 .93.42.93.93-.03.67.22 1.33.71 1.86l.07.07c.91.88 1.39 2.02 1.35 3.21zm4.01 0c0 .51-.42.93-.94.93s-.93-.42-.93-.93c.03-.67-.22-1.33-.71-1.86l-.07-.06c-.9-.89-1.38-2.03-1.34-3.22 0-.51.42-.93.93-.93s.93.42.93.93c-.03.67.22 1.33.71 1.86l.07.07c.9.88 1.38 2.02 1.35 3.21z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDryIcon implements OnInit {
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
