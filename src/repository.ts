export class Repository <T extends {id: number}> {
    protected data: T[] = [];
    protected nextId: number = 1;

    add (item : Omit<T, "id">): T {
        const newItem: T = { ...item , id: this.nextId++ } as T;
        this.data.push(newItem);
        return newItem;
    }
    findall(): T[] {
        return [...this.data];
    }
}
    
