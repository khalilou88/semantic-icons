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
  selector: 'svg[si-twitch-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.30098 3H21.001V14.7L16.301 19.4H12.401L9.90098 21.8H7.00098V19.4H3.00098V6.2L4.30098 3ZM5.00098 17.4H9.00098V19.8H9.09636L11.5964 17.4H15.4725L19.001 13.8716V5H5.00098V17.4ZM15.001 8H17.001V12.7H15.001V8ZM15.001 8H17.001V12.7H15.001V8ZM10.001 8H12.001V12.7H10.001V8Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTwitchLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
