import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-steamworks-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Steamworks</title>
      <path
        d="M21.928 9.49v2.071h-1.503v1.503h1.503v-1.5H24V9.49zm-5.915.498v1.075h1.075V9.988zm2.326 2.572a.596.596 0 00-.382.144.497.497 0 00-.155.383.437.437 0 00.145.35.627.627 0 00.33.14l.103.015.112.02a1.071 1.071 0 01.163.037.366.366 0 01.102.065.34.34 0 01.1.268.353.353 0 01-.127.29.529.529 0 01-.347.105.736.736 0 01-.285-.05.747.747 0 01-.24-.175l-.098.102a.795.795 0 00.27.193.866.866 0 00.343.06.68.68 0 00.455-.144.508.508 0 00.175-.39.53.53 0 00-.043-.208.423.423 0 00-.12-.16.468.468 0 00-.13-.08.84.84 0 00-.2-.047l-.112-.02-.088-.013a.82.82 0 01-.152-.045.481.481 0 01-.123-.072.323.323 0 01-.095-.25.378.378 0 01.115-.287.442.442 0 01.313-.105.617.617 0 01.252.045.75.75 0 01.195.132l.09-.092a.713.713 0 00-.53-.21.596.596 0 00-.036 0zm-17.664.005a.673.673 0 00-.432.161.542.542 0 00-.175.42.516.516 0 00.132.375.602.602 0 00.359.157l.12.015.105.015a.278.278 0 01.172.076.23.23 0 01.05.155c0 .16-.11.237-.327.237a.783.783 0 01-.251-.037.47.47 0 01-.195-.123l-.233.24a.76.76 0 00.295.195 1.157 1.157 0 00.38.058.764.764 0 00.492-.156.53.53 0 00.193-.431.54.54 0 00-.143-.405.48.48 0 00-.145-.093.988.988 0 00-.21-.052l-.107-.015-.113-.015a.292.292 0 01-.167-.078.194.194 0 01-.058-.135.222.222 0 01.075-.172.305.305 0 01.213-.068.767.767 0 01.205.027.394.394 0 01.172.105l.228-.232a.72.72 0 00-.26-.17.977.977 0 00-.338-.053.673.673 0 00-.037 0zm12.091.003a.612.612 0 00-.238.05.645.645 0 00-.21.146.525.525 0 00-.097.134.607.607 0 00-.05.153 1.387 1.387 0 00-.02.19 8.383 8.383 0 000 .595 1.306 1.306 0 00.02.19.607.607 0 00.05.152.486.486 0 00.097.135.645.645 0 00.21.145.656.656 0 00.251.05.612.612 0 00.251-.05.645.645 0 00.21-.145.525.525 0 00.097-.135.606.606 0 00.05-.152 1.385 1.385 0 00.02-.19 8.36 8.36 0 000-.595 1.305 1.305 0 00-.02-.19.606.606 0 00-.05-.153.486.486 0 00-.097-.134.645.645 0 00-.21-.146.656.656 0 00-.25-.05.612.612 0 00-.014 0zm-10.949.015v.333H2.3v1.575h.36v-1.575h.482v-.333zm1.878 0v1.908h1.218v-.33h-.855v-.464h.727v-.333h-.727v-.448h.855v-.333zm2.298 0l-.673 1.908h.375l.113-.337h.655l.11.337h.377l-.675-1.908zm1.442 0v1.908h.36v-1.11l.355.722h.245l.352-.722v1.11h.36v-1.908h-.354l-.48 1.03-.483-1.03zm2.198 0l.46 1.908h.144l.437-1.66.435 1.66h.143l.46-1.908h-.147l-.39 1.658-.43-1.658H10.6l-.43 1.658-.39-1.658zm4.452 0v1.908h.14v-.882h.508l.44.882h.162l-.445-.882a.49.49 0 00.428-.516.486.486 0 00-.148-.374.55.55 0 00-.382-.136zm1.93 0v1.908h.14v-.515l.44-.553.593 1.068v-.002h.167l-.667-1.177.57-.728h-.168l-.935 1.192v-1.192zm3.188.033v.19h.026v-.128l.045.093h.024l.042-.093v.128h.028v-.19h-.028l-.055.118-.055-.118zm-.165.002v.025h.052v.163h.028v-.163h.052v-.025zm-6.26.08a.489.489 0 01.352.148.45.45 0 01.077.107.485.485 0 01.043.132 1.117 1.117 0 01.018.175 7.48 7.48 0 010 .556 1.117 1.117 0 01-.018.175.485.485 0 01-.043.132.506.506 0 01-.077.107.489.489 0 01-.7 0 .45.45 0 01-.078-.107.589.589 0 01-.042-.132 1.117 1.117 0 01-.018-.175 7.459 7.459 0 010-.556 1.117 1.117 0 01.018-.175.485.485 0 01.042-.132.506.506 0 01.078-.107.489.489 0 01.349-.148zm2.007.015a.433.433 0 01.28.098.35.35 0 01.11.289.358.358 0 01-.113.286.428.428 0 01-.294.098h-.543v-.77h.545a.433.433 0 01.015-.001zm-8.643.433l.228.692h-.46z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSteamworksIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
