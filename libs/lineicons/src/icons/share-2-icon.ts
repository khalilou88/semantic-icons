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
  selector: 'svg[si-share-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.4835 10.7351C17.1907 10.4422 17.1907 9.96736 17.4836 9.67449L19.3412 7.81715L11.4215 7.81716C10.7953 7.81716 10.2878 8.32474 10.2878 8.95088L10.2878 12.164C10.2878 12.5782 9.95198 12.914 9.53776 12.914C9.12355 12.914 8.78776 12.5782 8.78776 12.164L8.78776 8.95088C8.78776 7.49631 9.96692 6.31716 11.4215 6.31716L19.3446 6.31715L17.4836 4.45611C17.1907 4.16322 17.1907 3.68834 17.4836 3.39545C17.7765 3.10256 18.2513 3.10256 18.5442 3.39545L21.684 6.5352C21.8246 6.67586 21.9037 6.86663 21.9036 7.06556C21.9036 7.26448 21.8246 7.45525 21.6839 7.5959L18.5442 10.7352C18.2513 11.0281 17.7764 11.0281 17.4835 10.7351Z"
      fill="#323544"
    />
    <svg:path
      d="M5.0625 16.2295C5.0625 15.8152 4.72671 15.4795 4.3125 15.4795C3.89829 15.4795 3.5625 15.8152 3.5625 16.2295V18.7295C3.5625 19.9721 4.56986 20.9795 5.8125 20.9795H18.8134C20.056 20.9795 21.0634 19.9721 21.0634 18.7295V16.2295C21.0634 15.8152 20.7276 15.4795 20.3134 15.4795C19.8992 15.4795 19.5634 15.8152 19.5634 16.2295V18.7295C19.5634 19.1437 19.2276 19.4795 18.8134 19.4795H5.8125C5.39829 19.4795 5.0625 19.1437 5.0625 18.7295V16.2295Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShare2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
