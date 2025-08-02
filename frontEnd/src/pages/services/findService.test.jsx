// findService.test.jsx

import { render, screen, waitFor } from '@testing-library/react';
import FindService from './findService';
import { vi } from 'vitest';
import axios from 'axios';
import React from 'react';

// Mock axios
vi.mock('axios');

// Mock localStorage
vi.stubGlobal('localStorage', {
  getItem: vi.fn(() => '1'), // mock userId = 1
  setItem: vi.fn(),
  removeItem: vi.fn(),
});

vi.mock('../../components/findServiceCard', () => ({
  default: ({ service }) => <div>{service.title}</div>,
}));

vi.mock('../../components/findServiceModal', () => ({
  default: () => null,
}));

describe('FindService', () => {
  it('renders service cards correctly after fetching', async () => {
    const mockServices = [
      {
        title: 'Fix Laptop',
        category: 'Technology & IT Support',
        user: { id: 2 }, // different from mock userId (1)
      },
      {
        title: 'Dog Walking',
        category: 'Pet Care',
        user: { id: 3 },
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockServices });

    render(<FindService />);

    expect(await screen.findByText('Fix Laptop')).toBeInTheDocument();
    expect(await screen.findByText('Dog Walking')).toBeInTheDocument();
  });
});
