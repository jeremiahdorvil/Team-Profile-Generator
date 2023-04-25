const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Sets name in the Engineer constructor.', () => {
        const person = new Engineer('email@email.com', 'John', 26);
        expect(person.name).toBe('John');
    });

    it('Sets ID in the Engineer constructor.', () => {
        const person = new Engineer('email@email.com', 'John', 26);
        expect(person.id).toBe(26);
    });

    it('Sets email in the Engineer constuctor.', () => {
        const person = new Engineer('email@email.com', 'John', 26);
        expect(person.email).toBe('email@email.com');
    });

    it('Returns email when using the getEmail() function.', () => {
        const email = 'email@email.com';
        const person = new Engineer('email@email.com', 'John', 26);
        expect(person.getEmail()). toBe(email);
    });
    
    it('Returns name when using the getName() function.', () => {
        const name = 'John';
        const person = new Engineer('email@email.com', 'John', 26);
        expect(person.getName()). toBe(name);
    });
    
    it('Returns an ID when using the getId() function.', () => {
        const id = 26;
        const person = new Engineer('email@email.com', 'John', 26);
        expect(person.getId()). toBe(id);
    });
    
    it('Returns role when using the getRole() function.', () => {
        const person = new Engineer('email@email.com', 'John', 26);
        const role = 'Engineer';
        expect(person.getRole()). toBe(role);
    });
});
