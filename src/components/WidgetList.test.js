import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WidgetList from './WidgetList';

describe('WidgetList', () => {
  test('displays "No widgets available." when no widgets are provided', () => {
    render(<WidgetList />, { wrapper: MemoryRouter });
    expect(screen.getByText(/No widgets available./i)).toBeInTheDocument();
  });

  test('displays "No widgets available." when widgets prop is an empty array', () => {
    render(<WidgetList widgets={[]} />, { wrapper: MemoryRouter });
    expect(screen.getByText(/No widgets available./i)).toBeInTheDocument();
  });

  test('renders a list of widgets with names and prices when data is provided', () => {
    const testWidgets = [
      { id: 1, name: 'Test Gizmo', price: 10.00 },
      { id: 2, name: 'Test Widget', price: 20.50 },
    ];
    render(<WidgetList widgets={testWidgets} />, { wrapper: MemoryRouter });

    // Check for widget names
    expect(screen.getByText(/Test Gizmo/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Widget/i)).toBeInTheDocument();

    // Check for widget prices (formatted as $XX.XX)
    expect(screen.getByText(/\$10\.00/i)).toBeInTheDocument();
    expect(screen.getByText(/\$20\.50/i)).toBeInTheDocument();
  });
});
