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
  selector: 'svg[si-workplace-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Workplace</title>
    <svg:path
      d="M23.268 10.541C23.268 4.715 18.544 0 12.728 0c-1.614 0-3.191.317-4.663.952a11.952 11.952 0 00-3.817 2.574 11.915 11.915 0 00-3.516 8.478 11.924 11.924 0 003.516 8.48 12.05 12.05 0 003.817 2.573c1.472.626 3.05.943 4.671.943 1.56 0 3.05-.3 4.416-.837l-.908-2.292a9.448 9.448 0 01-3.508.67 9.481 9.481 0 01-6.743-2.794A9.481 9.481 0 013.2 12.004c0-2.547.996-4.944 2.794-6.742a9.496 9.496 0 016.743-2.794 8.072 8.072 0 016.734 12.524l-2.098-5.165c-.308-.758-.679-1.895-2.071-1.895-1.393 0-1.763 1.146-2.063 1.895l-1.93 4.769-2.591-6.54H5.993l3.226 7.95c.326.802.688 1.895 2.09 1.895 1.4 0 1.753-1.093 2.08-1.895l1.912-4.724 1.921 4.724c.388.978.802 1.895 2.08 1.895.908 0 1.481-.582 1.798-.96a10.493 10.493 0 002.168-6.4Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWorkplaceIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
