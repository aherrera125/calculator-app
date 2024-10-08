import result_handler from "./result_handler";

test('adds 1 + 2 to equal 3', () => {
    expect(result_handler(1, 2, 'add')).toBe(3);
});

test('less 1 + 2 to equal 3', () => {
    expect(result_handler(1, 2, 'less')).toBe(-1);
});

test('multiply 1 + 2 to equal 3', () => {
    expect(result_handler(1, 2, 'mult')).toBe(2);
});

test('divide 1 + 2 to equal 3', () => {
    expect(result_handler(1, 2, 'div')).toBe(0.5);
});