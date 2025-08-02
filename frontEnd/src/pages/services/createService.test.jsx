import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateService from "./createService";
import { vi } from "vitest";
import axios from "axios";
import React from "react";

// Mock
vi.mock("axios");
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({}),
    useNavigate: () => mockNavigate,
  };
});
vi.stubGlobal("localStorage", {
  getItem: vi.fn(() => "1"),
});

describe("CreateService - Form Validation", () => {
  it("does NOT submit form if required fields are missing", async () => {
    axios.post.mockResolvedValueOnce({}); // shouldn't be called
    window.alert = vi.fn();

    render(<CreateService />);

    // Fill only some fields, leave category blank
    fireEvent.change(screen.getByLabelText(/Service Name/i), {
      target: { value: "Fix Laptop" },
    });
    fireEvent.change(screen.getByLabelText(/Location/i), {
      target: { value: "Vancouver" },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: "Laptop repair" },
    });

    // Submit
    fireEvent.click(screen.getByText(/Submit Request/i));

    // Wait briefly to confirm nothing is submitted
    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalled();
      expect(window.alert).not.toHaveBeenCalled();
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
