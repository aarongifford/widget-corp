import { render, screen } from '@testing-library/react';
import { MemoryRouter, useParams } from 'react-router-dom';
import WidgetDetail from './WidgetDetail';
import widgets from '../data/widgets'; // Sample widget data

// Mock react-router-dom's useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and retain default behavior
  useParams: jest.fn(), // mock useParams
}));

describe('WidgetDetail', () => {
  test('displays "Widget Not Found" and "Back to List" link for a non-existent widget ID', () => {
    useParams.mockReturnValue({ id: '999' }); // Mock ID that doesn't exist
    render(
      <MemoryRouter>
        <WidgetDetail widgets={widgets} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Widget Not Found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to List/i })).toBeInTheDocument();
  });

  test('successfully displays widget details and "Back to List" link for an existing widget ID', () => {
    const existingWidgetId = '1'; // Use ID '1' which exists in sample data
    const existingWidget = widgets.find(w => w.id.toString() === existingWidgetId);
    useParams.mockReturnValue({ id: existingWidgetId });

    render(
      <MemoryRouter>
        <WidgetDetail widgets={widgets} />
      </MemoryRouter>
    );

    // Assert that widget details are displayed
    expect(screen.getByText(existingWidget.name)).toBeInTheDocument();
    expect(screen.getByText(existingWidget.description)).toBeInTheDocument();
    // Check for "Price:" label and the price value separately
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByText(`$${existingWidget.price.toFixed(2)}`)).toBeInTheDocument();

    // Assert that "Back to List" link is present
    expect(screen.getByRole('link', { name: /Back to List/i })).toBeInTheDocument();
  });
});
