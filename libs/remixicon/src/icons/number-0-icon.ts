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
  selector: 'svg[si-number-0-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 1.5C13.3212 1.5 14.4839 1.84812 15.4468 2.49362C16.4098 3.13913 17.1731 4.08202 17.6956 5.27156C18.2182 6.4611 18.5 7.8973 18.5 9.52941V14.4706C18.5 16.1027 18.2182 17.5389 17.6956 18.7284C17.1731 19.918 16.4098 20.8609 15.4468 21.5064C14.4839 22.1519 13.3212 22.5 12 22.5C10.6788 22.5 9.51613 22.1519 8.55317 21.5064C7.5902 20.8609 6.82691 19.918 6.30436 18.7284C5.78181 17.5389 5.5 16.1027 5.5 14.4706V9.52941C5.5 7.8973 5.78181 6.4611 6.30436 5.27156C6.82691 4.08202 7.5902 3.13913 8.55317 2.49362C9.51613 1.84812 10.6788 1.5 12 1.5ZM12 3.5C11.084 3.5 10.3059 3.72649 9.66678 4.15491C9.02961 4.58202 8.50949 5.22453 8.13547 6.07594C7.72283 7.01528 7.5 8.18343 7.5 9.52941V14.4706C7.5 15.8166 7.72283 16.9847 8.13547 17.9241C8.50949 18.7755 9.02961 19.418 9.66678 19.8451C10.3059 20.2735 11.084 20.5 12 20.5C12.916 20.5 13.6941 20.2735 14.3332 19.8451C14.9704 19.418 15.4905 18.7755 15.8645 17.9241C16.2772 16.9847 16.5 15.8166 16.5 14.4706V9.52941C16.5 8.18343 16.2772 7.01528 15.8645 6.07594C15.4905 5.22453 14.9704 4.58202 14.3332 4.15491C13.6941 3.72649 12.916 3.5 12 3.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNumber0Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
