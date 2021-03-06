import { Pipe, PipeTransform } from '@angular/core';
import {propertyStatusList} from './data-model';


@Pipe({ name: 'roomStatus' })
export class RoomStatusPipe implements PipeTransform {
    transform(value: number): string {
        let label = '未知';

        if (value === -1) {
            label = '全部';
        }else {
            propertyStatusList.forEach(e => {
                if (e.value === value ) {
                    label = e.label;
                }
            });
        }

        return label;
    }
}
