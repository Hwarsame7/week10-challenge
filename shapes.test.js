// Circle Shape 
describe('Circle',() => {
 test('renders correctly', () => {
    const shape = new Circle();
    var colour = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill="blue"/><text x="100" y="120" font-size="40" text-anchor="middle" fill="black"')
 });
});
//Triangle shape
describe('Triangle',() => {
    test('renders correctly', () => {
       const shape = new Triangle();
       var colour = ('green')
       shape.setColor(color);
       expect(shape.render()).toEqual('<'polygon points="150, 18 244, 182 56, 182" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black")
    })
   })