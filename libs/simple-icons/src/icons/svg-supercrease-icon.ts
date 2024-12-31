import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-supercrease-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Supercrease</title>
      <path
        d="m12.13 5.553-.265.472s-.047.082-.082.15c-.045.014-4.562 1.305-5.752 1.651-.705.197-1.214.345-1.33.381-.115-.185-.38-.635-.38-.635l-1.087.324-1.224.358-.219.07s-.022.126-.059.299c-.08.439-.218 1.213-.242 1.305-.023.023-.149.22-.334.463-.173.254-.405.555-.601.843-.162.22-.312.415-.416.565L0 11.996s.058-.012.139-.035l1.017-.174c-.092.52-.279 1.525-.279 1.525l.209.29.601.83.417.566c.042 0 .086.004.128.012-.173.358-.486 1.005-.613 1.248a.396.396 0 0 1-.037.092l1.041.888.717.612.37.312.116.092.322.055-.011.023 3.027.115s-.553-.645-.59-.681c.705.023 2.37.093 2.37.093l-1.4-1.617-.09-.115s-.418.197-.602.277c-.012-.011-.012-.035-.024-.058l-.057.037-.082-.21-.127-.368.198-.266.717.232.61.21.694.218 1.446-.195.242-.035s.323-.265.623-.508c.093-.08.186-.163.267-.232.255.462.866 1.604 1.004 1.859-.058.139-.423 1.098-.423 1.098l1.523.08.799.035 1.744.092-.3-.704 1.628.08-.592-1.398-.844-.531s-.172.037-.195.037v-.15c.011-.012.045-.036.069-.059l.126-.103s.07-1.317.094-1.963a1.86 1.86 0 0 0 .01-.233c.082.035.269.117.512.233 1.317.6 4.574 2.078 4.99 2.275l.265-.174 1.133-.717-.336-.174.163-.38.347-.832.924-2.252-.785.705s-1.318 1.131-1.688 1.443c-.011-.011-.127-.092-.127-.092l.67-1.605-.935.277c-.195.081-.497.197-.705.29 0-.024-.38-.843-.52-1.132v-.011c.347-.185 1.387-.766 1.387-.766l-.035-.068-.416-.809-.59-1.164-.324-.623s-.753.808-.971 1.039c-.093-.046-.335-.196-.67-.393-.15-.08-.311-.185-.484-.289-1.029-.6-2.439-1.42-3.075-1.8-.207-.116-.335-.198-.335-.198s.023.094.046.198l.092.46a1.911 1.911 0 0 1-.277.024c-.254.035-.542.057-.797.08-.208.023-.369.035-.473.047-.058-.093-.207-.346-.38-.635h-.005c-.229-.373-.472-.773-.472-.773Zm.05.633 3.558 5.86-1.113.507-.127.058-3.324 1.537-.98.45-.987-3.198 2.857-5.007.116-.207Zm-.239.252-1.949 3.42-.865 1.517-.01.016 1.024 3.316.572-.262.5-.226.182.341.05.094-1.076.893-1.539.207-2.1-.639-1.212-.37.12-.198-.722-.047 1.752-2.584-2.02-3.383 7.293-2.095Zm3.016.375 4.031 2.36-2.093 2.253-.204.219-.615.584-.053-.258-1.02-4.961-.007-.035-.039-.162Zm-.039.251.998 4.795.02.092-.092.111-2.916-4.802 1.99-.196Zm-10.719.868.328.552.795 1.33 1.25 2.1-1.763 2.598-.116.156-1.775-.08H2.893l-.045-.002-.516-.02-1.041-1.414.338-1.802.006-.028.504-2.793 2.06-.597Zm15.678.404.973 1.9-2.334 1.274-2.645 1.326-.088.043v-.004l-.236.121.154-.166.059-.062.015-.018 3.036-3.264.273-.293.035-.037.758-.82Zm-18.121 1.82-.205 1.125-.696.125.9-1.25Zm17.742.914.79 1.686.097.367-.2.162-2.091-1.469.46-.236.602-.328.342-.182Zm-1.486.79 2.611 1.84.29.206.68.477.038.025.246.176.49.354-.797.476-5.588-2.543 2.03-1.012Zm-2.202.244-.437.548-.021.01.01.006-.425.533-.277-.574 1.15-.524Zm5.827.07-.69 1.648-.002.006-.691-.494.223-.18-.002-.004 1.101-.927.06-.05Zm-.305.146-.879.745-.088-.329-.006-.023.973-.393Zm-5.604.016-.005.176-.08.033-.116.045.202-.254Zm7.569.06-1.002 2.39-.58-.417.074-.092 1.465-1.826.043-.055Zm-7.438.141-.074.082-.103.111-.131-.062.25-.102.058-.029Zm-1.273.125.082.168.252.524.515-.649.188.09-.297.318.051.063.129-.069.19-.093-.114 2.299-.129.1v-.017l-1.119.938-.209.027v-.234l.197-.162.172-3.262.092-.04Zm-.176.08-.152 2.881-.016.3-.197.163-1.053.861-.201.04-1.242-2.313-.125-.234-.137-.255 3.123-1.443Zm8.502.004-1.14 1.424-.202-.274 1.342-1.15Zm-1.744.762.55.726-.072.086-.634-.443.156-.37Zm-16.307 1.07.639.041-.064.102-.008.013-.035.057-.563.947-.226.37-.053.085-.01.018-.023.037-.004.008-.014.021-.025.05-1.479-1.651 1.738.076.127-.174ZM2.8 14.67h.084l1.504 1.678-2.324-.174.736-1.504Zm2.676.146 1.132.344-.265.438-.084.14-.801-.894.018-.028Zm-.06.102.75.84-1.196-.09.445-.75Zm9.96.652v.582l-.877.153.877-.735Zm-10.453.176 1.322.1.026.029.015-.025.06.004.307.902-.527.25-.338.16-.162-.174-.1.045-.914-.771.248-.418.063-.102Zm1.4.041.014.04-.023-.026.01-.014Zm9.535.363.63.39.322.759-1.538-.076-.037-.102-.69-.445-.044.008-.373.066v-.305l.09-.015-.008.008 1.244-.215v-.004l.404-.069Zm-1.812.041v.573l-.889.154.889-.727ZM2.12 16.26l2.346.175.025.03.016-.027.043.003.318.907-.935.441-1.813-1.53Zm5.264.244.773.887-2.258-.088-.058-.073 1.543-.726Zm7.144.258.633.4.006.012.045.127h.008l.26.623-2.989-.145.272-.707.988-.174.373-.064.404-.072Zm-8.922.33.243.28.01.01.519.598-2.455-.093 1.015-.473.577-.28.091-.042Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSupercreaseIcon {
  readonly class = input<string>('');
}
