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
  selector: 'svg[si-stagetimer-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Stagetimer</title>
    <svg:path
      d="M12.127 2.639c0 .821.662 1.475 1.464 1.644a7.832 7.832 0 0 1 6.201 7.666c0 4.326-3.499 7.833-7.815 7.833a7.767 7.767 0 0 1-3.932-1.062c-.716-.419-1.66-.372-2.207.253l-.794.906c-.549.625-.491 1.586.196 2.053A11.946 11.946 0 0 0 11.977 24C18.617 24 24 18.605 24 11.949 24 5.86 19.495.826 13.644.013c-.829-.116-1.517.571-1.517 1.411v1.215ZM2.01 15.376c-.8.27-1.236 1.135-.866 1.886.255.518.546 1.016.871 1.492.473.693 1.449.752 2.085.202l.921-.797c.636-.551.686-1.502.26-2.224l-.035-.06c-.419-.726-1.277-1.158-2.077-.889l-1.159.39Zm-.322-1.384c-.807.162-1.6-.369-1.658-1.198-.04-.571-.04-1.143 0-1.714.058-.829.851-1.36 1.658-1.198l1.168.233c.807.162 1.316.957 1.312 1.788v.068c.004.831-.505 1.626-1.312 1.787l-1.168.234Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiStagetimerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}