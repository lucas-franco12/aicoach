interface LearningPathDetailsProps {
  details: string[];
}

export default function LearningPathDetails({ details }: LearningPathDetailsProps) {
  return (
    <ul className="list-none space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  );
}