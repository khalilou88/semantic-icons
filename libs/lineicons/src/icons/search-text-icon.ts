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
  selector: 'svg[si-search-text-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.277 13.2502C15.277 13.6645 14.9412 14.0002 14.527 14.0002L7.96792 14.0002C7.5537 14.0002 7.21792 13.6645 7.21792 13.2502C7.21792 12.836 7.5537 12.5002 7.96792 12.5002L14.527 12.5002C14.9412 12.5002 15.277 12.836 15.277 13.2502Z"
      fill="#323544"
    />
    <svg:path
      d="M12.8468 9.75025C12.8468 10.1645 12.511 10.5002 12.0968 10.5002H7.96719C7.55297 10.5002 7.21719 10.1645 7.21719 9.75025C7.21719 9.33603 7.55297 9.00025 7.96719 9.00025L12.0968 9.00025C12.511 9.00025 12.8468 9.33603 12.8468 9.75025Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 11.4989C2 6.39126 6.14154 2.25098 11.25 2.25098C16.3585 2.25098 20.5 6.39126 20.5 11.4989C20.5 13.7836 19.6714 15.8747 18.2983 17.4883L21.7791 20.9695C22.072 21.2624 22.072 21.7372 21.7791 22.0301C21.4862 22.323 21.0113 22.323 20.7184 22.0301L17.2372 18.5486C15.6237 19.9197 13.5334 20.7469 11.25 20.7469C6.14154 20.7469 2 16.6066 2 11.4989ZM11.25 3.75098C6.96962 3.75098 3.5 7.22003 3.5 11.4989C3.5 15.7779 6.96962 19.2469 11.25 19.2469C15.5304 19.2469 19 15.7779 19 11.4989C19 7.22003 15.5304 3.75098 11.25 3.75098Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSearchTextIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}