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
  selector: 'svg[si-rocketdotchat-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Rocket.Chat</title>
    <svg:path
      d="M22.909 8.381c-.651-1.01-1.564-1.905-2.71-2.66-2.215-1.457-5.127-2.259-8.197-2.259-1.027 0-2.038.09-3.018.266a9.978 9.978 0 0 0-2.075-1.53C4.11.803 1.646 1.323.4 1.77a.598.598 0 0 0-.233.977c.879.907 2.332 2.698 1.974 4.327C.753 8.493 0 10.203 0 11.982c0 1.815.752 3.524 2.142 4.942.357 1.63-1.096 3.421-1.975 4.328a.597.597 0 0 0 .233.977c1.245.448 3.71.968 6.508-.427a10.031 10.031 0 0 0 2.075-1.53 17.06 17.06 0 0 0 3.018.265c3.071 0 5.983-.801 8.197-2.257 1.147-.755 2.06-1.65 2.71-2.661C23.633 14.493 24 13.28 24 12.017c.001-1.297-.366-2.508-1.091-3.636zM11.875 18.437c-1.328 0-2.594-.171-3.748-.48l-.844.81a7.716 7.716 0 0 1-1.556 1.154 6.118 6.118 0 0 1-2.2.621c.042-.074.079-.149.119-.224.844-1.553 1.073-2.948.683-4.186-1.382-1.086-2.212-2.476-2.212-3.99 0-3.476 4.369-6.294 9.757-6.294s9.757 2.818 9.757 6.294c.001 3.477-4.367 6.295-9.756 6.295zm-3.229-6.315c0 .788-.644 1.427-1.438 1.427a1.433 1.433 0 0 1-1.438-1.427c0-.788.644-1.426 1.438-1.426.794 0 1.438.638 1.438 1.426zm4.627 0c0 .788-.644 1.427-1.438 1.427a1.433 1.433 0 0 1-1.438-1.427c0-.788.644-1.426 1.438-1.426.794 0 1.438.638 1.438 1.426zm4.63 0c0 .788-.645 1.427-1.439 1.427a1.433 1.433 0 0 1-1.438-1.427c0-.788.644-1.426 1.438-1.426.794 0 1.438.638 1.438 1.426z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRocketdotchatIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
