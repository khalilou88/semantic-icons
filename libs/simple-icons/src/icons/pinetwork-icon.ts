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
  selector: 'svg[si-pinetwork-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Pi Network</title>
    <svg:path
      d="M12 .002c-6.628 0-12 5.371-12 12 0 6.628 5.372 11.996 12 11.996s12-5.371 12-12C24 5.37 18.624.002 12 .002zm0 1.719c5.679 0 10.281 4.602 10.281 10.281S17.68 22.283 12 22.283 1.719 17.681 1.719 12.002 6.32 1.721 12 1.721zM9.102 5.943c-.123 0-.227.1-.227.227v1.139c0 .122.1.226.227.226h1.56a.225.225 0 0 0 .227-.226v-1.14c0-.121-.1-.226-.227-.226h-1.56zm3.685 0c-.122 0-.226.1-.226.227v1.139c0 .122.1.226.226.226h1.559a.228.228 0 0 0 .226-.226v-1.14c0-.121-.1-.226-.226-.226h-1.559zm3.219 1.407v1.19H7.352c-1.895.026-1.975 2.042-1.975 2.042v1.461H7.43l.008-1.447h1.398v7.574c-.005.457.451.285.451.285l1.461-.516c.23-.099.186-.308.186-.308v-7.022h1.591v7.641c.014.357.366.213.366.213l1.591-.565c.14-.076.118-.195.118-.195l-.022-7.062 1.527-.04c1.909-.027 1.963-2.103 1.963-2.103V7.35h-2.062"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPinetworkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
