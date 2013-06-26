class SingletonClass {

    private static _instance:SingletonClass;

    private _score:number = 0;

    constructor()
    {
    }

    public static getInstance():SingletonClass
    {
        if(this._instance == null) {
            this._instance = new SingletonClass();
        }
        return this._instance;
    }

    public setScore(value:number):void
    {
        this._score = value;
    }

    public getScore():number
    {
        return this._score;
    }

    public addPoints(value:number):void
    {
        this._score += value;
    }

    public removePoints(value:number):void
    {
        this._score -= value;
    }

}
