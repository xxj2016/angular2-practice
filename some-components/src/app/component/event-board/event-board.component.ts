import { Component, OnInit } from '@angular/core';
import { EventBoard } from '../../models/event-board';
@Component({
    selector: 'app-event-board',
    templateUrl: './event-board.component.html',
    styleUrls: ['./event-board.component.scss']
})
export class EventBoardComponent implements OnInit {

    // EventBoard数据
    eventBoards: EventBoard[];
    status_color = [ 'red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple', '#1ca08d'];

    constructor() { }

    ngOnInit() {
        this.eventBoards = [
            { duebill_id: 1, firstname: '张', lastname: '三', status: 1 },
            { duebill_id: 2, firstname: '李', lastname: '四', status: 2 },
            { duebill_id: 3, firstname: '王', lastname: '五', status: 3 },
            { duebill_id: 4, firstname: '陈', lastname: '六', status: 4 },
            { duebill_id: 5, firstname: '许', lastname: '七', status: 5 },
            { duebill_id: 6, firstname: '庄', lastname: '八', status: 6 },
            { duebill_id: 7, firstname: '林', lastname: '九', status: 7 },
            { duebill_id: 8, firstname: '袁', lastname: '十', status: 8 }
        ]
    }

}
