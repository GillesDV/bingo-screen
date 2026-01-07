import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'max',
    pure: true
})
export class MaxPipe implements PipeTransform {
    transform(numbers: readonly number[]): number | null {
        return numbers.length ? Math.max(...numbers) : null;
    }
}