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
  selector: 'svg[si-linuxprofessionalinstitute-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Linux Professional Institute</title>
    <svg:path
      d="M12-.0002c-6.6273 0-12 5.3728-12 11.9997 0 6.627 5.3727 12.0007 12 12.0007s12-5.3728 12-12.0007S18.627-.0002 12-.0002Zm0 20.987c-4.9632 0-8.987-4.0231-8.987-8.9866 0-4.9635 4.0238-8.9867 8.987-8.9867 4.9632 0 8.987 4.0235 8.987 8.9867 0 4.9631-4.0238 8.9867-8.987 8.9867zm5.1043-3.0031.7995-2.9975h-7.1631L13.5062 4.495h-2.9978L6.9118 17.9837Zm.2896-10.4938c0 .8225-.6697 1.4938-1.4938 1.4938s-1.4897-.6716-1.4897-1.4938c0-.8223.6675-1.4907 1.4897-1.4907s1.4938.6688 1.4938 1.4907"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLinuxprofessionalinstituteIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}