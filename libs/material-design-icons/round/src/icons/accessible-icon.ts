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
  selector: 'svg[si-accessible-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="4" r="2" />
    <svg:path
      d="M19 11.9c0-.49-.36-.89-.84-.97a5.762 5.762 0 0 1-3.23-1.76l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.37-.21-.78-.31-1.25-.25C10.73 7.15 10 8.07 10 9.1V15c0 1.1.9 2 2 2h5v4c0 .55.45 1 1 1s1-.45 1-1v-4.5c0-1.1-.9-2-2-2h-3v-3.45c1 .83 2.4 1.54 3.8 1.82.62.13 1.2-.34 1.2-.97zM12.83 18c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAccessibleIcon implements OnInit {
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
