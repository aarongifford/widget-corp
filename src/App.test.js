import { render, screen } from '@testing-library/react';
import App from './App';

// Remove the default test as it's no longer relevant to the application
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// You can add new tests here specific to the Widget Corp application if needed.
// For example, testing that the header and initial widget list render.
test('renders the main application page with header and widgets', () => {
  render(<App />);
  // Check if Header is rendered (e.g., by its title)
  expect(screen.getByText(/Widget Corp/i)).toBeInTheDocument();
  // Check if WidgetList is rendered (e.g., by its heading or some widget content)
  // This assumes that with default data, "Our Widgets" or some widget names will be present.
  expect(screen.getByText(/Our Widgets/i)).toBeInTheDocument();
});
