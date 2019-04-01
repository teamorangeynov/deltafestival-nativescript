import { Component, ViewChild, ElementRef, Renderer2, VERSION, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { Team } from 'src/services/models';
import { TeamService } from '../../../services/services/team.service';
import { Router } from '@angular/router';
@Component({
    selector: 'authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.scss'],
})
export class AuthentificationComponent implements OnInit {
    ngVersion = VERSION.full;
    team: Team;

    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

    hasDevices: boolean;
    hasPermission: boolean;
    qrResultString: string;
    qrResult: Result;

    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo;

    constructor(
        private router: Router, private teamService: TeamService
    ) { }

    ngOnInit(): void {

        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasDevices = true;
            this.availableDevices = devices;

            // selects the devices's back camera by default
            // for (const device of devices) {
            //     if (/back|rear|environment/gi.test(device.label)) {
            //         this.scanner.changeDevice(device);
            //         this.currentDevice = device;
            //         break;
            //     }
            // }
            /* this.currentDevice = devices[1]; */

        });

        this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
        this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
        this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);

    }

    displayCameras(cameras: MediaDeviceInfo[]) {
        console.debug('Devices: ', cameras);
        this.availableDevices = cameras;
    }

    handleQrCodeResult(resultString: string) {
        console.debug('Result: ', resultString);
        this.qrResultString = resultString;
        if (this.qrResultString === "http://fr.wikipedia.org/") {
            this.router.navigate(['/accueil']);
        }
    }

    onDeviceSelectChange(selectedValue: string) {
        console.debug('Selection changed: ', selectedValue);
        this.currentDevice = this.scanner.getDeviceById(selectedValue);
    }

    stateToEmoji(state: boolean): string {

        const states = {
            // not checked
            undefined: '❔',
            // failed to check
            null: '⭕',
            // success
            true: '✔',
            // can't touch that
            false: '❌'
        };

        return states['' + state];
    }

    test() {
        this.teamService.List().subscribe(
            () => {
                alert('ok');
            },
            () => alert('pas ok')
        );
    }
}

