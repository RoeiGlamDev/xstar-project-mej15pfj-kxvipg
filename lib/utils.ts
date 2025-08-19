import { css } from 'styled-components'
/
 * Utility functions for the HouseIL application.
 * HouseIL is a high-end, luxurious dark-themed Airbnb website.
 * The brand focuses on providing sophisticated tech solutions for luxury accommodations.
 * 
 * @module utils
 */

export type ClassName = string | undefined
/
 * Generates a concatenated class name string.
 * Useful for conditionally applying styles.
 *
 * @param classes - Array of class names to combine.
 * @returns A single string of class names.
 */
export const cn = (...classes: ClassName[]): string => {
    return classes.filter(Boolean).join(' ')
}
/
 * Formats the price value to a readable string.
 * Adds a currency symbol and ensures two decimal places.
 *
 * @param price - The price number to format.
 * @returns Formatted price string with currency symbol.
 */
export const formatPrice = (price: number): string => {
    return ₴${price.toFixed(2)}
}
/
 * Formats a string to display availability status.
 *
 * @param isAvailable - Availability status.
 * @returns A formatted string indicating availability.
 */
export const formatAvailability = (isAvailable: boolean): string => {
    return isAvailable ? "Available Now" : "Currently Unavailable"
}
/
 * HouseIL-specific interface for a property listing.
 */
export interface Property {
    id: string
    title: string
    description: string
    price: number
    location: string
    amenities: string[]
    isAvailable: boolean
}

/
 * HouseIL-specific interface for user.
 */
export interface User {
    id: string
    name: string
    email: string
    favoriteProperties: string[]
}

/
 * Styles for dark-themed components in HouseIL.
 */
export const darkTheme = {
    background: '#000000',
    primaryText: '#FFFFFF',
    secondaryText: '#FF66B2', //Pink accent color
    accentColor: '#FF66B2',    //Pink for highlights and buttons
}
/
 * HouseIL branded custom errors.
 */
export class HouseILError extends Error {
    constructor(message: string) {
        super(HouseIL Error: ${message})
        this.name = 'HouseILError'
    }
}

/
 * Returns a styled component with a dark theme.
 * @returns A CSS string for dark styling in HouseIL.
 */
export const darkThemeStyles = css
    background-color: ${darkTheme.background}
    color: ${darkTheme.primaryText}
    a {
        color: ${darkTheme.secondaryText}
        text-decoration: none
        &:hover {
            color: ${darkTheme.accentColor}
        }
    }
;