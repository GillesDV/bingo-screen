import { Injectable } from "@angular/core";

// Responsible for tracking called numbers, remaining numbers & latest number
@Injectable({ providedIn: 'root' })
export class BingoGameStore {
    public maxNumbers = 75;

    private readonly _calledNumbers = new Set<number>();
    private readonly _allNumbers = Array.from({ length: this.maxNumbers }, (_, i) => i + 1);
    private _lastCalledNumber: number | null = null

    get calledNumbers(): ReadonlySet<number> {
        return this._calledNumbers;
    }

    get currentNumber(): number | null {
        return this._lastCalledNumber;
    }

    get allNumbers(): ReadonlyArray<number> {
        return this._allNumbers;
    }

    callRandomNumber(): number | null {
        const remaining = this._allNumbers.filter(n => !this._calledNumbers.has(n));
        if (remaining.length === 0) return null;

        const next = remaining[Math.floor(Math.random() * remaining.length)];
        this._calledNumbers.add(next);
        this._lastCalledNumber = next;

        return next;
    }

    //TODO: possibly merge this with the above method to reduce copy-pasta? 
    // This looks possibly slightly clearer imo than an optional input param?
    callNextNumber(n: number): number | null {
        const remaining = this._allNumbers.filter(n => !this._calledNumbers.has(n));
        if (remaining.length === 0) return null;

        this._calledNumbers.add(n);
        this._lastCalledNumber = n;

        return n;
    }

    resetOneNumber(n: number): void {
        this._calledNumbers.delete(n);
        this._lastCalledNumber = null;
    }

    reset(): void {
        this._calledNumbers.clear();
        this._lastCalledNumber = null;
    }

    isCalled(n: number): boolean {
        return this._calledNumbers.has(n);
    }

}