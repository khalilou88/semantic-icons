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
  selector: 'svg[si-remix-run-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.1155 20C19.1155 18.9358 19.1155 17.9609 18.9536 15.8812C18.7532 13.7919 17.6654 12.7329 15.8047 12.3608C18.0089 12.0746 19.6406 10.3574 19.6406 7.72423C19.6406 4.20384 17.3219 2 12.6558 2H4V5.66888H11.797C13.8581 5.66888 14.8887 6.55343 14.8887 8.0131C14.8887 9.67314 13.8581 10.3001 11.797 10.3001H4V14.0495H11.568C13.1997 14.0495 14.0871 14.5074 14.2302 16.5682C14.3385 17.9756 14.325 18.6726 14.3119 19.341L14.3119 19.3438C14.3077 19.5579 14.3036 19.7692 14.3036 20L19.1155 20ZM4 17.2046V19.9996H10.1222V18.2108C10.1222 17.8349 9.93768 17.2046 9.08783 17.2046H4Z"
      fill="#121212"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRemixRunFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
