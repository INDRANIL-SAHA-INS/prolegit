export const getCriticalityColor = (criticality: string): string => {
  switch (criticality) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-yellow-500';
    default:
      return 'bg-green-500';
  }
};