const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Sets name in the Intern constructor.', () => {
        const person = new Intern('email@email.com', 'John', 26);
        expect(person.name).toBe('John');
    });

    it('Sets ID in the Intern constructor.', () => {
        const person = new Intern('email@email.com', 'John', 26);
        expect(person.id).toBe(26);
    });

    it('Sets email in the Intern constuctor.', () => {
        const person = new Intern('email@email.com', 'John', 26);
        expect(person.email).toBe('email@email.com');
    });

    it('Returns email when using the getEmail() function.', () => {
        const email = 'email@email.com';
        const person = new Intern('email@email.com', 'John', 26);
        expect(person.getEmail()). toBe(email);
    });
    
    it('Returns name when using the getName() function.', () => {
        const name = 'John';
        const person = new Intern('email@email.com', 'John', 26);
        expect(person.getName()). toBe(name);
    });
    
    it('Returns an ID when using the getId() function.', () => {
        const id = 26;
        const person = new Intern('email@email.com', 'John', 26);
        expect(person.getId()). toBe(id);
    });
    
    it('Returns role when using the getRole() function.', () => {
        const person = new Intern('email@email.com', 'John', 26);
        const role = 'Intern';
        expect(person.getRole()). toBe(role);
    });
});
