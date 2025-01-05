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
  selector: 'svg[si-apachenifi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Apache NiFi</svg:title>
    <svg:path
      d="M11.648 0a.093.093 0 0 0-.084.053A30.71 30.71 0 0 1 8.592 4.73c-2.09 2.728-5.145 6.466-5.145 10.364a8.201 8.201 0 0 0 8.201 8.2v-5.003c0-.106.087-.193.194-.193h2.81v-2.813c0-.106.087-.191.194-.191h5.004c0-3.9-3.056-7.636-5.145-10.364A30.712 30.712 0 0 1 11.732.053.094.094 0 0 0 11.648 0zm-1.632 3.867c.05 0 .08.034.037.112-.11.197-.218.397-.328.593-.396.702-.819 1.389-1.23 2.08-.196-.032-.39-.06-.585-.088.495-.651 1-1.296 1.48-1.959.153-.209.302-.423.454-.634a.24.24 0 0 1 .172-.104zM7.44 7.186c.221.035.444.076.666.119-.073.129-.15.256-.223.383a29.073 29.073 0 0 0-1.625 3.261c-.874 2.123-1.383 4.444-.77 6.707a8.222 8.222 0 0 0 2.217 3.74c.083.083-.02.216-.119.155a7.568 7.568 0 0 1-.93-.686A7.674 7.674 0 0 1 4.1 16.248c-.329-2.156.387-4.246 1.418-6.115a27.44 27.44 0 0 1 1.92-2.947zm7.931 8.435a.193.193 0 0 0-.191.191V18.3h2.677V15.62zm3.299 0V18.3h1.348a7.975 7.975 0 0 0 .515-2.678zm-6.303 3.004a.193.193 0 0 0-.191.193v2.485h2.678v-2.678Zm3.295.484v2.68h2.115a.562.562 0 0 0 .399-.162v-.004a.562.562 0 0 0 .16-.397V19.11zm3.674.182v1.98a7.999 7.999 0 0 0 1.217-1.98zm-6.969 2.824a.193.193 0 0 0-.191.192v1.672a7.997 7.997 0 0 0 2.678-.516v-1.348zm3.48.668V24a8.008 8.008 0 0 0 1.98-1.217z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApachenifiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#728E9B');
  }
}
