
export class MainPath {
    protected static dir: string;

    static get() {
        return this.dir;
    }

    static set(dir: string) {
        this.dir = dir;
    }
}