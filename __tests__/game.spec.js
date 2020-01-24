require("../game");
const { isAlive } = window.game;



describe("game of life", ()=> {
    describe("isAlive algorithm", () => {
        test("dead cell with 0 neighbours return 0", () => {
            expect(isAlive(0, 0)).toEqual(0);
        })
        test("dead cell with 3 neighbours return 1", () => {
            expect(isAlive(0, 3)).toEqual(1);
        })
        test("live cell with 0 neighbours return 0", () => {
            expect(isAlive(1, 0)).toEqual(0);
        })
        test("live cell with 2 neighbours return 1", () => {
            expect(isAlive(1, 2)).toEqual(1);
        })
    })
})