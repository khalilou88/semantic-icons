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
  selector: 'svg[si-microsoft-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 11.5935C5.87418 11.5935 8.71933 11.5935 11.5935 11.5935C11.5935 8.71933 11.5935 5.87418 11.5935 3H3V11.5935Z"
      fill="#323544"
    />
    <svg:path
      d="M20.9997 11.5935C20.9997 8.71933 20.9997 5.87418 20.9997 3H12.4061C12.4061 5.87418 12.4061 8.71933 12.4061 11.5935C15.2803 11.5935 18.1255 11.5935 20.9997 11.5935Z"
      fill="#323544"
    />
    <svg:path
      d="M3 21H11.5935C11.5935 18.1258 11.5935 15.2807 11.5935 12.4065C8.71933 12.4065 5.87418 12.4065 3 12.4065V21Z"
      fill="#323544"
    />
    <svg:path
      d="M12.4061 21H20.9997C20.9997 18.1258 20.9997 15.2807 20.9997 12.4065C18.1255 12.4065 15.2803 12.4065 12.4061 12.4065C12.4061 15.2807 12.4061 18.1258 12.4061 21Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMicrosoftIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
