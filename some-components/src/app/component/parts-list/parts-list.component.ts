import { Component, OnInit } from '@angular/core';
import { PartsList } from '../../models/parts-list';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, LocaleData } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', zhCn);
import * as moment from 'moment';
@Component({
    selector: 'app-parts-list',
    templateUrl: './parts-list.component.html',
    styleUrls: ['./parts-list.component.scss']
})
export class PartsListComponent implements OnInit {

    partsList: PartsList[];    // PartsList数据
    status_color = ['red', 'orange', 'yellow', 'green', 'blue'];    // 根据status判断背景颜色
    model = 'service';    // 模式

    constructor(private _localeService: BsLocaleService) {
        moment.locale('zh-cn');
        this._localeService.use('zh-cn');
    }

    ngOnInit() {
        this.partsList = [
            {
                DueBillPartsId: 1,   // 零件id，需要根据status的值来给出背景色
                DueBillId: 1,		  // 账单id
                Name: 'Jet',  // 名字
                Year: '1992',  // 年份
                Trim: 'Jet',  // 系列
                Make: 'Jet',  // 厂商
                Model: 'Jet',  // 型号
                Description: 'Jet',  // 描述文本
                Cost: 1,  // 价格
                RequiredInstall: 1,  // 0 or 1，表示是否需要安装
                IsInStock: 0,  // 0 or 1，表示是否有库存
                CustomerInstallation: 1,  // 0 or 1，表示是否客户自己安装
                OrderDeliverdDate: '2018年1月12日',  // 到货日期，格式 : 年-月-日
                Schedule: '2018年1月11日',  // 安装日期，格式 :  年-月-日
                Status: 1,  // 状态，取值[1, 5]，用5中不同颜色标定
            },
            {
                DueBillPartsId: 2,   // 零件id，需要根据status的值来给出背景色
                DueBillId: 1,		  // 账单id
                Name: 'Jet',  // 名字
                Year: '1992',  // 年份
                Trim: 'Jet',  // 系列
                Make: 'Jet',  // 厂商
                Model: 'Jet',  // 型号
                Description: 'Jet',  // 描述文本
                Cost: 1,  // 价格
                RequiredInstall: 1,  // 0 or 1，表示是否需要安装
                IsInStock: 1,  // 0 or 1，表示是否有库存
                CustomerInstallation: 1,  // 0 or 1，表示是否客户自己安装
                OrderDeliverdDate: '2018年1月12日',  // 到货日期，格式 : 年-月-日
                Schedule: '2018年1月1日',  // 安装日期，格式 :  年-月-日
                Status: 2,  // 状态，取值[1, 5]，用5中不同颜色标定
            },
            {
                DueBillPartsId: 3,   // 零件id，需要根据status的值来给出背景色
                DueBillId: 1,		  // 账单id
                Name: 'Jet',  // 名字
                Year: '1992',  // 年份
                Trim: 'Jet',  // 系列
                Make: 'Jet',  // 厂商
                Model: 'Jet',  // 型号
                Description: 'Jet',  // 描述文本
                Cost: 1,  // 价格
                RequiredInstall: 1,  // 0 or 1，表示是否需要安装
                IsInStock: 1,  // 0 or 1，表示是否有库存
                CustomerInstallation: 1,  // 0 or 1，表示是否客户自己安装
                OrderDeliverdDate: '2018年1月12日',  // 到货日期，格式 : 年-月-日
                Schedule: '2018年1月2日',  // 安装日期，格式 :  年-月-日
                Status: 3,  // 状态，取值[1, 5]，用5中不同颜色标定
            },
            {
                DueBillPartsId: 4,   // 零件id，需要根据status的值来给出背景色
                DueBillId: 1,		  // 账单id
                Name: 'Jet',  // 名字
                Year: '1992',  // 年份
                Trim: 'Jet',  // 系列
                Make: 'Jet',  // 厂商
                Model: 'Jet',  // 型号
                Description: 'Jet',  // 描述文本
                Cost: 1,  // 价格
                RequiredInstall: 1,  // 0 or 1，表示是否需要安装
                IsInStock: 1,  // 0 or 1，表示是否有库存
                CustomerInstallation: 1,  // 0 or 1，表示是否客户自己安装
                OrderDeliverdDate: '2018年1月12日',  // 到货日期，格式 : 年-月-日
                Schedule: '2018年1月11日',  // 安装日期，格式 :  年-月-日
                Status: 4,  // 状态，取值[1, 5]，用5中不同颜色标定
            },
            {
                DueBillPartsId: 5,   // 零件id，需要根据status的值来给出背景色
                DueBillId: 1,		  // 账单id
                Name: 'Jet',  // 名字
                Year: '1992',  // 年份
                Trim: 'Jet',  // 系列
                Make: 'Jet',  // 厂商
                Model: 'Jet',  // 型号
                Description: 'Jet',  // 描述文本
                Cost: 1,  // 价格
                RequiredInstall: 1,  // 0 or 1，表示是否需要安装
                IsInStock: 1,  // 0 or 1，表示是否有库存
                CustomerInstallation: 1,  // 0 or 1，表示是否客户自己安装
                OrderDeliverdDate: '2018年1月12日',  // 到货日期，格式 : 年-月-日
                Schedule: '2018年1月15日',  // 安装日期，格式 :  年-月-日
                Status: 5,  // 状态，取值[1, 5]，用5中不同颜色标定
            }
        ];
    }
    format(option) {
        console.log(option);
        
    }

    savePart() {
        console.log(this.partsList);
    }

}
