import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './loginPage';
import { vi } from 'vitest';
import axios from 'axios';
import React from 'react';

// Mock axios
vi.mock('axios');

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('LoginPage - Error Handling', () => {
  it('displays error message when login fails', async () => {
    // Mock login API to reject
    axios.post.mockRejectedValueOnce(new Error('Login failed'));

    render(<LoginPage />);

    // Fill in email and password
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrongpassword' },
    });

    // Click the login button
    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    // Wait for the error message to appear
    await waitFor(() =>
      expect(
        screen.getByText(/incorrect email or password/i)
      ).toBeInTheDocument()
    );
  });
});
