
import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleWrapsPage from './page';
import { ServicePageLayout } from '@/components/pages/service-page-layout';

// Mock the ServicePageLayout component
jest.mock('@/components/pages/service-page-layout', () => ({
  __esModule: true,
  ServicePageLayout: jest.fn(({ title, description, features, category }) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {features.map((feature: string) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p>Category: {category}</p>
    </div>
  )),
}));

describe('VehicleWrapsPage', () => {
  it('renders the ServicePageLayout with the correct props', () => {
    render(<VehicleWrapsPage />);

    const expectedTitle = "Vehicle Wraps";
    const expectedDescription = "Maximize your brand\'s visibility on the road. We design, print, and install stunning, durable vehicle wraps that make a lasting impression wherever you go.";
    const expectedFeatures = [
      "Full & Partial Commercial Wraps",
      "Color Change & Personalization Wraps",
      "Commercial Fleet Branding",
      "Food Truck & Trailer Wraps",
      "High-Quality 3M & Avery Dennison Vinyl",
      "Expert, Bubble-Free Installation",
    ];
    const expectedCategory = "wraps";

    expect(ServicePageLayout).toHaveBeenCalledWith(
      {
        title: expectedTitle,
        description: expectedDescription,
        features: expectedFeatures,
        category: expectedCategory,
      },
      {}
    );

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedDescription)).toBeInTheDocument();
    expectedFeatures.forEach(feature => {
        expect(screen.getByText(feature)).toBeInTheDocument();
    });
    expect(screen.getByText(`Category: ${expectedCategory}`)).toBeInTheDocument();
  });
});
