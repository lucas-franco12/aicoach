interface Skill {
  name: string;
  level: string;
}

interface SkillsBadgesProps {
  skills: Skill[];
}

export default function SkillsBadges({ skills }: SkillsBadgesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
          <span className="text-sm font-semibold text-gray-600 mb-2">{skill.level}</span>
          <span className="text-md font-bold text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}