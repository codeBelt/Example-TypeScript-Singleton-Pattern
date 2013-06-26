///<reference path='SingletonClass.ts'/>

class Main {

    constructor() {
        var scoreManager = SingletonClass.getInstance();

        scoreManager.setScore(10);
        console.log('Score: ', scoreManager.getScore());

        scoreManager.addPoints(1);
        console.log('Score: ', scoreManager.getScore());

        scoreManager.removePoints(2);
        console.log('Score: ', scoreManager.getScore());
    }

}