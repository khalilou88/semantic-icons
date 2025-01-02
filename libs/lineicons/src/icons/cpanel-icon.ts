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
  selector: 'svg[si-cpanel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.52713 11.0813C8.33374 10.3077 7.65687 9.82423 6.94777 9.82423H5.81966C5.59404 9.82423 5.40065 9.95316 5.36842 10.1788L4.27255 14.1755H5.0461C5.27172 14.1755 5.40065 14.0466 5.49734 13.821L6.30314 10.8234H6.94777C7.20563 10.8234 7.43125 11.0168 7.49571 11.2747C7.59241 11.6292 7.30232 12.016 6.94777 12.016H6.62546C6.39983 12.016 6.20644 12.1449 6.17421 12.3705L5.98082 13.1441H6.98001C8.10812 13.1119 8.75275 11.9838 8.52713 11.0813ZM3.66015 11.9515H4.24032C4.46594 11.9515 4.59487 11.8226 4.69156 11.597L4.88494 10.8234H3.62792C2.88659 10.8234 2.27418 11.2747 2.04856 12.0805C1.79071 13.1119 2.5965 14.1111 3.59568 14.1111H3.95023L4.17586 13.3053C4.20809 13.1763 4.14362 13.0474 3.98247 13.0474H3.62792C2.88659 13.1119 2.88659 11.9515 3.66015 11.9515ZM11.3958 10.8556H8.94614L8.84945 11.2747C8.81722 11.597 8.97837 11.8548 9.30069 11.8548H11.1057C11.2346 11.8548 11.1379 11.9838 11.1379 11.9838L10.88 12.9829C10.88 13.0152 10.8478 13.1119 10.6867 13.1119H9.59078C9.46185 13.1119 9.46185 12.854 9.59078 12.854H10.2676C10.4933 12.854 10.6222 12.7251 10.7189 12.4995L10.8478 12.0805H9.39739C8.17258 12.0805 8.04365 14.0788 9.36516 14.0788H11.1701C11.5247 14.0788 11.8148 13.8532 11.9115 13.5309L12.3627 11.8871C12.4272 11.4036 11.9759 10.8556 11.3958 10.8556ZM21.7421 9.75977H21.162C21.033 9.75977 20.9041 9.85646 20.8397 10.0176L19.7115 14.1433C20.3562 14.1433 20.9686 13.692 21.1297 13.0474L22 10.0176C22 9.92092 21.9033 9.75977 21.7421 9.75977ZM14.3933 10.8556H12.9106L12.1049 13.8854C12.0726 14.0144 12.1371 14.1433 12.2982 14.1433H12.8784C13.0073 14.1433 13.1363 14.0466 13.2007 13.8854L13.7487 11.8871H14.3933C14.8123 11.8871 15.0379 12.2416 14.9412 12.6284L14.5867 13.8854C14.5545 14.0144 14.6189 14.1433 14.7801 14.1433H15.3603C15.4892 14.1433 15.6181 14.0466 15.6826 13.8854L15.9404 12.854C16.2305 11.8548 15.4247 10.8556 14.3933 10.8556ZM17.4231 13.2086C17.2942 13.2086 17.2297 13.1119 17.2942 12.9829L17.552 12.016C17.5843 11.8871 17.6809 11.8226 17.8099 11.8226H18.8413C18.938 11.8226 18.9702 11.8548 18.9702 11.9515L18.938 12.0482C18.9058 12.0805 18.9058 12.1449 18.8091 12.1449H18.1322C17.9066 12.1449 17.7132 12.2738 17.6809 12.4995L17.552 12.9185H19.1958C19.5504 12.9185 19.8405 12.6929 19.9372 12.3705L20.0339 12.016C20.1628 11.4358 19.776 10.8879 19.1636 10.8879H17.7132C17.1652 10.8879 16.6818 11.2424 16.4884 11.8548L16.1338 13.1119C16.0049 13.6598 16.3917 14.24 17.0041 14.24H19.0669C19.2925 14.24 19.4215 14.1111 19.5182 13.8854L19.7115 13.2408C19.6793 13.2086 17.4231 13.2086 17.4231 13.2086Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCpanelIcon implements OnInit {
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
