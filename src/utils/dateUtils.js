/**
 * Calculate coding experience in years
 * Start date: January 1, 2025
 * Returns rounded up to nearest year
 */
export const getCodingExperience = () => {
  const startDate = new Date('2025-01-01');
  const currentDate = new Date();
  
  // Calculate difference in milliseconds
  const diffTime = Math.abs(currentDate - startDate);
  
  // Convert to years
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  
  // Round up to nearest year, minimum 1 year
  const yearsExperience = Math.max(1, Math.ceil(diffYears));
  
  return yearsExperience;
};

/**
 * Get the experience text with proper grammar
 * Returns "1 Year" or "X Years"
 */
export const getCodingExperienceText = () => {
  const years = getCodingExperience();
  return years === 1 ? `${years} Year` : `${years} Years`;
};

/**
 * Get coding experience for display (just the number)
 */
export const getCodingExperienceNumber = () => {
  return getCodingExperience();
};
