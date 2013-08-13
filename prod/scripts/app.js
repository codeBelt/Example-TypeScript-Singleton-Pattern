var SingletonClass = (function () {
    function SingletonClass() {
        this._created = false;
        this._score = 0;
        if (SingletonClass._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        SingletonClass._instance = this;
    }
    SingletonClass.getInstance = function () {
        if (SingletonClass._instance === null) {
            SingletonClass._instance = new SingletonClass();
        }
        return SingletonClass._instance;
    };

    SingletonClass.prototype.setScore = function (value) {
        this._score = value;
    };

    SingletonClass.prototype.getScore = function () {
        return this._score;
    };

    SingletonClass.prototype.addPoints = function (value) {
        this._score += value;
    };

    SingletonClass.prototype.removePoints = function (value) {
        this._score -= value;
    };
    SingletonClass._instance = null;
    return SingletonClass;
})();
var Main = (function () {
    function Main() {
        var scoreManager = SingletonClass.getInstance();

        scoreManager.setScore(10);
        console.log('Score: ', scoreManager.getScore());

        scoreManager.addPoints(1);
        console.log('Score: ', scoreManager.getScore());

        scoreManager.removePoints(2);
        console.log('Score: ', scoreManager.getScore());
    }
    return Main;
})();
