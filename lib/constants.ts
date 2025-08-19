import { createGlobalStyle } from 'styled-components'
/
 * Constants and configuration for HouseIL application.
 * Brand-specific constants including colors, typography, and industry-related settings.
 * This file supports a dark-themed, luxury-oriented technology brand.
 */

export const BRAND_NAME = "HouseIL"; // The official brand name of the business

export const COLORS = {
    PRIMARY: '#000000', // Black representing luxury and sophistication
    SECONDARY: '#FF69B4', // Pink color to convey elegance and modernity
}
export const TYPOGRAPHY = {
    FONT_FAMILY: "'Roboto', sans-serif", // Modern font choice for a technology-based brand
    HEADLINE_FONT_SIZE: '2.5rem', // Font size for headlines
    TEXT_FONT_SIZE: '1rem', // Standard text font size
}
/
 * Interface defining the structure of property listings in HouseIL.
 * This abstracts out the necessary elements required for displaying luxury properties.
 */
export interface Property {
    id: string; // Unique identifier for each property
    title: string; // Title of the property
    description: string; // Detailed description of the property
    imageUrl: string; // URL for the property's main image
    pricePerNight: number; // Price per night for the property
    amenities: string[]; // Array of amenities available at the property
}

/
 * Configuration settings relevant to the HouseIL application.
 */
export const APP_CONFIG = {
    API_ENDPOINT: 'https://api.houseil.com', // API endpoint for property data
    DEFAULT_LOCATION: 'New York, NY', // Default search location for properties
    CURRENCY: 'USD', // Currency for displaying prices
}
/
 * Global styles using styled-components for a dark-themed interface.
 */
export const GlobalStyle = createGlobalStyle
  body {
    background-color: ${COLORS.PRIMARY}; // Dark background for the entire application
    color: ${COLORS.SECONDARY}; // Pink text for contrast and elegance
    font-family: ${TYPOGRAPHY.FONT_FAMILY}; // Set font family
  }
  h1, h2, h3, h4 {
    color: ${COLORS.SECONDARY}; // Apply pink color to headings
  }
;