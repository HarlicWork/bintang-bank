import { Error } from '../interfaces/Error';

export const getErrorText = (error: Error) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'That email address is invalid.';
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Wrong password.';
    case 'auth/invalid-credential':
      return 'Entered credential is invalid.';
    case 'auth/invalid-password':
      return 'Password should be at least 6 characters.';
    case 'auth/email-already-exists':
      return 'Email already exists.';
    default:
      return 'Something went wrong.';
  }
};
