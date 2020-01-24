require("../game");
const { isAlive, generate, regenerate } = window.game;



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

    describe("generate function", () => {
        test("should create an array of x * x", () => {
            expect(generate(1)).toEqual([0])
            expect(generate(2)).toEqual([0, 0, 0, 0])
        })
    })

    describe("regenerate function", () => {
        test("should not update dead cells", () => {
            const cells = generate(1)
            expect(regenerate(cells)).toEqual(cells)
        })

        test("should update", () => {
            const initialCells = generate(2)
            const cells = generate(2)
            cells[0] = 1
            expect(regenerate(cells)).toEqual(initialCells)
        })
    })
})