import { PipeTransform, Pipe } from 'angular2/core'
import { Reading } from './reading'

@Pipe({
    name: 'readingFilter'
})
export class ReadingFilterPipe implements PipeTransform {

    transform(value: Reading[], args: string[]): Reading[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((reading: Reading) =>
            reading.device.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}