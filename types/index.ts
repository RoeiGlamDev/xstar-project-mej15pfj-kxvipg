import { PropertyDetails } from './propertyTypes'
/
 * HouseIL represents the main interface for the luxury AirBNB technology application.
 * This interface is designed to keep track of user profiles, properties, and bookings 
 * within the HouseIL platform.
 * 
 * @remarks
 * This interface is crucial for maintaining the app's state throughout user 
 * interactions, ensuring a seamless experience in managing luxury accommodations.
 */

export interface HouseIL {
    userProfile: UserProfile
    properties: PropertyDetails[]
    bookings: Booking[]
}

/
 * UserProfile holds the information related to each user on the HouseIL platform, 
 * encapsulating essential details for a luxurious experience.
 * 
 * @remarks
 * Each user interested in luxury accommodations will provide their profile for 
 * tailored suggestions and exclusive offers.
 */

export interface UserProfile {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Contact email of the user
    phoneNumber?: string; // Optional contact number for personalized service
    favoriteProperties: string[]; // List of property IDs that the user likes
}

/
 * Booking represents a reservation made by a user for a property on HouseIL. 
 * Bookings facilitate scheduling and availability management for our next-level 
 * luxury accommodations.
 * 
 * @remarks
 * Providing a seamless booking experience is essential for the HouseIL business model 
 * targeting high-end clientele.
 */

export interface Booking {
    id: string; // Unique identifier for the booking
    userId: string; // The ID of the user making the booking
    propertyId: string; // The ID of the property being booked
    startDate: Date; // The date the booking starts
    endDate: Date; // The date the booking ends
}

/
 * PropertyDetails contains detailed information about each property listed on HouseIL. 
 * This interface encapsulates essential aspects like location, pricing, and amenities.
 * 
 * @remarks
 * High-quality, detailed listings will enhance user experiences and promote the luxury 
 * nature of properties available on our platform.
 */

export interface PropertyDetails {
    id: string; // Unique identifier for the property
    title: string; // Title of the property listing
    description: string; // Description highlighting luxury features
    pricePerNight: number; // Price for a single night's stay
    location: string; // Geographic location of the property
    amenities: string[]; // List of amenities available at the property
    images: string[]; // Array of image URLs showcasing the property
    rating: number; // Average user rating of the property
    numberOfReviews: number; // Total number of reviews for the property
}

/
 * An enum for the property type classifications available on HouseIL. 
 * This assists in categorizing properties effectively within our technological 
 * ecosystem, catering to various high-end user preferences.
 */
export enum PropertyType {
    LuxuryApartment = 'Luxury Apartment',
    Villa = 'Villa',
    Penthouse = 'Penthouse',
    Cottage = 'Cottage',
    Studio = 'Studio',
}

/
 * Error handling interface to capture potential errors within the HouseIL application.
 * This ensures our users receive timely and clear feedback during their luxurious 
 * experience with our technology.
 */
export interface AppError {
    message: string; // Error message to convey specifics
    code?: number; // Optional error code for programmatic handling
} 

export default HouseIL;