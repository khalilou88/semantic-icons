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
  selector: 'svg[si-airtable-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9933 3.50879C11.6316 3.50879 11.2683 3.58158 10.9266 3.7263L3.4825 6.85273C3.06333 7.02875 3.07417 7.62121 3.4925 7.79726L10.9775 10.8086C11.6332 11.0786 12.3667 11.0786 13.0225 10.8086L20.5075 7.79726C20.9266 7.63137 20.9266 7.02875 20.5175 6.85273L13.0533 3.7263C12.7179 3.58228 12.3575 3.5083 11.9933 3.50879ZM21.5 8.66308C21.4365 8.6635 21.3736 8.67644 21.315 8.70117L12.9716 11.9825C12.8783 12.0213 12.7984 12.0874 12.742 12.1723C12.6857 12.2573 12.6554 12.3574 12.655 12.4598V19.989C12.6558 20.0714 12.6763 20.1524 12.7148 20.225C12.7533 20.2975 12.8087 20.3595 12.876 20.4055C12.9433 20.4515 13.0207 20.4801 13.1014 20.4889C13.1821 20.4978 13.2637 20.4865 13.3392 20.4562L21.6833 17.1639C21.7769 17.1286 21.8574 17.0649 21.9141 16.9814C21.9708 16.898 22.0007 16.7989 22 16.6975V9.16836C21.9991 9.03426 21.946 8.90598 21.8523 8.81146C21.7587 8.71694 21.632 8.66305 21.5 8.66308ZM2.56333 8.69609C2.48934 8.69343 2.41561 8.70634 2.34678 8.73399C2.27794 8.76166 2.21548 8.80352 2.16333 8.85688C2.07167 8.95082 2 9.06425 2 9.19965V16.271C2 16.645 2.42916 16.8947 2.75667 16.728L10.7116 12.8441C11.1 12.6579 11.07 12.0756 10.6608 11.9198L2.73583 8.73246C2.68113 8.70923 2.62262 8.69746 2.56333 8.69609Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAirtableIcon implements OnInit {
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