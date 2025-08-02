// registerPage.test.jsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from './registerPage';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

vi.mock('axios');

describe('RegisterPage', () => {
  const mockSetIsLoggedIn = vi.fn();
  const mockSetUserName = vi.fn();
  const mockSetUserId = vi.fn();
  const setup = () =>
    render(
      <MemoryRouter>
        <RegisterPage
          isLoggedIn={false}
          setIsLoggedIn={mockSetIsLoggedIn}
          setUserName={mockSetUserName}
          setUserId={mockSetUserId}
        />
      </MemoryRouter>
    );

  beforeEach(() => {
    vi.resetAllMocks();
    localStorage.clear();
  });

  it('shows error when passwords do not match', async () => {
    setup();
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: '123456' },
    });
    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: 'abcdef' },
    });

    fireEvent.click(screen.getByText(/create account/i));

    expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument();
  });

  it('shows error if terms are not accepted', async () => {
    setup();
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: '123456' },
    });
    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText(/create account/i));

    expect(await screen.findByText(/you must accept the terms/i)).toBeInTheDocument();
  });

  it('submits form and stores token on success', async () => {
    setup();

    axios.post
      .mockResolvedValueOnce({ data: {} }) // registration
      .mockResolvedValueOnce({ data: { token: 'fakeToken' } }); // login

    axios.get.mockResolvedValueOnce({
      data: [
        { email: 'test@example.com', username: 'testuser', id: '123' },
      ],
    });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: '123456' },
    });
    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByLabelText(/i accept/i));

    fireEvent.click(screen.getByText(/create account/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(2);
      expect(axios.get).toHaveBeenCalled();
    });

    expect(localStorage.getItem('token')).toBe('fakeToken');
    expect(localStorage.getItem('name')).toBe('testuser');
    expect(localStorage.getItem('userId')).toBe('123');
    expect(localStorage.getItem('isLoggedIn')).toBe('true');

    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    expect(mockSetUserName).toHaveBeenCalledWith('testuser');
    expect(mockSetUserId).toHaveBeenCalledWith('123');
  });
});
