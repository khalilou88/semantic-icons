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
  selector: 'svg[si-handshake-protocol-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Handshake</title>
    <svg:path
      d="M20.348 7.829l-1.491-2.65 2.889.001c.077 0 .167.051.21.12l1.533 2.529zm-5.344 16.046c-.07.125-.161.125-.19.125h-2.956l4.591-8.243a.442.442 0 0 0-.384-.657l-7.825.01-1.556-2.694h11.397c.248-.017.362-.158.393-.231l1.879-3.473h3.101zm-3.91-.314l-1.522-2.506c-.023-.037-.034-.128.014-.214l2.694-4.853 3.034-.004zM5.92 18.403l-1.508-2.68 1.52-2.848 1.524 2.64c-.474.891-1.213 2.283-1.536 2.888zm-3.668.417a.268.268 0 0 1-.207-.12L.51 16.17h3.141l1.491 2.65-2.891-.001zM8.996.126C9.066 0 9.156 0 9.186 0h2.968L7.551 8.243c-.11.167-.11.712.58.657l7.63-.01c.527.92 1.002 1.752 1.51 2.642H5.922a.465.465 0 0 0-.397.234l-1.879 3.522h-3.1L8.996.126zm3.917.323l1.515 2.496c.023.037.034.128-.015.214L11.72 8.012l-3.032.004zm5.166 5.145l1.509 2.68-1.538 2.844c-.517-.905-.997-1.745-1.529-2.673.328-.6 1.195-2.189 1.558-2.851Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHandshakeProtocolIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}