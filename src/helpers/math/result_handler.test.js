import result_handler from "./result_handler";

test('add 1 + 2 to equal 3', () => {
    expect(result_handler(1, 2, 'add')).toBe(3);
});

test('add -10 + 2 to equal -8', () => {
    expect(result_handler(-10, 2, 'add')).toBe(-8);
});

test('less 5 - 2 to equal 3', () => {
    expect(result_handler(5, 2, 'less')).toBe(3);
});

test('mult 3 * 2 to equal 6', () => {
    expect(result_handler(3, 2, 'mult')).toBe(6);
});

test('mult -3 * 2 to equal -6', () => {
    expect(result_handler(-3, 2, 'mult')).toBe(-6);
});

test('add 10 / 2 to equal 5', () => {
    expect(result_handler(10, 2, 'div')).toBe(5);
});