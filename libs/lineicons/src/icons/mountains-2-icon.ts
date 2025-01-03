import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-mountains-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.90971 5.68822C8.7577 4.10393 11.0291 4.10393 11.8771 5.68822L15.0807 11.6735L15.3117 11.1886C16.1261 9.47867 18.5599 9.47866 19.3744 11.1886L21.8011 16.2838C22.5123 17.7769 21.4236 19.5013 19.7698 19.5013H12.5404C12.5359 19.5013 12.5314 19.5013 12.5268 19.5012H4.27265C2.5726 19.5012 1.48668 17.6883 2.28894 16.1894L7.90971 5.68822ZM12.554 18.0013H19.7698C20.3211 18.0013 20.684 17.4265 20.4469 16.9288L18.0201 11.8337C17.7487 11.2637 16.9374 11.2637 16.6659 11.8337L15.7969 13.6582C15.6752 13.9136 15.4202 14.0789 15.1374 14.0855C14.8545 14.0921 14.592 13.9391 14.4585 13.6896L10.5547 6.39607C10.272 5.86798 9.51485 5.86798 9.23218 6.39607L3.61141 16.8973C3.34399 17.3969 3.70597 18.0012 4.27265 18.0012H12.5405C12.545 18.0012 12.5495 18.0012 12.554 18.0013Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMountains2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}