require("../game");
const game = window.game;



describe("our game module", ()=> {
    test("game", () => {
        expect(game).toBeDefined();
    })
    test("should be defined", () => {
        const name = "Sajad"
        expect(game.hello(name)).toBeDefined();
        expect(game.hello(name)).toEqual("Hello Sajad");
        
    })
})