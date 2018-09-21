import * as validators from './validators';

describe('validators test', () => {
  test('Should execute validateLoginForm correctly', () => {
    const { validateLoginForm } = validators;

    expect(typeof validateLoginForm).toBe('function');

    it('Should not return any errors if data is correct', () => {
      // Test correct data.
      const data = {
        email: 'test@test.com',
        password: '1234',
      };

      const errors = validateLoginForm(data);

      expect(Object.keys(errors).length).toBe(0);
    });

    it('Should return password error', () => {
      // Test invalid password
      const data = {
        password: '',
        email: 'tests@tests.com',
      }

      const errors = validateLoginForm(data);

      expect(Object.keys(errors).length).toBe(1);
      expect(errors.password).not.toBe('undefined');
      expect(errors.password).not.toBeNull();
      expect(errors.password).toEqual('Please provide a password');
    });

    it('Should return email error', () => {
      // Test invalid email
      const data = {
        password: '1234',
        email: 'invalid_email',
      }

      const errors = validateLoginForm(data);

      expect(Object.keys(errors).length).toBe(1);
      expect(errors.email).not.toBe('undefined');
      expect(errors.email).not.toBeNull();
      expect(errors.email).toEqual('Invalid email.');
    });

    it('Should return email error', () => {
      const data = {
        password: '',
        email: 'invalid_email',
      }

      const errors = validateLoginForm(data);

      expect(Object.keys(errors).length).toBe(2);
      expect(errors.email).not.toBe('undefined');
      expect(errors.email).not.toBeNull();
      expect(errors.email).toEqual('Invalid email.');
      expect(errors.email).not.toBe('undefined');
      expect(errors.email).not.toBeNull();
      expect(errors.email).toEqual('Invalid email.');
    });
  });
});
