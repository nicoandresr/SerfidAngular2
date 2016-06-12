import { PipeTransform, Pipe } from 'angular2/core'
import { ITag } from './tag'

@Pipe({
    name: 'tagFilter'
})

export class TagFilterPipe implements PipeTransform {

    transform(value: ITag[], args: string[]): ITag[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((tag: ITag) =>
            tag.device.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}