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
  selector: 'svg[si-createreactapp-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Create React App</title>
    <svg:path
      d="M21.92 10.846c0-1.223-1.44-2.308-3.655-2.97.533-2.25.3-4.04-.76-4.645a1.7 1.7 0 0 0-.85-.213c-.989 0-2.239.69-3.501 1.886-1.262-1.186-2.509-1.873-3.496-1.873a1.7 1.7 0 0 0-.863.216c-1.054.607-1.273 2.386-.747 4.625-2.203.659-3.636 1.735-3.64 2.953-.003 1.218 1.442 2.308 3.656 2.968-.533 2.251-.302 4.04.76 4.645.259.145.552.218.848.213.991 0 2.241-.69 3.503-1.886 1.26 1.186 2.507 1.873 3.496 1.873a1.7 1.7 0 0 0 .863-.216c1.054-.607 1.271-2.386.747-4.616 2.204-.668 3.636-1.744 3.638-2.96m-7.953-5.541c1.454-1.301 2.363-1.442 2.686-1.442a.84.84 0 0 1 .43.103c.508.29.71 1.31.549 2.663a10 10 0 0 1-.178 1.028 17 17 0 0 0-2.233-.367 17.5 17.5 0 0 0-1.463-1.79q.098-.098.21-.195m-4.401 6.548q.208.399.438.8c.153.268.313.54.49.808a17 17 0 0 1-1.391-.259c.124-.451.282-.895.463-1.35m-.492-3.38q.675-.158 1.408-.26c-.177.263-.33.533-.49.815s-.3.533-.437.802a21 21 0 0 1-.48-1.358M10 10.84q.33-.697.726-1.396c.267-.465.552-.918.847-1.35q.776-.06 1.598-.06c.549.002 1.065.022 1.578.063.295.43.577.887.844 1.34.266.453.511.927.731 1.39a20 20 0 0 1-1.571 2.747 20 20 0 0 1-3.176-.004 20 20 0 0 1-.845-1.34 21 21 0 0 1-.725-1.39zm5.834-2.623c.483.068.95.155 1.392.258-.131.438-.288.888-.469 1.34q-.209-.398-.44-.8a38 38 0 0 0-.476-.798zm.49 4.425q.229-.403.437-.805c.177.462.355.917.48 1.36q-.674.157-1.407.258.257-.395.497-.813zm-3.165-6.54q.48.513.94 1.107a23 23 0 0 0-.928-.021c-.314 0-.636 0-.946.021a15 15 0 0 1 .934-1.106M9.22 3.974a.86.86 0 0 1 .438-.099 2.3 2.3 0 0 1 .922.233 7 7 0 0 1 1.775 1.203l.208.19a17.5 17.5 0 0 0-1.449 1.776 18 18 0 0 0-2.246.365 9 9 0 0 1-.177-1.006c-.185-1.34.028-2.363.527-2.655zm-.94 9.002a10 10 0 0 1-.983-.355c-1.26-.533-2.042-1.216-2.042-1.8S6.04 9.554 7.3 9.031a10 10 0 0 1 .966-.345 17 17 0 0 0 .81 2.155 18 18 0 0 0-.794 2.133m4.084 3.39c-1.454 1.302-2.363 1.44-2.688 1.44a.83.83 0 0 1-.43-.102c-.507-.29-.71-1.31-.548-2.663a10 10 0 0 1 .177-1.027q1.105.255 2.234.366.672.945 1.463 1.79zm.811-.8q-.48-.511-.942-1.106.458.021.93.021c.314 0 .636 0 .946-.02q-.461.593-.935 1.105zm3.938 2.13a.86.86 0 0 1-.44.105c-.323 0-1.243-.142-2.692-1.438l-.207-.19a17.5 17.5 0 0 0 1.447-1.775 17 17 0 0 0 2.247-.366q.119.518.178 1.007c.176 1.338-.029 2.361-.535 2.65zm1.918-5.049q-.455.188-.966.343a17.5 17.5 0 0 0-.812-2.155q.469-1.04.798-2.13.5.152.983.354c1.259.533 2.042 1.216 2.04 1.8s-.785 1.257-2.045 1.781zm-5.873-.18c.322 0 .637-.096.905-.274a1.63 1.63 0 0 0 .601-.731 1.63 1.63 0 0 0 .094-.942 1.63 1.63 0 0 0-.445-.835 1.63 1.63 0 0 0-.834-.447 1.63 1.63 0 0 0-.942.092 1.63 1.63 0 0 0-.732.6 1.63 1.63 0 0 0-.276.905 1.6 1.6 0 0 0 .123.624 1.63 1.63 0 0 0 1.506 1.007M2.328 1.011v19.645H24V1.012zm20.825 18.8H3.176V1.859h19.977zm-15.09-6.019c-.533 2.251-.303 4.04.759 4.645.259.145.552.218.849.213.99 0 2.24-.69 3.503-1.886 1.26 1.186 2.506 1.873 3.495 1.873a1.7 1.7 0 0 0 .863-.216c1.055-.607 1.271-2.386.748-4.616 2.203-.66 3.636-1.737 3.637-2.953.002-1.216-1.44-2.308-3.653-2.97.532-2.25.3-4.04-.76-4.645a1.7 1.7 0 0 0-.85-.213c-.99 0-2.24.69-3.502 1.886-1.262-1.186-2.508-1.873-3.496-1.873a1.7 1.7 0 0 0-.862.216C7.739 3.862 7.52 5.64 8.046 7.88c-2.203.659-3.636 1.735-3.64 2.953-.003 1.218 1.444 2.297 3.658 2.961zm4.297 2.573c-1.454 1.301-2.363 1.44-2.688 1.44a.83.83 0 0 1-.43-.103c-.507-.29-.71-1.31-.548-2.663a10 10 0 0 1 .178-1.027 18 18 0 0 0 2.233.366q.672.945 1.463 1.79zm4.402-6.55a24 24 0 0 0-.44-.8c-.155-.269-.32-.533-.484-.798.483.068.95.155 1.392.258-.13.438-.286.888-.467 1.34zm.483 3.373q-.673.157-1.407.258a21 21 0 0 0 .927-1.617c.187.47.348.921.476 1.368zm-.925-2.37a20 20 0 0 1-1.572 2.747 20 20 0 0 1-3.176-.004 20 20 0 0 1-1.576-2.73q.33-.697.726-1.396c.266-.465.552-.918.847-1.35a20.6 20.6 0 0 1 3.176.004c.294.428.577.886.843 1.34.266.452.513.935.733 1.398zm-5.826 2.642a17 17 0 0 1-1.391-.259c.13-.437.289-.888.47-1.34q.208.399.438.8c.153.268.306.531.483.8M10 9.023q-.231.398-.437.802a18 18 0 0 1-.488-1.353q.675-.156 1.408-.259c-.165.263-.323.534-.483.81m3.175 6.542q-.48-.511-.943-1.106.458.021.93.021c.314 0 .636 0 .946-.02a16 16 0 0 1-.933 1.105m3.937 2.13a.86.86 0 0 1-.44.105c-.323 0-1.243-.142-2.691-1.438l-.208-.19a17.5 17.5 0 0 0 1.447-1.775 17 17 0 0 0 2.247-.366q.12.518.178 1.007c.178 1.338-.027 2.361-.533 2.65zm.938-8.994q.5.153.983.355c1.26.533 2.042 1.217 2.04 1.8-.001.585-.783 1.272-2.043 1.796q-.455.188-.966.342a17.5 17.5 0 0 0-.811-2.155q.468-1.046.797-2.145zm-4.084-3.389c1.454-1.301 2.363-1.442 2.687-1.442a.84.84 0 0 1 .43.103c.507.29.71 1.31.548 2.663a10 10 0 0 1-.178 1.028 17 17 0 0 0-2.233-.367 17.5 17.5 0 0 0-1.463-1.79q.101-.107.211-.202zm-.807.792q.48.511.94 1.106a23 23 0 0 0-.928-.021c-.314 0-.636 0-.946.02a15 15 0 0 1 .934-1.105M9.22 3.974a.86.86 0 0 1 .438-.1 2.3 2.3 0 0 1 .922.233 7 7 0 0 1 1.775 1.203l.208.19a17.5 17.5 0 0 0-1.449 1.776 18 18 0 0 0-2.246.365 9 9 0 0 1-.177-1.006c-.185-1.34.028-2.363.527-2.655zM7.299 9.031a10 10 0 0 1 .966-.345 17 17 0 0 0 .81 2.155 18 18 0 0 0-.798 2.13 10 10 0 0 1-.984-.354c-1.26-.533-2.041-1.216-2.041-1.8s.788-1.263 2.047-1.786m5.859.177a1.63 1.63 0 0 0-.906.274 1.63 1.63 0 0 0-.601.73 1.63 1.63 0 0 0-.094.942 1.63 1.63 0 0 0 3.229-.314 1.6 1.6 0 0 0-.12-.627 1.6 1.6 0 0 0-.353-.533 1.6 1.6 0 0 0-.53-.356 1.6 1.6 0 0 0-.625-.125za1.63 1.63 0 0 0-.906.274 1.63 1.63 0 0 0-.601.73 1.63 1.63 0 0 0-.094.942 1.63 1.63 0 0 0 3.229-.314 1.6 1.6 0 0 0-.12-.627 1.6 1.6 0 0 0-.353-.533 1.6 1.6 0 0 0-.53-.356 1.6 1.6 0 0 0-.625-.125za1.63 1.63 0 0 0-.906.274 1.63 1.63 0 0 0-.601.73 1.63 1.63 0 0 0-.094.942 1.63 1.63 0 0 0 3.229-.314 1.6 1.6 0 0 0-.12-.627 1.6 1.6 0 0 0-.353-.533 1.6 1.6 0 0 0-.53-.356 1.6 1.6 0 0 0-.625-.125zm8.761 1.64c0-1.223-1.44-2.307-3.654-2.97.533-2.25.3-4.039-.76-4.644a1.7 1.7 0 0 0-.85-.213c-.989 0-2.239.69-3.501 1.885-1.262-1.186-2.509-1.873-3.496-1.873a1.7 1.7 0 0 0-.863.217c-1.054.607-1.273 2.386-.747 4.625-2.203.658-3.636 1.734-3.64 2.952-.003 1.218 1.442 2.308 3.656 2.969-.533 2.25-.302 4.039.76 4.644.259.145.552.219.848.213.991 0 2.241-.69 3.503-1.885 1.26 1.186 2.507 1.873 3.496 1.873.302.005.6-.07.863-.217 1.054-.607 1.271-2.386.747-4.616 2.204-.671 3.636-1.747 3.638-2.963zm-7.952-5.544c1.454-1.301 2.363-1.442 2.686-1.442a.84.84 0 0 1 .43.103c.508.29.71 1.31.549 2.663a10 10 0 0 1-.178 1.028 17 17 0 0 0-2.233-.367 17.5 17.5 0 0 0-1.463-1.79q.098-.098.21-.195m-4.401 6.548q.208.399.438.8c.153.268.313.54.49.808a17 17 0 0 1-1.391-.259c.124-.451.282-.895.463-1.35m-.492-3.38q.675-.158 1.408-.26c-.177.263-.33.533-.49.815s-.3.533-.437.802a21 21 0 0 1-.48-1.358M10 10.84q.33-.697.726-1.396c.267-.465.552-.918.847-1.35q.776-.06 1.598-.06c.549.002 1.065.022 1.578.063.295.43.577.887.844 1.34.266.453.511.927.731 1.39a20 20 0 0 1-1.571 2.747 20 20 0 0 1-3.176-.004 20 20 0 0 1-.845-1.34 21 21 0 0 1-.725-1.39zm5.834-2.623c.483.068.95.155 1.392.258-.131.438-.288.888-.469 1.34q-.209-.398-.44-.8a38 38 0 0 0-.476-.798zm.49 4.425q.229-.403.437-.805c.177.462.355.917.48 1.36q-.674.157-1.407.258.257-.395.497-.813zm-3.165-6.54q.48.513.94 1.107a23 23 0 0 0-.928-.021c-.314 0-.636 0-.946.021a15 15 0 0 1 .934-1.106M9.22 3.974a.86.86 0 0 1 .438-.099 2.3 2.3 0 0 1 .922.233 7 7 0 0 1 1.775 1.203l.208.19a17.5 17.5 0 0 0-1.449 1.776 18 18 0 0 0-2.246.365 9 9 0 0 1-.177-1.006c-.185-1.34.028-2.363.527-2.655zm-.94 9.002a10 10 0 0 1-.983-.355c-1.26-.533-2.042-1.216-2.042-1.8S6.04 9.554 7.3 9.031a10 10 0 0 1 .966-.345 17 17 0 0 0 .81 2.155 18 18 0 0 0-.794 2.133m4.084 3.39c-1.454 1.302-2.363 1.44-2.688 1.44a.83.83 0 0 1-.43-.102c-.507-.29-.71-1.31-.548-2.663a10 10 0 0 1 .177-1.027q1.105.255 2.234.366.672.945 1.463 1.79zm.811-.8q-.48-.511-.942-1.106.458.021.93.021c.314 0 .636 0 .946-.02q-.461.593-.935 1.105zm3.938 2.13a.86.86 0 0 1-.44.105c-.323 0-1.243-.142-2.692-1.438l-.207-.19a17.5 17.5 0 0 0 1.447-1.775 17 17 0 0 0 2.247-.366q.119.518.178 1.007c.176 1.338-.029 2.361-.535 2.65zm1.918-5.049q-.455.188-.966.343a17.5 17.5 0 0 0-.812-2.155q.469-1.04.798-2.13.5.152.983.354c1.259.533 2.042 1.216 2.04 1.8s-.785 1.257-2.045 1.781zm-5.873-.18c.322 0 .637-.096.905-.274a1.63 1.63 0 0 0 .601-.731 1.63 1.63 0 0 0 .094-.942 1.63 1.63 0 0 0-.445-.835 1.63 1.63 0 0 0-.834-.447 1.63 1.63 0 0 0-.942.092 1.63 1.63 0 0 0-.732.6 1.63 1.63 0 0 0-.276.905 1.6 1.6 0 0 0 .123.624 1.63 1.63 0 0 0 1.506 1.007M.85 22.14V2.49L0 3.341v19.647h21.669l.849-.847z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCreatereactappIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
