import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-network-status',
    templateUrl: './network-status.component.html',
    styleUrls: ['./network-status.component.scss']
})
export class NetworkStatusComponent implements OnInit {
    network_status: number;     // 网络状态
    constructor() { }

    ngOnInit() {
        this.network_status = 1;
    }

}
