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
  selector: 'svg[si-remixicon-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.5301 17.5291L20.001 21H3.00098V4H13.6676V4.0078C13.7781 4.00262 13.8892 4 14.001 4C14.0464 4 14.0918 4.00043 14.137 4.0013C14.048 4.37162 14.001 4.76172 14.001 5.16667C14.001 7.48528 16.0157 9.5 18.6676 9.5C19.3921 9.5 20.0868 9.30333 20.6997 8.96217C20.8956 9.60697 21.001 10.2912 21.001 11C21.001 13.9742 19.1461 16.5151 16.5301 17.5291ZM18.501 7.5C17.1203 7.5 16.001 6.38071 16.001 5C16.001 3.61929 17.1203 2.5 18.501 2.5C19.8817 2.5 21.001 3.61929 21.001 5C21.001 6.38071 19.8817 7.5 18.501 7.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRemixiconFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
