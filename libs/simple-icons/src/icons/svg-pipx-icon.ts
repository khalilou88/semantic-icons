import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pipx-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>pipx</title>
      <path
        d="M17.801 0c-.005-.001-.011.004-.02.017a34.051 34.051 0 0 0-1.451 2.245l.231-.662a.034.034 0 0 0-.058-.033l-.52.648a.104.104 0 0 0-.042.004l.353-.727a.037.037 0 0 0-.061-.04l-1.073 1.23c-.053.016-.076.014-.07-.007.313-.871.874-1.732 1.345-2.53a.05.05 0 0 0 .008-.028c0-.01-.002-.02-.005-.027-.013-.027-.029-.029-.047-.005-.143.192-.422.71-.602.817a.031.031 0 0 1-.047-.025c0-.005 0-.01.003-.013l.123-.281a.024.024 0 0 0-.025-.034.025.025 0 0 0-.017.009c-.417.53-.75 1.137-1.099 1.714-.225.373-.637.983-.902 1.515L11.13 8.52l-.934 1.756C9.44 9.075 8.838 7.75 8.15 6.503c-.15-.273-.353-.59-.518-.89a.025.025 0 0 0-.024-.014H7.59a.016.016 0 0 0-.015.021l.154.409a.057.057 0 0 1-.008.053l-.082.107a.077.077 0 0 0-.013.07l.15.505c.022.073.014.077-.024.01-.295-.515-.566-1.099-.845-1.646-.008-.017-.018-.018-.03-.004-.009.011-.01.023-.003.037.211.43.38.816.504 1.16.003.006 0 .01-.007.01h-.019a.012.012 0 0 1-.01-.007l-.387-.746a.037.037 0 0 0-.07.015.207.207 0 0 0 .07.174c.01.008.007.024-.005.027l-.024.008a.035.035 0 0 1-.041-.015l-.261-.432a.044.044 0 0 0-.076.002.043.043 0 0 0-.003.032l.46 1.592c.005.017-.001.025-.019.025-.019 0-.035-.015-.048-.042l-.47-1.017a.027.027 0 0 0-.051.017c.06.335.166.55.177.975.004.132.087.377.248.735.047.106.061.23.106.337a.009.009 0 0 1-.016.008c-.302-.554-.496-1.088-.902-1.61a.034.034 0 0 0-.06.031c.065.203.096.38.192.592.125.277.103.564.206.814.05.122.106.242.168.36a125.973 125.973 0 0 0 2.19 4.587c.02.039.015.095.016.137l-.34.53-1.024 1.834-.86 1.58-.339.614a.024.024 0 0 0 .035.032l.176-.118c.037-.026.05-.017.035.027a3.048 3.048 0 0 1-.295.659c-.018.029-.01.04.024.033l.173-.035c.003.155-.192.464-.257.64-.01.024.01.05.037.046a.036.036 0 0 0 .024-.015l.482-.714c.121.169-.044.328-.094.486a.044.044 0 0 0 .072.044l.322-.31c.026-.024.046-.02.058.014l.018.05a.045.045 0 0 0 .082.01l.194-.31a.034.034 0 0 1 .06.028l-.306.876a.031.031 0 0 0 .054.031l.906-1.054a4.227 4.227 0 0 1-.462.956.037.037 0 0 0-.007.022.05.05 0 0 0 .007.024c.013.022.027.023.043.001.246-.345.481-.698.707-1.057a.296.296 0 0 1 .117-.087l.016.15c.005.053.021.057.048.012.176-.295.396-.556.57-.838.317-.517.675-1.007 1.074-1.47.02-.024.037-.022.05.004l.11.202c.264.588.538 1.185.864 1.768.405.722.911 1.815 1.38 2.683.188.347.377.693.568 1.04.33.6.617 1.26.936 1.888.16.336.348.716.67.792.031.007.041-.004.03-.034l-.687-1.839c.275.221.502.47.682.747.02.032.042.05.065.051a.042.042 0 0 0 .045-.048l-.173-1.104c-.01.027-.01.027 0 0l.11-.156c.093.13.228.224.314.365.227.378.495.72.805 1.024a.05.05 0 0 0 .082-.023.048.048 0 0 0 0-.023c-.174-.731-.567-1.452-.783-2.215-.05-.177-.014-.198.11-.06.227.25.44.512.64.786.309.422.35.397.123-.073a13.823 13.823 0 0 0-.508-.924c-.643-1.281-1.338-2.527-1.997-3.8-.573-1.108-1.197-2.192-1.73-3.305a.184.184 0 0 1-.019-.065l-.006-.059c.116-.12.236-.283.358-.488.119-.199.381-.586.786-1.162.107-.152.313-.39.457-.63.098-.165.295-.439.589-.821 1.077-1.402 2.239-2.795 3.184-4.227a.022.022 0 1 0-.036-.026l-.427.52a.043.043 0 0 1-.077-.024l-.008-.13c-.003-.052-.021-.058-.055-.019l-.497.582h-.033c.008-.035.002-.072.02-.105.328-.605.672-1.206 1.032-1.8a.044.044 0 0 0-.07-.054c-.093.099-.182.21-.269.335-.058.083-.106.1-.144.05l.573-1.097a.024.024 0 0 0-.04-.025l-1.1 1.567-.672.938c-.013.018-.029.02-.047.01-.019-.011-.022-.027-.01-.049.317-.538.52-.892.609-1.062.238-.349.454-.723.647-1.124.117-.244.33-.514.429-.813a.03.03 0 0 0-.05-.027l-.604.773.392-.78c.245-.457.513-.924.804-1.4.204-.333.358-.658.518-1 .002-.004.001-.007-.001-.01a.226.226 0 0 1-.015-.014c-.012-.013-.022-.012-.03.003a24.15 24.15 0 0 1-1.123 1.598.862.862 0 0 0-.14.27c-.006.022-.017.024-.031.006a.078.078 0 0 0-.014-.014c-.02-.016-.023-.036-.012-.059.16-.319.298-.647.415-.984a.306.306 0 0 0 .021-.072c-.01-.079-.043-.089-.097-.029l-.448.491c-.026.036-.029.021-.009-.044a.124.124 0 0 1 .02-.04c.229-.335.416-.755.588-1.05.221-.376.436-.755.646-1.138a.078.078 0 0 0 .01-.045C17.81.009 17.806 0 17.801 0Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPipxIcon {
  readonly class = input<string>('');
}
