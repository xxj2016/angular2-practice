export class PartsList {
    DueBillPartsId: number;   // 零件id，需要根据status的值来给出背景色
    DueBillId: number;		  // 账单id
    Name: string;  // 名字
    Year: string;  // 年份
    Trim: string;  // 系列
    Make: string;  // 厂商
    Model: string;  // 型号
    Description: string;  // 描述文本
    Cost: number;  // 价格
    RequiredInstall: number;  // 0 or 1，表示是否需要安装
    IsInStock: number;  // 0 or 1，表示是否有库存
    CustomerInstallation: number;  // 0 or 1，表示是否客户自己安装
    OrderDeliverdDate: Date;  // 到货日期，格式 : 年-月-日
    Schedule: Date;  // 安装日期，格式 :  年-月-日
    Status: number;  // 状态，取值[1, 5]，用5中不同颜色标定

}
