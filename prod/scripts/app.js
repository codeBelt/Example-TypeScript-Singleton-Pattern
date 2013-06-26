var SingletonClass = (function () {
    function SingletonClass() {
        this._score = 0;
    }
    SingletonClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new SingletonClass();
        }
        return this._instance;
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
