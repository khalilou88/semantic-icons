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
  selector: 'svg[si-jcb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.09677 4.4248C3.41935 4.4248 2 5.7588 2 7.44219V19.5752H18.9032C20.6452 19.5752 22 18.1776 22 16.526V4.4248H5.09677ZM8.58064 16.3672C8.58064 17.6059 7.58064 18.5588 6.35484 18.5588H3.09677V13.8898C3.09677 13.8898 4.09677 14.1439 5.35484 14.1439C7.48387 14.1439 8.12903 13.3499 8.12903 12.3653V9.82432H6.22581V12.4288C6.22581 13.064 5.80645 13.5087 5.03226 13.5087C4.3871 13.5087 3.77419 13.3181 3.12903 13.0322V7.63277C3.12903 6.39406 4.12903 5.44119 5.35484 5.44119H8.58064V16.3672ZM14.7419 16.3672C14.7419 17.6059 13.7419 18.5588 12.5161 18.5588H9.29032V13.5404C9.83871 13.9851 10.8387 14.3027 12.4194 14.271C13.2903 14.2392 14.1613 14.0169 14.1613 14.0169V13.064C13.7097 13.2863 13.1613 13.5087 12.4839 13.5404C11.2903 13.6357 10.5806 13.064 10.5806 12.0159C10.5806 10.9995 11.3226 10.396 12.4839 10.4913C13.1613 10.5231 13.7419 10.7136 14.1613 10.9995V10.0466C14.1613 10.0466 13.2581 9.82432 12.4194 9.79258C10.871 9.7608 9.87097 10.0149 9.29032 10.5231V7.66451C9.29032 6.4258 10.2903 5.47296 11.5161 5.47296H14.7419V16.3672ZM20.871 16.3672C20.871 17.6059 19.871 18.5588 18.6452 18.5588H15.3548V14.1122H18.8065C19.6129 14.1122 20.2258 13.6675 20.2258 13.0005C20.2258 12.3653 19.6774 11.9841 18.9677 11.9841V11.9523C19.6129 11.8571 19.9677 11.4759 19.9677 10.9677C19.9677 10.3325 19.4194 9.98312 18.7097 9.95138C18.6774 9.95138 18.5806 9.95138 18.4839 9.95138H15.3871V7.66451C15.3871 6.4258 16.3871 5.47296 17.6129 5.47296H20.871V16.3672ZM17.7742 12.1429C17.8065 12.1429 17.9032 12.1429 17.9032 12.1429C18.129 12.1747 18.3548 12.4923 18.3548 12.7782C18.3548 13.0958 18.129 13.3181 17.9032 13.3181C17.871 13.3181 17.7742 13.3181 17.7742 13.3181H16.5161V12.1429H17.7742ZM16.5161 11.6347V10.5548H17.6452C17.6774 10.5548 17.7419 10.5548 17.7742 10.5548C18 10.5866 18.2258 10.7772 18.2258 11.0948C18.2258 11.3489 18 11.603 17.7742 11.6347C17.7742 11.6347 17.6774 11.6347 17.6452 11.6347C17.5279 11.6347 16.5161 11.6347 16.5161 11.6347Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiJcbIcon implements OnInit {
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
